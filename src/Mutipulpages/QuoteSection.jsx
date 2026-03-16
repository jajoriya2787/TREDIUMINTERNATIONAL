import React from "react";
import bgImage from "../assets/Company.jpeg";

const QuoteSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 overflow-hidden">

      {/* Background Image (FIXED) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center text-white">

        <div className="h-px w-24 bg-white/40 mx-auto mb-8" />

        <div className="sm:text-lg md:text-xl leading-relaxed font-light tracking-wide">
          <p>At <span className="text-blue-300">Tradeium International</span>, we are committed to delivering premium-quality steel products that power industries and shape infrastructure. With years of experience in the steel manufacturing and supply sector, we have built a reputation for strength, precision, and reliability.</p>
          <p>At <span className="text-blue-300">Tradeium International</span>, we don’t just manufacture steel — we build the foundation of progress, trust, and excellence.</p>
        </div>

        <div className="text-4xl my-6 opacity-70">❝❞</div>

        <div className="text-sm text-white/70 flex gap-2 justify-center mt-4">
          <p>Sahi Quality.</p>
          <p className="text-yellow-200">Sahi Quantity</p>
          <p>Sahi Price</p>
        </div>

        <div className="h-px w-24 bg-white/40 mx-auto mt-8" />
      </div>
    </section>
  );
};

export default QuoteSection;
