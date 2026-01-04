import { useState } from "react";
import toast from "react-hot-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email address is required");
      return;
    }

    setError("");
    toast.success("Subscribed successfully!");
    setEmail("");
  };

  return (
    <section className="py-15 bg-[#2b2a6f] relative overflow-hidden">
      {/* Shapes */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-[1320px] mx-auto px-4">
        <div className="bg-base-100 rounded-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.12)] px-8 md:px-16 py-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[13px] font-semibold tracking-wide text-[#5751e1] uppercase mb-3">
                Stay Informed
              </span>

              <h2 className="text-md md:text-xl font-bold leading-tight mb-4">
                Want To Stay Informed about new courses and study
              </h2>
            </div>

            <div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your email address"
                  className={`w-full h-[50px] rounded-full px-5 text-[14px] border
                    ${
                      error
                        ? "border-red-500 focus:ring-red-400"
                        : "border-gray-200 focus:ring-[#5751e1]/40"
                    }
                    focus:outline-none focus:ring-2`}
                />

                <button
                  type="submit"
                  className=" w-full sm:w-auto h-[50px] px-4 rounded-full bg-yellow-500 text-[13px] sm:text-[14px] md:text-[15px] font-semibold hover:bg-yellow-600 transition flex-shrink-0 cursor-pointer"
                >
                  Subscribe Now
                </button>
              </form>

              {/* Error message */}
              {error && (
                <p className="mt-2 text-[12px] text-red-500">{error}</p>
              )}

              <p className="mt-4 text-[13px] ">
                * No spam, ever. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
