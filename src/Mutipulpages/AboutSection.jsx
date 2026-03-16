import React from "react";
import photo from "../assets/Rolls.jpeg"
import ContactSection from "./ContactSection";
import b1 from "../assets/b1.webp"
import QuoteSection from "./QuoteSection";


export default function AboutSection() {
    return (
        <>
            <section className="w-full mt-20 bg-neutral-950 py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        {/* IMAGE PART */}
                        <div className="flex justify-center">
                            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] flex items-center justify-center">

                                {/* Rotating neon outer ring */}
                                <div className="absolute inset-0 rounded-full border-8 border-t-[#00FFFF] border-r-[#FF00FF] border-b-[#FFFF00] border-l-[#00FF00] animate-spin-slow shadow-[0_0_30px_rgba(0,255,255,0.5),0_0_30px_rgba(255,0,255,0.5),0_0_30px_rgba(255,255,0,0.5),0_0_30px_rgba(0,255,0,0.5)]"></div>

                                {/* Inner static image */}
                                <img
                                    src={b1}   // apni image yahan rakho
                                    alt="Legacy"
                                    className="w-[85%] h-[85%] object-cover rounded-full relative z-10 shadow-lg"
                                />

                                {/* Decorative neon dots */}
                                <span className="absolute -top-2 left-1/2 w-4 h-4 bg-[#00FFFF] rounded-full shadow-[0_0_10px_rgba(0,255,255,0.8)] animate-bounce-slow"></span>
                                <span className="absolute bottom-6 -left-2 w-4 h-4 bg-[#FF00FF] rounded-full shadow-[0_0_10px_rgba(255,0,255,0.8)] animate-bounce-slow delay-200"></span>
                                <span className="absolute bottom-10 -right-2 w-4 h-4 bg-[#FFFF00] rounded-full shadow-[0_0_10px_rgba(255,255,0,0.8)] animate-bounce-slow delay-400"></span>
                                <span className="absolute top-10 right-2 w-3 h-3 bg-[#00FF00] rounded-full shadow-[0_0_10px_rgba(0,255,0,0.8)] animate-bounce-slow delay-600"></span>
                                <span className="absolute bottom-16 left-10 w-3 h-3 bg-[#FF4500] rounded-full shadow-[0_0_10px_rgba(255,69,0,0.8)] animate-bounce-slow delay-800"></span>
                                <span className="absolute top-14 left-12 w-2 h-2 bg-[#1E90FF] rounded-full shadow-[0_0_8px_rgba(30,144,255,0.8)] animate-bounce-slow delay-1000"></span>
                            </div>
                        </div>

                        <style>
                            {`
  /* Slow spin animation for outer ring */
  @keyframes spin-slow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .animate-spin-slow {
    animation: spin-slow 15s linear infinite;
  }

  /* Bounce / scale animation for dots */
  @keyframes bounce-slow {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.5); opacity: 1; }
  }
  .animate-bounce-slow {
    animation: bounce-slow 2.5s ease-in-out infinite;
  }

  /* Delay utility classes */
  .delay-200 { animation-delay: 0.2s; }
  .delay-400 { animation-delay: 0.4s; }
  .delay-600 { animation-delay: 0.6s; }
  .delay-800 { animation-delay: 0.8s; }
  .delay-1000 { animation-delay: 1s; }
`}
                        </style>


                        {/* TEXT PART */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-5">
                               Mr. Sameer Chopra
                            </h2>

                            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                                <p>
                                    Tradeium International is an indenting and trading company.
                                </p>

                                <p>
                                    We provide holistic solutions for sourcing Ferrous and non-ferrous metals and selective minor
                                    metals taking care of all the processes in the supply chain, from warehousing to logistics
                                    facilities.
                                </p>

                                <p>
                                    We stand tall among the prominent traders, importers and suppliers of non-ferrous metal
                                    segments in India.
                                </p>

                                <p>
                                    Over the years we have gained a comprehensive understanding of trade, sourcing and supply
                                    chain processes of the non-ferrous metal industry making us experts.
                                </p>

                                <p>
                                    With 17 years of immersion in the metals trade we have gained a deep understanding of
                                    sourcing networks and a passion for providing the best services.
                                </p>

                                <p>
                                    🔹 <span className="text-blue-400">Strength & Durability :</span> Products engineered for performance. <br />
                                    🔹 <span className="text-blue-400">Integrity & Trust:</span> Business built on transparency. <br />
                                    🔹 <span className="text-blue-400">Innovation & Excellence:</span> Continuous improvement in every process.<br />
                                    🔹 <span className="text-blue-400">Customer Focus:</span> Solutions tailored to client needs. <br />
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <QuoteSection />
            <section className="min-h-screen pt-44 bg-neutral-950 text-white flex items-center justify-center px-6 py-16">
                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="relative flex justify-center">
                        <div className="absolute inset-0 bg-neutral-900 rounded-3xl -z-10 scale-95" />
                        <img
                            src={photo}
                            alt="Office Building"
                            className="rounded-3xl shadow-2xl w-full max-w-lg lg:max-w-xl xl:max-w-2xl object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <p className="uppercase tracking-widest text-sm text-neutral-400">Product Overview </p>

                        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                            Rolled Coils and Plates
                        </h1>

                        <p className="text-neutral-400 max-w-xl">
                            HRC can be sold for various applications or can be
                            further processed to make cold rolled coils. The cold
                            rolling is performed usually at room temperature. It
                            enhances the mechanical properties as well as
                            surface finish.
                            CRC can also have a variety of applications mainly in
                            construction and automotive. It can also be further
                            processed to make corrosion resistance steel known
                            as coated steel. Hot dip-galvanized (HDG) is one of
                            the main types of metallic coated steel, which is
                            coated with zinc to protect steel against corrosion
                            by limiting its exposure to the external environment.
                            Metallic coated steel can be further processed to make organic coated steel also known as
                            color coated steel or pre-painted galvanized iron (PPGI).
                        </p>

                        <ul className="space-y-3">
                            {[
                                "Branches of large holdings",
                                "Local companies",
                                "Startups, etc.",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-neutral-300">
                                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-neutral-800">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <a href="/#our-services">
                            <button className="mt-4 px-8 py-3 rounded-xl bg-blue-500 text-black font-medium hover:bg-blue-700 transition">
                                Our Services
                            </button>
                        </a>
                    </div>
                </div>
            </section>
            <ContactSection />
        </>
    );
}
