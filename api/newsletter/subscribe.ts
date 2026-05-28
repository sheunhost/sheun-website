import axios from "axios";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { email, firstName, lastName } = req.body;
  console.log(`[Mailchimp] Subscription request for: ${email}`);

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY?.trim();
  const LIST_ID = process.env.MAILCHIMP_LIST_ID?.trim();

  if (!API_KEY || !LIST_ID) {
    console.error("[Mailchimp] Missing configuration:", { hasKey: !!API_KEY, hasList: !!LIST_ID });
    return res.status(500).json({ error: "Mailchimp integration not fully configured in environment variables." });
  }

  const DATACENTER = API_KEY.split("-")[1];
  if (!DATACENTER) {
    console.error("[Mailchimp] Invalid API key format (missing datacenter suffix like -us8)");
    return res.status(500).json({ error: "Invalid Mailchimp API key format." });
  }

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  try {
    const response = await axios.post(
      url,
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName || "",
          LNAME: lastName || "",
        },
      },
      {
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(`[Mailchimp] Successfully subscribed ${email}`);
    res.status(200).json({ success: true, message: "Subscription successful" });
  } catch (error: any) {
    const errorData = error.response?.data;
    console.error("[Mailchimp] API Error:", JSON.stringify(errorData) || error.message);
    
    if (errorData?.title === "Member Exists") {
       console.log(`[Mailchimp] ${email} is already subscribed.`);
       return res.status(200).json({ success: true, message: "Already subscribed" });
    }

    res.status(error.response?.status || 500).json({
      error: "Failed to subscribe to Mailchimp",
      details: errorData?.detail || errorData?.title || error.message,
    });
  }
}
