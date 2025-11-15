import React, { useEffect, useState } from "react";
import CourseCard from "../components/Courses/CourseCard";
import useTitle from "../hooks/useTitle";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyEnrollments = () => {
  useTitle("Enrolled Courses");
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [courses, setCourses] = useState([]);
  // console.log(courses);

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/enrollment?email=${user.email}`).then((data) => {
        setCourses(data.data);
      });
    }
  }, [user, axiosSecure]);

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
