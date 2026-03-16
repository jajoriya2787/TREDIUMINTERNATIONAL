import React from 'react'
import b1 from "../assets/slider6.jpeg"
import QuoteSection from "./QuoteSection";
import Tredium from './Tredium';

function StainlessCoils() {
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
                Supplier and Stockiest  Stainless Steel Coils & Sheets
              </h2>

              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Stainless Steel Sheets & Coils are premium flat-rolled products known for their exceptional corrosion resistance, strength, and aesthetic appeal. Manufactured using high-quality stainless steel, these products offer excellent formability, weldability, and durability, making them suitable for a wide range of industrial and commercial applications.
                </p>

                <p>
                  They maintain their performance in harsh environments, high temperatures, and moisture-prone conditions while requiring minimal maintenance. Available in various grades, thicknesses, and surface finishes, stainless steel sheets and coils provide flexibility for both functional and decorative uses.
                </p>

                <p>
                  🔹Construction & Architectural Works
                  <br />
                  🔹Kitchen Equipment & Appliances
                  <br />
                  🔹Automotive & Transportation
                  <br />
                  🔹Chemical & Pharmaceutical Industries
                  <br />
                  🔹Food Processing & Dairy Plants
                  <br />
                  🔹Fabrication & Manufacturing
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <QuoteSection />
      <Tredium />
    </>
  )
}

export default StainlessCoils