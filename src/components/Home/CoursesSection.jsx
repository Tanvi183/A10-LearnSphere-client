import { Link } from "react-router";
import CourseCard from "../Courses/CourseCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { use } from "react";

const CoursesSection = ({ latestProductsPromise }) => {
  const courses = use(latestProductsPromise);
  // console.log(courses);

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

        <div className="mt-10  grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
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
