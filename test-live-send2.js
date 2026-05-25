import { GoogleGenAI, Modality } from "@google/genai";
import "dotenv/config";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function run() {
  const session = await ai.live.connect({
    model: "gemini-3.5-flash",
    config: {
        responseModalities: [Modality.AUDIO, Modality.TEXT],
        speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } } }
    }
  });

  const worker = async () => {
    try {
        for await (const message of session.receive()) {
             console.log("RECV:", Object.keys(message));
             if (message.serverContent?.modelTurn?.parts) {
                 for (const p of message.serverContent.modelTurn.parts) {
                     if (p.text) console.log("TEXT:", p.text);
                     if (p.inlineData) console.log("AUDIO:", p.inlineData.mimeType, p.inlineData.data.length);
                 }
             }
        }
    } catch(e) {
        console.error("receive error", e);
    }
  };
  worker();
  
  await session.send({ message: "Hello there! Are you alive?" });

  setTimeout(() => session.close(), 5000);
}
run();
