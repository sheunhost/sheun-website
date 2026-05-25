import { GoogleGenAI, Modality } from "@google/genai";
import "dotenv/config";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function run() {
  const session = await ai.live.connect({
    model: "gemini-2.5-flash-native-audio-latest",
    callbacks: {
       onmessage: (msg) => {
           //console.log(JSON.stringify(msg, null, 2));
           const parts = msg?.serverContent?.modelTurn?.parts;
           if (parts) {
              console.log("GOT PARTS:", parts.length);
           } else {
              console.log(Object.keys(msg));
           }
       }
    }
  });

  await session.send({
      clientContent: {
          turns: [
              { role: "user", parts: [{ text: "Hello there! Are you alive?" }] }
          ]
      }
  });

  setTimeout(() => session.close(), 5000);
}
run();
