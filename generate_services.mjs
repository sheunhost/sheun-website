import fs from 'fs';

const services = [
  {
    file: 'GoHighLevel.tsx',
    title: 'GoHighLevel CRM Setup & Automation',
    meta: 'Expert GoHighLevel CRM setup, automation, and pipeline management for agencies and local businesses.',
    head: 'Automate Your Sales Pipeline with GoHighLevel',
    sub: 'We design, build, and optimize custom GoHighLevel CRM systems to capture leads, nurture prospects, and close more deals automatically.',
    related: [
      { title: "Email & Marketing Automation", href: "/automation/services/email-marketing" },
      { title: "AI Chatbot Development", href: "/automation/services/chatbot" }
    ]
  },
  {
    file: 'Chatbot.tsx',
    title: 'AI Chatbot Development',
    meta: 'Custom AI chatbot development trained on your company data to provide 24/7 intelligent customer support.',
    head: '24/7 Intelligent Customer Support',
    sub: 'Deploy custom AI agents trained on your documentation, past tickets, and company knowledge base to resolve customer issues instantly.',
    related: [
      { title: "AI Voice Agents", href: "/automation/services/voice" },
      { title: "AI Workflow Automation", href: "/automation/services/workflow" }
    ]
  },
  {
    file: 'Voice.tsx',
    title: 'AI Voice Agent & Calling Solutions',
    meta: 'Deploy human-like AI voice agents for inbound customer service and outbound sales calling.',
    head: 'Human-Like AI Voice Agents',
    sub: 'Handle hundreds of concurrent inbound and outbound calls with AI voice technology that sounds indistinguishable from a real human.',
    related: [
      { title: "AI Chatbot Development", href: "/automation/services/chatbot" },
      { title: "GoHighLevel CRM Setup", href: "/automation/services/gohighlevel" }
    ]
  },
  {
    file: 'BusinessProcess.tsx',
    title: 'Business Process Automation',
    meta: 'End-to-end business process automation consulting and implementation for scaling companies.',
    head: 'Scale Your Operations, Not Your Overhead',
    sub: 'We analyze your entire operational architecture and replace manual bottlenecks with scalable, automated software systems.',
    related: [
      { title: "AI Workflow Automation", href: "/automation/services/workflow" },
      { title: "CRM Integration & Migration", href: "/automation/services/crm-migration" }
    ]
  },
  {
    file: 'CRMMigration.tsx',
    title: 'CRM Integration & Migration',
    meta: 'Secure, seamless CRM data migration and integration services. Move from Salesforce, Hubspot, or Pipedrive without data loss.',
    head: 'Seamless CRM Migration & Sync',
    sub: 'Safely transfer your historical customer data, pipelines, and notes to a new CRM, or set up real-time bi-directional syncs between multiple systems.',
    related: [
      { title: "GoHighLevel CRM Setup", href: "/automation/services/gohighlevel" },
      { title: "Custom API Integrations", href: "/automation/services/api" }
    ]
  },
  {
    file: 'EmailMarketing.tsx',
    title: 'Email & Marketing Automation',
    meta: 'Advanced email marketing automation, drip campaigns, and SMS sequences that convert leads into customers.',
    head: 'Hyper-Personalized Marketing Automation',
    sub: 'Deliver the right message, to the right person, at exactly the right time based on their behavioral data and interactions with your brand.',
    related: [
      { title: "GoHighLevel CRM Setup", href: "/automation/services/gohighlevel" },
      { title: "AI Workflow Automation", href: "/automation/services/workflow" }
    ]
  },
  {
    file: 'API.tsx',
    title: 'Custom API Integrations',
    meta: 'Bespoke API integrations using Zapier, Make.com, n8n, or custom Node.js middleware for complex software architecture.',
    head: 'Complex Custom API Integrations',
    sub: 'When out-of-the-box Zapier integrations fail, we build custom API middleware and webhooks to connect your most complex, proprietary software systems.',
    related: [
      { title: "AI Workflow Automation", href: "/automation/services/workflow" },
      { title: "Business Process Automation", href: "/automation/services/business-process" }
    ]
  }
];

services.forEach(s => {
  const content = `import ServiceTemplate from "../../../components/automation/ServiceTemplate";

export default function ${s.file.replace('.tsx','')} () {
  return (
    <ServiceTemplate
      title="${s.title}"
      metaDesc="${s.meta}"
      heroHeadline="${s.head}"
      heroSubheadline="${s.sub}"
      overviewTitle="Why You Need ${s.title}"
      overviewContent={
        <>
          <p className="mb-4">In today's fast-paced digital landscape, manual execution of ${s.title.toLowerCase()} is no longer competitive. Businesses that fail to innovate are left behind by more agile competitors.</p>
          <p className="mb-4">Our premium automation solutions are designed specifically to eliminate friction. We build systems that are robust, secure, and capable of handling enterprise-level scale without breaking.</p>
          <p>By partnering with Sheun Automation, you gain a technological advantage that directly translates to increased revenue, lower operational costs, and a vastly superior customer experience.</p>
        </>
      }
      benefits={[
        { title: "Cost Reduction", desc: "Lower your operational overhead by automating tasks that normally require human staff." },
        { title: "24/7 Operation", desc: "Software doesn't sleep. Your automated systems work around the clock, 365 days a year." },
        { title: "Scalability", desc: "Handle 10x the volume of leads, tickets, or data without changing your infrastructure." }
      ]}
      features={[
        { title: "Custom Architecture", desc: "Tailored specifically to your unique business logic and requirements." },
        { title: "Secure Data Handling", desc: "Enterprise-grade encryption and strict adherence to privacy standards." },
        { title: "Real-time Analytics", desc: "Monitor the performance and ROI of your automated systems via custom dashboards." },
        { title: "Dedicated Support", desc: "Direct access to our engineers for continuous optimization and maintenance." }
      ]}
      idealClients={["Enterprise Teams", "Marketing Agencies", "E-commerce Brands", "SaaS Companies", "Healthcare Providers"]}
      process={[
        { step: "Discovery", desc: "Deep dive into your business goals and technical constraints." },
        { step: "Architecture", desc: "Mapping out the optimal logic flow and data schema." },
        { step: "Development", desc: "Writing the code, configuring the APIs, and building the logic." },
        { step: "Deployment", desc: "Smooth rollout with comprehensive team training and SOPs." }
      ]}
      faqs={[
        { q: "How much does this cost?", a: "Pricing is completely dependent on the complexity of the build. We offer custom quotes after our initial discovery call to ensure an accurate assessment." },
        { q: "Do you offer ongoing support?", a: "Absolutely. We offer dedicated retention retainers to ensure your systems remain up-to-date as APIs change and your business evolves." }
      ]}
      relatedServices={${JSON.stringify(s.related)}}
    />
  );
}
`;
  fs.writeFileSync('src/pages/automation/services/' + s.file, content);
});
