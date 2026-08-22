import aboutImage from "../assets/about-cleaning.jpg";

function About() {
  return (
    <section id="about" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* =========================
              LEFT - IMAGE
          ========================== */}
          <div className="relative">

            <img
              src={aboutImage}
              alt="SparkNest professional cleaning team"
              className="w-full h-[480px] object-cover rounded-3xl shadow-xl"
            />

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-2xl px-7 py-5">
              <p className="text-3xl font-bold text-blue-600">
                5+
              </p>

              <p className="text-gray-600 text-sm">
                Years of Experience
              </p>
            </div>

          </div>


          {/* =========================
              RIGHT - CONTENT
          ========================== */}
          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-wide">
              About SparkNest
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              We Don't Just Clean.
              <br />
              We Care.
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              SparkNest Cleaning is dedicated to providing dependable,
              high-quality cleaning services for homes and businesses.
              Our goal is simple — make every space cleaner, healthier
              and more comfortable.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our professional team focuses on quality, attention to
              detail and customer satisfaction. Whether you need a
              one-time deep clean or regular cleaning, we're here to help.
            </p>


            {/* =========================
                FEATURES
            ========================== */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">

              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">
                  ✓
                </span>

                <span className="text-gray-700 font-medium">
                  Trusted Professionals
                </span>
              </div>


              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">
                  ✓
                </span>

                <span className="text-gray-700 font-medium">
                  Eco-Friendly Products
                </span>
              </div>


              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">
                  ✓
                </span>

                <span className="text-gray-700 font-medium">
                  Flexible Scheduling
                </span>
              </div>


              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">
                  ✓
                </span>

                <span className="text-gray-700 font-medium">
                  Satisfaction Guaranteed
                </span>
              </div>

            </div>


            {/* =========================
                BUTTON
            ========================== */}
            <button className="mt-9 bg-blue-600 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition">
              Learn More About Us
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;