import express from "express";
import path from "path";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Health check and Config verify (Censored)
  app.get("/api/connect/status", (req, res) => {
    res.json({
      configured: !!process.env.MAILCHIMP_API_KEY && !!process.env.MAILCHIMP_LIST_ID,
      apiKeyPresent: !!process.env.MAILCHIMP_API_KEY,
      listIdPresent: !!process.env.MAILCHIMP_LIST_ID,
      apiKeyLast4: process.env.MAILCHIMP_API_KEY ? `...${process.env.MAILCHIMP_API_KEY.slice(-4)}` : null,
      listId: process.env.MAILCHIMP_LIST_ID || null,
      nodeEnv: process.env.NODE_ENV || "development"
    });
  });

  // Mailchimp API Endpoints
  // ... (unchanged mailchimp endpoints)
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

      res.status(error.response?.status || 500).json({
        error: "Failed to subscribe to Mailchimp",
        details: errorData?.detail || errorData?.title || error.message,
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

  const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

}

startServer();

