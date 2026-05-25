import { GoogleGenAI, Modality } from "@google/genai";
import "dotenv/config";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function run() {
  const session = await ai.live.connect({
    model: "gemini-2.0-flash-exp",
    config: {
        responseModalities: [Modality.AUDIO, Modality.TEXT],
        speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } } }
    },
    callbacks: {
       onmessage: (msg) => {
           console.log("MSG", JSON.stringify(msg).substring(0, 50));
       },
       onclose: (e) => console.log("CLOSE", e.reason),
       onerror: (e) => console.log("ERROR*", e)
    }
  });

  await session.sendClientContent({
      turns: [
          { role: "user", parts: [{ text: "Hello there! Are you alive?" }] }
      ]
  });

  setTimeout(() => session.close(), 5000);
}
run();
