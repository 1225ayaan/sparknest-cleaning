function WhyChooseUs() {
  const features = [
    {
      number: "01",
      title: "Trusted Professionals",
      description:
        "Our trained cleaning professionals focus on quality, reliability and attention to detail.",
    },
    {
      number: "02",
      title: "Eco-Friendly Products",
      description:
        "We use carefully selected cleaning products designed to keep your space fresh and comfortable.",
    },
    {
      number: "03",
      title: "Flexible Scheduling",
      description:
        "Choose a cleaning schedule that works for you, whether you need a one-time or regular service.",
    },
    {
      number: "04",
      title: "Quality Guaranteed",
      description:
        "We care about every detail and aim to deliver a consistently high-quality cleaning experience.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Why SparkNest
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose SparkNest?
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            We combine professional service, attention to detail and
            customer-focused care to give you a cleaner space without
            the hassle.
          </p>

        </div>

        {/* Features */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature) => (
            <div
              key={feature.number}
              className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >

              {/* Number */}
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                {feature.number}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 bg-blue-600 rounded-3xl px-8 py-10 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Ready for a Cleaner Space?
            </h3>

            <p className="mt-2 text-blue-100">
              Get a free quote from SparkNest today.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 bg-white text-blue-600 px-7 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Get a Free Quote
          </a>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;