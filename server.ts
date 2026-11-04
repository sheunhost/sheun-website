import express from "express";
import path from "path";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import { WebSocketServer, WebSocket } from "ws";
import { GoogleGenAI, Modality } from "@google/genai";

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

  // WebSocket Server for Gemini 3.8 Live API Voice Conversations
  const wss = new WebSocketServer({ noServer: true });

  server.on("upgrade", (request, socket, head) => {
    const pathname = new URL(request.url || "", `http://${request.headers.host}`).pathname;
    if (pathname === "/api/live") {
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit("connection", ws, request);
      });
    } else {
      socket.destroy();
    }
  });

  wss.on("connection", async (clientWs: WebSocket) => {
    console.log("[WebSocket] Client connected for Gemini 3.8 Live API voice session");

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("[WebSocket] Missing GEMINI_API_KEY env variable");
      clientWs.send(
        JSON.stringify({
          error: "GEMINI_API_KEY is not configured in server environment variables.",
        })
      );
      clientWs.close();
      return;
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

      let sessionClosed = false;

      const session = await ai.live.connect({
        model: "gemini-3.8-live",
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Zephyr" } },
          },
          systemInstruction:
            "You are Sheun Hub's interactive AI voice assistant and e-commerce growth specialist. You help merchants and business owners with Shopify development, store migrations, CRO, speed optimization, and custom Liquid development. Speak in a natural, professional, helpful tone. Keep spoken responses clear and concise.",
          inputAudioTranscription: {},
          outputAudioTranscription: {},
        },
        callbacks: {
          onmessage: (message) => {
            if (sessionClosed || clientWs.readyState !== WebSocket.OPEN) return;

            const content = message.serverContent;
            if (content?.inputTranscription?.text) {
              clientWs.send(JSON.stringify({ inputTranscript: content.inputTranscription.text }));
            }
            if (content?.outputTranscription?.text) {
              clientWs.send(JSON.stringify({ outputTranscript: content.outputTranscription.text }));
            }
            for (const part of content?.modelTurn?.parts ?? []) {
              if (part.inlineData?.data) {
                clientWs.send(JSON.stringify({ audio: part.inlineData.data }));
              }
            }
            if (content?.interrupted) {
              clientWs.send(JSON.stringify({ interrupted: true }));
            }
          },
          onclose: () => {
            console.log("[WebSocket] Gemini 3.8 Live session closed");
            if (clientWs.readyState === WebSocket.OPEN) {
              clientWs.send(JSON.stringify({ status: "disconnected" }));
              clientWs.close();
            }
          },
          onerror: (err) => {
            console.error("[WebSocket] Gemini 3.8 Live session error:", err);
            if (clientWs.readyState === WebSocket.OPEN) {
              clientWs.send(JSON.stringify({ error: err?.message || "Live API error" }));
            }
          },
        },
      });

      clientWs.on("message", (data) => {
        if (sessionClosed) return;
        try {
          const parsed = JSON.parse(data.toString());
          if (parsed.audio) {
            session.sendRealtimeInput({
              audio: { data: parsed.audio, mimeType: "audio/pcm;rate=16000" },
            });
          } else if (parsed.text) {
            session.sendRealtimeInput({
              text: parsed.text,
            });
          }
        } catch (e) {
          console.error("[WebSocket] Error handling client message:", e);
        }
      });

      clientWs.on("close", () => {
        sessionClosed = true;
        try {
          session.close();
        } catch (_) {}
      });
    } catch (err: any) {
      console.error("[WebSocket] Failed to connect Gemini 3.8 Live session:", err);
      if (clientWs.readyState === WebSocket.OPEN) {
        clientWs.send(
          JSON.stringify({
            error: err?.message || "Failed to initialize Gemini 3.8 Live API session.",
          })
        );
        clientWs.close();
      }
    }
  });
}

startServer();
