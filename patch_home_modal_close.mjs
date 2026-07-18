import fs from 'fs/promises';

async function main() {
  let content = await fs.readFile('src/pages/Home.tsx', 'utf-8');
  
  // Replace the specific </div> with </motion.div> around line 445
  // Let's use a regex that captures the end of ServiceModal
  content = content.replace(
    /className="w-full bg-navy text-white py-5 rounded-full font-bold text-lg hover:bg-green hover:text-navy dark:text-white transition-all flex items-center justify-center gap-3 shadow-xl"\n              >\n                Get Started with \{service\.title\} <ArrowRight size=\{20\} \/>\n              <\/a>\n            <\/div>\n          <\/div>\n        <\/div>\n      <\/div>\n    <\/div>/,
    `className="w-full bg-navy text-white py-5 rounded-full font-bold text-lg hover:bg-green hover:text-navy dark:text-white transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                Get Started with {service.title} <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>`
  );

  await fs.writeFile('src/pages/Home.tsx', content);
  console.log("Patched closing tag");
}
main();
