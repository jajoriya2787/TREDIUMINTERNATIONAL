import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Tredium() {
    return (
        <>
            <section className="w-full bg-white py-14 md:py-24">
                <div className="max-w-7xl mx-auto px-4 md:px-8">

                    {/* TOP TITLE */}
                    <h2 className="text-blue-700 text-2xl md:text-3xl font-semibold mb-12">
                        Treadium Group
                    </h2>

                    {/* CONTENT GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

                        {/* LEFT QUOTE TEXT */}
                        <div className="relative">
                            <div className="text-blue-200 text-7xl absolute -top-8 -left-4 font-serif">
                                “
                            </div>

                            <p className="text-xl md:text-2xl lg:text-3xl font-semibold italic leading-snug text-gray-900 pl-10">
                                We provide holistic solutions for sourcing Ferrous and non-ferrous metals and selective minor
                                metals taking care of all the processes in the supply chain, from warehousing to logistics
                                facilities.
                            </p>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Tradeium International is an indenting and trading company.
                            </h3>

                            <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-8">
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

                            {/* BUTTON */}
                            <a href="/companyOver">
                                <button className="flex items-center gap-3 px-6 py-3 border border-blue-700 text-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition">
                                    Overview
                                    <span className="bg-blue-700 text-white p-2 rounded-full group-hover:bg-white group-hover:text-blue-700">
                                        <FaArrowRight size={14} />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tredium