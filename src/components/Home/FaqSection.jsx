import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "What is Online Learning and How Does It Work?",
    answer:
      "Online learning allows you to learn at your own pace from anywhere. Courses are delivered via video lessons, slides, and downloadable resources.",
  },
  {
    id: 2,
    question: "How Do I Sign Up for a Course?",
    answer:
      "Visit the Courses page, choose your course, and click Enroll. You’ll need to create an account or sign in to complete the process.",
  },
  {
    id: 3,
    question: "Can I Get a Refund After Enrollment?",
    answer:
      "Yes — refunds are available within the first 7 days after purchase as long as you haven’t completed more than 10% of the course content.",
  },
  {
    id: 4,
    question: "Do I Get a Certificate After Completion?",
    answer:
      "Yes. Upon finishing all modules of a course, you’ll receive a certificate of completion which you can download.",
  },
];

const FaqItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <h4 className="text-lg font-semibold ">{faq.question}</h4>

        {isOpen ? (
          <FaMinus className="text-indigo-600" />
        ) : (
          <FaPlus class="text-indigo-600" />
        )}
      </button>

      {isOpen && <p className="text-base pb-4">{faq.answer}</p>}
    </div>
  );
};

const FaqSection = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="py-20 bg-base-100 text-base-content transition-colors duration-500">
      <div className="max-w-[1320px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1 rounded-full">
            FAQs
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mt-4 ">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-lg  max-w-2xl mx-auto">
            Answers to common questions about our courses and learning platform.
          </p>
        </div>

        {/* Accordion Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {faqData.map((faq) => (
            <FaqItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
