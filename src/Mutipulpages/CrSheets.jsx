import React from 'react'
import b1 from "../assets/slider31.jpeg"
import QuoteSection from "./QuoteSection";
import Tredium from './Tredium';

function CrSheets() {
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
                Supplier and Stockiest  CRCA Coils & Sheets
              </h2>

              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  CR (Cold Rolled) and HR (Hot Rolled) Sheets & Coils are widely used steel products known for their strength, versatility, and excellent surface quality.
                </p>

                <p>
                  Hot Rolled (HR) Sheets & Coils are produced at high temperatures, making them ideal for applications that require high strength and durability. They are commonly used in construction, fabrication, shipbuilding, and heavy engineering industries.
                </p>

                <p>
                  Cold Rolled (CR) Sheets & Coils are processed further at room temperature, providing smooth surface finish, precise dimensions, and improved mechanical properties. These are extensively used in automobile components, appliances, furniture, and precision engineering.Both CR & HR products are available in various grades, thicknesses, and sizes to suit diverse industrial requirements.
                </p>

                <p>
                  🔹Construction & Infrastructure
                  <br />
                  🔹Automotive Industry
                  <br />
                  🔹Fabrication & Engineering
                  <br />
                  🔹Furniture & Appliances
                  <br />
                  🔹Industrial Equipment
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

export default CrSheets