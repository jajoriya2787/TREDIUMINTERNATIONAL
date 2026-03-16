import React, { useState, useEffect } from "react";

function WelcomeForm() {
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Page load modal
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // 🔥 Disable scroll when modal open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const handleSubmit = () => {
    if (!query && !phone && !email) {
      alert("Please fill at least one field!");
      return;
    }

    const existingData = JSON.parse(localStorage.getItem("queries")) || [];
    const newData = { query, phone, email, time: new Date().toLocaleString() };
    localStorage.setItem("queries", JSON.stringify([...existingData, newData]));

    setQuery("");
    setPhone("");
    setEmail("");
    setShowModal(false);

    alert("Thank you! Your data has been saved.");
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 w-96 relative animate-slide-in border border-gray-700">

            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-100 text-2xl font-bold"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            {/* Header */}
            <h2 className="text-2xl font-bold mb-2 text-white">
              Leaving so soon?
            </h2>
            <p className="text-gray-300 mb-4">
              Tell us what you were looking for!
            </p>

            {/* Inputs */}
            <textarea
              placeholder="Share your query..."
              className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg mb-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <input
              type="text"
              placeholder="Your contact number"
              className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg mb-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg mb-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Submit Button */}
            <button
              className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* Animation */}
      <style>
        {`
          @keyframes slide-in {
            0% { transform: translateY(-50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-slide-in {
            animation: slide-in 0.3s ease-out;
          }
        `}
      </style>
    </>
  );
}

export default WelcomeForm;
