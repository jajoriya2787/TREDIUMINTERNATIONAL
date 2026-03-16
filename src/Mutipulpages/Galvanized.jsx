import React from 'react'
import b1 from "../assets/slider4.jpeg"
import QuoteSection from "./QuoteSection";
import Tredium from './Tredium';

function Galvanized() {
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
                Supplier and Stockiest  Galvanized Coils & Sheets
              </h2>

              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Galvanized Sheets & Coils are steel products coated with a layer of zinc to provide superior corrosion resistance and long-lasting durability. This protective zinc coating helps prevent rusting, making them ideal for use in outdoor and harsh environmental conditions.
                </p>

                <p>
                  These sheets and coils offer excellent strength, formability, and surface finish, ensuring reliable performance across a wide range of applications. Galvanized steel requires minimal maintenance and delivers a cost-effective solution for long-term use.
                </p>

                <p>
                  Available in various thicknesses, widths, and coating grades, Galvanized Sheets & Coils meet the needs of multiple industries.
                </p>

                <p>
                  🔹Roofing & Cladding
                  <br />
                  🔹Construction & Infrastructure
                  <br />
                  🔹Automotive Components
                  <br />
                  🔹HVAC Systems
                  <br />
                  🔹Electrical Panels & Enclosures
                  <br />
                  🔹Agricultural Equipment
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

export default Galvanized