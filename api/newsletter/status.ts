export default function handler(req: any, res: any) {
  res.json({
    configured: !!process.env.MAILCHIMP_API_KEY && !!process.env.MAILCHIMP_LIST_ID,
    apiKeyPresent: !!process.env.MAILCHIMP_API_KEY,
    listIdPresent: !!process.env.MAILCHIMP_LIST_ID,
    apiKeyLast4: process.env.MAILCHIMP_API_KEY ? `...${process.env.MAILCHIMP_API_KEY.slice(-4)}` : null,
    listId: process.env.MAILCHIMP_LIST_ID || null,
    nodeEnv: process.env.NODE_ENV || "development"
  });
}
