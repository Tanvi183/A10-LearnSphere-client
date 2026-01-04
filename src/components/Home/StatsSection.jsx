import React from "react";
import CountUp from "react-countup";

const stats = [
  { value: 4, suffix: "K+", label: "Active Students" },
  { value: 10, suffix: "+", label: "Categories Courses" },
  { value: 20, suffix: "", label: "Best Professors" },
  { value: 10, suffix: "+", label: "Award Achieved" },
];

const StatsSection = () => {
  return (
    <section className="my-20 bg-base-100 text-base-content transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-4 py-20  bg-[#2b2a6f] rounded-[40px] shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center text-white">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                index !== stats.length - 1 ? "md:border-r border-white/30" : ""
              }`}
            >
              <h2 className="text-5xl font-extrabold">
                <CountUp end={item.value} duration={2.5} />
                {item.suffix}
              </h2>

              <p className="mt-3 text-lg font-medium opacity-90">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
