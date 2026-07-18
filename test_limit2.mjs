import { GoogleGenAI } from '@google/genai';
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function test() {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash', 
    contents: "Write a story with 2000 words.",
  });
  console.log("STOP REASON:", response.candidates[0].finishReason);
  console.log("TEXT LENGTH:", response.text.length);
}
test();
