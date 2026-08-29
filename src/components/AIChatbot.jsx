import { useState } from "react";

function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hi! I’m SparkNest AI Assistant. How can I help you today?",
    },
  ]);

  const [quoteMode, setQuoteMode] = useState(false);

  const [quoteData, setQuoteData] = useState({
    name: "",
    phone: "",
    service: "",
    property: "",
    location: "",
    date: "",
    requirement: "",
  });

  const addMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const startQuote = () => {
    setQuoteMode(true);

    addMessage(
      "ai",
      "Absolutely! 😊 I can help you prepare a free quote request. Let’s start with your name."
    );
  };

  const handleQuoteMessage = (userMessage) => {
    const trimmed = userMessage.trim();

    if (!trimmed) return;

    addMessage("user", trimmed);
    setMessage("");

    const data = { ...quoteData };

    if (!data.name) {
      data.name = trimmed;
      setQuoteData(data);

      addMessage(
        "ai",
        "Thanks! What phone number should the SparkNest team use to contact you?"
      );
      return;
    }

    if (!data.phone) {
      let phone = trimmed.replace(/[\s()-]/g, "");

      if (phone.startsWith("+91")) {
        phone = phone.substring(3);
      } else if (phone.startsWith("91") && phone.length === 12) {
        phone = phone.substring(2);
      }

      const phoneRegex = /^[6-9]\d{9}$/;

      if (!phoneRegex.test(phone)) {
        addMessage(
          "ai",
          "📱 Please enter a valid 10-digit Indian mobile number.\n\nExample: 9876543210 or +91 9876543210"
        );
        return;
      }

      data.phone = phone;
      setQuoteData(data);

      addMessage(
        "ai",
        "Perfect! 👍 Which cleaning service do you need?\n\nFor example: Home Cleaning, Deep Cleaning, Office Cleaning, Window Cleaning, Regular Cleaning, or Move-In / Move-Out."
      );
      return;
    }

    if (!data.service) {
      data.service = trimmed;
      setQuoteData(data);

      addMessage(
        "ai",
        "Got it. Is this for a home, apartment, office, or another type of property?"
      );
      return;
    }

    if (!data.property) {
      data.property = trimmed;
      setQuoteData(data);

      addMessage(
        "ai",
        "Thanks! 📍 What is the location where you need the cleaning service?"
      );
      return;
    }

    if (!data.location) {
      data.location = trimmed;
      setQuoteData(data);

      addMessage(
        "ai",
        "What date or approximate day would you prefer for the cleaning?"
      );
      return;
    }

    if (!data.date) {
      data.date = trimmed;
      setQuoteData(data);

      addMessage(
        "ai",
        "Almost done! 🧹 Please briefly describe what you need cleaned or any special requirements."
      );
      return;
    }

    if (!data.requirement) {
      data.requirement = trimmed;
      setQuoteData(data);

      addMessage(
        "ai",
        "Perfect! 🎉 Your quote request is ready. You can send these details to SparkNest through WhatsApp using the button below."
      );
    }
  };

  const sendQuoteToWhatsApp = () => {
    const whatsappNumber = "918806155264";

    const whatsappMessage = `
Hello SparkNest Cleaning!

I would like to request a cleaning quote.

Name: ${quoteData.name}
Phone: ${quoteData.phone}
Service: ${quoteData.service}
Property: ${quoteData.property}
Location: ${quoteData.location}
Preferred Date: ${quoteData.date}

Requirements:
${quoteData.requirement}
    `.trim();

    const whatsappUrl =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappUrl, "_blank");
  };

  const handleInstantMessage = (userMessage) => {
    const text = userMessage.toLowerCase().trim();

    if (
      text.includes("cleaning services") ||
      text.includes("what services") ||
      text.includes("services do you offer") ||
      text.includes("what do you offer") ||
      text === "services"
    ) {
      addMessage(
        "ai",
        `🧹 SparkNest Cleaning offers:

• Home Cleaning
• Deep Cleaning
• Move-In / Move-Out Cleaning
• Office Cleaning
• Window Cleaning
• Regular Cleaning

If you'd like, I can also help you prepare a free quote request. 😊`
      );

      return true;
    }

    if (
      text.includes("contact us") ||
      text.includes("contact sparknest") ||
      text === "contact" ||
      text.includes("phone number") ||
      text.includes("whatsapp number") ||
      text.includes("email") ||
      text.includes("how can i contact")
    ) {
      addMessage(
        "ai",
        `📞 You can contact SparkNest Cleaning through:

Phone / WhatsApp:
+91 (880) 615-5264

Email:
hello@sparknestcleaning.com

🕒 Working Hours:
Monday - Saturday
8:00 AM - 7:00 PM`
      );

      return true;
    }

    if (
      text.includes("price") ||
      text.includes("pricing") ||
      text.includes("cost") ||
      text.includes("how much") ||
      text.includes("rate") ||
      text.includes("charges") ||
      text.includes("fee")
    ) {
      addMessage(
        "ai",
        `💰 SparkNest Cleaning does not currently list fixed service prices.

The cost depends on the cleaning service and your requirements.

You can request a free quote, and our team can provide the appropriate pricing for your cleaning needs. 😊`
      );

      return true;
    }

    if (
      text.includes("working hours") ||
      text.includes("opening hours") ||
      text.includes("timing") ||
      text.includes("when are you open")
    ) {
      addMessage(
        "ai",
        `🕒 SparkNest Cleaning is available:

Monday - Saturday
8:00 AM - 7:00 PM`
      );

      return true;
    }

    return false;
  };

  const handleFallbackMessage = (userMessage) => {
    const text = userMessage.toLowerCase();

    if (
      text.includes("house cleaning") ||
      text.includes("home cleaning") ||
      text.includes("clean my house") ||
      text.includes("clean my home")
    ) {
      addMessage(
        "ai",
        `🏠 Absolutely! SparkNest Cleaning can help with home cleaning.

We offer:
• Regular Home Cleaning
• Deep Cleaning
• Kitchen Cleaning
• Bathroom Cleaning
• Move-In / Move-Out Cleaning

If you'd like a free quote, click "Get a Quote" or simply type "quote". 😊`
      );

      return true;
    }

    if (
      text.includes("tomorrow") ||
      text.includes("today") ||
      text.includes("book") ||
      text.includes("booking") ||
      text.includes("appointment")
    ) {
      addMessage(
        "ai",
        `📅 We can help you prepare a cleaning request.

For availability and pricing, please provide your details through our free quote request.

Type "quote" to get started. 😊`
      );

      return true;
    }

    if (
      text.includes("quote") ||
      text.includes("quotation") ||
      text.includes("free quote") ||
      text.includes("estimate")
    ) {
      startQuote();
      return true;
    }

    if (
      text.includes("cleaning") ||
      text.includes("cleaner") ||
      text.includes("clean my")
    ) {
      addMessage(
        "ai",
        `🧹 Sure! SparkNest Cleaning provides professional cleaning services for homes and offices.

Would you like to request a free quote? 😊`
      );

      return true;
    }

    return false;
  };

  const sendAIMessage = async (userMessage) => {
    const trimmed = userMessage.trim();

    if (!trimmed || isLoading) return;

    addMessage("user", trimmed);
    setMessage("");

    if (handleInstantMessage(trimmed)) return;

    if (handleFallbackMessage(trimmed)) return;

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://sparknest-cleaning.onrender.com/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: trimmed,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      if (data.reply) {
        addMessage("ai", data.reply);
      } else {
        addMessage(
          "ai",
          "🤖 I received your message, but I couldn't generate a response right now."
        );
      }

      if (data.intent === "quote") {
        setQuoteMode(true);

        addMessage(
          "ai",
          "I can help you prepare a free quote request. 😊 Let’s get a few details. What is your name?"
        );
      }
    } catch (error) {
      console.error("Chatbot Error:", error);

      addMessage(
        "ai",
        `🤖 I'm currently unable to connect to the AI server.

But I can still help you with SparkNest Cleaning.

You can ask me about:
• Cleaning Services
• Pricing
• Working Hours
• Contact Details
• Free Quote

Or type "quote" to request a cleaning quote. 😊`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = () => {
    if (!message.trim() || isLoading) return;

    if (quoteMode) {
      handleQuoteMessage(message);
    } else {
      sendAIMessage(message);
    }
  };

  const isQuoteComplete =
    quoteMode &&
    quoteData.name &&
    quoteData.phone &&
    quoteData.service &&
    quoteData.property &&
    quoteData.location &&
    quoteData.date &&
    quoteData.requirement;

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-5 z-50 flex w-[350px] max-w-[calc(100vw-40px)] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
          
          <div className="flex items-center justify-between bg-blue-600 px-4 py-4 text-white">
            <div>
              <h3 className="font-semibold">
                SparkNest AI Assistant
              </h3>

              <p className="text-xs opacity-90">
                Online • Here to help
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-xl hover:opacity-80"
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>

          <div className="h-[350px] overflow-y-auto bg-gray-50 p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-line rounded-2xl p-3 text-sm shadow ${
                    msg.sender === "user"
                      ? "rounded-tr-none bg-blue-600 text-white"
                      : "rounded-tl-none bg-white text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="mb-3 flex justify-start">
                <div className="rounded-2xl rounded-tl-none bg-white p-3 text-sm text-gray-500 shadow">
                  AI is typing...
                </div>
              </div>
            )}

            {messages.length === 1 && !quoteMode && (
              <div className="mt-4 flex flex-wrap gap-2">

                <button
                  type="button"
                  onClick={() => {
                    addMessage(
                      "user",
                      "What cleaning services do you offer?"
                    );

                    handleInstantMessage(
                      "What cleaning services do you offer?"
                    );
                  }}
                  className="rounded-full border bg-white px-3 py-2 text-xs hover:bg-gray-100"
                >
                  🧹 Cleaning Services
                </button>

                <button
                  type="button"
                  onClick={startQuote}
                  className="rounded-full border bg-white px-3 py-2 text-xs hover:bg-gray-100"
                >
                  💰 Get a Quote
                </button>

                <button
                  type="button"
                  onClick={() => {
                    addMessage(
                      "user",
                      "How can I contact SparkNest?"
                    );

                    handleInstantMessage(
                      "How can I contact SparkNest?"
                    );
                  }}
                  className="rounded-full border bg-white px-3 py-2 text-xs hover:bg-gray-100"
                >
                  📞 Contact Us
                </button>

              </div>
            )}

            {isQuoteComplete && (
              <button
                type="button"
                onClick={sendQuoteToWhatsApp}
                className="mt-3 w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white shadow transition hover:bg-green-700"
              >
                💬 Send Quote Request on WhatsApp
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 border-t bg-white p-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder={
                quoteMode
                  ? "Enter your answer..."
                  : "Ask me anything..."
              }
              disabled={isLoading}
              className="flex-1 rounded-full border px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
            />

            <button
              type="button"
              onClick={sendMessage}
              disabled={isLoading}
              className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl text-white shadow-lg transition hover:scale-105 hover:bg-blue-700"
        aria-label="Open AI Chatbot"
      >
        💬
      </button>
    </>
  );
}

export default AIChatbot;