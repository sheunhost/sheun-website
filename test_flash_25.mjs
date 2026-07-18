import { GoogleGenAI } from '@google/genai';
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function test() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash', 
      contents: "Write a 500 word story.",
    });
    console.log("LENGTH:", response.text.length);
  } catch (e) {
    console.error("ERROR:", e.message);
  }
}
test();
