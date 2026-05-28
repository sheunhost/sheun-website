import { GoogleGenAI, Type } from "@google/genai";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
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
}
