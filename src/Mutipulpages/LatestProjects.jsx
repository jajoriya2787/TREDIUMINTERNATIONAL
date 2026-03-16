import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import b1 from "../assets/slider1.jpeg"
import b2 from "../assets/slider5.jpeg"
import b3 from "../assets/slider3.jpeg"
import b4 from "../assets/slider4.jpeg"
import b5 from "../assets/slider2.jpeg"
import b6 from "../assets/slider6.jpeg"

const projects = [
  {
    title: "Supplier and Stockiest of MS Sheets, Plates & Coils",
    desc: "Mild Steel (MS) Sheets & Coils are highly versatile and widely used in various industrial and commercial applications. Known for their excellent strength, durability, and uniform thickness, these sheets and coils provide reliable performance even under demanding conditions. They are commonly used in construction, automobile manufacturing, electrical panels, packaging, and general fabrication work.",
    img: b1,
  },
  {
    title: "Supplier and Stockiest  high-yield structural steel",
    desc: "Boiler Quality Plates are specially manufactured to withstand high pressure and high temperature conditions. These plates are widely used in boilers, pressure vessels, heat exchangers, and thermal power plants.",
    img: b2,
  },
  {
    title: "Supplier and Stockiest  CRCA Coils & Sheets",
    desc: "CR (Cold Rolled) and HR (Hot Rolled) Sheets & Coils are widely used steel products known for their strength, versatility, and excellent surface quality.",
    img: b3,
  },
  {
    title: "Supplier and Stockiest  Galvanized Coils & Sheets",
    desc: "Galvanized Sheets & Coils are steel products coated with a layer of zinc to provide superior corrosion resistance and long-lasting durability. This protective zinc coating helps prevent rusting, making them ideal for use in outdoor and harsh environmental conditions.",
    img: b4,
  },
  {
    title: "Supplier and Stockiest  MS Long Products",
    desc: "Stainless Steel Long Products include a wide range of high-performance steel materials such as round bars, flats, angles, channels, and rods, known for their excellent strength, corrosion resistance, and durability. Manufactured using high-grade stainless steel, these products perform reliably even in extreme temperatures and corrosive environments..",
    img: b5,
  },
  {
    title: "Supplier and Stockiest  Stainless Steel Coils & Sheets",
    desc: "Stainless Steel Sheets & Coils are premium flat-rolled products known for their exceptional corrosion resistance, strength, and aesthetic appeal. Manufactured using high-quality stainless steel, these products offer excellent formability, weldability, and durability, making them suitable for a wide range of industrial and commercial applications.",
    img: b6,
  },
];

const LatestProjects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#1f1f1f] via-[#2b2b2b] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-14">
          Latest Projects
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-[#1f1f1f] rounded-lg shadow-md hover:shadow-xl transition overflow-hidden group h-[460px] flex flex-col"
              >
                {/* Image */}
                <div className="h-[220px] overflow-hidden border-b border-white/10">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-white min-h-[56px]">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mt-3 text-sm leading-relaxed line-clamp-4">
                    {item.desc}
                  </p>

                  {/* Read More button */}
                  <button
                    onClick={() => setActiveProject(item)}
                    className="mt-auto flex items-center gap-2 font-semibold text-blue-600 hover:text-gray-300 transition"
                  >
                    Read more <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white rounded-xl shadow-lg p-6 w-11/12 max-w-3xl relative animate-slide-in">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 text-2xl font-bold"
              onClick={() => setActiveProject(null)}
            >
              ×
            </button>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {activeProject.title}
            </h2>
            <p className="text-gray-300 mb-4">{activeProject.desc}</p>

            <img
              src={activeProject.img}
              alt={activeProject.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Animation for modal */}
      <style>
        {`
          @keyframes slide-in {
            0% { transform: translateY(-50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-slide-in {
            animation: slide-in 0.3s ease-out;
          }
        `}
      </style>
    </section>
  );
};

export default LatestProjects;
