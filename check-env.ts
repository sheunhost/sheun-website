import dotenv from "dotenv";
dotenv.config();

console.log("MAILCHIMP_API_KEY present:", !!process.env.MAILCHIMP_API_KEY);
console.log("MAILCHIMP_LIST_ID present:", !!process.env.MAILCHIMP_LIST_ID);
console.log("GEMINI_API_KEY present:", !!process.env.GEMINI_API_KEY);

