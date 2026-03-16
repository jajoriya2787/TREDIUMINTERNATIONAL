import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import From from "./From";
import c1 from "../assets/call.jpeg"

function Touch() {
    return (
        <>
            {/* ===== HERO SECTION ===== */}
            <section className="w-full pt-28 md:pt-40 bg-gradient-to-r from-neutral-900 via-neutral-950 to-black py-16 md:py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-12">

                    {/* LEFT CONTENT */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                            Get In Touch
                        </h2>

                        <p className="mt-5 text-neutral-300 max-w-xl mx-auto lg:mx-0 leading-relaxed text-sm sm:text-base">
                            Get in touch with us for inquiries, support, or collaboration.
                            Reach out via phone, email, or our contact form—we're here to
                            assist you!
                        </p>

                        <div className="flex justify-center lg:justify-start">
                            <a href="tel:+91 9982324903">
                                <button className="mt-8 px-7 py-3 border-2 border-blue-500 rounded-full text-blue-400 font-semibold flex items-center gap-3 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                    Contact Us
                                    <span className="bg-blue-500 text-white p-2 rounded-full">
                                        <FaArrowRightLong />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex-1 relative w-full">
                        <div
                            className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative w-full h-[240px] sm:h-[280px] md:h-[320px]"
                            style={{
                                backgroundImage:
                                    `url(${c1})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="absolute inset-0 bg-black/30"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CONTACT INFO SECTION ===== */}
            <section className="py-20 bg-neutral-950 text-white">
                <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

                    {/* ADDRESS */}
                    <a
                        href="https://www.google.com/maps/search/Capital+Galleria+Mall+Jaipur/@26.9248835,75.7040721,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center group"
                    >
                        <div className="w-28 h-28 rounded-2xl border border-neutral-700 bg-neutral-900 flex items-center justify-center text-blue-400 text-3xl transition">
                            <FaMapMarkerAlt />
                        </div>

                        <h3 className="mt-6 text-xl font-semibold text-white">Address</h3>

                        <p className="mt-3 text-neutral-400 text-sm leading-relaxed text-center transition">
                            Capital Galleria Mall - Jaipur<br />Rajasthan - India
                        </p>
                    </a>

                    {/* CONTACT */}
                    <div className="flex flex-col items-center">
                        <a href="tel:+91 9982324903">
                            <div className="w-28 h-28 rounded-2xl border border-neutral-700 bg-neutral-900 flex items-center justify-center text-blue-400 text-3xl">
                                <FaPhoneAlt />
                            </div>
                        </a>

                        <h3 className="mt-6 text-xl font-semibold text-white">Contact Us</h3>

                        <p className="mt-3 text-neutral-400 text-sm">
                            Tel : +91 9982324903
                        </p>
                    </div>

                    {/* EMAIL */}
                    <a href="mailto:sameerchopra@tradeiuminternational.com">
                        <div className="flex flex-col items-center">
                            <div className="w-28 h-28 rounded-2xl border border-neutral-700 bg-neutral-900 flex items-center justify-center text-blue-400 text-3xl">
                                <FaEnvelope />
                            </div>

                            <h3 className="mt-6 text-xl font-semibold text-white">Email Us</h3>

                            <p className="mt-3 text-neutral-400 text-sm">
                                sameerchopra@tradeiuminternational.com
                            </p>
                        </div>
                    </a>

                </div>
            </section>

            {/* ===== MAP + ENQUIRY FORM SECTION ===== */}
            <From />
        </>
    );
}

export default Touch;
