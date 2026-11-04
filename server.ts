import express from "express";
import path from "path";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Health check and Config verify
  app.get("/api/connect/status", (req, res) => {
    res.json({
      configured: !!process.env.MAILCHIMP_API_KEY && !!process.env.MAILCHIMP_LIST_ID,
      apiKeyPresent: !!process.env.MAILCHIMP_API_KEY,
      listIdPresent: !!process.env.MAILCHIMP_LIST_ID,
      geminiKeyPresent: !!process.env.GEMINI_API_KEY,
      apiKeyLast4: process.env.MAILCHIMP_API_KEY ? `...${process.env.MAILCHIMP_API_KEY.slice(-4)}` : null,
      listId: process.env.MAILCHIMP_LIST_ID || null,
      nodeEnv: process.env.NODE_ENV || "development",
    });
  });

  // Mailchimp API Endpoints
  app.post("/api/connect/subscribe", async (req, res) => {
    const { email, firstName, lastName } = req.body;
    console.log(`[Mailchimp] Subscription request for: ${email}`);

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY?.trim();
    const LIST_ID = process.env.MAILCHIMP_LIST_ID?.trim();

    if (!API_KEY || !LIST_ID) {
      console.error("[Mailchimp] Missing configuration:", { hasKey: !!API_KEY, hasList: !!LIST_ID });
      return res.status(500).json({ error: "Mailchimp integration not fully configured in environment variables." });
    }

    const DATACENTER = API_KEY.split("-")[1];
    if (!DATACENTER) {
      console.error("[Mailchimp] Invalid API key format (missing datacenter suffix like -us8)");
      return res.status(500).json({ error: "Invalid Mailchimp API key format." });
    }

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

    try {
      const response = await axios.post(
        url,
        {
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: firstName || "",
            LNAME: lastName || "",
          },
        },
        {
          headers: {
            Authorization: `apikey ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(`[Mailchimp] Successfully subscribed ${email}`);
      res.status(200).json({ success: true, message: "Subscription successful" });
    } catch (error: any) {
      const errorData = error.response?.data;
      console.error("[Mailchimp] API Error:", JSON.stringify(errorData) || error.message);

      if (errorData?.title === "Member Exists") {
        console.log(`[Mailchimp] ${email} is already subscribed.`);
        return res.status(200).json({ success: true, message: "Already subscribed" });
      }

      if (errorData?.title === "Forgotten Email Not Subscribed") {
        console.log(`[Mailchimp] ${email} was permanently deleted and cannot be re-imported.`);
        return res.status(400).json({
          error: "This email was previously deleted and cannot be re-added automatically. Please contact us directly to be manually re-subscribed.",
          details: errorData.detail,
        });
      }

      res.status(error.response?.status || 500).json({
        error: "Failed to subscribe to Mailchimp",
        details: errorData?.detail || errorData?.title || error.message,
      });
    }
  });

  // SEO Review Booking Notification Endpoint
  app.post("/api/booking/seo-review", async (req, res) => {
    const {
      customerName,
      shopifyStoreUrl,
      workEmail,
      monthlyOrganicRevenue,
      submissionDate
    } = req.body;

    console.log("[Backend: SEO Review Booking Received]", {
      customerName,
      shopifyStoreUrl,
      workEmail,
      monthlyOrganicRevenue,
      submissionDate
    });

    if (!customerName || !shopifyStoreUrl || !workEmail) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields: Customer Name, Shopify Store URL, and Work Email are required."
      });
    }

    const formattedDate = submissionDate || new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "medium"
    });

    const emailTemplate = `NEW SEO REVIEW BOOKING\n\nCustomer Name: ${customerName}\nShopify Store URL: ${shopifyStoreUrl}\nWork Email: ${workEmail}\nMonthly Organic Revenue: ${monthlyOrganicRevenue || "Not specified"}\nSubmission Date: ${formattedDate}`;

    console.log("[Backend: Formatted Email Notification Content]:\n" + emailTemplate);

    // Background Mailchimp subscriber sync
    const apiKey = process.env.MAILCHIMP_API_KEY?.trim();
    const listId = process.env.MAILCHIMP_LIST_ID?.trim();
    if (apiKey && listId) {
      const datacenter = apiKey.split("-")[1];
      if (datacenter) {
        axios.post(
          `https://${datacenter}.api.mailchimp.com/3.0/lists/${listId}/members`,
          {
            email_address: workEmail,
            status: "subscribed",
            merge_fields: {
              FNAME: customerName.split(" ")[0] || customerName,
              LNAME: customerName.split(" ").slice(1).join(" ") || ""
            }
          },
          {
            headers: {
              Authorization: `apikey ${apiKey}`,
              "Content-Type": "application/json"
            }
          }
        ).catch(err => {
          console.warn("[Backend: Mailchimp Background Sync]", err.message);
        });
      }
    }

    return res.status(200).json({
      success: true,
      message: "SEO Review Booking received and processed successfully",
      data: {
        customerName,
        shopifyStoreUrl,
        workEmail,
        monthlyOrganicRevenue: monthlyOrganicRevenue || "Not specified",
        submissionDate: formattedDate,
        emailTemplate
      }
    });
  });

  // Gemini 3.8 Flash AI Chatbot Endpoint
  app.post("/api/gemini/chat", async (req, res) => {
    const { messages, prompt } = req.body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("[Gemini Chat] Missing GEMINI_API_KEY");
      return res.status(500).json({
        error: "GEMINI_API_KEY environment variable is not configured on the server.",
      });
    }

    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const contents = Array.isArray(messages) && messages.length > 0
        ? messages.map((m: { role: string; content: string }) => ({
            role: m.role === "user" ? "user" : "model",
            parts: [{ text: m.content }],
          }))
        : [{ role: "user", parts: [{ text: prompt || "Hello" }] }];

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents,
        config: {
          systemInstruction:
            "You are Sheun Hub's AI Assistant and Shopify Growth Specialist. You help store merchants and business owners with Shopify store development, WooCommerce to Shopify migrations, speed optimization (Core Web Vitals), 48-Hour Technical SEO Sprints, Conversion Rate Optimization (CRO), custom Liquid sections, and e-commerce growth strategies. Speak in a helpful, friendly, knowledgeable, professional tone. Keep answers clear, well-structured, and concise.",
        },
      });

      const reply = response.text || "I am analyzing your e-commerce project goals. How else can I assist with your Shopify store?";
      res.json({ reply });
    } catch (err: any) {
      console.error("[Gemini Chat] API Error:", err);
      res.status(500).json({
        error: "Failed to process AI chat response",
        details: err?.message || "Unknown error",
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
