function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Cleaning Customer",
      initials: "SJ",
      rating: 5,
      text: "SparkNest did an amazing job! My home looked spotless and fresh. The team was professional, friendly and right on time.",
    },
    {
      name: "Michael Brown",
      role: "Regular Customer",
      initials: "MB",
      rating: 5,
      text: "I have been using SparkNest for regular cleaning and the quality has been excellent every time. Highly recommended!",
    },
    {
      name: "Emily Davis",
      role: "Office Cleaning Customer",
      initials: "ED",
      rating: 5,
      text: "Our office has never looked better. The cleaning team pays attention to every detail and provides excellent service.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Customer Reviews
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            What Our Customers Say
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Our customers trust SparkNest to keep their homes and
            workplaces clean, fresh and comfortable.
          </p>

        </div>

        {/* Rating Summary */}
        <div className="mt-10 flex justify-center items-center gap-3">

          <div className="flex text-yellow-400 text-2xl">
            ★★★★★
          </div>

          <p className="text-gray-700 font-semibold">
            5.0 out of 5
          </p>

        </div>

        {/* Testimonials */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition duration-300"
            >

              {/* Stars */}
              <div className="flex text-yellow-400 text-lg">
                {"★".repeat(testimonial.rating)}
              </div>

              {/* Review */}
              <p className="mt-5 text-gray-600 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer */}
              <div className="mt-7 flex items-center gap-4">

                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {testimonial.initials}
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;