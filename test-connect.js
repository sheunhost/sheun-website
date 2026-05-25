import { GoogleGenAI, Modality, Type } from "@google/genai";
import "dotenv/config";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function run() {
  const sendLeadEmailFn = {
    name: "sendLeadEmail",
    description: "Sends the collected lead info (name, email, requirements) to Sheun's email once you have gathered it all.",
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
  const systemInstruction = `You are a friendly female AI assistant...`;

  try {
      const session = await ai.live.connect({
        model: "gemini-3.1-flash-live-preview",
        callbacks: {
           onclose: (e) => console.log("CLOSE", e.reason),
           onerror: (e) => console.log("ERROR", e)
        },
        config: {
          responseModalities: [Modality.AUDIO, Modality.TEXT],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } }, // Example female voice
          },
          systemInstruction,
          tools: [{ functionDeclarations: [sendLeadEmailFn] }]
        },
      });
      console.log("Connected successfully to Live API");
      setTimeout(() => session.close(), 2000);
  } catch (e) {
      console.error("Connect failed", e);
  }
}
run();
