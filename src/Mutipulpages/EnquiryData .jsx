import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

function EnquiryData() {
    const [data, setData] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("enquiryData")) || [];
        setData(storedData);
    }, []);

    const confirmClearData = () => {
        // localStorage.removeItem("enquiryData");
        setData([]);
        setShowPopup(false);
    };

    const deleteSingle = (indexToDelete) => {
        const updatedData = data.filter((_, i) => i !== indexToDelete);
        setData(updatedData);
        localStorage.setItem("enquiryData", JSON.stringify(updatedData));
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-black text-white py-28 mt-20 px-4">
            <div className="max-w-7xl mx-auto">

                {/* 🔹 Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
                    <div>
                        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Enquiry Dashboard
                        </h2>
                        <p className="text-sm sm:text-base text-gray-400 mt-1">
                            All customer enquiries in one place
                        </p>
                    </div>

                    {data.length > 0 && (
                        <button
                            onClick={() => setShowPopup(true)}
                            className="flex items-center gap-2 px-6 py-3 text-sm sm:text-base border border-red-500/40 text-red-400 rounded-full hover:bg-red-600 hover:text-white transition"
                        >
                            <FaTrash size={14} />
                            Clear All
                        </button>
                    )}
                </div>

                {/* 🔹 Empty State */}
                {data.length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-gray-400 py-32">
                        <div className="text-6xl mb-4">📭</div>
                        <p className="text-lg font-medium">No enquiries found</p>
                        <p className="text-sm mt-1">Submitted enquiries will appear here</p>
                    </div>
                ) : (
                    <>
                        {/* 💻 Desktop Table (700px se upar) */}
                        <div className="hidden lg:block overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                            <table className="w-full min-w-[600px] text-sm sm:text-base">
                                <thead className="bg-white/10 text-blue-300">
                                    <tr>
                                        <th className="p-2 sm:p-4">#</th>
                                        <th className="p-2 sm:p-4 text-left">Name</th>
                                        <th className="p-2 sm:p-4 text-left">Mobile</th>
                                        <th className="p-2 sm:p-4 text-left">Email</th>
                                        <th className="p-2 sm:p-4 text-left">Message</th>
                                        <th className="p-2 sm:p-4 text-left">Date</th>
                                        <th className="p-2 sm:p-4 text-center">Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {data.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="border-t border-white/10 hover:bg-white/5 transition"
                                        >
                                            <td className="p-2 sm:p-4 text-center text-blue-400">{index + 1}</td>
                                            <td className="p-2 sm:p-4">{item.name}</td>
                                            <td className="p-2 sm:p-4">{item.fullMobile}</td>
                                            <td className="p-2 sm:p-4 text-blue-300">{item.email}</td>
                                            <td className="p-2 sm:p-4 text-gray-300 truncate max-w-[150px] sm:max-w-[220px]">
                                                {item.message || "—"}
                                            </td>
                                            <td className="p-2 sm:p-4 text-xs sm:text-sm text-gray-400">
                                                {new Date(item.date).toLocaleString()}
                                            </td>
                                            <td className="p-2 sm:p-4 text-center">
                                                <button
                                                    onClick={() => deleteSingle(index)}
                                                    className="text-red-400 hover:text-red-600 transition"
                                                    title="Delete enquiry"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* 📱 Mobile Card View (700px se neeche) */}
                        <div className="lg:hidden flex flex-col gap-4">
                            {data.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-2 shadow-lg"
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="text-blue-400 font-bold">{index + 1}</span>
                                        <button
                                            onClick={() => deleteSingle(index)}
                                            className="text-red-400 hover:text-red-600 transition"
                                            title="Delete enquiry"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                    <p><strong>Name:</strong> {item.name}</p>
                                    <p><strong>Mobile:</strong> {item.fullMobile}</p>
                                    <p><strong>Email:</strong> <span className="text-blue-300">{item.email}</span></p>
                                    <p><strong>Message:</strong> {item.message || "—"}</p>
                                    <p className="text-xs text-gray-400">{new Date(item.date).toLocaleString()}</p>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* 🔥 Clear All Popup */}
            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                    <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 w-[90%] max-w-md text-center">
                        <div className="text-5xl mb-4">⚠️</div>
                        <h3 className="text-xl font-semibold mb-2">Delete all enquiries?</h3>
                        <p className="text-sm text-gray-400 mb-6">This action cannot be undone.</p>

                        <div className="flex gap-4 justify-center flex-wrap">
                            <button
                                onClick={() => setShowPopup(false)}
                                className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={confirmClearData}
                                className="px-5 py-2 rounded-full bg-red-600 hover:bg-red-700 transition"
                            >
                                Delete All
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default EnquiryData;
