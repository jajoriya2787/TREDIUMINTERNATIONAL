import React from 'react';
import { FaLinkedinIn, FaTwitter ,FaInstagram, FaEnvelope, FaQuoteLeft } from 'react-icons/fa';
import photo from '../assets/photo.jpeg';

const LeadershipSection = () => {
  const headData = {
    name: "Mr. Sameer Chopra",
    position: "director",
    image: photo,
    description: "Tradeium International is a proprietorship enterprise established in January 2023, formed through partnerships with more than six renowned companies in the steel sector. Led by Sameer Chopra, an industry professional with over 20 years of experience, the enterprise operates across North India from its Jaipur headquarters. Our reputation is founded on dedication, integrity, and a commitment to delivering cost-effective supply chain solutions through stringent quality standards.",
    email: "sameer@tradeium.com" // Update actual email
  };

  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-20 text-center">
          <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 bg-blue-50 px-4 py-1 rounded-full">
            Our Visionary
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            The Driving Force Behind <span className="text-blue-900 italic">Tradeium</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-900 to-blue-600 rounded-full mt-6"></div>
        </div>

        {/* Profile Card */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Image with Decorative Border */}
          <div className="w-full lg:w-5/12 group relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-900 to-transparent rounded-2xl opacity-10 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={headData.image} 
                alt={headData.name} 
                className="w-full h-[650px] object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Right: Content Section */}
          <div className="w-full lg:w-7/12">
            <div className="flex items-center gap-2 text-blue-900 mb-6">
              <FaQuoteLeft size={40} className="opacity-20" />
            </div>

            <h3 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
              {headData.name}
            </h3>
            <p className="text-blue-600 font-bold uppercase tracking-[0.15em] text-sm mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-blue-600"></span>
              {headData.position}
            </p>

            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                {headData.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 py-8 border-y border-gray-100">
                <div>
                  <h4 className="font-bold text-gray-900">Integrity</h4>
                  <p className="text-sm text-gray-500">Built on trust & reliability</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Growth</h4>
                  <p className="text-sm text-gray-500">Continual improvement</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <a 
                  href="mailto:sameerchopra@tradeiuminternational.com"
                  className="group relative inline-flex items-center gap-3 bg-blue-900 text-white px-10 py-4 rounded-full font-bold overflow-hidden transition-all hover:bg-blue-800 shadow-xl"
                >
                  <FaEnvelope className="relative z-10" />
                  <span className="relative z-10 text-sm">Send a Mail</span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>

                <div className="flex gap-3">
                    <a href="https://www.linkedin.com/in/tradeium-international-03943a205/recent-activity/all/">
                   <SocialIcon icon={<FaLinkedinIn />} color="hover:bg-[#0077b5]" />
                    </a>
                    <a href="https://www.instagram.com/tradeiuminternational/">
                   <SocialIcon icon={<FaInstagram />} color="hover:bg-[#1DA1F2]" />
                    </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Stylish Social Icon
const SocialIcon = ({ icon, color }) => (
  <button className={`w-12 h-12 flex items-center justify-center bg-gray-50 text-gray-400 rounded-full transition-all duration-300 ${color} hover:text-white hover:-translate-y-1 shadow-sm`}>
    {icon}
  </button>
);

export default LeadershipSection;