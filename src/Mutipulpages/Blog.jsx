import React, { useEffect, useState } from "react";
import { FaEye, FaArrowRight } from "react-icons/fa";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import b1 from "../assets/slider1.jpeg";
import b2 from "../assets/slider5.jpeg";
import b3 from "../assets/slider3.jpeg";
import b4 from "../assets/slider4.jpeg";
import b5 from "../assets/slider2.jpeg";
import b6 from "../assets/slider6.jpeg";

const blogs = [
  {
    id: 1,
    title: "Supplier and Stockiest of MS Sheets, Plates & Coils",
    category: "Industry",
    date: "10 Feb 2026",
    desc: "Mild Steel (MS) Sheets & Coils are highly versatile and widely used in various industrial and commercial applications.",
    image: b1,
  },
  {
    id: 2,
    title: "Supplier and Stockiest  high-yield structural steel",
    category: "Industry",
    date: "5 Feb 2026",
    desc: "Boiler Quality Plates are specially manufactured to withstand high pressure and high temperature conditions.",
    image: b2,
  },
  {
    id: 3,
    title: "Supplier and Stockiest  CRCA Coils & Sheets",
    category: "Market",
    date: "1 Feb 2026",
    desc: "CR (Cold Rolled) and HR (Hot Rolled) Sheets & Coils are widely used steel products.",
    image: b3,
  },
  {
    id: 4,
    title: "Supplier and Stockiest  Galvanized Coils & Sheets",
    category: "Industry",
    date: "15 Jan 2026",
    desc: "Galvanized Sheets & Coils are steel products coated with zinc to prevent rusting.",
    image: b4,
  },
  {
    id: 5,
    title: "Supplier and Stockiest  MS Long Products",
    category: "Industry",
    date: "20 Jan 2026",
    desc: "Stainless Steel Long Products include round bars, flats, angles, and rods.",
    image: b5,
  },
  {
    id: 6,
    title: "Supplier and Stockiest  Stainless Steel Coils & Sheets",
    category: "Industry",
    date: "20 Jan 2026",
    desc: "Stainless Steel Sheets & Coils are premium flat-rolled products with excellent corrosion resistance.",
    image: b6,
  },
];

function Blog() {
  const [views, setViews] = useState({});
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("steelBlogViews")) || {};
    setViews(saved);
  }, []);

  const handleView = (blog) => {
    setViews((prev) => {
      const updated = {
        ...prev,
        [blog.id]: (prev[blog.id] || 0) + 1,
      };
      localStorage.setItem("steelBlogViews", JSON.stringify(updated));
      return updated;
    });

    setSelectedBlog(blog);
  };

  const categories = ["All", ...new Set(blogs.map((b) => b.category))];

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  return (
    <>
      <section className="w-full mt-24 bg-gradient-to-b from-gray-900 to-black py-20 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-wide">
              Industry Insights & Updates
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
            <p className="text-gray-400 mt-4">
              Latest news and trends in steel supply & industrial market
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 border text-sm transition ${
                  activeCategory === cat
                    ? "bg-blue-500 text-black border-blue-500"
                    : "border-white hover:bg-blue-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {filteredBlogs.map((blog) => {
              const blogViews = views[blog.id] || 0;
              const isTrending = blogViews >= 10;

              return (
                <SwiperSlide key={blog.id} className="flex">
                  <div
                    onClick={() => handleView(blog)}
                    className="flex flex-col w-full h-[480px] bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition duration-300 cursor-pointer group"
                  >
                    {/* Image */}
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                    />

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between text-sm text-gray-400 mb-2">
                        <span>{blog.date}</span>
                        <span>{blog.category}</span>
                      </div>

                      <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
                        {blog.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-6 line-clamp-3 min-h-[60px]">
                        {blog.desc}
                      </p>

                      <div className="flex justify-between items-center text-sm mt-auto">
                        <div className="flex items-center gap-2 text-gray-300">
                          <FaEye />
                          <span>{blogViews} Views</span>
                        </div>

                        <div className="flex items-center gap-2 text-blue-500 group-hover:translate-x-2 transition">
                          Read More <FaArrowRight />
                        </div>
                      </div>

                      {isTrending && (
                        <div className="mt-4 text-xs rounded bg-blue-500 text-black px-3 py-1 inline-block font-semibold">
                          Trending Article
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-900 text-white max-w-2xl w-full rounded-xl overflow-hidden relative">
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 text-2xl hover:text-red-500"
            >
              ❌
            </button>

            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>{selectedBlog.date}</span>
                <span>{selectedBlog.category}</span>
              </div>

              <h2 className="text-2xl font-bold mb-4">
                {selectedBlog.title}
              </h2>

              <p className="text-gray-300 leading-relaxed">
                {selectedBlog.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Blog;
