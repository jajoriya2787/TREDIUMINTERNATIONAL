import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import TopHeader from "./Mianpart/Top";

function Header() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(true);
  const location = useLocation();

  const products = [
    { name: "Supplier and Stockiest of MS Sheets, Plates & Coils", path: "/legacy" },
    { name: "Supplier and Stockiest high-yield structural steel", path: "/boiler-quality-plates" },
    { name: "Supplier and Stockiest CRCA Coils & Sheets", path: "/cr-hr-sheets-coils" },
    { name: "Supplier and Stockiest Galvanized Coils & Sheets", path: "/galvanized-sheets-coils" },
    { name: "Supplier and Stockiest MS Long Products", path: "/stainless-steel-long-products" },
    { name: "Supplier and Stockiest Stainless Steel Coils & Sheets", path: "/stainless-steel-sheets-coils" },
  ];

  // ✅ Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  }, [location.pathname]);

  // ✅ Hide/Show Top Header on Scroll
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      if (window.scrollY > lastScroll && window.scrollY > 40) {
        setShowTop(false);
      } else {
        setShowTop(true);
      }
      lastScroll = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Top Header */}
      <div
        className={`transition-all duration-500 ${
          showTop ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <TopHeader />
      </div>

      {/* Main Header */}
      <div className="bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between">
          
          {/* ✅ Logo & Brand Name (Responsive for ALL screens) */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
            <img
              src="/src/assets/sceen2-removebg-preview (1).png"
              alt="Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-xl lg:text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all">
                TRADEIUM
              </span>
              <span className="text-[8px] sm:text-[10px] lg:text-xs tracking-[0.15em] text-blue-500 font-bold">
                INTERNATIONAL
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex gap-4 lg:gap-8 text-[11px] lg:text-xs xl:text-sm uppercase text-gray-200 items-center font-medium">
              <NavItem to="/" text="Home" />
              <NavItem to="/companyOver" text="Company Overview" />
              <NavItem to="/blog" text="Blog" />

              {/* Products Dropdown */}
              <li className="relative group cursor-pointer">
                <span className="flex items-center gap-1 hover:text-white transition">
                  Products <span className="text-[10px]">▼</span>
                </span>
                <ul className="absolute left-0 top-full mt-4 w-72 bg-zinc-950 border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {products.map((item, i) => (
                    <li key={i}>
                      <Link
                        to={item.path}
                        className="block m-2 px-4 py-2 text-gray-300 rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-500 hover:to-pink-500 transition text-xs normal-case"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <NavItem to="/touch" text="Get In Touch" />
            </ul>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2 z-50"
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-[8px]" : ""}`} />
            <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-[8px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden bg-zinc-950/95 backdrop-blur-2xl overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col text-sm uppercase text-gray-200 py-6">
          <MobileLink to="/" text="Home" setOpen={setOpen} />
          <MobileLink to="/companyOver" text="Company Overview" setOpen={setOpen} />
          <MobileLink to="/blog" text="Blog" setOpen={setOpen} />
          <MobileProductMenu products={products} setOpen={setOpen} />
          <MobileLink to="/touch" text="Get In Touch" setOpen={setOpen} />
        </ul>
      </div>
    </header>
  );
}

/* Desktop Nav Item Helper */
const NavItem = ({ to, text }) => {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <li className="relative group whitespace-nowrap">
      <Link
        to={to}
        className={`transition-colors duration-300 ${active ? "text-white font-bold" : "text-gray-300 hover:text-white"}`}
      >
        {text}
      </Link>
      <span className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 transition-all duration-500 ${active ? "w-full" : "w-0 group-hover:w-full"}`}></span>
    </li>
  );
};

/* Mobile Products Dropdown Helper */
const MobileProductMenu = ({ products, setOpen }) => {
  const [openSub, setOpenSub] = useState(false);

  return (
    <li className="border-b border-white/5">
      <button
        onClick={() => setOpenSub(!openSub)}
        className="w-full flex justify-between items-center px-8 py-4 text-gray-300"
      >
        Products
        <span className={`text-[10px] transition-transform duration-300 ${openSub ? "rotate-180" : ""}`}>▼</span>
      </button>

      <ul className={`bg-white/5 overflow-hidden transition-all duration-300 ${openSub ? "max-h-[600px] py-2" : "max-h-0"}`}>
        {products.map((item, i) => (
          <li key={i} className="px-10 py-2">
            <Link
              to={item.path}
              onClick={() => setOpen(false)}
              className="text-xs text-gray-400 hover:text-white normal-case block"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

/* Mobile Link Helper */
const MobileLink = ({ to, text, setOpen }) => (
  <li className="border-b border-white/5">
    <Link
      to={to}
      onClick={() => setOpen(false)}
      className="block px-8 py-4 text-gray-300 hover:bg-white/5 transition"
    >
      {text}
    </Link>
  </li>
);

export default Header;