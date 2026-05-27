import { GoogleGenAI, Modality, Type } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
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

async function main() {
  try {
    const session = await ai.live.connect({
      model: "gemini-3.1-flash-live-preview",
      callbacks: {
        onmessage: (message) => {
          if (message.toolCall) {
            console.log("TOOL CALL RECIEVED:", JSON.stringify(message.toolCall, null, 2));
            process.exit(0);
          } else if (message.serverContent?.modelTurn?.parts) {
            const parts = message.serverContent?.modelTurn?.parts;
            if (parts.some(p => p.text)) {
                 console.log("Agent:", parts.filter(p => p.text).map(p=>p.text).join(""));
            }
          }
        },
        onclose: () => {
          console.log("Connection closed");
        }
      },
      config: {
        responseModalities: [Modality.AUDIO],
        tools: [{ functionDeclarations: [sendLeadEmailFn] }],
        systemInstruction: { parts: [{ text: "Immediately call the sendLeadEmail tool with standard test data." }] }
      },
    });
    console.log("Connected successfully");
    
    session.sendRealtimeInput([{ text: "Send the email now." }]);
    
  } catch (e) {
    console.error("Failed to connect:", e.message);
  }
}
main();
