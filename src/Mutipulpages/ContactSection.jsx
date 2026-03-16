import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="relative bg-neutral-950 text-white px-6 py-32 overflow-hidden">
      {/* glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black opacity-90" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT */}
        <div className="space-y-10">
          <p className="uppercase tracking-widest text-sm text-blue-500">
            — Contacts
          </p>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Your Comfortable Workplace Is Waiting.{" "}
            <span className="text-blue-500">Hurry Up!</span>
          </h1>

          <p className="text-neutral-300 max-w-xl leading-relaxed">
            If you are interested in renting an office or in our business center,
            contact us right now.
          </p>

          <p className="text-neutral-400 max-w-xl leading-relaxed">
            We can definitely find the best option for your team.
          </p>

          {/* Social */}
          <div className="flex items-center gap-6 pt-6 border-t border-neutral-800">
            <span className="font-semibold">Follow us</span>

            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=61585106914952" },
                { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/tradeium-international-03943a205/recent-activity/all/" },
                { icon: <FaInstagram />, link: "https://www.instagram.com/tradeiuminternational/" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-200 text-black flex items-center justify-center rounded-lg cursor-pointer hover:scale-110 hover:bg-blue-300 transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-12">

          {/* Phone */}
          <a
            href="tel:+919982324903"
            className="group border-b border-neutral-800 pb-6 block hover:bg-white/5 rounded-lg px-2 transition"
          >
            <h3 className="text-2xl font-semibold flex items-center gap-3 group-hover:text-blue-300 transition">
              <FaPhoneAlt className="text-blue-400" />
              Phone
            </h3>
            <p className="text-neutral-400 mt-2">
              +91 9982324903
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:sameerchopra@tradeiuminternational.com"
            className="group border-b border-neutral-800 pb-6 block hover:bg-white/5 rounded-lg px-2 transition"
          >
            <h3 className="text-2xl font-semibold flex items-center gap-3 group-hover:text-blue-300 transition">
              <FaEnvelope className="text-blue-400" />
              E-mail
            </h3>
            <p className="text-neutral-400 mt-2">
              sameerchopra@tradeiuminternational.com
            </p>
          </a>

          {/* Address */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Capital+Galleria+Mall+Jaipur"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-b border-neutral-800 pb-6 block hover:bg-white/5 rounded-lg px-2 transition"
          >
            <h3 className="text-2xl font-semibold">Address</h3>
            <p className="text-neutral-400 mt-2">
              Capital Galleria Mall, Jaipur
            </p>
          </a>


          {/* Hours */}
          <div className="group border-b border-neutral-800 pb-6 px-2">
            <h3 className="text-2xl font-semibold group-hover:text-blue-300 transition">
              Hours
            </h3>
            <p className="text-neutral-400 mt-2">
              Monday - Saturday: 9 AM - 6 PM
            </p>
            <p className="text-neutral-500 mt-1">
              Tredeium International Processors – Jaipur
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
