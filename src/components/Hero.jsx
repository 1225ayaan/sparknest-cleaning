import heroImage from "../assets/hero-cleaning.jpg";

function Hero() {
  return (
    <section className="bg-slate-50 min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <p className="text-blue-600 font-semibold uppercase tracking-wide mb-4">
            Professional Cleaning Services
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            A Cleaner Home.
            <br />
            A Happier You.
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
            SparkNest Cleaning provides reliable, professional and
            affordable cleaning services designed to make your home
            fresh, healthy and beautiful.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            {/* Book Cleaning */}
            <a
              href="#contact"
              className="bg-blue-600 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Book a Cleaning
            </a>

            {/* Explore Services */}
            <a
              href="#services"
              className="border border-gray-300 bg-white text-gray-800 px-7 py-3.5 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Explore Services
            </a>

          </div>

          {/* Statistics */}
          <div className="mt-10 flex flex-wrap gap-8 text-sm text-gray-600">

            <div>
              <strong className="block text-2xl text-gray-900">
                500+
              </strong>
              Happy Customers
            </div>

            <div>
              <strong className="block text-2xl text-gray-900">
                5★
              </strong>
              Customer Rating
            </div>

            <div>
              <strong className="block text-2xl text-gray-900">
                100%
              </strong>
              Satisfaction
            </div>

          </div>
        </div>

        {/* Right Image */}
        <div className="relative">

          <img
            src={heroImage}
            alt="Professional cleaning service"
            className="w-full h-[450px] object-cover rounded-3xl shadow-xl"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;