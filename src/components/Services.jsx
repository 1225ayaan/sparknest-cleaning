import homeImage from "../assets/service-home.jpg";
import kitchenImage from "../assets/service-kitchen.jpg";
import officeImage from "../assets/service-office.jpg";

function Services() {
  const services = [
    {
      title: "Home Cleaning",
      description:
        "Complete cleaning for bedrooms, living rooms, kitchens and other areas of your home.",
      image: homeImage,
    },
    {
      title: "Deep Cleaning",
      description:
        "Detailed cleaning that reaches those hard-to-clean areas and leaves your space refreshed.",
      image: kitchenImage,
    },
    {
      title: "Move-In / Move-Out",
      description:
        "Get your property spotless and ready before moving in or after moving out.",
      image: homeImage,
    },
    {
      title: "Office Cleaning",
      description:
        "Professional cleaning services that keep your workplace clean, fresh and productive.",
      image: officeImage,
    },
    {
      title: "Window Cleaning",
      description:
        "Make your windows shine with professional glass and window cleaning services.",
      image: officeImage,
    },
    {
      title: "Regular Cleaning",
      description:
        "Reliable recurring cleaning plans designed around your schedule and cleaning needs.",
      image: homeImage,
    },
  ];

  const handleLearnMore = (serviceName) => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
      });
    }

    console.log(`Customer selected: ${serviceName}`);
  };

  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Our Services
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Professional Cleaning Services
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            From regular home cleaning to detailed deep cleaning,
            SparkNest is here to keep every space fresh and spotless.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition duration-300"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More */}
                <button
                  onClick={() => handleLearnMore(service.title)}
                  className="mt-5 text-blue-600 font-semibold hover:text-blue-800 transition"
                >
                  Learn More →
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;