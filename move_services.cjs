import express from "express";
import path from "path";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { WebSocketServer, WebSocket } from "ws";
import { GoogleGenAI, Type, Modality } from "@google/genai";

dotenv.config();

const SYSTEM_INSTRUCTION = `You are a friendly female AI voice assistant at Sheun Hub. You are speaking directly with visitors on the Sheun Hub website via a voice call.
YOUR GOAL: Understand the visitor's needs, answer their questions about services (store builds, migrations, speed optimization), and qualify them as a lead.
PERSONALITY: Short, calm, conversational, feminine voice, professional yet warm. Do NOT pitch services aggressively. Ask ONE question at a time. Keep responses brief since this is a voice call.
CONVERSATION FLOW:
1. Greet them warmly and find out what they need help with.
2. Ask about their current store or goals.
3. If they are interested, ask for their name and email address so you can pass their details to Sheun.
4. Once you have their name AND email address AND requirements, YOU MUST call the sendLeadEmail function.
CRITICAL: When calling sendLeadEmail, format email addresses properly (e.g. "john at gmail dot com" → "john@gmail.com").
After calling sendLeadEmail, say: "Perfect! I've got your details and sent them straight to Sheun. He'll follow up with you shortly. Is there anything else I can help you with?"
HANDOFF: If asked to speak with Sheun directly, tell them they can reach him at sheunhost@gmail.com or via the contact page at https://sheunhub.com/contact`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Health check
  app.get("/api/newsletter/status", (req, res) => {
    res.json({
      configured: !!process.env.MAILCHIMP_API_KEY && !!process.env.MAILCHIMP_LIST_ID,
      apiKeyPresent: !!process.env.MAILCHIMP_API_KEY,
      listIdPresent: !!process.env.MAILCHIMP_LIST_ID,
      apiKeyLast4: process.env.MAILCHIMP_API_KEY ? `...${process.env.MAILCHIMP_API_KEY.slice(-4)}` : null,
      listId: process.env.MAILCHIMP_LIST_ID || null,
      nodeEnv: process.env.NODE_ENV || "development"
    });
  });

  // Text chat endpoint
  app.post("/api/gemini/chat", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Gemini API key is not configured" });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: { headers: { "User-Agent": "aistudio-build" } }
      });

      const { history, message } = req.body;

      const sendLeadEmailFn = {
        name: "sendLeadEmail",
        description: "Sends the collected lead info (name, email, requirements) to Sheun's email once you have gathered it all.",
        parameters: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING, description: "Lead's full name" },
            email: { type: Type.STRING, description: "Lead's email address" },
            requirements: { type: Type.STRING, description: "Summary of what the lead wants/needs" },
          },
          required: ["name", "email", "requirements"]
        }
      };

      const chat = ai.chats.create({
        model: "gemini-2.5-flash",
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          tools: [{ functionDeclarations: [sendLeadEmailFn] }]
        },
        history: history || []
      });

      const response = await chat.sendMessage({ message });

      const functionCalls = response.functionCalls;
      if (functionCalls && functionCalls.length > 0) {
        const call = functionCalls[0];
        if (call.name === "sendLeadEmail") {
          const args = call.args as any;
          try {
            const formPayload = new URLSearchParams();
            formPayload.append("access_key", "c0573f7d-6191-4374-bc31-ee70ee9fa226");
            formPayload.append("subject", "New Lead from AI Chatbot");
            formPayload.append("name", args.name);
            formPayload.append("email", args.email);
            formPayload.append("message", args.requirements);
            const web3Response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded", "Accept": "application/json" },
              body: formPayload.toString()
            });
            const data = await web3Response.json().catch(() => ({}));
            console.log("[Web3Forms Chat] Submission:", data);
          } catch(e) {
            console.error("[Web3Forms Chat] Error:", e);
          }
          return res.json({
            text: "Perfect! I've received your details and sent them straight to sheun inbox! He will personally follow up with you shortly via email. Feel free to let me know if you have any more questions in the meantime! 😊",
            clientEvent: "sendLeadEmail",
            args
          });
        }
      }

      res.json({ text: response.text });
    } catch (e: any) {
      console.error("Gemini Chat Error:", e);
      res.status(500).json({ error: e.message || "Failed to process chat" });
    }
  });

  // Mailchimp subscribe
  app.post("/api/newsletter/subscribe", async (req, res) => {
    const { email, firstName, lastName } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });

    const API_KEY = process.env.MAILCHIMP_API_KEY?.trim();
    const LIST_ID = process.env.MAILCHIMP_LIST_ID?.trim();

    if (!API_KEY || !LIST_ID) {
      return res.status(500).json({ error: "Mailchimp integration not fully configured in environment variables." });
    }

    const DATACENTER = API_KEY.split("-")[1];
    if (!DATACENTER) return res.status(500).json({ error: "Invalid Mailchimp API key format." });

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

    try {
      await axios.post(url, {
        email_address: email,
        status: "subscribed",
        merge_fields: { FNAME: firstName || "", LNAME: lastName || "" },
      }, {
        headers: { Authorization: `apikey ${API_KEY}`, "Content-Type": "application/json" },
      });
      res.status(200).json({ success: true, message: "Subscription successful" });
    } catch (error: any) {
      const errorData = error.response?.data;
      if (errorData?.title === "Member Exists") {
        return res.status(200).json({ success: true, message: "Already subscribed" });
      }
      res.status(error.response?.status || 500).json({
        error: "Failed to subscribe to Mailchimp",
        details: errorData?.detail || errorData?.title || error.message,
      });
    }
  });

  // Vite / static middleware
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

  // Create HTTP server from Express app
  const server = http.createServer(app);

  // ── WebSocket relay for Gemini Live voice ──────────────────────────────────
  const wss = new WebSocketServer({ server, path: "/live" });

  wss.on("connection", async (browserWs) => {
    console.log("[Live] Browser connected");

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      browserWs.send(JSON.stringify({ type: "error", message: "Gemini API key not configured" }));
      browserWs.close();
      return;
    }

    const ai = new GoogleGenAI({ apiKey });

    const sendLeadEmailFn = {
      name: "sendLeadEmail",
      description: "Sends the collected lead info (name, email, requirements) to Sheun's email once gathered.",
      parameters: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          email: { type: Type.STRING },
          requirements: { type: Type.STRING }
        },
        required: ["name", "email", "requirements"]
      }
    };

    let geminiSession: any = null;

    try {
      geminiSession = await ai.live.connect({
        model: "gemini-2.0-flash-live-001",
        callbacks: {
          onopen: () => {
            console.log("[Live] Gemini session opened");
            browserWs.send(JSON.stringify({ type: "connected" }));
          },
          onmessage: async (msg: any) => {
            // Audio from Gemini → send to browser
            if (msg.serverContent?.modelTurn?.parts) {
              for (const part of msg.serverContent.modelTurn.parts) {
                if (part.inlineData?.data) {
                  browserWs.send(JSON.stringify({
                    type: "audio",
                    data: part.inlineData.data,
                    mimeType: part.inlineData.mimeType || "audio/pcm;rate=24000"
                  }));
                }
                if (part.text) {
                  browserWs.send(JSON.stringify({ type: "transcript", text: part.text, role: "model" }));
                }
              }
            }

            // Turn complete signal
            if (msg.serverContent?.turnComplete) {
              browserWs.send(JSON.stringify({ type: "turnComplete" }));
            }

            // Tool call handling
            if (msg.toolCall) {
              const fc = msg.toolCall.functionCalls?.[0];
              if (fc?.name === "sendLeadEmail") {
                const args = fc.args;
                console.log("[Live] sendLeadEmail called:", args);
                try {
                  const formPayload = new URLSearchParams();
                  formPayload.append("access_key", "c0573f7d-6191-4374-bc31-ee70ee9fa226");
                  formPayload.append("subject", "New Lead from Voice Agent");
                  formPayload.append("name", args.name);
                  formPayload.append("email", args.email);
                  formPayload.append("message", args.requirements);
                  await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded", "Accept": "application/json" },
                    body: formPayload.toString()
                  });
                } catch (e) {
                  console.error("[Live] Web3Forms error:", e);
                }

                browserWs.send(JSON.stringify({ type: "leadCaptured", args }));

                // Send tool response back to Gemini
                geminiSession.sendToolResponse({
                  functionResponses: [{
                    id: fc.id,
                    name: fc.name,
                    response: { output: "Lead email sent successfully." }
                  }]
                });
              }
            }
          },
          onerror: (e: any) => {
            console.error("[Live] Gemini error:", e);
            if (browserWs.readyState === WebSocket.OPEN) {
              browserWs.send(JSON.stringify({ type: "error", message: "Voice session error" }));
            }
          },
          onclose: () => {
            console.log("[Live] Gemini session closed");
            if (browserWs.readyState === WebSocket.OPEN) {
              browserWs.send(JSON.stringify({ type: "ended" }));
            }
          }
        },
        config: {
          responseModalities: [Modality.AUDIO, Modality.TEXT],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } }
          },
          systemInstruction: SYSTEM_INSTRUCTION,
          tools: [{ functionDeclarations: [sendLeadEmailFn] }]
        }
      });
    } catch (e: any) {
      console.error("[Live] Failed to connect to Gemini:", e.message);
      browserWs.send(JSON.stringify({ type: "error", message: "Could not connect to voice AI. Please try again." }));
      browserWs.close();
      return;
    }

    // Browser → Gemini: audio chunks and control messages
    browserWs.on("message", (data) => {
      try {
        const msg = JSON.parse(data.toString());

        if (msg.type === "audio" && geminiSession) {
          // Raw PCM audio from browser mic
          geminiSession.sendRealtimeInput([{
            inlineData: {
              mimeType: "audio/pcm;rate=16000",
              data: msg.data
            }
          }]);
        }

        if (msg.type === "text" && geminiSession) {
          geminiSession.sendClientContent({
            turns: [{ role: "user", parts: [{ text: msg.text }] }]
          });
        }

        if (msg.type === "end") {
          geminiSession?.close();
        }
      } catch (err) {
        console.error("[Live] Message parse error:", err);
      }
    });

    browserWs.on("close", () => {
      console.log("[Live] Browser disconnected");
      geminiSession?.close();
    });

    browserWs.on("error", (err) => {
      console.error("[Live] Browser WS error:", err);
      geminiSession?.close();
    });
  });

  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
