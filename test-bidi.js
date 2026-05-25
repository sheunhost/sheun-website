import { GoogleGenAI, Modality } from "@google/genai";
import "dotenv/config";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function run() {
  const models = [
    "gemini-3.1-flash-live-preview", // just maybe
    "gemini-2.5-flash-native-audio-latest",
    "gemini-2.5-flash",
    "gemini-2.0-flash",
    "gemini-2.0-flash-lite",
  ];

  for (const m of models) {
    console.log("Testing:", m);
    let ok = false;
    try {
        const session = await ai.live.connect({
            model: m,
            callbacks: {
               onclose: (e) => console.log(m, "CLOSE", e.reason),
               onerror: (e) => console.log(m, "ERROR")
            }
        });
        await session.sendClientContent({ turns: [{ role: "user", parts: [{ text: "hi!" }] }] });
        await new Promise(resolve => setTimeout(resolve, 1000));
        session.close();
        console.log(m, "OK!");
    } catch (e) {
        console.log(m, "FAILED", e.message);
    }
  }
}
run();
