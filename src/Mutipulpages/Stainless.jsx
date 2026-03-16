import React from 'react'
import b1 from "../assets/slider5.jpeg"
import QuoteSection from "./QuoteSection";
import Tredium from './Tredium';

function Stainless() {
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
                Supplier and Stockiest  MS Long Products
              </h2>

              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Stainless Steel Long Products include a wide range of high-performance steel materials such as round bars, flats, angles, channels, and rods, known for their excellent strength, corrosion resistance, and durability. Manufactured using high-grade stainless steel, these products perform reliably even in extreme temperatures and corrosive environments.
                </p>

                <p>
                  Available in different grades, sizes, and finishes, these products meet diverse industrial and engineering requirements.
                </p>

                <p>
                  They offer outstanding mechanical properties, dimensional accuracy, and surface finish, making them suitable for both structural and precision applications. Stainless Steel Long Products require low maintenance and provide a long service life, ensuring cost efficiency over time.
                </p>

                <p>
                  🔹Construction & Structural Frameworks
                  <br />
                  🔹Automotive & Engineering Components
                  <br />
                  🔹Industrial Machinery & Equipment
                  <br />
                  🔹Power Plants & Energy Sector
                  <br />
                  🔹Chemical & Food Processing Industries
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

export default Stainless