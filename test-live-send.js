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
  
  session.on("message", (msg) => {
    console.log("RECV:", JSON.stringify(msg, null, 2));
  });

  session.on("error", (err) => {
      console.error("ERROR:", err);
  });
  
  session.on("close", () => {
     console.log("CLOSED");
  });

  await session.send({ message: "Hello there! Are you alive?" });
  console.log("Sent hello");

  setTimeout(() => session.close(), 5000);
}
run();
