import fs from 'fs/promises';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function test() {
  const content = await fs.readFile('src/pages/ShopifySpeedOptimization.tsx', 'utf-8');
  
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash', 
    contents: "Write a React component with 2000 words. Here is the start: " + content.slice(0, 500),
    config: { maxOutputTokens: 8192 }
  });

  console.log("STOP REASON:", response.candidates[0].finishReason);
  console.log("TEXT LENGTH:", response.text.length);
}
test();
