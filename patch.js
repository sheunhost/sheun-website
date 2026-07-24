const fs = require('fs');
const file = '/app/applet/src/pages/ShopifySeoSprint.tsx';
let content = fs.readFileSync(file, 'utf8');
const target = `  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };`;
const replacement = `  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleAuditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formElement = e.currentTarget;
    const submitData = new FormData(formElement);
    submitData.append("access_key", "c0573f7d-6191-4374-bc31-ee70ee9fa226");
    submitData.append("subject", "New Shopify SEO Sprint Review Request");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData
      });
      
      const data = await response.json();
      if (data.success) {
        setFormSubmitted(true);
      } else {
        console.error("Form submission failed", data);
      }
    } catch (err) {
      console.error("Form submission error", err);
    } finally {
      setIsSubmitting(false);
    }
  };`;

content = content.replace(target, replacement);

content = content.replace('type="text"\\n                        required\\n                        placeholder="Sheun Hub Owner"', 'type="text"\\n                        name="name"\\n                        required\\n                        placeholder="Sheun Hub Owner"');

content = content.replace('type="text"\\n                        required\\n                        placeholder="mystore.com"', 'type="text"\\n                        name="store_url"\\n                        required\\n                        placeholder="mystore.com"');

content = content.replace('type="email"\\n                        required\\n                        placeholder="founder@mystore.com"', 'type="email"\\n                        name="email"\\n                        required\\n                        placeholder="founder@mystore.com"');

content = content.replace('className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm focus:outline-none focus:border-[#16A34A]"\\n                      >', 'name="revenue"\\n                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm focus:outline-none focus:border-[#16A34A]"\\n                      >');

content = content.replace('Claim Free SEO Review <ArrowRight size={16} />', '{isSubmitting ? "Submitting..." : "Claim Free SEO Review"} <ArrowRight size={16} />');


fs.writeFileSync(file, content);
