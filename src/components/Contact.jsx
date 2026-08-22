import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Get a Free Quote
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Let's Make Your Space Sparkle
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Tell us what you need and our team will get back to you
            with a cleaning quote.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">

          {/* Left Information */}
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
                <p className="mt-1 text-xl font-semibold">
                  +1 (555) 123-4567
                </p>
              </div>

              <div>
                <p className="text-blue-200 text-sm uppercase tracking-wide">
                  Email
                </p>
                <p className="mt-1 text-xl font-semibold">
                  hello@sparknestcleaning.com
                </p>
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
                  Request Received!
                </h3>

                <p className="mt-3 text-gray-600 max-w-md">
                  Thank you for contacting SparkNest Cleaning.
                  Our team will get back to you shortly.
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Cleaning Service
                  </label>

                  <select
                    required
                    defaultValue=""
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option>Home Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Move-In / Move-Out</option>
                    <option>Office Cleaning</option>
                    <option>Window Cleaning</option>
                    <option>Regular Cleaning</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>

                  <textarea
                    required
                    rows="4"
                    placeholder="Tell us about your cleaning requirements..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Request a Free Quote
                </button>

              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;