import React, { use, useEffect, useState } from "react";
import CourseCard from "../components/Courses/CourseCard";
import { AuthContext } from "../context/AuthContext";
import useTitle from "../hooks/useTitle";
import useAuth from "../hooks/useAuth";

const MyEnrollments = () => {
  useTitle("Enrolled Courses");
  const { user } = useAuth();
  const [courses, setcourses] = useState([]);
  // console.log(courses);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/enrollment?email=${user.email}`, {
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          setcourses(data);
        });
    }
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      <h2 className="text-xl font-semibold mb-6">
        My Enrolled courses ({courses.length})
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default MyEnrollments;
