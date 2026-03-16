import React from 'react'
import b1 from "../assets/slider2.jpeg"
import QuoteSection from "./QuoteSection";
import Tredium from './Tredium';

function Boiler() {
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
                Supplier and Stockiest  high-yield structural steel
              </h2>

              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Boiler Quality Plates are specially manufactured to withstand high pressure and high temperature conditions. These plates are widely used in boilers, pressure vessels, heat exchangers, and thermal power plants.
                </p>

                <p>
                  Made from high-grade carbon steel, Boiler Quality Plates offer excellent strength, durability, and heat resistance. They also provide good weldability and crack resistance, making them ideal for demanding industrial applications.
                </p>

                <p>
                  These plates are available in various thicknesses, widths, and international standards (IS / ASTM) to meet specific project requirements.
                </p>

                <p>
                  🔹Industrial Boilers
                  <br />
                  🔹Pressure Vessels
                  <br />
                  🔹Thermal Power Plants
                  <br />
                  🔹Refineries & Chemical Industries
                  <br />
                  🔹Heat Exchangers
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

export default Boiler