// src/components/Services/Services.jsx
import React from "react";
import ServiceCard from "./ServicesCard"; // Import ServiceCard

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building modern, responsive websites tailored to your needs",
      icon: "💻"
    },
    {
      title: "Mobile Apps",
      description: "Creating powerful mobile applications for iOS and Android",
      icon: "📱"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure for your growing business",
      icon: "☁️"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
