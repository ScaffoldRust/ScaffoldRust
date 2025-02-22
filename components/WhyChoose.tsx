import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Performance",
      description:
        "Leverage Rust’s speed and efficiency for high-performance blockchain applications.",
    },
    {
      title: "Flexibility",
      description:
        "Adapt to various blockchain ecosystems with our versatile development tools.",
    },
    {
      title: "Community",
      description:
        "Join a growing community of Rust blockchain developers and innovators.",
    },
    {
      title: "Future-Proof",
      description:
        "Stay ahead with cutting-edge blockchain development practices and tools.",
    },
  ];

  return (
    <section className="bg-black text-white  lg:px-0 px-6 mb-16">
      <div className="lg:max-w-7xl max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-10">
          Why Choose ScaffoldRust?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#111] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-start">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-start">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
