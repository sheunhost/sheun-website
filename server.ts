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
      status: "healthy",
      timestamp: new Date().toISOString(),
      geminiKeyPresent: !!process.env.GEMINI_API_KEY,
      nodeEnv: process.env.NODE_ENV || "development",
    });
  });

  // Subscription endpoint (Web3Forms handles direct form notifications)
  app.post("/api/connect/subscribe", (req, res) => {
    res.status(200).json({ success: true, message: "Subscription received" });
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
