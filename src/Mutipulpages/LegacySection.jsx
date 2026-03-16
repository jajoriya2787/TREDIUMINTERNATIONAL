import React from "react";
import b1 from "../assets/slider1.jpeg"
import QuoteSection from "./QuoteSection";
import Tredium from "./Tredium";


function LegacySection() {
  return (
    <>
      <section className="w-full mt-24 bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* IMAGE PART */}
            <div className="flex justify-center">
              <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] rounded-full border border-gray-200 flex items-center justify-center">

                <img
                  src={b1}   // apni image yahan rakho
                  alt="Legacy"
                  className="w-[85%] h-[85%] object-cover rounded-full"
                />

                {/* Decorative dots */}
                <span className="absolute -top-2 left-1/2 w-4 h-4 bg-blue-600 rounded-full"></span>
                <span className="absolute bottom-6 -left-2 w-4 h-4 bg-blue-400 rounded-full"></span>
                <span className="absolute bottom-10 -right-2 w-4 h-4 bg-blue-300 rounded-full"></span>
              </div>
            </div>

            {/* TEXT PART */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-5">
                Supplier and Stockiest of MS Sheets, Plates & Coils
              </h2>

              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Mild Steel (MS) Sheets & Coils are highly versatile and widely used in various industrial and commercial applications. Known for their excellent strength, durability, and uniform thickness, these sheets and coils provide reliable performance even under demanding conditions. They are commonly used in construction, automobile manufacturing, electrical panels, packaging, and general fabrication work.
                </p>

                <p>
                  MS Sheets & Coils are easy to cut, shape, and weld, making them ideal for customized applications. Their corrosion-resistant surface ensures long-term reliability, while their cost-effectiveness makes them a preferred choice for both large-scale industrial projects and small-scale fabrication work. With consistent quality and superior mechanical properties, MS Sheets & Coils from TRADEIUM INTERNATIONAL are designed to meet the diverse needs of modern industries.
                </p>

                <p>
                  🔹MS Sheets & Coils are strong and durable steel products. <br />
                  🔹They resist corrosion and last for years. <br />
                  🔹Used widely in construction, automotive, and manufacturing. <br />
                  🔹Available in different sizes and thicknesses for all needs. <br />
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <QuoteSection />
      <Tredium/>
    </>
  );
}

export default LegacySection;
