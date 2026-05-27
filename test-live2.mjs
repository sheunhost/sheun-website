import { GoogleGenAI, Modality } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
  try {
    const session = await ai.live.connect({
      model: "gemini-3.1-flash-live-preview",
      callbacks: {
        onmessage: (message) => {
          console.log("Got message", JSON.stringify(message, null, 2));
        },
        onclose: () => {
          console.log("Connection closed");
        }
      },
      config: {
        responseModalities: [Modality.AUDIO],
      },
    });
    console.log("Connected successfully");
    
    session.sendRealtimeInput([{ text: "Hello!" }]);
    
  } catch (e) {
    console.error("Failed to connect:", e.message);
  }
}
main();
