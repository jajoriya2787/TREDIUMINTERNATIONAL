import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  const navigate = useNavigate();

  const products = [
    { name: "Supplier and Stockiest of MS Sheets, Plates & Coils", path: "/legacy" },
    { name: "Supplier and Stockiest  high-yield structural steel", path: "/boiler-quality-plates" },
    { name: "Supplier and Stockiest  CRCA Coils & Sheets", path: "/cr-hr-sheets-coils" },
    { name: "Supplier and Stockiest  Galvanized Coils & Sheets", path: "/galvanized-sheets-coils" },
    { name: "Supplier and Stockiest  MS Long Products", path: "/stainless-steel-long-products" },
    { name: "Supplier and Stockiest  Stainless Steel Coils & Sheets", path: "/stainless-steel-sheets-coils" },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-black text-white border-t border-white/10">

        {/* Main Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & Info */}
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">TRADEIUM</h2>
            <p className="text-sm mb-6 text-gray-400">
              Forged In Strength, Built On Trust.
            </p>

            <div className="text-sm space-y-3">
              <div>
                <p className="font-semibold text-white">Phone Number</p>
                <p className="text-gray-400">+91 9982324903</p>
              </div>

              <div>
                <p className="font-semibold text-white">Email Us</p>
                <p className="text-gray-400 break-words">
                  sameerchopra@tradeiuminternational.com
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { name: "Home", path: "/" },
                { name: "Company Overview", path: "/companyOver" },
                { name: "Blog Section", path: "/blog" },
                { name: "Get in Touch", path: "/touch" },
              ].map((item, i) => (
                <li
                  key={i}
                  onClick={() => handleNavigate(item.path)}
                  className="hover:text-white hover:translate-x-1 transition cursor-pointer"
                >
                  {item.name}
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-4 mt-6 text-xl">
              <a href="https://www.linkedin.com/">
                <FaLinkedinIn className="p-2 text-3xl rounded-full bg-white/10 hover:bg-white hover:text-black transition" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61585106914952">
                <FaFacebookF className="p-2 text-3xl rounded-full bg-white/10 hover:bg-white hover:text-black transition" />
              </a>
              <a href="https://www.instagram.com/tradeiuminternational/">
                <FaInstagram className="p-2 text-3xl rounded-full bg-white/10 hover:bg-white hover:text-black transition" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Our Products</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {products.map((item, i) => (
                <li
                  key={i}
                  onClick={() => handleNavigate(item.path)}
                  className="hover:text-white hover:translate-x-1 transition cursor-pointer"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">About</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li
                onClick={() => handleNavigate("/companyOver")}
                className="hover:text-white cursor-pointer"
              >
                Company Overview
              </li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-2">
              Service Centres
            </h3>
            <p className="text-sm text-gray-400">
              Tradeium International Processors – Jaipur
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-400 text-center md:text-left">

          <div className="flex gap-4">
            <span onClick={() => handleNavigate("/privacy")} className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </span>
            <span onClick={() => handleNavigate("/terms")} className="hover:text-white cursor-pointer transition">
              Terms & Conditions
            </span>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <span>
              © 2026 Tradeium International Steels. All rights reserved.
            </span>
            {/* Anchor tag removed, only text remains */}
            <p className="text-[11px] text-gray-500">
              Designed & Developed by{" "}
              <span className="text-blue-400 font-medium">
                Goldfinch Web Solutions
              </span>
            </p>
          </div>

        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919982324903"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-green-500 p-3 sm:p-4 rounded-full text-white text-xl sm:text-2xl shadow-lg hover:scale-110 transition-all z-50"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}

export default Footer;
