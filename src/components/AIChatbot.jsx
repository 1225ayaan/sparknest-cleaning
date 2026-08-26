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
    setMessages((prev) => [
      ...prev,
      {
        sender,
        text,
      },
    ]);
  };

  // Start quote manually
  const startQuote = () => {
    setQuoteMode(true);

    addMessage(
      "ai",
      "Absolutely! 😊 I can help you prepare a free quote request. Let’s start with your name."
    );
  };

  // Collect quote information
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
      data.phone = trimmed;
      setQuoteData(data);

      addMessage(
        "ai",
        "Great. Which cleaning service do you need? For example: Home Cleaning, Deep Cleaning, Office Cleaning, Window Cleaning, Regular Cleaning, or Move-In / Move-Out."
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
        "Thanks! What is the location where you need the cleaning service?"
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
        "Almost done! Please briefly describe what you need cleaned or any special requirements."
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

      return;
    }
  };

  // Send quote to WhatsApp
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

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  // AI message
  const sendAIMessage = async (userMessage) => {
    const trimmed = userMessage.trim();

    if (!trimmed || isLoading) return;

    addMessage("user", trimmed);
    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("https://sparknest-cleaning.onrender.com/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmed,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // AI response
      addMessage("ai", data.reply);

      // ⭐ SMART INTENT DETECTION
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
        "Sorry, I’m having trouble connecting right now. Please try again or contact the SparkNest team."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = () => {
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
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 z-50 flex w-[350px] max-w-[calc(100vw-40px)] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">

          {/* Header */}
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
              onClick={() => setIsOpen(false)}
              className="text-xl hover:opacity-80"
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>

          {/* Messages */}
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

            {/* Loading */}
            {isLoading && (
              <div className="mb-3 flex justify-start">
                <div className="rounded-2xl rounded-tl-none bg-white p-3 text-sm text-gray-500 shadow">
                  AI is typing...
                </div>
              </div>
            )}

            {/* Quick Actions */}
            {messages.length === 1 && !quoteMode && (
              <div className="mt-4 flex flex-wrap gap-2">

                <button
                  onClick={() =>
                    sendAIMessage(
                      "What cleaning services do you offer?"
                    )
                  }
                  className="rounded-full border bg-white px-3 py-2 text-xs hover:bg-gray-100"
                >
                  🧹 Cleaning Services
                </button>

                <button
                  onClick={startQuote}
                  className="rounded-full border bg-white px-3 py-2 text-xs hover:bg-gray-100"
                >
                  💰 Get a Quote
                </button>

                <button
                  onClick={() =>
                    sendAIMessage(
                      "How can I contact SparkNest?"
                    )
                  }
                  className="rounded-full border bg-white px-3 py-2 text-xs hover:bg-gray-100"
                >
                  📞 Contact Us
                </button>

              </div>
            )}

            {/* WhatsApp Quote Button */}
            {isQuoteComplete && (
              <button
                onClick={sendQuoteToWhatsApp}
                className="mt-3 w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white shadow hover:bg-green-700 transition"
              >
                💬 Send Quote Request on WhatsApp
              </button>
            )}

          </div>

          {/* Input */}
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
              onClick={sendMessage}
              disabled={isLoading}
              className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send
            </button>

          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
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