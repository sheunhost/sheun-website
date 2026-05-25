import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function run() {
  const models = ["gemini-3.5-flash", "gemini-2.0-flash", "gemini-2.5-flash", "gemini-2.5-flash-native-audio-latest"];
  for (const m of models) {
    try {
      const session = await ai.live.connect({
        model: m
      });
      console.log(m, "connected for live");
      session.close();
    } catch (e) {
      console.error(m, "live failed", e.message);
    }
  }
}
run();
