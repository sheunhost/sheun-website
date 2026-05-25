import { GoogleGenAI, Modality, Type } from "@google/genai";
import "dotenv/config";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function run() {
  let session;
  const tryConf = async (name, config) => {
     try {
       await new Promise(async (resolve, reject) => {
         let opened = false;
         session = await ai.live.connect({
           model: "gemini-3.1-flash-live-preview",
           config,
           callbacks: {
             onclose: (e) => resolve("CLOSE: " + e.reason),
             onerror: (e) => resolve("ERR")
           }
         });
         setTimeout(() => { resolve("STABLE"); session.close(); }, 2000);
       }).then(res => console.log(name, ":", res));
     } catch (e) { console.log(name, "FAILED"); }
  }

  await tryConf("ALL", {
      responseModalities: [Modality.AUDIO, Modality.TEXT],
      speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } } },
      systemInstruction: "You are a friendly AI."
  });
  
  await tryConf("NO_SYS", {
      responseModalities: [Modality.AUDIO, Modality.TEXT],
      speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } } },
  });

  await tryConf("NO_VOICE", {
      responseModalities: [Modality.AUDIO, Modality.TEXT],
      systemInstruction: "You are a friendly AI."
  });

  await tryConf("NO_MODALITIES", {
      speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } } },
      systemInstruction: "You are a friendly AI."
  });

  await tryConf("NO_TEXT_MODALITY", {
      responseModalities: [Modality.AUDIO],
      speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } } },
      systemInstruction: "You are a friendly AI."
  });
  
}
run();
