import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, Sparkles, Loader2, Download, RefreshCw, Wand2, Maximize2, X } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

const LOADING_MESSAGES = [
  "Initializing AI visual engine...",
  "Analyzing e-commerce aesthetics...",
  "Setting up virtual lighting...",
  "Rendering high-quality details...",
  "Applying final polish...",
  "Just a moment longer..."
];

export default function ImageGen() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadingMsgIdx, setLoadingMsgIdx] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingMsgIdx((prev) => (prev + 1) % LOADING_MESSAGES.length);
      }, 2500);
    } else {
      setLoadingMsgIdx(0);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const enhancePrompt = async () => {
    if (!prompt.trim() || isEnhancing) return;
    setIsEnhancing(true);
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("API Key is missing in the environment");
      }
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Enhance this prompt for an e-commerce store hero image generation. Make it highly descriptive, focusing on lighting, mood, style, and high quality. Return ONLY the enhanced prompt text without any quotes or introductory text. Original prompt: ${prompt}`,
      });
      if (response.text) {
        setPrompt(response.text.trim());
      }
    } catch (err) {
      console.error("Prompt enhancement detailed error:", err);
    } finally {
      setIsEnhancing(false);
    }
  };

  const generateImage = async () => {
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("API Key is missing in the environment");
      }

      const ai = new GoogleGenAI({ apiKey });
      console.log("Starting image generation for prompt:", prompt);

      // Using gemini-2.5-flash-image for standard image generation
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-image",
        contents: {
          parts: [{ text: `Generate a professional, high-quality Shopify store hero image for: ${prompt}. Modern e-commerce photography style.` }],
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9",
          },
        },
      });

      console.log("Raw response:", response);

      const candidate = response.candidates?.[0];
      if (!candidate) throw new Error("Internal error: No response candidates returned from AI.");
      if (candidate.finishReason === "SAFETY") throw new Error("Safety filters triggered. Please try a different prompt.");
      if (!candidate.content?.parts) throw new Error("No content parts found in response.");

      let foundImage = false;
      for (const part of candidate.content.parts) {
        if (part.inlineData) {
          setImage(`data:image/png;base64,${part.inlineData.data}`);
          foundImage = true;
          break;
        }
      }

      if (!foundImage) throw new Error("The AI provided a response but no image data was included.");

    } catch (err) {
      console.error("Image generation detailed error:", err);
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(`Generation failed: ${errorMessage}. If this persists, please check your API key permissions.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-navy rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Left: Controls */}
          <div className="p-10 lg:p-16 lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-green/10 border border-green/20 px-4 py-1.5 rounded-full">
                <Sparkles size={16} className="text-green" />
                <span className="text-green text-xs font-bold uppercase tracking-wider">AI Store Visualizer</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Visualize Your <br />
                <span className="text-green">Dream Store</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Describe your brand or niche, and our AI will generate a professional hero image concept for your future Shopify store.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., A luxury organic skincare brand with minimal aesthetic and soft lighting..."
                  className="w-full bg-white/5 border-2 border-white/10 rounded-3xl py-4 px-6 pr-14 text-white outline-none focus:border-green transition-all resize-none h-32 text-sm"
                />
                <button
                  onClick={enhancePrompt}
                  disabled={isEnhancing || !prompt.trim()}
                  title="Enhance prompt with AI"
                  className="absolute bottom-4 right-4 p-2 bg-white/10 hover:bg-green hover:text-navy text-white/60 rounded-full transition-colors disabled:opacity-50 disabled:hover:bg-white/10 disabled:hover:text-white/60"
                >
                  {isEnhancing ? <Loader2 size={16} className="animate-spin" /> : <Wand2 size={16} />}
                </button>
              </div>
              <button
                onClick={generateImage}
                disabled={!prompt.trim() || isLoading}
                className="w-full bg-green text-navy py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform disabled:opacity-50 flex items-center justify-center gap-3 green-glow"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={24} className="animate-spin" /> Generating...
                  </>
                ) : (
                  <>
                    Generate Concept <Sparkles size={20} />
                  </>
                )}
              </button>
              {error && <p className="text-red-400 text-xs text-center">{error}</p>}
            </div>
          </div>

          {/* Right: Preview */}
          <div className="lg:w-1/2 bg-white/5 border-l border-white/10 flex items-center justify-center p-8 relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full flex flex-col items-center justify-center space-y-6"
                >
                  <div className="relative">
                    <div className="w-24 h-24 border-4 border-green/20 rounded-full animate-spin-slow"></div>
                    <div className="w-24 h-24 border-4 border-green border-t-transparent rounded-full animate-spin absolute inset-0"></div>
                    <ImageIcon size={32} className="text-green absolute inset-0 m-auto animate-pulse" />
                  </div>
                  
                  <div className="h-6 overflow-hidden relative w-full text-center flex items-center justify-center">
                    <AnimatePresence mode="popLayout">
                      <motion.p
                        key={loadingMsgIdx}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-green text-sm font-bold uppercase tracking-widest absolute"
                      >
                        {LOADING_MESSAGES[loadingMsgIdx]}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </motion.div>
              ) : image ? (
                <motion.div
                  key="image"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative group w-full h-full flex flex-col items-center justify-center"
                >
                  <img
                    src={image}
                    alt="Generated Concept"
                    className="rounded-2xl shadow-2xl max-w-full max-h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 rounded-2xl">
                    <button
                      onClick={() => setIsPreviewOpen(true)}
                      title="Preview Full Size"
                      className="bg-white text-navy p-3 rounded-full hover:scale-110 transition-transform"
                    >
                      <Maximize2 size={20} />
                    </button>
                    <button
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = image;
                        link.download = "store-concept.png";
                        link.click();
                      }}
                      title="Download Image"
                      className="bg-green text-navy p-3 rounded-full hover:scale-110 transition-transform"
                    >
                      <Download size={20} />
                    </button>
                    <button
                      onClick={generateImage}
                      title="Regenerate"
                      className="bg-white text-navy p-3 rounded-full hover:scale-110 transition-transform"
                    >
                      <RefreshCw size={20} />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto text-white/20">
                    <ImageIcon size={40} />
                  </div>
                  <p className="text-white/40 text-sm font-medium">Your store concept will appear here</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Full Size Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 backdrop-blur-sm p-4 md:p-10"
            onClick={() => setIsPreviewOpen(false)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-green transition-colors"
              onClick={() => setIsPreviewOpen(false)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={image}
                alt="Generated Concept Preview"
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="mt-6 flex gap-4">
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = image;
                    link.download = "store-concept.png";
                    link.click();
                  }}
                  className="bg-green text-navy px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 green-glow"
                >
                  <Download size={20} /> Download Image
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
