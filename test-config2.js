import { GoogleGenAI, Modality, Type } from "@google/genai";
import "dotenv/config";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function run() {
  const session = await ai.live.connect({
    model: "gemini-3.1-flash-live-preview",
    config: {
      speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } } },
      systemInstruction: "You are a friendly AI."
    },
    callbacks: {
       onclose: (e) => console.log("CLOSE: " + e.reason),
       onerror: (e) => console.log("ERR"),
       onmessage: (msg) => {
         const parts = msg?.serverContent?.modelTurn?.parts;
         if (parts) {
            console.log("Got parts:", parts.map(p => Object.keys(p)));
            for (const p of parts) {
               if (p.text) console.log("Got text transcript:", p.text);
            }
         } else {
            console.log("No parts:", Object.keys(msg));
         }
       }
    }
  });

  await session.sendClientContent({ turns: [{ role: "user", parts: [{ text: "Hello there! Are you alive?" }] }] });
  setTimeout(() => session.close(), 5000);
}
run();
