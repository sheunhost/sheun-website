import express from "express";
import path from "path";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI, Type, Modality } from "@google/genai";
import { WebSocketServer } from "ws";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Health check and Config verify (Censored)
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

  app.post("/api/gemini/chat", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Gemini API key is not configured" });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: { "User-Agent": "aistudio-build" }
        }
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

      const systemInstruction = `You are a friendly female AI assistant at Sheun Hub. You are chatting directly with visitors on the Sheun Hub website. 
YOUR GOAL: Understand the visitor's needs, answer their questions about services (store builds, migrations, speed optimization), and qualify them as a lead. 
PERSONALITY: Short, calm, conversational, feminine voice, professional yet approachable. Do NOT pitch services aggressively. Ask ONE question at a time. Let the user speak more than you.
CONVERSATION FLOW:
1. Find out what they need help with. 
2. Ask about their current store or goals.
3. If they are interested, ask for their name and email address so you can pass their details to Sheun.
4. Once you have their name AND email address AND requirements, YOU MUST call the sendLeadEmail function to trigger the email transfer to Sheun's inbox.
CRITICAL: When calling the sendLeadEmail function, YOU MUST format the email address properly (e.g., convert "john at gmail dot com" to "john@gmail.com"). This is strictly required for the system to process the lead.
When you call this function, you MUST reply with EXACTLY this wording: "Perfect! I've received your details and sent them straight to sheun inbox! He will personally follow up with you shortly via email. Feel free to let me know if you have any more questions in the meantime! 😊" No other variations.
HANDOFF TO SHEUN: If the user asks to speak with Sheun directly, you MUST provide his contact details immediately. Tell the user they can reach him via the contact page at https://sheunhub.com/contact or by email at sheunhost@gmail.com.`;

      const chat = ai.chats.create({
        model: "gemini-3.5-flash",
        config: {
          systemInstruction,
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
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
              },
              body: formPayload.toString()
            });
            const data = await web3Response.json().catch(() => ({}));
            console.log("[Server Web3Forms Chatbot] Submission:", data);
          } catch(e) {
            console.error("[Server Web3Forms Chatbot] Error:", e);
          }

          // Return success down to client to inform them the server processed it
          return res.json({ 
            text: "Perfect! I've received your details and sent them straight to sheun inbox! He will personally follow up with you shortly via email. Feel free to let me know if you have any more questions in the meantime! 😊",
            clientEvent: "sendLeadEmail",
            args
          });
        }
      }

      res.json({ text: response.text });
    } catch (e: any) {
      console.error("Gemini AI API Error:", e);
      res.status(500).json({ error: e.message || "Failed to process chat" });
    }
  });

  // Mailchimp API Endpoints
  // ... (unchanged mailchimp endpoints)
  app.post("/api/newsletter/subscribe", async (req, res) => {
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

  // Live WebSocket Server
  const wss = new WebSocketServer({ server, path: "/live" });

  wss.on("connection", async (clientWs) => {
    console.log("WebSocket client connected to /live");
    let session: any = null;
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) throw new Error("Gemini API key is not configured");

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: { "User-Agent": "aistudio-build" }
        }
      });
      
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

      const systemInstruction = `You are a friendly female AI assistant at Sheun Hub. You are talking directly with a visitor on the Sheun Hub website. 
YOUR GOAL: Understand the visitor's needs, answer their questions about services (store builds, migrations, speed optimization), and qualify them as a lead. 
PERSONALITY: Short, calm, conversational, feminine voice, professional yet approachable. Do NOT pitch services aggressively. Ask ONE question at a time. Let the user speak more than you.
CONVERSATION FLOW:
1. Find out what they need help with. 
2. Ask about their current store or goals.
3. If they are interested, ask for their name and email address so you can pass their details to Sheun.
4. Once you have their name AND email address AND requirements, YOU MUST call the sendLeadEmail function to trigger the email transfer to Sheun's inbox.
CRITICAL: When calling the sendLeadEmail function, YOU MUST format the email address properly (e.g., convert "john at gmail dot com" to "john@gmail.com"). This is strictly required for the system to process the lead.
When you call this function, you MUST reply with EXACTLY this wording: "Perfect! I've received your details and sent them straight to sheun inbox! He will personally follow up with you shortly via email. Feel free to let me know if you have any more questions in the meantime! 😊" No other variations.
HANDOFF TO SHEUN: If the user asks to speak with Sheun directly, you MUST provide his contact details immediately. Tell the user they can reach him via the contact page at https://sheunhub.com/contact or by email at sheunhost@gmail.com.`;

      const messageQueue: any[] = [];
      
      clientWs.on("message", (data) => {
        try {
          const payload = JSON.parse(data.toString());
          if (session) {
            if (payload.audio) {
              session.sendRealtimeInput({
                audio: { data: payload.audio, mimeType: "audio/pcm;rate=16000" },
              });
            }
          } else {
            messageQueue.push(payload);
          }
        } catch (e) {
          console.error("Error parsing websocket message:", e);
        }
      });
      
      clientWs.on("close", () => {
         console.log("Client disconnected");
         if (session) {
           session.close();
           session = null;
         }
      });

      session = await ai.live.connect({
        model: "gemini-3.1-flash-live-preview",
        callbacks: {
          onmessage: async (message: any) => {
            const parts = message.serverContent?.modelTurn?.parts;
            if (parts) {
              for (const part of parts) {
                if (part.inlineData?.data) {
                  if (clientWs.readyState === 1) clientWs.send(JSON.stringify({ audio: part.inlineData.data }));
                }
                if (part.text) {
                  if (clientWs.readyState === 1) clientWs.send(JSON.stringify({ text: part.text }));
                }
              }
            }
            if (message.serverContent?.interrupted) {
              if (clientWs.readyState === 1) clientWs.send(JSON.stringify({ interrupted: true }));
            }

            // Handle function calls
            if (message.toolCall) {
              console.log("[Live API] Received toolCall:", JSON.stringify(message.toolCall, null, 2));
              const functionCalls = message.toolCall.functionCalls;
              if (functionCalls && functionCalls.length > 0) {
                const call = functionCalls[0];
                if (call.name === "sendLeadEmail") {
                   console.log("[Live API] Executing sendLeadEmail with args:", call.args);
                   const args = call.args as any;
                   
                   try {
                     const formPayload = new URLSearchParams();
                     formPayload.append("access_key", "c0573f7d-6191-4374-bc31-ee70ee9fa226");
                     formPayload.append("subject", "New Lead from AI Calling Agent");
                     formPayload.append("name", args.name);
                     formPayload.append("email", args.email);
                     formPayload.append("message", args.requirements);

                     const web3Response = await fetch("https://api.web3forms.com/submit", {
                       method: "POST",
                       headers: {
                         "Content-Type": "application/x-www-form-urlencoded",
                         "Accept": "application/json"
                       },
                       body: formPayload.toString()
                     });
                     const data = await web3Response.json().catch(() => ({}));
                     console.log("[Server Web3Forms Live] Submission:", data);
                   } catch(e) {
                     console.error("[Server Web3Forms Live] Error:", e);
                   }
                   
                   // Defer to client via WebSocket to notify the UI
                   if (clientWs.readyState === 1) {
                     clientWs.send(JSON.stringify({ clientEvent: "sendLeadEmail", args }));
                   }

                   // Send tool response
                   session.sendToolResponse({
                      functionResponses: [{
                        id: call.id,
                        name: "sendLeadEmail",
                        response: { success: true }
                      }]
                   });
                }
              }
            }
          },
          onclose: () => {
             console.log("Live session closed by server");
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } }, // Example female voice
          },
          systemInstruction,
          tools: [{ functionDeclarations: [sendLeadEmailFn] }]
        },
      });

      // Prompt the agent to greet the user
      session.sendRealtimeInput([{ text: "Hi! Please introduce yourself briefly and ask how you can help me." }]);
      
      // Process queued messages
      for (const payload of messageQueue) {
         if (payload.audio) {
            session.sendRealtimeInput({
              audio: { data: payload.audio, mimeType: "audio/pcm;rate=16000" },
            });
         }
      }

    } catch (e: any) {
      console.error("Live API Setup Error:", e);
      if (clientWs.readyState === 1) clientWs.send(JSON.stringify({ error: e.message }));
    }
  });

}

startServer();

