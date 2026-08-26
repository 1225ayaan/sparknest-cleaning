const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const sparkNestKnowledge = `
BUSINESS NAME:
SparkNest Cleaning

ABOUT:
SparkNest Cleaning provides dependable, high-quality cleaning services
for homes and businesses.

SERVICES:

1. Home Cleaning
Complete cleaning for bedrooms, living rooms, kitchens, and other
areas of a home.

2. Deep Cleaning
Detailed cleaning that reaches hard-to-clean areas and leaves the
space refreshed.

3. Move-In / Move-Out Cleaning
Cleaning a property before moving in or after moving out.

4. Office Cleaning
Professional cleaning services for workplaces.

5. Window Cleaning
Professional glass and window cleaning services.

6. Regular Cleaning
Recurring cleaning plans designed around the customer's schedule.

FEATURES:
- Trusted professionals
- Eco-friendly products
- Flexible scheduling
- Satisfaction guaranteed
- One-time and regular cleaning options

CONTACT:
Phone: +91 (880) 615-5264
Email: hello@sparknestcleaning.com
WhatsApp: +91 (880) 615-5264

WORKING HOURS:
Monday - Saturday
8:00 AM - 7:00 PM

QUOTE:
Customers can request a free cleaning quote through the website
contact form or through WhatsApp.

IMPORTANT:
The website does not currently provide fixed service prices
or specific service-area information.
`;

app.get("/", (req, res) => {
  res.json({
    message: "SparkNest AI Backend is running!",
  });
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const prompt = `
You are SparkNest Cleaning's AI customer assistant.

Your job is to understand the customer's message and help them
with SparkNest Cleaning services.

OFFICIAL BUSINESS INFORMATION:
${sparkNestKnowledge}

IMPORTANT INSTRUCTIONS:

1. Be friendly, professional and natural.

2. Never invent prices, discounts, promotions, availability,
   service areas or services.

3. If the customer asks for pricing, explain that fixed pricing
   is not currently listed and guide them toward requesting a quote.

4. If the customer asks about service areas, do not guess.

5. If the customer wants a quote, booking, estimate, or clearly
   wants to hire SparkNest, identify the intent as "quote".

6. If the customer is only asking what services are available,
   identify the intent as "service".

7. If the customer wants the phone number, email, WhatsApp,
   or another way to contact SparkNest, identify the intent as "contact".

8. For normal questions, identify the intent as "general".

9. Understand natural language.

Examples:

"I need someone to clean my house"
=> quote

"Can you clean my office?"
=> quote

"I want a quote for deep cleaning"
=> quote

"How much would cleaning cost?"
=> quote

"What services do you provide?"
=> service

"Do you clean windows?"
=> service

"What are your working hours?"
=> general

"What's your WhatsApp number?"
=> contact

"Hello"
=> general

10. Return ONLY valid JSON.
Do not use markdown.
Do not add anything before or after the JSON.

JSON format:

{
  "intent": "general",
  "reply": "Your helpful response here"
}

CUSTOMER MESSAGE:
${message}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    let result;

    try {
      result = JSON.parse(response.text);
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);

      result = {
        intent: "general",
        reply: response.text,
      };
    }

    const validIntents = [
      "general",
      "service",
      "quote",
      "contact",
    ];

    if (!validIntents.includes(result.intent)) {
      result.intent = "general";
    }

    res.json({
      intent: result.intent,
      reply: result.reply,
    });

  } catch (error) {
    console.error("AI Error:", error);

    res.status(500).json({
      error: "Unable to get an AI response right now.",
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(
    `SparkNest AI Backend running on http://localhost:${PORT}`
  );
});