import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function run() {
  const session = await ai.live.connect({
    model: "gemini-3.5-flash",
  });
  console.log("PROTOTYPE", Object.getOwnPropertyNames(Object.getPrototypeOf(session)));
  console.log("KEYS", Object.keys(session));
  session.close();
}
run();
