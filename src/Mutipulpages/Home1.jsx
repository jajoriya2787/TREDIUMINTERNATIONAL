import React, { useState, useEffect } from "react";
import { IoCall } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import Services from "./Services";
import LatestProjects from "./LatestProjects";
import { Link } from "react-router-dom";
import SteelRange from "./SteelRange";
import bg1 from "../assets/Back1.jpeg"
import bg2 from "../assets/Back2.jpeg"
import bg3 from "../assets/Back3.jpeg"
import LeadershipSection from "./LeadershipSection";

function Home1() {

  const images = [
    bg1,
    bg2,
    bg3,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // image change time (4 sec)

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* Background Images */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`
      absolute inset-0 
      bg-cover bg-center bg-fixed
      transition-opacity duration-1000
      ${index === currentIndex ? "opacity-100" : "opacity-0"}
    `}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}


        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl text-white animate-fadeUp">

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Leading Steel <br />
              <span className="
                bg-gradient-to-r 
                from-blue-600 
                via-purple-500 
                to-pink-500
                bg-clip-text 
                text-transparent
              ">
                suppliers to reputed OEM & Projects
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg">
              <span className="text-blue-700">Tradeium International</span> delivers high-quality steel products with precision,
              strength, and trust for industries worldwide.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link to={'/touch'}>
                <button className="
                px-6 py-3 rounded 
                flex items-center gap-3
                bg-gradient-to-r 
                from-blue-600 
                via-purple-500 
                to-pink-500
                text-white font-semibold
                transition-all duration-300
                hover:shadow-lg hover:shadow-pink-500/30
                hover:scale-105 active:scale-95
              ">
                  Get In Touch
                  <FaArrowRightLong />
                </button>
              </Link>

              <button>
                <a href="tel:+91 9982324903" className="
                px-6 py-3 rounded border
                flex items-center gap-3
                border-white text-white
                transition-all duration-300
                hover:bg-white hover:text-black
              ">
                  <IoCall /> Contact Us
                </a>
              </button>
            </div>

          </div>
        </div>
      </section>
      <Services />
      <LeadershipSection/>
      <LatestProjects />
      <SteelRange />
    </main>
  );
}

export default Home1;
