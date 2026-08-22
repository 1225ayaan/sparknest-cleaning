import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const message = formData.get("message");

    const whatsappNumber = "918806155264";

    const whatsappMessage = `
Hello SparkNest Cleaning!

I would like to request a cleaning quote.

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

Message:
${message}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    event.currentTarget.reset();
    setSelectedService("");
  };

  return (
    <section
      id="contact"
      className="bg-slate-50 py-24"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Get a Free Quote
          </p>

          <h2
            id="contact-heading"
            className="mt-3 text-4xl md:text-5xl font-bold text-gray-900"
          >
            Let's Make Your Space Sparkle
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Tell us what you need and send your cleaning request
            directly through WhatsApp.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-blue-600 text-white rounded-3xl p-8 md:p-10">

            <h3 className="text-3xl font-bold">
              Ready for a Cleaner Space?
            </h3>

            <p className="mt-5 text-blue-100 leading-relaxed">
              Whether you need a one-time deep clean or regular
              cleaning services, SparkNest is ready to help.
            </p>

            <div className="mt-10 space-y-7">

              <div>
                <p className="text-blue-200 text-sm uppercase tracking-wide">
                  Call Us
                </p>

                <a
                  href="tel:+918806155264"
                  className="mt-1 block text-xl font-semibold hover:text-blue-100 transition"
                >
                  +91 (880) 615-5264
                </a>
              </div>

              <div>
                <p className="text-blue-200 text-sm uppercase tracking-wide">
                  Email
                </p>

                <a
                  href="mailto:hello@sparknestcleaning.com"
                  className="mt-1 block text-xl font-semibold hover:text-blue-100 transition break-words"
                >
                  hello@sparknestcleaning.com
                </a>
              </div>

              <div>
                <p className="text-blue-200 text-sm uppercase tracking-wide">
                  WhatsApp
                </p>

                <a
                  href="https://wa.me/918806155264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-xl font-semibold hover:text-blue-100 transition"
                >
                  Chat With Us →
                </a>
              </div>

              <div>
                <p className="text-blue-200 text-sm uppercase tracking-wide">
                  Working Hours
                </p>

                <p className="mt-1 text-xl font-semibold">
                  Mon - Sat: 8:00 AM - 7:00 PM
                </p>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">

            {submitted ? (
              <div className="min-h-[500px] flex flex-col items-center justify-center text-center">

                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-3xl">
                    ✓
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  WhatsApp Request Ready!
                </h3>

                <p className="mt-3 text-gray-600 max-w-md">
                  Your enquiry has been prepared in WhatsApp.
                  Send the message to complete your request.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Send Another Request
                </button>

              </div>
            ) : (

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Cleaning Service
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    value={selectedService}
                    onChange={(event) =>
                      setSelectedService(event.target.value)
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="Home Cleaning">
                      Home Cleaning
                    </option>

                    <option value="Deep Cleaning">
                      Deep Cleaning
                    </option>

                    <option value="Move-In / Move-Out">
                      Move-In / Move-Out
                    </option>

                    <option value="Office Cleaning">
                      Office Cleaning
                    </option>

                    <option value="Window Cleaning">
                      Window Cleaning
                    </option>

                    <option value="Regular Cleaning">
                      Regular Cleaning
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    placeholder="Tell us about your cleaning requirements..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3.5 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Send Request on WhatsApp
                </button>

                <p className="text-center text-sm text-gray-500">
                  Your request will open in WhatsApp with the
                  details filled in automatically.
                </p>

              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;