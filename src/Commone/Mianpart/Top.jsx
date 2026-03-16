import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function TopHeader() {
  return (
    <div className="w-full hidden md:block bg-zinc-950 text-gray-300 text-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-3">

        {/* Left Side - Social + Location */}
        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/profile.php?id=61585106914952" className="hover:text-sky-400 transition">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/tradeiuminternational/" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/tradeium-international-03943a205/recent-activity/all/" className="hover:text-sky-300 transition">
            <FaLinkedinIn />
          </a>

          <span className="hidden  md:flex items-center gap-2 ml-4">
            <FaMapMarkerAlt className="text-blue-800" />
            <a
              href="https://www.google.com/maps/search/Capital+Galleria+Mall+Jaipur/@26.9248835,75.7040721,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >Capital Galleria Mall - jaipur(Rajasthan-india)</a>
          </span>
        </div>

        {/* Right Side - Contact */}
        <div className="flex items-center gap-5">

          {/* Email */}
          <a
            href="mailto:sameerchopra@tradeiuminternational.com"
            className="flex items-center gap-2 hover:text-blue-500 transition"
          >
            <FaEnvelope />
            <span className="hidden sm:block">sameerchopra@tradeiuminternational.com</span>
          </a>

          {/* Call Button */}
          <a
            href="tel:+919982324903"
            className="
    flex items-center gap-2 
    px-3 sm:px-4 py-1.5 
    bg-gradient-to-r 
    from-blue-600 
    via-purple-500 
    to-pink-500
    text-white 
    rounded-full 
    font-semibold 
    transition-all 
    duration-300
  "
          >
            <FaPhoneAlt />

            {/* Hide on mobile + tablet, show on lg (1024px+) */}
            <span className="hidden lg:inline">Call Now</span>
          </a>


        </div>
      </div>
    </div>
  );
}

export default TopHeader;
