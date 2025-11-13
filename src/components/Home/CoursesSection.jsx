import { Link } from "react-router";
import CourseCard from "../Courses/CourseCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CoursesSection = () => {
  const courses = [
    {
      image: "https://i.ibb.co.com/TqHN9JPx/demo-app-1.webp",
      category: "Business",
      rating: "4.8",
      title: "Financial Analyst Training & Investing Course",
      instructor: "Robert Fox",
      price: 12.0,
    },
    {
      image: "https://i.ibb.co.com/HDxxz26J/demo-app-2.webp",
      title: "The Complete Graphic Design for Beginners",
      instructor: "Jenny Wilson",
      price: 19,
      category: "Design",
      rating: 4.5,
    },
    {
      image: "https://i.ibb.co.com/TqHN9JPx/demo-app-1.webp",
      category: "Business",
      rating: "4.8",
      title: "Financial Analyst Training & Investing Course",
      instructor: "Robert Fox",
      price: 12.0,
    },
    {
      image: "https://i.ibb.co.com/HDxxz26J/demo-app-2.webp",
      title: "The Complete Graphic Design for Beginners",
      instructor: "Jenny Wilson",
      price: 19,
      category: "Design",
      rating: 4.5,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="text-center pb-10">
          <span className="bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1 rounded-full">
            Top Class Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Explore Our World's Best Courses
          </h2>
          <p className="mt-2">
            When known printer took a galley of type scrambled edmake
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
          {courses.map((c, i) => (
            <CourseCard key={i} course={c} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link to="/courses" className="btn-primary">
            See All Courses <FaArrowRight></FaArrowRight>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
