import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const countries = [
  { code: "+91", label: "🇮🇳 India", length: 10 },
  { code: "+1", label: "🇺🇸 USA", length: 10 },
  { code: "+44", label: "🇬🇧 UK", length: 10 },
  { code: "+971", label: "🇦🇪 UAE", length: 9 },
  { code: "+61", label: "🇦🇺 Australia", length: 9 },
];

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    mobile: "",
    email: "",
    message: "",
    captcha: false,
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  // HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    const selectedCountry = countries.find(
      (c) => c.code === formData.countryCode
    );

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (formData.mobile.length !== selectedCountry.length) {
      newErrors.mobile = `Enter valid ${selectedCountry.label} number`;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.captcha) newErrors.captcha = "Please verify captcha";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const today = new Date().toLocaleDateString("en-IN");

    const finalData = {
      name: formData.name,
      email: formData.email,
      fullMobile: `${formData.countryCode}${formData.mobile}`,
      message: formData.message,
      date: today,
    };

    const myNumber = "919982324903"; // ⚠️ Apna WhatsApp number with country code

    const text =
      `*New Enquiry*%0a%0a` +
      `👤 Name: ${finalData.name}%0a` +
      `📞 Mobile: ${finalData.fullMobile}%0a` +
      `📧 Email: ${finalData.email}%0a` +
      `💬 Message: ${finalData.message || "No message"}%0a` +
      `📅 Date: ${finalData.date}`;

    window.open(`https://wa.me/${myNumber}?text=${text}`, "_blank");

    setShowPopup(true);

    setFormData({
      name: "",
      countryCode: "+91",
      mobile: "",
      email: "",
      message: "",
      captcha: false,
    });

    setErrors({});
  };

  return (
    <>
      <section className="w-full bg-neutral-950 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* MAP SECTION */}
          {/* MAP SECTION */}
          <div className="w-full h-[420px] rounded-2xl overflow-hidden border border-neutral-800">
            <iframe
              src="https://www.google.com/maps?q=Capital+Galleria+Mall+Jaipur&output=embed"
              className="w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Capital Galleria Mall Map"
            />
          </div>


          {/* FORM SECTION */}
          <div className="border border-neutral-700 bg-neutral-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-400">
              Enquiry Form
            </h3>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">

              {/* NAME */}
              <div>
                <label className="text-sm">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-neutral-600 bg-transparent py-2 outline-none"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs">{errors.name}</p>
                )}
              </div>

              {/* MOBILE */}
              <div>
                <label className="text-sm">Mobile *</label>
                <div className="flex gap-2 border-b border-neutral-600">
                  <select
                    value={formData.countryCode}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        countryCode: e.target.value,
                        mobile: "",
                      })
                    }
                    className="bg-transparent text-sm outline-none"
                  >
                    {countries.map((c) => (
                      <option key={c.code} value={c.code} className="text-black">
                        {c.label} ({c.code})
                      </option>
                    ))}
                  </select>

                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => {
                      const onlyNum = e.target.value.replace(/\D/g, "");
                      const maxLen =
                        countries.find(
                          (c) => c.code === formData.countryCode
                        )?.length || 10;

                      if (onlyNum.length <= maxLen) {
                        setFormData({
                          ...formData,
                          mobile: onlyNum,
                        });
                      }
                    }}
                    className="w-full bg-transparent py-2 outline-none"
                  />
                </div>
                {errors.mobile && (
                  <p className="text-red-400 text-xs">{errors.mobile}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-neutral-600 bg-transparent py-2 outline-none"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs">{errors.email}</p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-sm">Message</label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-b border-neutral-600 bg-transparent py-2 outline-none resize-none"
                />
              </div>

              {/* CAPTCHA */}
              <label className="flex items-center gap-3 border border-neutral-600 p-3 rounded-md w-fit">
                <input
                  type="checkbox"
                  name="captcha"
                  checked={formData.captcha}
                  onChange={handleChange}
                />
                I'm not a robot
              </label>
              {errors.captcha && (
                <p className="text-red-400 text-xs">{errors.captcha}</p>
              )}

              <button
                type="submit"
                className="px-8 py-3 border-2 border-blue-500 rounded-full text-blue-400 hover:bg-blue-600 hover:text-white transition"
              >
                Submit →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-neutral-900 border border-neutral-700 text-white rounded-2xl p-8 max-w-sm w-full text-center">
            <FaCheckCircle className="text-5xl mx-auto mb-4 text-green-400" />
            <h3 className="text-xl font-semibold mb-2">Success 🎉</h3>
            <p className="text-sm text-neutral-300 mb-6">
              Thank you! We will contact you soon.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
