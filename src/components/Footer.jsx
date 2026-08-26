function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <a
              href="#"
              className="text-2xl font-bold"
            >
              Spark<span className="text-blue-400">Nest</span>
            </a>

            <p className="mt-5 text-gray-400 leading-relaxed">
              Professional cleaning services designed to make your
              home and workplace cleaner, healthier and happier.
            </p>

            <a
              href="#contact"
              className="inline-block mt-6 bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold">
              Our Services
            </h3>

            <ul className="mt-5 space-y-3">

              <li className="text-gray-400">
                Home Cleaning
              </li>

              <li className="text-gray-400">
                Deep Cleaning
              </li>

              <li className="text-gray-400">
                Office Cleaning
              </li>

              <li className="text-gray-400">
                Move-In / Move-Out
              </li>

              <li className="text-gray-400">
                Window Cleaning
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4">

              <div>
                <p className="text-gray-500 text-sm">
                  Phone
                </p>

                <p className="mt-1 text-gray-300">
                  +91 (880) 615-5264
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Email
                </p>

                <p className="mt-1 text-gray-300">
                  hello@sparknestcleaning.com
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Hours
                </p>

                <p className="mt-1 text-gray-300">
                  Mon - Sat: 8 AM - 7 PM
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 SparkNest Cleaning. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <a
              href="#"
              className="text-gray-500 hover:text-white transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-white transition"
            >
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;