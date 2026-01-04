import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    feedback:
      "This platform has completely changed the way I learn. The courses are well-structured and easy to follow.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    feedback:
      "Amazing instructors and practical content. I was able to upgrade my skills and land a new job.",
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Digital Marketer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 4,
    feedback:
      "Flexible learning schedule and great support. Highly recommended for professionals.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="pt-20 pb-28 bg-base-100 text-base-content transition-colors duration-500">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="text-center mb-14">
          <span className="bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1 rounded-full">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-tight">
            What Our Students Say
          </h2>
          <p className="mt-4 text-[16px] leading-[26px] max-w-2xl mx-auto">
            Hear from learners who have transformed their careers through our
            courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#f7f7fb] rounded-[18px] p-8
                         shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                         hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                         transition-all duration-300 flex flex-col"
            >
              {/* Rating */}
              <div className="flex gap-1 text-yellow-400 mb-5">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-[16px] leading-[28px] text-gray-700 mb-8">
                “{item.feedback}”
              </p>

              {/* User */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow"
                />

                <div>
                  <h4 className="text-[16px] font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-[14px] text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
