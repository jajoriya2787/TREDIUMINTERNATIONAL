import React from "react";

// Import images
import p1 from "../assets/services1.jpeg";
import p2 from "../assets/services5.jpeg";
import p3 from "../assets/services3.jpeg";
import p4 from "../assets/services4.jpeg";
import p5 from "../assets/services2.jpeg";
import p6 from "../assets/services6.jpeg";

// Service data
const services = [
  { title: "Supplier and Stockiest for wide range of STEEL PRODUCTS", img: p1 },
  { title: "Supply chain Management", img: p4 },
  { title: "Steel Processing Solutions", img: p2 },
  { title: "Steel Fabrication", img: p3 },
  { title: "Supply Chain Financing", img: p5 },
  { title: "Coil Nesting Solutions", img: p6 },
];

function Services() {
  return (
    <section
      id="our-services"
      className="w-full py-20 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-14">
          Our Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-white text-center px-4">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
