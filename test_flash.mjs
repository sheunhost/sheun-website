import { GoogleGenAI } from '@google/genai';
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function main() {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: "Write a React component for a blog post. Output only the code.",
    config: { maxOutputTokens: 8192 }
  });
  console.log(response.text);
}
main();
