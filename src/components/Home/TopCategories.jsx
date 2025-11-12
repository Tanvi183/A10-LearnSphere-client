import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const categories = [
  { name: "Graphic Design", count: 22, icon: "🎨" },
  { name: "Finance", count: 41, icon: "💰" },
  { name: "Development", count: 29, icon: "💻" },
  { name: "Marketing", count: 31, icon: "📩" },
  { name: "Life Style", count: 23, icon: "👠" },
  { name: "Management", count: 19, icon: "👥" },
];

function TopCategories() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.params.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="bg-base-100 py-20 text-center">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10">
          <span className="bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1 rounded-full">
            Trending Categories
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4">
            Top Category We Have
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-500">
            When known printer took a galley of type scrambled make
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="bg-[#f5f0e6] rounded-full py-10">
          <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1.2}
              loop={true}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                480: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="pb-8"
            >
              {categories.map((cat, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col items-center justify-center bg-white rounded-full w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto border border-gray-100 shadow hover:shadow-md transition relative">
                    <div className="text-4xl mb-2">{cat.icon}</div>
                    <h3 className="text-gray-800 font-semibold text-base md:text-lg">
                      {cat.name}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm mt-1">
                      ({cat.count})
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              ref={prevRef}
              className="absolute left-2 lg:left-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 rounded-full p-2 sm:p-3 shadow hover:bg-yellow-500 transition z-10"
            >
              <FaArrowLeft />
            </button>
            <button
              ref={nextRef}
              className="absolute right-2 lg:right-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 rounded-full p-2 sm:p-3 shadow hover:bg-yellow-500 transition z-10"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopCategories;
