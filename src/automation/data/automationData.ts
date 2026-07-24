export interface AutomationService {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  iconName: string;
  badge: string;
  overview: string;
  benefits: { title: string; description: string; metric?: string }[];
  features: { title: string; description: string; icon: string }[];
  idealClients: { category: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  techStack: string[];
  faqs: { question: string; answer: string }[];
  detailedContent: {
    sectionTitle: string;
    paragraphs: string[];
    keyTakeaways?: string[];
  }[];
}

export interface AutomationIndustry {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  description: string;
  commonBottlenecks: string[];
  automatedWorkflows: { name: string; impact: string; detail: string }[];
  caseStudyHighlight: { headline: string; result: string };
}

export interface AutomationCaseStudy {
  id: string;
  clientName: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  workflowDiagram: string[];
  testimonial: { quote: string; author: string; role: string; company: string };
}

export const AUTOMATION_SERVICES: AutomationService[] = [
  {
    id: "ai-workflow-automation",
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation",
    badge: "Core AI Engine",
    shortDescription: "Transform manual tasks into self-executing AI workflows powered by LLMs, custom webhooks, and intelligent decision matrices.",
    heroHeadline: "Autonomous AI Workflows That Execute Complex Operations 24/7",
    heroSubheadline: "Eliminate repetitive human intervention. We engineer bespoke AI workflow pipelines that parse unstructured documents, make context-aware decisions, route leads, and execute actions across your entire tech stack.",
    iconName: "Cpu",
    overview: "In modern business operations, team hours are squandered on low-leverage data transfers, document processing, and manual decision routing. AI Workflow Automation replaces fragile, rigid scripts with adaptive machine intelligence. By embedding Gemini, GPT-4, and custom neural agents directly into your operational stack via Zapier, Make.com, or self-hosted n8n instances, we construct end-to-end autonomous systems that read emails, evaluate unstructured files, extract actionable insights, update CRMs, and trigger complex downstream business processes without human lag.",
    benefits: [
      { title: "90% Reduction in Cycle Time", description: "Convert multi-hour operational bottlenecks into sub-second automated executions.", metric: "10x Speed" },
      { title: "Zero Data Entry Errors", description: "Eliminate costly human miskeys, lost lead details, and inaccurate spreadsheet entries.", metric: "99.9% Accuracy" },
      { title: "Infinite Operational Scale", description: "Handle 100x volume spikes during peak demand without swelling payroll or hiring temp staff.", metric: "Zero Extra Overhead" },
      { title: "24/7/365 Continuous Execution", description: "Your systems continue qualifying leads, processing invoices, and routing tickets overnight and on weekends.", metric: "24/7 Uptime" }
    ],
    features: [
      { title: "Intelligent Document Processing (IDP)", description: "Automatically extract tabular and text data from PDFs, invoices, contracts, and receipts into structured JSON schemas.", icon: "FileText" },
      { title: "Context-Aware AI Routing", description: "Analyze incoming emails, support tickets, or form submissions for tone, intent, and priority before dispatching them to the right owner.", icon: "GitBranch" },
      { title: "Multi-Agent System Orchestration", description: "Chain specialized AI sub-agents to perform sequential research, drafting, verification, and database execution.", icon: "Network" },
      { title: "Real-Time Webhook & API Synchronization", description: "Connect cloud tools lacking native integrations using robust, error-handled custom REST/GraphQL endpoints.", icon: "Zap" },
      { title: "Human-in-the-Loop Safeguards", description: "Inject approval checkpoints into Slack or Teams when AI confidence thresholds fall below predefined enterprise metrics.", icon: "ShieldCheck" },
      { title: "Automated Error Handling & Logging", description: "Built-in fallback loops and instant dev alerts ensure zero silent failures or dropped data packets.", icon: "Activity" }
    ],
    idealClients: [
      { category: "Professional Services & Agencies", description: "Firms handling high-volume client onboarding, proposal generation, and multi-app project kickoff." },
      { category: "Healthcare & Clinical Operations", description: "Medical practices streamlining patient intake, insurance verification, and records classification." },
      { category: "Real Estate & Property Management", description: "Agencies managing tenant applications, maintenance routing, lease parsing, and lead qualification." },
      { category: "E-commerce & Logistics", description: "Brands needing automated vendor communication, custom tracking alerts, and inventory sync." }
    ],
    process: [
      { step: 1, title: "Operational Audit & Process Mapping", description: "We analyze your existing daily workflows, identify repetitive manual bottlenecks, and map out the exact data architecture required." },
      { step: 2, title: "System Architecture & AI Prompt Engineering", description: "We design custom JSON schemas, agent prompt chains, error-fallback paths, and API authentication layers tailored to your tools." },
      { step: 3, title: "Development & Sandbox Testing", description: "We build the workflow pipeline in a isolated staging environment, running edge-case stress tests to guarantee 100% data fidelity." },
      { step: 4, title: "Deployment, Guardrails & Analytics", description: "We deploy the production automation, configure real-time monitoring dashboards, train your internal team, and deliver documentation." }
    ],
    techStack: ["OpenAI API", "Gemini API", "Make.com", "n8n", "Zapier Enterprise", "Python", "Node.js", "PostgreSQL", "Pinecone Vector DB"],
    faqs: [
      { question: "What is AI Workflow Automation compared to standard Zapier workflows?", answer: "Standard Zapier workflows use rigid 'If This Then That' logic with exact field matching. AI Workflow Automation embeds Large Language Models (LLMs) into the loop, allowing the system to understand unstructured text, summarize multi-page PDFs, make context-aware judgments, classify sentiment, and format complex data before executing downstream actions." },
      { question: "How secure is our company data when using AI models?", answer: "We enforce enterprise-grade security protocols. We utilize SOC2-compliant API endpoints where data is explicitly excluded from public AI model training. Sensitive credentials are stored in encrypted environment vaults with role-based access control." },
      { question: "What happens if an external API goes down?", answer: "Our custom workflow architectures feature automated retry loops, state persistence, and error notification triggers. If a third-party service fails, the event is held safely in a queue and retried automatically while alerting your admin channel on Slack or Email." },
      { question: "How long does implementation take?", answer: "Standard AI workflow systems are fully architected, tested, and deployed within 7 to 14 business days, depending on the number of integrated applications and complexity of logic." }
    ],
    detailedContent: [
      {
        sectionTitle: "Reengineering Modern Business Infrastructure with Generative Intelligence",
        paragraphs: [
          "Traditional process automation relied heavily on hardcoded rule sets. If a client submitted a PDF form with slightly modified formatting, or sent an email with nuanced phrasing, the entire automation would break, forcing staff back into manual data entry. AI Workflow Automation solves this fundamental limitation by combining robust middleware with generative AI intelligence.",
          "By deploying self-correcting AI pipelines, your organization can turn messy real-world inputs—such as scanned physical documents, natural language emails, WhatsApp audio transcriptions, and raw webhooks—into pristine, structured database records in real time. This means your operational speed is no longer bounded by human processing bandwidth."
        ],
        keyTakeaways: [
          "Replaces static, fragile automation scripts with adaptive, context-aware AI agents.",
          "Eliminates 90%+ of manual administrative time across sales, operations, and support.",
          "Maintains enterprise-grade data privacy with zero model retraining on your private assets.",
          "Scales infinitely without increasing headcount or monthly software subscription bloat."
        ]
      },
      {
        sectionTitle: "Key Use Cases Across Enterprise Departments",
        paragraphs: [
          "1. Sales & Inbound Lead Routing: When a prospective client submits an inquiry, AI instantly enriches the lead profile via Clearbit/Apollo, analyzes company size and intent, drafts a custom tailored proposal preview, creates a deal in your CRM, and alerts the assigned account executive via Slack within 5 seconds.",
          "2. Finance & Accounts Payable: Invoices arriving in inbox attachments are automatically parsed for line items, verified against open purchase orders in Xero or Quickbooks, classified for tax categories, and queued for one-click manager sign-off.",
          "3. Client Onboarding & Project Kickoff: Upon contract signature in DocuSign or PandaDoc, an AI workflow provisions Google Drive folders, generates ClickUp/Asana project boards, creates a dedicated Slack channel, sends a personalized welcome email sequence, and schedules the kickoff call."
        ]
      }
    ]
  },
  {
    id: "gohighlevel-crm",
    slug: "gohighlevel-crm",
    title: "GoHighLevel CRM Setup & Automation",
    badge: "CRM Architecture",
    shortDescription: "Turn GoHighLevel into a high-velocity revenue engine with custom pipelines, automated lead nurturing, SMS/Email workflows, and booking calendars.",
    heroHeadline: "Complete GoHighLevel CRM Customization for Maximum Conversion",
    heroSubheadline: "Stop losing leads in clunky, unconfigured CRM setups. We design, build, and optimize complete GoHighLevel snapshot ecosystems with automated multi-channel sequences, AI booking bots, and custom dashboard reporting.",
    iconName: "BarChart3",
    overview: "GoHighLevel (GHL) is one of the most powerful all-in-one sales, marketing, and CRM platforms available, yet over 80% of businesses barely tap 15% of its capabilities. A default GHL setup is filled with generic templates that fail to convert. Sheun Automation builds enterprise-grade GoHighLevel infrastructures tailored specifically to your sales model. We engineer custom pipeline stages, automated SMS and email follow-ups, missed-call text-backs, AI conversation bots, membership portals, and custom webhooks that connect GHL smoothly into your existing operational stack.",
    benefits: [
      { title: "3x Higher Lead-to-Appointment Rate", description: "Engage inbound leads within 60 seconds across SMS, WhatsApp, and email before they shop competitors.", metric: "< 60s Speed to Lead" },
      { title: "Complete Software Consolidation", description: "Replace ActiveCampaign, Calendly, ClickFunnels, Zapier, and Twilio with one unified GHL hub.", metric: "Save $500+/mo" },
      { title: "Zero Dropped Sales Opportunities", description: "Automated pipeline triggers move deals forward and alert reps when prospective buyers open proposals.", metric: "100% Tracking" },
      { title: "Automated Review & Reputation Engine", description: "Trigger localized Google review requests post-service, boosting your local search visibility automatically.", metric: "+400% Reviews" }
    ],
    features: [
      { title: "Custom Pipeline & Stage Architecture", description: "Tailored multi-pipeline sales boards with automated status updates, deal weighting, and revenue forecasting.", icon: "Kanban" },
      { title: "AI Voice & SMS Nurturing Sequences", description: "Multi-touch, delay-tested SMS and email drip campaigns that read prospect replies and adjust message cadence.", icon: "MessageSquare" },
      { title: "Missed-Call Text-Back Automation", description: "Instantly text prospects who call when your team is busy, securing the conversation before they call a competitor.", icon: "PhoneCall" },
      { title: "Smart Appointment Booking Calendars", description: "Custom round-robin calendars with automated deposit collection, SMS reminders, and Zoom integrations.", icon: "Calendar" },
      { title: "Custom Funnel & Form Engineering", description: "High-converting, mobile-first booking funnels integrated seamlessly into custom domain CNAMEs.", icon: "Layout" },
      { title: "Advanced Webhooks & API Webhooks", description: "Bi-directional data sync connecting GHL with Stripe, QuickBooks, custom databases, and external fulfillment systems.", icon: "RefreshCw" }
    ],
    idealClients: [
      { category: "High-Ticket Marketing Agencies", description: "Agencies managing lead flow, client reporting, and snapshot deployment across multiple sub-accounts." },
      { category: "Coaches, Consultants & Educators", description: "Businesses needing automated evergreen webinar funnels, course hosting, and VIP booking calendars." },
      { category: "Local Home & Professional Services", description: "Contractors, plumbers, roofers, and legal practices needing fast phone response and review growth." },
      { category: "Real Estate Brokers & Agents", description: "Teams managing high-volume buyer/seller leads, automated property tour alerts, and open house follow-ups." }
    ],
    process: [
      { step: 1, title: "GHL Audit & Blueprinting", description: "We analyze your current sales funnel, lead sources, manual messaging touchpoints, and desired conversion metrics." },
      { step: 2, title: "Snapshot & Pipeline Customization", description: "We configure custom fields, pipeline stages, Twilio SMS compliance, LC Email domain records, and user permissions." },
      { step: 3, title: "Workflow Building & Copywriting", description: "We craft multi-channel SMS/Email nurture sequences, calendar booking triggers, and AI response bots." },
      { step: 4, title: "Testing, Training & Handoff", description: "We test every trigger end-to-end, conduct live video training sessions with your sales reps, and provide full documentation." }
    ],
    techStack: ["GoHighLevel", "Twilio API", "LeadConnector Email", "Stripe API", "Make.com", "Zapier", "OpenAI API", "Google Business Profile API"],
    faqs: [
      { question: "Can you migrate our existing data from HubSpot, ActiveCampaign, or Salesforce into GHL?", answer: "Yes. We perform complete data migrations including contact lists, custom fields, historical notes, tag taxonomies, and active deal pipelines without data loss or duplicate creation." },
      { question: "What is Missed-Call Text-Back and how does it help conversion?", answer: "When a potential buyer calls your business number and no one answers, our system instantly dispatches an automated SMS: 'Hi! Sorry we missed your call. How can we help you today?' Over 60% of leads engage via SMS immediately rather than calling a competitor." },
      { question: "Do you configure Twilio and A2P 10DLC SMS registration?", answer: "Yes! A2P 10DLC SMS compliance is required to prevent mobile carriers from blocking your messages. We handle your business profile verification, brand registration, and campaign submission to guarantee maximum SMS deliverability." },
      { question: "Can GHL integrate with our accounting software like QuickBooks or Xero?", answer: "Absolutely. We build custom webhooks or native integrations so paid GHL invoices or closed deals automatically reflect in QuickBooks or Xero in real time." }
    ],
    detailedContent: [
      {
        sectionTitle: "Unlocking the Full Revenue Potential of GoHighLevel",
        paragraphs: [
          "GoHighLevel is a enterprise-grade marketing and sales engine, but without expert architecture, it often becomes a disorganized repository of unread contacts and broken workflows. Sheun Automation turns GHL into an automated conversion system.",
          "Our custom GoHighLevel setups are engineered for 'Speed to Lead'. Research shows that contacting a new inbound inquiry within 5 minutes increases conversion rates by over 390%. By combining multi-channel SMS, WhatsApp, voice drops, and intelligent appointment calendars, we ensure no revenue opportunity ever falls through the cracks."
        ],
        keyTakeaways: [
          "Reduces software stack expense by consolidating 5+ monthly subscriptions into one GHL hub.",
          "Achieves sub-60 second lead response rates with automated multi-channel messaging sequences.",
          "Includes 100% compliant A2P 10DLC SMS registration for maximum carrier deliverability.",
          "Includes custom team training and SOP documentation for frictionless staff adoption."
        ]
      }
    ]
  },
  {
    id: "ai-chatbots",
    slug: "ai-chatbots",
    title: "AI Chatbot Development",
    badge: "Conversational AI",
    shortDescription: "Deploy intelligent, custom-trained AI chatbots on your website, WhatsApp, and Slack that answer queries and qualify leads.",
    heroHeadline: "Custom AI Chatbots That Answer Questions, Qualify Leads & Book Appointments",
    heroSubheadline: "Move beyond useless rule-based decision tree bots. We build custom conversational AI assistants trained on your knowledge base, documentation, and product catalog that interact naturally in 50+ languages.",
    iconName: "Bot",
    overview: "Legacy website chatbots with static decision trees frustrate visitors and bounce qualified leads. Modern buyers demand immediate, human-grade answers to technical questions. Sheun Automation designs custom AI Chatbots powered by LLMs (OpenAI GPT-4, Gemini Pro, Claude 3.5) integrated directly into your business database. Our chatbots don't just chat—they execute real operational tasks: searching live inventory, querying account balances, scheduling qualified appointments on calendars, updating CRMs, and handing off warm leads to human reps with full conversation transcripts.",
    benefits: [
      { title: "24/7 Instant Response", description: "Provide zero-delay support and sales engagement to global visitors in any timezone.", metric: "0s Wait Time" },
      { title: "70% Reduction in Support Tickets", description: "Resolve repetitive customer inquiries automatically without bothering your tier-1 support agents.", metric: "70% Saved" },
      { title: "3x Higher On-Site Lead Capture", description: "Engage passive website browsers with interactive, conversational qualification prompts.", metric: "3x Capture" },
      { title: "Multi-Platform Synchronization", description: "Deploy one unified AI bot core across Website, WhatsApp, Facebook Messenger, Instagram, and Slack.", metric: "Omnichannel" }
    ],
    features: [
      { title: "Custom RAG Knowledge Base Training", description: "Train your AI on PDFs, Notion docs, website pages, and internal SOPs with Retrieval-Augmented Generation.", icon: "Database" },
      { title: "Real-Time Function Calling & Webhooks", description: "Enable the chatbot to check order status, update CRM records, send calendar invites, and issue refund requests.", icon: "Code2" },
      { title: "Human Escalation & Live Handoff", description: "Seamlessly transfer high-intent or sensitive conversations to human agents via Slack, email, or live chat dashboard.", icon: "UserCheck" },
      { title: "Lead Qualification & Scoring", description: "Automatically ask qualifying questions (budget, timeline, scope) before offering appointment slots.", icon: "Target" },
      { title: "50+ Multi-Language Fluency", description: "Detect the visitor's native browser language automatically and converse fluently in real time.", icon: "Globe" },
      { title: "Branded UI & Smooth Widget Customization", description: "Tailor colors, fonts, avatar graphics, and launcher widgets to match your exact brand style guide.", icon: "Palette" }
    ],
    idealClients: [
      { category: "E-Commerce Brands & Marketplaces", description: "Stores needing instant product recommendations, order tracking, and pre-purchase sizing help." },
      { category: "SaaS & Software Companies", description: "Tech companies delivering instant technical documentation answers and automated demo scheduling." },
      { category: "Real Estate & Property Management", description: "Agencies offering 24/7 property tour scheduling and instant lease requirement checks." },
      { category: "Service Businesses & Medical Clinics", description: "Clinics and agencies answering FAQ pricing, insurance acceptance, and appointment bookings." }
    ],
    process: [
      { step: 1, title: "Knowledge Extraction & Strategy", description: "We ingest your company documentation, FAQs, pricing guides, and support history to curate a clean training dataset." },
      { step: 2, title: "RAG Architecture & Vector Indexing", description: "We construct vector database indices and program strict system prompt instructions to prevent hallucinations." },
      { step: 3, title: "Action Integration & API Hooks", description: "We connect the chatbot to your CRM, calendar, and backend databases for live function execution." },
      { step: 4, title: "Testing, Guardrails & Deployment", description: "We run adversarial prompt testing, deploy the widget to your production domain, and establish analytics tracking." }
    ],
    techStack: ["OpenAI GPT-4o", "Gemini 1.5 Flash", "LangChain", "Pinecone", "Botpress", "Voiceflow", "React", "Node.js", "WhatsApp Business API"],
    faqs: [
      { question: "Will the AI chatbot hallucinate or invent false company information?", answer: "No. We implement Retrieval-Augmented Generation (RAG) with strict system instructions that mandate the AI only answer using verified facts in your custom knowledge base. If an answer isn't in the knowledge base, the bot politely escalates the query to a human team member." },
      { question: "Can the chatbot book appointments directly into my Google Calendar or GoHighLevel?", answer: "Yes! Our chatbots use function calling to check live calendar availability in real time, collect required lead contact details, and create the event directly on your calendar." },
      { question: "Can we install the chatbot on WhatsApp or Instagram DMs?", answer: "Yes. We build omnichannel conversational bots that operate across your website widget, WhatsApp Business API, Instagram DMs, and Facebook Messenger using a single centralized knowledge core." },
      { question: "How easy is it to update the AI's training data when our prices change?", answer: "Extremely easy. We build a simple admin dashboard where you can upload new PDF documents or update text files, and the vector index re-synchronizes automatically within seconds." }
    ],
    detailedContent: [
      {
        sectionTitle: "Building Enterprise Conversational AI That Drives Measurable ROI",
        paragraphs: [
          "Website traffic is expensive. If prospective buyers visit your site after hours and cannot quickly find answers to technical questions or pricing options, they leave for a competitor. Standard static lead forms capture less than 2% of visitors.",
          "Our custom AI Chatbots act as 24/7 sales specialists. By retrieving precise context from your enterprise knowledge base, the bot answers complex questions naturally, builds trust, qualifies the buyer's budget and authority, and secures the calendar booking before the visitor leaves your site."
        ],
        keyTakeaways: [
          "Custom trained on your proprietary docs, pricing, and product documentation.",
          "RAG architecture guarantees zero hallucinations and strict brand compliance.",
          "Executes real backend actions: booking calendars, checking order status, and CRM tagging.",
          "Supports 50+ languages natively with instant browser language detection."
        ]
      }
    ]
  },
  {
    id: "ai-voice-agents",
    slug: "ai-voice-agents",
    title: "AI Voice Agent & AI Calling Solutions",
    badge: "Voice Intelligence",
    shortDescription: "Deploy human-sounding AI voice callers for inbound phone support, outbound lead qualification, and appointment reminders.",
    heroHeadline: "Human-Sounding AI Voice Agents for Inbound & Outbound Phone Calls",
    heroSubheadline: "Experience conversational phone AI with latency under 600ms. Our AI Voice Agents answer inbound phone lines, make outbound sales follow-up calls, qualify leads, and update CRMs in real time.",
    iconName: "Phone",
    overview: "Phone calls remain the highest-converting communication channel in business, yet traditional IVR phone trees ('Press 1 for Sales') destroy customer satisfaction, and hiring full-time call centers is exorbitantly expensive. Sheun Automation builds cutting-edge AI Voice Agents powered by ultra-low latency speech synthesis (ElevenLabs, Deepgram, Vapi, Retell AI) and LLM reasoning. Our voice agents speak naturally, handle interruptions, answer complex technical questions, transfer calls to live staff, and sync transcriptions directly to your CRM.",
    benefits: [
      { title: "100% Inbound Call Answer Rate", description: "Never let another phone call go to voicemail during high-volume spikes or after business hours.", metric: "100% Answered" },
      { title: "80% Savings vs Call Centers", description: "Replace costly offshore call centers with scalable, ultra-reliable AI phone agents.", metric: "80% Cost Cut" },
      { title: "Sub-600ms Response Latency", description: "Conversational cadence so natural and instant that callers feel they are speaking with a human rep.", metric: "< 600ms Speed" },
      { title: "Automated Outbound Nurturing", description: "Automatically call new web leads within 30 seconds to confirm appointments and answer questions.", metric: "Instant Callback" }
    ],
    features: [
      { title: "Ultra-Realistic Speech Synthesis", description: "Human-grade voice inflection, breath pauses, and natural tone customization tailored to your brand.", icon: "Mic" },
      { title: "Dynamic Interrupt Handling", description: "Allows callers to interrupt or change topics naturally without breaking the AI's logic flow.", icon: "Volume2" },
      { title: "Live Call Transfer & Warm Handoff", description: "Detect high-value lead intent and transfer the call directly to an on-duty rep's mobile phone.", icon: "PhoneForwarded" },
      { title: "Real-Time CRM & Calendar Integration", description: "Check calendar slots during the phone conversation and schedule appointments while on the line.", icon: "CalendarCheck" },
      { title: "Call Recording & Sentiment Analysis", description: "Automatically generate audio transcripts, summaries, and sentiment scores in your CRM after every call.", icon: "FileSpreadsheet" },
      { title: "Custom Knowledge Base Engine", description: "Inbound agents pull answers from your custom documentation, pricing guides, and FAQs dynamically.", icon: "BookOpen" }
    ],
    idealClients: [
      { category: "Dental, Medical & Wellness Clinics", description: "Clinics needing 24/7 patient appointment scheduling, cancellation handling, and emergency routing." },
      { category: "Home Service Contractors & Logistics", description: "Roofers, HVAC, plumbers, and dispatch teams needing instant phone response for estimate requests." },
      { category: "Real Estate Brokers & Property Managers", description: "Teams managing high call volume for rental availability, tour scheduling, and tenant maintenance." },
      { category: "High-Volume Lead Agencies", description: "Businesses making outbound speed-to-lead verification calls on fresh digital campaign inquiries." }
    ],
    process: [
      { step: 1, title: "Voice & Telephony Architecture", description: "We analyze your phone workflows, select the optimal voice personality, and acquire clean business phone numbers." },
      { step: 2, title: "Prompt Engineering & Guardrails", description: "We author natural conversational voice scripts, boundary guardrails, objection handling, and transfer rules." },
      { step: 3, title: "Tool & CRM API Integration", description: "We hook the voice agent into your Google/GHL calendar, Twilio trunk, and CRM for live data lookup." },
      { step: 4, title: "Latency Tuning & Launch", description: "We conduct simulated call stress tests to optimize latency below 600ms before routing live calls." }
    ],
    techStack: ["Vapi AI", "Retell AI", "ElevenLabs Voice API", "Deepgram Nova-2", "Twilio SIP Trunking", "OpenAI GPT-4o", "Make.com"],
    faqs: [
      { question: "Does the AI voice agent sound robotic like traditional phone systems?", answer: "Not at all. We utilize state-of-the-art voice models from ElevenLabs and Deepgram. The voice includes human inflection, micro-pauses, dynamic tone modulation, and sub-600ms response latency. Most callers never realize they are speaking with an AI." },
      { question: "Can the voice agent transfer the call to a real person if necessary?", answer: "Yes. If a caller requests a manager, asks a question outside the AI's knowledge scope, or meets high-value sales criteria, the AI executes a warm call transfer directly to your team's mobile line or office phone." },
      { question: "Can the voice agent make outbound calls to new leads?", answer: "Yes! When a prospect submits a lead form on your website or ad campaign, our system can trigger an automated outbound voice call within 30 seconds to qualify the prospect and confirm their appointment." },
      { question: "Is phone call data and audio recording stored securely?", answer: "Yes. All audio streams and transcriptions are encrypted end-to-end in compliance with standard data privacy guidelines." }
    ],
    detailedContent: [
      {
        sectionTitle: "Revolutionizing Business Telephony with Conversational AI",
        paragraphs: [
          "Inbound phone calls carry the highest buying intent of any digital channel. Yet, over 30% of business calls go unanswered due to busy staff, after-hours closures, or unexpected call spikes. Every missed call represents lost revenue and wasted marketing dollars.",
          "Our AI Voice Agents provide enterprise phone capabilities without call center overhead. Operating 24 hours a day, 7 days a week, the voice agent greets callers warmly, understands natural spoken language, answers complex service questions, and updates your CRM instantly."
        ],
        keyTakeaways: [
          "Zero missed calls during peak hours, weekends, or staff meetings.",
          "Sub-600ms latency creates natural, human-grade conversational flow.",
          "Automates inbound support and outbound speed-to-lead callbacks within 30 seconds.",
          "Full CRM integration with automated transcriptions, key takeaway summaries, and lead tagging."
        ]
      }
    ]
  },
  {
    id: "business-process-automation",
    slug: "business-process-automation",
    title: "Business Process Automation",
    badge: "Enterprise Operations",
    shortDescription: "Streamline complex operational bottlenecks, approval hierarchies, employee onboarding, and cross-departmental data flows.",
    heroHeadline: "Enterprise Business Process Automation (BPA) for Frictionless Operations",
    heroSubheadline: "Eliminate operational drag. We map, re-architect, and automate end-to-end business operations across finance, HR, inventory, procurement, and client management.",
    iconName: "Workflow",
    overview: "As companies grow, operational complexity explodes. Unstandardized processes, manual spreadsheets, lost email threads, and redundant data entry slow organizational momentum and erode profit margins. Business Process Automation (BPA) systematically removes human labor from routine operational loops. Sheun Automation conducts deep operational audits, restructures messy departmental workflows, and constructs resilient automated architectures that ensure compliance, speed up execution, and reduce administrative overhead.",
    benefits: [
      { title: "60% Reduction in Administrative Overhead", description: "Free management and administrative staff to focus on strategic growth initiatives.", metric: "60% Admin Cut" },
      { title: "Standardized Operational Compliance", description: "Enforce strict governance rules, approval workflows, and audit trails across all departments.", metric: "100% Compliant" },
      { title: "Faster Procurement & Invoicing Cycles", description: "Accelerate invoice processing, expense approvals, and vendor payouts by 5x.", metric: "5x Faster" },
      { title: "Seamless Cross-Department Alignment", description: "Sync data automatically between Sales, Finance, Operations, and Customer Success teams.", metric: "Unified Stack" }
    ],
    features: [
      { title: "Automated Approval Hierarchies", description: "Multi-tiered Slack, Email, or Portal approval triggers for purchase orders, discounts, and contracts.", icon: "CheckCircle2" },
      { title: "Employee & Client Onboarding Automation", description: "Provision accounts, generate contracts, assign training modules, and distribute assets automatically.", icon: "Users" },
      { title: "Inventory & Supply Chain Sync", description: "Bi-directional stock reconciliation across ERPs, warehouses, and e-commerce storefronts.", icon: "Package" },
      { title: "Financial Reporting & Reconciliation Pipelines", description: "Automated daily cash flow summaries, Stripe/Plaid bank reconciliation, and expense categorization.", icon: "DollarSign" },
      { title: "Document Lifecycle Automation", description: "Generate custom legal agreements, proposals, and compliance audits populated with live CRM data.", icon: "FileCheck" },
      { title: "SOP & Audit Logging Systems", description: "Maintain real-time operational logs and automated notifications for process SLA breaches.", icon: "Shield" }
    ],
    idealClients: [
      { category: "Mid-Market Enterprises & Growing Companies", description: "Organizations experiencing growing pains and administrative friction across multiple departments." },
      { category: "Financial Services & Accounting Firms", description: "Firms automating document collection, KYC verification, and tax document organization." },
      { category: "Franchises & Multi-Location Operators", description: "Businesses requiring standardized operational execution across dozens of regional locations." },
      { category: "Manufacturing & Distribution Companies", description: "Teams streamlining purchase order processing, vendor tracking, and inventory logs." }
    ],
    process: [
      { step: 1, title: "Operational Value Stream Mapping", description: "We conduct interviews with key stakeholders, document manual steps, and identify process waste." },
      { step: 2, title: "Process Redesign & Optimization", description: "We simplify and standardize workflow rules before applying technical automation tools." },
      { step: 3, title: "System Architecture & API Integration", description: "We build secure middleware layers connecting your ERP, CRM, HR, and Accounting systems." },
      { step: 4, title: "Change Management & SOP Handoff", description: "We train staff, provide visual SOP manuals, and establish continuous monitoring metrics." }
    ],
    techStack: ["n8n Enterprise", "Make.com", "Python", "SQL", "Workato", "Zapier Enterprise", "Google Workspace API", "Microsoft Power Automate"],
    faqs: [
      { question: "How does Business Process Automation differ from basic app integration?", answer: "Basic app integration connects two software tools to pass a single field (e.g. adding a lead form email to Mailchimp). Business Process Automation re-engineers multi-step, multi-department operational flows—including approval rules, document generation, state validation, exception handling, and audit logging." },
      { question: "Will our staff need technical coding knowledge to use the new automated systems?", answer: "No. We build user-friendly interfaces (via Slack bots, web portals, or simple forms) so your team interacts with the system using natural button clicks or form inputs while the automation handles the complex logic behind the scenes." },
      { question: "Can BPA help us maintain compliance and audit logs?", answer: "Yes! Every step executed by our automated pipelines is timestamped, logged, and backed up in secure databases, giving your organization a complete audit trail for financial or legal compliance." },
      { question: "How do we measure the return on investment (ROI) of BPA?", answer: "We calculate ROI based on hours saved per employee, reduction in error rectification costs, faster invoice collection cycles, and eliminated software license redundancies. Most clients achieve 100% payback within 60 to 90 days." }
    ],
    detailedContent: [
      {
        sectionTitle: "Scaling Operations Without Linear Headcount Costs",
        paragraphs: [
          "The biggest bottleneck to business scaling is operational complexity. As order volume or client count increases, administrative workload explodes proportionally. Without process automation, companies are forced to continually hire administrative staff just to manage internal paperwork.",
          "Business Process Automation breaks this linear dependency. By creating self-executing operational pipelines, your business can handle 5x the volume while keeping administrative overhead fixed, driving profit margins straight to your bottom line."
        ],
        keyTakeaways: [
          "Re-engineers broken departmental workflows before applying automation.",
          "Accelerates employee onboarding, contract sign-offs, and procurement approvals.",
          "Maintains enterprise audit trails and timestamped logs for complete compliance.",
          "Delivers 100% ROI within 60–90 days by eliminating operational waste."
        ]
      }
    ]
  },
  {
    id: "crm-integration",
    slug: "crm-integration",
    title: "CRM Integration & Migration",
    badge: "Data Infrastructure",
    shortDescription: "Unify your fragmented customer data with bi-directional CRM synchronizations and zero-downtime data migrations.",
    heroHeadline: "Flawless CRM Migrations & Real-Time Data Synchronization",
    heroSubheadline: "Connect your CRM with your entire software stack. We execute zero-loss data migrations between Salesforce, HubSpot, GoHighLevel, and Zoho, establishing real-time bi-directional data flow.",
    iconName: "RefreshCcw",
    overview: "Your CRM is the central nervous system of your business. However, when sales data is trapped in isolated silos, or when historical records are mangled during a poorly executed CRM migration, your revenue operations collapse. Sheun Automation specializes in complex CRM data architecture. Whether migrating millions of historical customer records from legacy systems into modern platforms, or engineering custom bi-directional webhooks between your CRM, ERP, and payment gateways, we ensure 100% data integrity and zero operational downtime.",
    benefits: [
      { title: "Zero Data Loss Guarantee", description: "100% field mapping precision ensuring historical notes, attachments, and deal stages migrate safely.", metric: "100% Data Preserved" },
      { title: "Single Source of Truth", description: "Eliminate duplicate contact records and conflicting customer details across marketing and support.", metric: "Clean Database" },
      { title: "Real-Time Bi-Directional Sync", description: "Changes made in your accounting or ERP platform reflect immediately in your CRM deal records.", metric: "< 1s Sync" },
      { title: "Zero Downtime Execution", description: "Your sales team continues operating while we perform staging migrations in parallel.", metric: "0 Business Interruption" }
    ],
    features: [
      { title: "Custom Entity & Field Schema Mapping", description: "Precision mapping of complex custom objects, relationships, company hierarchies, and activity histories.", icon: "DatabaseZip" },
      { title: "De-duplication & Data Cleansing Engines", description: "Automated scripts that merge duplicate contacts, standardize phone formats, and validate email addresses.", icon: "Sparkles" },
      { title: "Bi-Directional Webhook Synchronization", description: "Instant two-way data sync between CRM platforms and external custom web databases.", icon: "ArrowLeftRight" },
      { title: "Historical Pipeline & Deal Migration", description: "Preserve historical deal metrics, close dates, owner attributions, and activity logs.", icon: "History" },
      { title: "Automated ERP & Invoicing Hooks", description: "Automatically generate invoices in QuickBooks or Xero when deals hit 'Closed Won' status.", icon: "Receipt" },
      { title: "Custom Admin Reporting Dashboards", description: "Unified executive analytics dashboards highlighting pipeline velocity and lead source attribution.", icon: "PieChart" }
    ],
    idealClients: [
      { category: "Growing Companies Upgrading Systems", description: "Businesses moving from basic spreadsheets or Pipedrive into HubSpot, Salesforce, or GoHighLevel." },
      { category: "Merged & Acquired Entities (M&A)", description: "Organizations needing to consolidate disparate CRM databases post-acquisition." },
      { category: "B2B Sales Teams with Complex Stacks", description: "Teams requiring tight data synchronization between CRM, LinkedIn outreach, and ERPs." },
      { category: "E-commerce & Subscription Brands", description: "Brands syncing Shopify/Stripe buyer history into customer loyalty CRM segments." }
    ],
    process: [
      { step: 1, title: "Schema Analysis & Audit", description: "We audit your source database, evaluate custom fields, identify duplicates, and define target field schemas." },
      { step: 2, title: "Data Cleansing & Transformation", description: "We run automated scripts to standardize phone numbers, remove invalid emails, and merge duplicate profiles." },
      { step: 3, title: "Sandbox Test Migration", description: "We execute a complete trial migration in a staging environment, verifying every field against strict checksums." },
      { step: 4, title: "Delta Sync & Production Cutover", description: "We perform the final production cutover and delta sync during off-peak hours with zero downtime." }
    ],
    techStack: ["HubSpot API", "Salesforce REST API", "GoHighLevel API", "Zoho CRM", "PostgreSQL", "Python", "Make.com", "n8n"],
    faqs: [
      { question: "Will our sales reps lose access to the CRM during the migration?", answer: "No. We perform staging migrations in an isolated sandbox environment. When it is time for final cutover, we execute a fast 'delta sync' of newly added records during off-peak hours, ensuring zero interruption to your sales operations." },
      { question: "How do you handle custom fields and complex object relationships?", answer: "We write custom transformation scripts in Python and SQL to map every custom property, account relationship, contact association, file attachment, and email thread history accurately into the target CRM schema." },
      { question: "Can you keep two CRMs synchronized simultaneously?", answer: "Yes. If your enterprise uses Salesforce for enterprise accounts and GoHighLevel for marketing automation, we build bi-directional integration pipelines that keep contacts, lead scores, and deal statuses synced in real time." },
      { question: "Do you clean up duplicate contacts before migrating?", answer: "Yes! We run automated de-duplication rules based on email addresses, domain names, and phone numbers, consolidating fragmented activity histories into a clean single contact record." }
    ],
    detailedContent: [
      {
        sectionTitle: "Eliminating Data Silos for Unified Revenue Operations",
        paragraphs: [
          "Data fragmentation is the silent killer of revenue growth. When sales reps view one set of customer details in the CRM while customer support sees another in helpdesk software, buyers experience disjointed service and reps miss cross-sell opportunities.",
          "Our CRM integration and migration services build a unified data foundation. We transform messy, legacy customer databases into structured, real-time revenue engines that empower your sales, marketing, and success teams."
        ],
        keyTakeaways: [
          "100% data preservation guarantee covering deals, notes, emails, and custom objects.",
          "Automated de-duplication and data standardization prior to system import.",
          "Real-time bi-directional webhook synchronization between CRM, ERP, and payment portals.",
          "Zero operational downtime with off-peak production cutovers."
        ]
      }
    ]
  },
  {
    id: "email-marketing-automation",
    slug: "email-marketing-automation",
    title: "Email & Marketing Automation",
    badge: "Revenue Growth",
    shortDescription: "Drive predictable recurring revenue with hyper-personalized behavior-triggered email and SMS marketing workflows.",
    heroHeadline: "Hyper-Personalized Email & Marketing Automation That Drives Conversions",
    heroSubheadline: "Stop sending generic batch-and-blast email blasts. We build advanced behavioral marketing funnels that track user actions, segment buyer profiles dynamically, and send targeted SMS and email messages.",
    iconName: "Mail",
    overview: "Generic mass email blasts no longer work. Modern consumers tune out unpersonalized noise. Higher email ROI requires behavioral marketing automation: delivering the exact right message, via the right channel, at the exact moment a prospect demonstrates buying intent. Sheun Automation designs behavioral marketing funnels in Klaviyo, ActiveCampaign, HubSpot, and GoHighLevel. We build dynamic lead scoring engines, cart abandonment recovery, customer win-back flows, VIP loyalty tracks, and AI-assisted copywriting engines.",
    benefits: [
      { title: "35%+ Higher Open Rates", description: "Behavioral segmentation and custom inbox deliverability warming maximize inbox placement.", metric: "35%+ Opens" },
      { title: "4x Revenue per Subscriber", description: "Automated trigger sequences generate 4x higher revenue per contact compared to manual broadcasts.", metric: "4x ROI" },
      { title: "Automated Cart & Form Recovery", description: "Recover up to 25% of abandoned checkout carts and lead forms with multi-touch SMS and email.", metric: "25% Recovered" },
      { title: "Dynamic Customer Lifecycle Scoring", description: "Automatically identify top-tier VIP customers and churn-risk accounts based on engagement data.", metric: "Real-Time Scoring" }
    ],
    features: [
      { title: "Behavioral Trigger Flow Engineering", description: "Automated messaging sequences based on website browsing, link clicks, purchase history, and content downloads.", icon: "Zap" },
      { title: "Dynamic Lead Scoring & Tagging", description: "Assign real-time intent scores to contacts, alerting sales reps when a prospect reaches buying temperature.", icon: "Award" },
      { title: "Omnichannel SMS & Email Sequences", description: "Synchronized SMS and email drips that adapt messaging based on channel engagement.", icon: "Send" },
      { title: "Advanced Customer List Segmentation", description: "RFM (Recency, Frequency, Monetary) matrix segmentation that updates contact lists automatically.", icon: "Users" },
      { title: "A/B Split Testing & Optimization", description: "Continuous automated testing of subject lines, sending times, copy formats, and CTAs.", icon: "Sliders" },
      { title: "Domain Deliverability & SPF/DKIM Warming", description: "Complete technical setup of SPF, DKIM, DMARC, custom tracking domains, and IP warming protocol.", icon: "ShieldAlert" }
    ],
    idealClients: [
      { category: "E-Commerce & DTC Brands", description: "Stores wanting high-converting abandoned cart, welcome series, post-purchase, and win-back flows." },
      { category: "B2B SaaS & Tech Providers", description: "Companies needing automated trial-to-paid onboarding flows and product usage milestone triggers." },
      { category: "High-Ticket Service Agencies", description: "Agencies looking to nurture long-cycle prospects with educational case study drip sequences." },
      { category: "Course Creators & Membership Communities", description: "Businesses automating member retention, milestone badges, and renewal notifications." }
    ],
    process: [
      { step: 1, title: "Audience & Funnel Analysis", description: "We audit your customer lifecycle, traffic channels, existing list health, and messaging gaps." },
      { step: 2, title: "Technical Deliverability Audit", description: "We configure DNS records (SPF, DKIM, DMARC, BIMI) and verify domain reputation health." },
      { step: 3, title: "Workflow Copywriting & Build", description: "We author high-converting email copy, design responsive templates, and build complex logic trees." },
      { step: 4, title: "Testing, Launch & Optimization", description: "We run end-to-end trigger validation, deploy live campaigns, and continuously optimize click-through metrics." }
    ],
    techStack: ["Klaviyo", "ActiveCampaign", "HubSpot", "GoHighLevel", "Brevo", "Mailchimp", "OpenAI API", "Postmark"],
    faqs: [
      { question: "Why are our emails going to the Promotions tab or Spam folder?", answer: "Spam filtering occurs due to improper DNS setup (missing SPF, DKIM, DMARC records), poor domain reputation, spam trigger words, or sending to inactive email addresses. We perform complete technical deliverability repairs and IP warming protocols to restore primary inbox placement." },
      { question: "Which email platform do you recommend for our business?", answer: "For E-commerce, we recommend Klaviyo for deep Shopify/WooCommerce integration. For B2B services and agencies, we recommend GoHighLevel or ActiveCampaign for multi-channel CRM capabilities." },
      { question: "How many automated email flows do we need?", answer: "We recommend starting with 5 core automated flows: 1. Welcome Nurture Series, 2. Abandoned Cart/Form Recovery, 3. Post-Purchase Thank You & Upsell, 4. Re-engagement Win-Back, and 5. Lead Scoring Alert Sequence." },
      { question: "Can you write the email copy and design the templates for us?", answer: "Yes! Our team includes conversion copywriters and UI designers who handle everything—from writing high-converting headlines to designing mobile-optimized templates." }
    ],
    detailedContent: [
      {
        sectionTitle: "Building an Automated Revenue Engine with Lifecycle Email Marketing",
        paragraphs: [
          "Email marketing remains the highest-ROI digital channel, generating an average of $36 for every $1 spent. However, relying solely on manual weekly campaign broadcasts leaves 80% of potential revenue untapped.",
          "Automated behavioral flows deliver timely, personalized messages triggered by exact buyer actions. By engaging prospective buyers when interest is peak, automated lifecycle marketing transforms your email list into a predictable, passive revenue stream."
        ],
        keyTakeaways: [
          "Delivers personalized, behavior-triggered messages based on exact user actions.",
          "Fixes domain deliverability with technical SPF, DKIM, DMARC, and custom tracking setup.",
          "Recovers 25%+ of abandoned shopping carts and lead booking forms.",
          "Includes conversion copywriting, template design, and continuous A/B split testing."
        ]
      }
    ]
  },
  {
    id: "custom-api-n8n-zapier",
    slug: "custom-api-n8n-zapier",
    title: "Custom API Integrations, Zapier, Make.com & n8n",
    badge: "Custom Engineering",
    shortDescription: "Bridge the gap between incompatible software with custom API webhooks, serverless microservices, and self-hosted n8n instances.",
    heroHeadline: "Custom API & Middleware Engineering for Incompatible Software Stacks",
    heroSubheadline: "When native Zapier connectors fall short, we build custom API integrations, serverless webhooks, and enterprise n8n workflow engines that connect any software system securely.",
    iconName: "Code",
    overview: "Most businesses rely on niche industry software, proprietary legacy databases, or custom internal tools that lack pre-built Zapier integrations. Off-the-shelf automation tools often fail due to strict payload limits, rate limits, or missing API endpoints. Sheun Automation specializes in custom API engineering and advanced middleware automation. We build custom webhooks, REST/GraphQL API connectors, serverless Node.js/Python functions, and self-hosted n8n enterprise workflows that connect any software stack flawlessly.",
    benefits: [
      { title: "Connect Any Legacy or Custom Software", description: "If a system has an API, database, or SSH access, we can integrate and automate it.", metric: "100% Connectability" },
      { title: "Save 90% on Monthly Integration Costs", description: "Self-hosted n8n instances eliminate per-task pricing models of Zapier and Make.com.", metric: "Unlimited Executions" },
      { title: "High-Volume Payload Handling", description: "Process millions of monthly webhooks and API payloads without rate-limiting timeouts.", metric: "Enterprise Scale" },
      { title: "Custom Data Transformation & Encryption", description: "Transform complex JSON/XML schemas and apply AES-256 encryption in flight.", metric: "Secure Payload" }
    ],
    features: [
      { title: "Custom REST & GraphQL Webhook Engineering", description: "Bespoke API wrappers, webhooks, and custom endpoints with OAuth2 authentication handling.", icon: "Terminal" },
      { title: "Self-Hosted n8n Enterprise Deployment", description: "Deploy dedicated, private n8n workflow servers on AWS, DigitalOcean, or Docker for unlimited tasks.", icon: "Server" },
      { title: "Complex JSON/XML Schema Transformation", description: "Re-structure nested JSON data payloads between incompatible software tools in real time.", icon: "FileCode" },
      { title: "Automated Rate-Limiting & Queue Management", description: "Redis-backed queueing systems that handle high-volume webhook bursts without dropping packets.", icon: "Layers" },
      { title: "Custom Zapier & Make App Building", description: "Build private, custom Zapier integrations for your proprietary SaaS app or internal database.", icon: "Cpu" },
      { title: "Comprehensive API Error Monitoring", description: "Real-time Slack/PagerDuty developer alerts and automated state recovery for failed HTTP calls.", icon: "AlertTriangle" }
    ],
    idealClients: [
      { category: "SaaS Platforms & App Developers", description: "Tech companies needing custom Zapier/Make apps built for their user base." },
      { category: "High-Volume E-Commerce Enterprises", description: "Stores processing tens of thousands of daily orders across custom warehouse ERPs." },
      { category: "Financial & Security-Conscious Organizations", description: "Companies requiring self-hosted, SOC2-compliant automation behind private firewalls." },
      { category: "Businesses Stuck on Zapier Tier Limits", description: "Companies paying thousands per month in Zapier task overage fees." }
    ],
    process: [
      { step: 1, title: "API Documentation & Endpoints Audit", description: "We review API documentation, authentication requirements (OAuth2, API keys), and rate limits." },
      { step: 2, title: "Architecture & Middleware Selection", description: "We select the optimal engine (Self-hosted n8n, Make, or AWS Lambda serverless functions)." },
      { step: 3, title: "Code & Workflow Development", description: "We write clean, documented integration code with robust error handling and payload validation." },
      { step: 4, title: "Load Testing, Deployment & Handoff", description: "We stress-test the integration under high payload volumes, deploy to production, and provide full documentation." }
    ],
    techStack: ["n8n (Self-Hosted)", "Make.com", "Zapier Developer Platform", "Node.js", "Python", "AWS Lambda", "Docker", "Redis", "PostgreSQL"],
    faqs: [
      { question: "Why should we consider self-hosted n8n over Zapier or Make.com?", answer: "Zapier and Make charge based on task execution volume. If your business processes 500,000 tasks per month, Zapier can cost upwards of $2,000/month. A self-hosted n8n server on AWS costs ~$20–$50/month total for UNLIMITED task executions, while keeping all data stored privately on your own cloud server." },
      { question: "Can you connect an old legacy software system that has no API?", answer: "Yes. If the legacy system has an accessible SQL database (MySQL, PostgreSQL, MSSQL), FTP/SFTP server, or headless web portal, we can write custom database listeners or automated scraping scripts to extract and push data seamlessly." },
      { question: "How do you handle API rate limits during high traffic spikes?", answer: "We build Redis-backed queuing mechanisms with exponential backoff retries. When traffic surges, requests are held safely in a memory queue and processed at the maximum speed allowed by the destination API without losing data." },
      { question: "Do you build private Zapier apps for SaaS founders?", answer: "Yes! We design, code, test, and publish custom Zapier integration apps for SaaS platforms, enabling your customers to connect your app to over 5,000+ software tools." }
    ],
    detailedContent: [
      {
        sectionTitle: "Overcoming Integration Limits with Custom Middleware Engineering",
        paragraphs: [
          "Pre-built automation tools like standard Zapier are great for basic tasks, but they quickly hit limits when dealing with complex data payloads, custom software, or high task volumes. Businesses often find themselves paying exorbitant monthly overage fees or manually bridging gaps when integrations fail.",
          "Our custom API integration services provide enterprise flexibility. By leveraging custom Node.js microservices and self-hosted n8n engines, we engineer unbreakable data bridges tailored to your exact tech stack."
        ],
        keyTakeaways: [
          "Integrates any legacy, custom, or niche software tool with API, SQL, or Webhook access.",
          "Saves thousands per month by replacing expensive Zapier task tiers with self-hosted n8n.",
          "Handles enterprise payload surges with Redis queuing and automated retry loops.",
          "Includes full developer documentation, source code ownership, and monitoring alerts."
        ]
      }
    ]
  }
];

export const AUTOMATION_INDUSTRIES: AutomationIndustry[] = [
  {
    id: "healthcare",
    title: "Healthcare & Clinical Operations",
    icon: "Activity",
    tagline: "Automated Patient Intake, Appointment Verification & Follow-Ups",
    description: "Medical practices, dental offices, and wellness clinics struggle with missed appointments, manual intake paperwork, and delayed insurance verification. Our healthcare automation solutions streamline patient management while maintaining strict privacy standards.",
    commonBottlenecks: [
      "High patient no-show rates due to missed confirmation calls",
      "Manual data re-entry from paper intake forms into EHR systems",
      "Overwhelmed front-desk staff during morning peak phone call hours",
      "Delayed insurance eligibility verification causing billing backlogs"
    ],
    automatedWorkflows: [
      { name: "24/7 AI Voice Patient Scheduling", impact: "-45% No-Shows", detail: "Inbound AI voice agents answer calls 24/7 to schedule appointments and verify details directly in your calendar." },
      { name: "Digital Intake & EHR Auto-Sync", impact: "Zero Paperwork", detail: "Mobile-friendly SMS intake forms automatically parse patient details directly into EHR fields." },
      { name: "Automated Multi-Touch Reminders", impact: "+35% Retention", detail: "Automated SMS and WhatsApp confirmation sequences with 1-click cancellation or rescheduling links." }
    ],
    caseStudyHighlight: {
      headline: "Apex Dental Network Reduced Patient No-Shows by 42% in 30 Days",
      result: "Saved 22 hours per week in front-desk staff phone time while boosting monthly appointment bookings by $18,000."
    }
  },
  {
    id: "real-estate",
    title: "Real Estate & Property Management",
    icon: "Building2",
    tagline: "Instant Lead Speed-to-Contact, Tour Scheduling & Lease Workflows",
    description: "In real estate, lead response speed dictates who gets the listing. Our real estate automations connect Zillow, Realtor.com, and Facebook ads directly to AI calling bots, scheduling calendars, and lease agreements.",
    commonBottlenecks: [
      "Leads go cold when agents are out performing property showings",
      "Manual tenant application review and credit check tracking",
      "Fragmented communication across WhatsApp, SMS, and email",
      "Slow property tour booking friction for prospective renters"
    ],
    automatedWorkflows: [
      { name: "Sub-30s Speed-to-Lead Callback", impact: "4x Conversion", detail: "Instant AI voice or SMS outreach within 30 seconds of an online listing inquiry." },
      { name: "Self-Guided Tour Booking System", impact: "24/7 Bookings", detail: "Automated lockbox code release upon identity verification and calendar booking." },
      { name: "Automated Tenant Application Pipeline", impact: "5x Speed", detail: "Parse application docs, run background webhooks, and alert property managers upon completion." }
    ],
    caseStudyHighlight: {
      headline: "Vanguard Property Group Automated 85% of Rental Tour Bookings",
      result: "Increased monthly signed leases by 28% without hiring additional property coordinators."
    }
  },
  {
    id: "professional-services",
    title: "Professional Services & Consulting",
    icon: "Briefcase",
    tagline: "Client Onboarding, Proposal Generation & Project Kickoffs",
    description: "Law firms, accounting practices, and consulting agencies lose valuable billable hours to administrative client onboarding, contract drafting, and manual follow-ups.",
    commonBottlenecks: [
      "Delayed contract signatures holding up project start dates",
      "Manual document gathering and back-and-forth client emails",
      "Inconsistent project setup across team management tools",
      "Time spent drafting custom proposals from scratch"
    ],
    automatedWorkflows: [
      { name: "Instant Proposal & Contract Engine", impact: "10-Min Kickoff", detail: "Populate legal contracts dynamically from CRM form inputs and route for signature." },
      { name: "Automated Client Onboarding Portal", impact: "Zero Friction", detail: "Auto-provision Google Drive folders, Slack channels, ClickUp tasks, and welcome gifts." },
      { name: "Automated Document Collection Bot", impact: "-80% Chasing", detail: "SMS/Email reminder drips that gently nudge clients to upload missing tax or legal files." }
    ],
    caseStudyHighlight: {
      headline: "Sterling Legal Partners Cut Client Onboarding Time from 5 Days to 2 Hours",
      result: "Eliminated $45,000 in annual paralegal administrative costs while improving client satisfaction scores."
    }
  },
  {
    id: "marketing-agencies",
    title: "Marketing Agencies & Media Buyers",
    icon: "Target",
    tagline: "Automated Client Reporting, Lead Distribution & GHL Snapshots",
    description: "Agencies burn profits on manual weekly client reporting, client lead management, and custom sub-account provisioning.",
    commonBottlenecks: [
      "Hours wasted aggregating weekly metrics into PDF client slide decks",
      "Slow client lead delivery causing client churn",
      "Manual setup of GoHighLevel snapshots for new agency clients",
      "Untracked client ad spend overages and billing errors"
    ],
    automatedWorkflows: [
      { name: "Automated Live Executive Dashboards", impact: "Zero Deck Prep", detail: "Auto-aggregate Meta, Google Ads, and CRM data into real-time live client portals." },
      { name: "Instant Sub-Account Provisioning", impact: "1-Click Launch", detail: "Deploy pre-built GHL snapshots, Twilio numbers, and domain DNS setup via webhooks." },
      { name: "Real-Time Lead Distribution Bot", impact: "< 5s Delivery", detail: "Route client leads instantly via SMS, email, and WhatsApp with instant delivery confirmation." }
    ],
    caseStudyHighlight: {
      headline: "ScaleUp Media Saved 120 Hours/Month Across 40 Client Accounts",
      result: "Consolidated reporting and onboarding, increasing agency gross profit margin by 18%."
    }
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Digital Commerce",
    icon: "ShoppingCart",
    tagline: "Supplier Inventory Sync, Customer Care AI & Order Workflows",
    description: "Scaling an e-commerce store requires seamless communication between storefronts, warehouses, customer service, and ad channels.",
    commonBottlenecks: [
      "Customer support inbox flooded with 'Where Is My Order?' (WISMO) tickets",
      "Manual inventory tracking across suppliers causing out-of-stock orders",
      "Lost sales from unengaged abandoned checkout carts",
      "Delayed customer review generation post-delivery"
    ],
    automatedWorkflows: [
      { name: "AI Customer Care & WISMO Bot", impact: "-70% Tickets", detail: "Instant order tracking lookup and return processing via website and WhatsApp chat." },
      { name: "Multi-Supplier Inventory Auto-Sync", impact: "Zero Overselling", detail: "Sync stock levels hourly across Shopify, Amazon, and custom warehouse ERPs." },
      { name: "Omnichannel Cart Recovery Drips", impact: "+22% Recovery", detail: "Personalized SMS and email sequences with dynamic product imagery and discount triggers." }
    ],
    caseStudyHighlight: {
      headline: "Luxe Apparel Recovered $34,000/Month in Abandoned Carts with Automated SMS",
      result: "Reduced support ticket response times from 6 hours to under 30 seconds."
    }
  },
  {
    id: "education",
    title: "Education, E-Learning & Coaching",
    icon: "GraduationCap",
    tagline: "Student Onboarding, Course Progress Tracking & VIP Retention",
    description: "Coaches, course creators, and private schools need automated student enrollment, assignment grading reminders, and community engagement loops.",
    commonBottlenecks: [
      "High student drop-off rates due to lack of engagement tracking",
      "Manual enrollment access management across course platforms",
      "Overwhelmed support staff answering repetitive course questions",
      "Manual payment processing for installment plans"
    ],
    automatedWorkflows: [
      { name: "Automated Student Access & Community Onboarding", impact: "Instant Access", detail: "Instantly provision Skool/Kajabi access, Slack invites, and orientation calendars." },
      { name: "AI Student Q&A Assistant", impact: "24/7 Tutoring", detail: "Custom AI assistant trained on course curriculum answering technical student questions." },
      { name: "Automated Retention & Re-engagement Drips", impact: "+40% Completion", detail: "Trigger gentle check-in SMS messages when a student stalls on a course module." }
    ],
    caseStudyHighlight: {
      headline: "Mindset Academy Increased Course Completion Rates from 24% to 68%",
      result: "Automated student accountability check-ins drove a 35% increase in back-end upsell conversions."
    }
  },
  {
    id: "finance",
    title: "Finance, Wealth & Insurance",
    icon: "DollarSign",
    tagline: "Document Collection, KYC Verification & Automated Client Updates",
    description: "Financial planners, mortgage brokers, and insurance agents operate under strict regulatory standards that require meticulous documentation.",
    commonBottlenecks: [
      "Endless email threads chasing missing financial statements and tax documents",
      "Manual data entry across loan origination systems and CRMs",
      "Delayed client status updates creating phone call overload",
      "Inconsistent compliance audit trail tracking"
    ],
    automatedWorkflows: [
      { name: "Secure Digital Document Collection Vault", impact: "3x Faster Approval", detail: "Automated portal for clients to upload tax forms with automated document verification." },
      { name: "Real-Time Loan/Application Status Alerts", impact: "Zero Phone Nagging", detail: "SMS and email updates triggered automatically as underwriting stages progress." },
      { name: "Automated Compliance Audit Logging", impact: "100% Audit Ready", detail: "Every client interaction timestamped and logged securely in compliance archives." }
    ],
    caseStudyHighlight: {
      headline: "Beacon Mortgage Group Reduced Loan Processing Cycle from 21 to 9 Days",
      result: "Automated document gathering freed brokers to close 2.5x more monthly loan volume."
    }
  },
  {
    id: "construction",
    title: "Construction, HVAC & Field Services",
    icon: "HardHat",
    tagline: "Dispatch Automation, On-Site Photo Uploads & Instant Invoicing",
    description: "Contractors, roofers, and field service crews require clear coordination between job site workers, office dispatchers, and paying homeowners.",
    commonBottlenecks: [
      "Delayed invoicing caused by lost paper job sheets from field crews",
      "Missed inbound estimate calls during active job site work",
      "Uncoordinated technician dispatch scheduling",
      "Lack of automated post-job customer review requests"
    ],
    automatedWorkflows: [
      { name: "AI Call Dispatcher & Missed-Call Text-Back", impact: "Zero Missed Leads", detail: "Instantly text and book estimate calls when crew leaders are operating equipment." },
      { name: "On-Site Photo & Job Completion Sync", impact: "Instant Invoicing", detail: "Field crew uploads job completion photos via SMS, automatically triggering the final invoice." },
      { name: "Automated Local Review Request Engine", impact: "+300% Reviews", detail: "Trigger Google review requests via SMS immediately after job sign-off." }
    ],
    caseStudyHighlight: {
      headline: "ProCraft Roofing Increased Monthly Revenue by $62,000 with Speed-to-Lead",
      result: "Captured 38 new roofing jobs per month by responding to inbound calls in under 30 seconds."
    }
  },
  {
    id: "hospitality",
    title: "Hospitality, Restaurants & Travel",
    icon: "Utensils",
    tagline: "Reservation Management, AI Concierge & Event Inquiries",
    description: "Hotels, venues, and fine dining establishments need fast inquiry responses for private events, reservations, and guest requests.",
    commonBottlenecks: [
      "Slow response times on lucrative corporate event inquiries",
      "Overwhelmed front-desk staff during check-in/check-out rushes",
      "High reservation no-show rates",
      "Manual guest review collection processes"
    ],
    automatedWorkflows: [
      { name: "AI Concierge & Guest WhatsApp Assistant", impact: "Instant Care", detail: "Answer room service, amenity hours, and local recommendations automatically." },
      { name: "Private Event Inquiry Instant Responder", impact: "3x Event Deals", detail: "Qualify event budgets and send customized venue pricing packages in under 2 minutes." },
      { name: "Automated Table Reservation Reminders", impact: "-50% No-Shows", detail: "SMS confirmation loops that allow guests to modify or release table bookings easily." }
    ],
    caseStudyHighlight: {
      headline: "The Grand Pavilion Venue Increased Private Event Bookings by 45%",
      result: "Instant AI proposal generation captured high-ticket weddings and corporate dinners before competitors."
    }
  }
];

export const AUTOMATION_CASE_STUDIES: AutomationCaseStudy[] = [
  {
    id: "apex-dental",
    clientName: "Apex Dental Network",
    industry: "Healthcare & Clinics",
    title: "Automating Patient Intake & 24/7 Scheduling Across 6 Clinical Locations",
    challenge: "Apex Dental was losing over $25,000 monthly in missed appointments and unhandled after-hours phone calls. Front-desk staff were overwhelmed with manual phone calls, leading to long hold times and high patient no-show rates.",
    solution: "Sheun Automation engineered an AI Voice Agent integrated directly with Dentrix EHR and GoHighLevel. The voice agent handles inbound phone calls 24/7, schedules appointments based on live chair availability, and triggers automated SMS intake forms.",
    results: [
      { metric: "-42%", label: "Reduction in Patient No-Shows" },
      { metric: "22 hrs/wk", label: "Front-Desk Phone Time Saved" },
      { metric: "+$18,000", label: "Monthly Revenue Increase" },
      { metric: "< 600ms", label: "AI Voice Latency" }
    ],
    workflowDiagram: ["Inbound Phone Call", "AI Voice Agent Verification", "Dentrix EHR Calendar Lookup", "SMS Confirmation & Intake Link", "Automated Google Review Post-Visit"],
    testimonial: {
      quote: "The AI Voice Agent changed our dental practice completely. Patients love that they can call at 9 PM on a Sunday and book an appointment in under two minutes without waiting on hold.",
      author: "Dr. Marcus Vance",
      role: "Managing Clinical Partner",
      company: "Apex Dental Network"
    }
  },
  {
    id: "sterling-legal",
    clientName: "Sterling Legal Partners",
    industry: "Professional Services",
    title: "Transforming Client Onboarding with Automated Contract Generation & Document Vaults",
    challenge: "Sterling Legal's paralegals spent an average of 5 business days gathering documents, drafting engagement agreements, and manually creating client folders, creating a massive bottleneck in intake velocity.",
    solution: "We built an enterprise AI Workflow pipeline in n8n connecting Typeform, DocuSign, Clio CRM, and Google Drive. Client information automatically generates custom retainer contracts, provisions secure folders, and sends automated SMS upload prompts.",
    results: [
      { metric: "5 Days -> 2 Hrs", label: "Client Onboarding Time" },
      { metric: "$45,000", label: "Annual Admin Payroll Saved" },
      { metric: "100%", label: "Document Compliance Accuracy" },
      { metric: "3.5x", label: "Faster Retainer Signatures" }
    ],
    workflowDiagram: ["Client Intake Form", "AI Contract Auto-Generation", "DocuSign Execution Trigger", "Clio CRM & Drive Vault Provisioning", "Automated Slack Notification"],
    testimonial: {
      quote: "Our intake process used to be our biggest vulnerability. Sheun Automation built a bulletproof pipeline that cut our onboarding timeline down to hours while impressing our high-net-worth clients.",
      author: "Eleanor Vance, Esq.",
      role: "Senior Managing Partner",
      company: "Sterling Legal Partners"
    }
  },
  {
    id: "scaleup-agency",
    clientName: "ScaleUp Media Agency",
    industry: "Marketing Agencies",
    title: "Automating Client Lead Distribution & White-Label Live Dashboards for 40+ Clients",
    challenge: "ScaleUp Media was spending 120+ hours per month manually compiling weekly PDF client ad reports and building GoHighLevel client sub-accounts by hand, limiting their ability to scale past 30 clients.",
    solution: "Sheun Automation constructed an automated agency snapshot deployment system via custom Make.com webhooks and built live executive reporting portals that pull real-time data from Meta, Google Ads, and CRMs.",
    results: [
      { metric: "120 hrs/mo", label: "Agency Staff Time Saved" },
      { metric: "+18%", label: "Gross Profit Margin Increase" },
      { metric: "< 5s", label: "Lead Delivery to Client Phones" },
      { metric: "40 -> 85", label: "Client Capacity Scaled" }
    ],
    workflowDiagram: ["Lead Ad Capture", "Make.com Data Scrub & Scoring", "Client GHL CRM Auto-Push", "Client SMS Alert Trigger", "Live Dashboard Data Sync"],
    testimonial: {
      quote: "Sheun Automation is our secret weapon. They transformed our agency operations so we can onboard 10 new clients a week with zero additional operational stress.",
      author: "David Ross",
      role: "Founder & CEO",
      company: "ScaleUp Media Agency"
    }
  },
  {
    id: "luxe-apparel",
    clientName: "Luxe Apparel & Co.",
    industry: "E-Commerce",
    title: "Recovering $34,000 Monthly in Abandoned Carts with AI WhatsApp & SMS Automation",
    challenge: "Luxe Apparel experienced a 72% shopping cart abandonment rate on mobile traffic and was drowning in repetitive customer support tickets regarding order shipping status.",
    solution: "We deployed an omnichannel Klaviyo & WhatsApp automation system with an AI Customer Care Bot that checks order status in Shopify and sends personalized cart recovery sequences.",
    results: [
      { metric: "$34,000/mo", label: "Recovered Abandoned Cart Revenue" },
      { metric: "-70%", label: "Reduction in WISMO Support Tickets" },
      { metric: "< 30s", label: "Average Support Response Time" },
      { metric: "28%", label: "WhatsApp Recovery Click-Through" }
    ],
    workflowDiagram: ["Cart Abandonment Trigger", "AI Behavior Analysis", "WhatsApp/SMS Personalized Recovery", "Shopify Discount Auto-Apply", "Post-Purchase AI Care Bot"],
    testimonial: {
      quote: "The ROI was instantaneous. The automated WhatsApp recovery sequence alone paid for the entire automation engineering investment within the first two weeks.",
      author: "Sophia Chen",
      role: "Head of Digital Growth",
      company: "Luxe Apparel & Co."
    }
  }
];

export const AUTOMATION_FAQS = [
  {
    category: "General & Capabilities",
    question: "What is Sheun Automation and how does it differ from a standard digital agency?",
    answer: "Sheun Automation is a dedicated AI and workflow engineering division specializing exclusively in operational automation, AI voice agents, GoHighLevel CRM architecture, and custom API integrations. Unlike generic digital agencies that focus on ad creative or vanity metrics, we engineer backend systems that save measurable staff hours, eliminate administrative waste, and increase revenue velocity."
  },
  {
    category: "General & Capabilities",
    question: "Which software applications and tools can you integrate?",
    answer: "If a software tool has an API, database access, webhook triggers, or even a web interface, we can integrate it! We work extensively with GoHighLevel, HubSpot, Salesforce, OpenAI, Gemini, ElevenLabs, Vapi, Klaviyo, Zapier, Make.com, n8n, Stripe, QuickBooks, Shopify, Google Workspace, Slack, Twilio, and custom SQL databases."
  },
  {
    category: "Security & Compliance",
    question: "How secure is our company data when implementing AI and automated workflows?",
    answer: "Data security is our top priority. We use SOC2-compliant API channels where enterprise data is strictly excluded from AI model training. Sensitive credentials (API keys, OAuth tokens) are stored in encrypted vaults using AES-256 encryption. We adhere strictly to data privacy guidelines."
  },
  {
    category: "Implementation & Timeline",
    question: "How long does a typical AI automation project take to deploy?",
    answer: "Most standard automation projects (such as GoHighLevel setup, AI Chatbot deployment, or API integrations) are fully architected, tested, and live within 7 to 14 business days. Enterprise-wide Business Process Automation or custom AI Voice Agent deployments typically take 2 to 3 weeks."
  },
  {
    category: "Implementation & Timeline",
    question: "Will our team need technical coding skills to maintain the automated systems?",
    answer: "No coding knowledge is required from your team. We build user-friendly interfaces (Slack bots, simple web forms, or visual CRM dashboards) so your staff interacts naturally with button clicks. We provide comprehensive video training sessions, visual SOP documentation, and ongoing technical support."
  },
  {
    category: "Support & ROI",
    question: "What happens if a third-party software update breaks an automated workflow?",
    answer: "All our custom automation architectures feature automated state monitoring, fallback retry loops, and dev alert notifications. If an external API experiences a outage or changes its format, our system holds the data in a queue and alerts our support team to patch the pipeline immediately."
  },
  {
    category: "Support & ROI",
    question: "How do you calculate the return on investment (ROI) for automation?",
    answer: "We quantify ROI through three key metrics: 1. Hours of manual payroll saved weekly, 2. Increased revenue from sub-60 second lead response rates ('Speed to Lead'), and 3. Eliminated software subscription redundancies. Over 95% of our clients experience 100% financial payback within 30 to 60 days."
  }
];
