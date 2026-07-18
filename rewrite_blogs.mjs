import fs from 'fs/promises';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const files = [
  'src/pages/ShopifySettingsGuide.tsx',
  'src/pages/ShopifySpeedOptimization.tsx',
  'src/pages/BestDropshippingApps.tsx',
  'src/pages/FashionDropshippingGuide.tsx',
  'src/pages/WooCommerceToShopifyMigration.tsx',
  'src/pages/ShopifySEOGuide.tsx',
  'src/pages/LeveragingShopifyMarkets.tsx',
  'src/pages/ConversionKillers.tsx'
];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function rewriteFile(filename) {
  console.log(`Processing ${filename}...`);
  const content = await fs.readFile(filename, 'utf-8');
  
  // Extract read time roughly
  const readTimeMatch = content.match(/([0-9]+) min read/);
  const minutes = readTimeMatch ? parseInt(readTimeMatch[1], 10) : 10;
  const targetWords = minutes * 220;
  
  const prompt = `You are a Senior Technical SEO and Frontend Engineer writing long-form professional blog posts for a Shopify agency portfolio.
I am providing you the full code of a React component for a blog post.

YOUR TASK:
Rewrite the ENTIRE file from top to bottom. Do not use placeholders like "// rest of code".
Output ONLY the raw React code (TypeScript). Do not wrap in markdown code blocks.

CONSTRAINTS & REQUIREMENTS:
1. PRESERVE SEO: Do not change any props on the <PageWrapper> component (title, description, keywords, canonical, schema).
2. PRESERVE LOGIC: Do not change the imports, the comments state logic, or the Share to LinkedIn logic. Keep the related posts section at the bottom.
3. FIX BUG: In any list with checkmarks (e.g., <CheckCircle2 />), do NOT wrap the text in a bare <span> because a global CSS rule hides it. Instead, wrap the text in <div className="text-navy"> or use <p> tags.
4. CONTENT DEPTH: The post claims a ${minutes} min read. This requires approximately ${targetWords} words. EXPAND the content massively.
   - For every heading, write multiple in-depth paragraphs explaining the 'why', the 'how', and the 'expected result'.
   - Add new relevant subheadings and sections to reach the length requirement.
   - Give technical context for claims.
5. DESIGN QUALITY:
   - Implement a Desktop Layout with a Sidebar: Wrap the main article body in a flex container (e.g., <div className="flex flex-col lg:flex-row gap-12">).
   - Create a Sticky Table of Contents in the left column (lg:w-1/4) and put the expanded content in the right column (lg:w-3/4).
   - Use visual variety: Add callout boxes (e.g. <div className="bg-light p-6 rounded-xl border-l-4 border-green my-8">), pull quotes, and code examples or <pre> blocks where relevant.
   - Keep the existing color scheme (navy: #09090b, green: #10b981).
6. ADD FAQ: Add a section at the very end of the article content (before comments) with 4-6 FAQs related to the topic.

Here is the current code of the file. Rewrite it following the instructions:

${content}
`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-pro-preview',
      contents: prompt,
      config: {
        maxOutputTokens: 8192,
        temperature: 0.2
      }
    });

    let newContent = response.text;
    
    // Clean up markdown block if it outputted it
    if (newContent.startsWith('\`\`\`')) {
      newContent = newContent.replace(/^\`\`\`(tsx|javascript|typescript|js|ts|react)?\n/, '');
      newContent = newContent.replace(/\n\`\`\`$/, '');
    }

    await fs.writeFile(filename, newContent);
    console.log(`Successfully rewrote ${filename}`);
  } catch (error) {
    console.error(`Error processing ${filename}:`, error);
  }
}

async function main() {
  for (const file of files) {
    await rewriteFile(file);
    await sleep(2000); // rate limit pause
  }
}

main();
