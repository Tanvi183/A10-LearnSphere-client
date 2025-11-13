import React, { use, useEffect, useState } from "react";
// import { Clock, Users, Star } from "lucide-react";
import CourseCard from "../components/Courses/CourseCard";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = use(AuthContext);
  const [courses, setcourses] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/courses?email=${user.email}`, {
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setcourses(data);
        });
    }
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      {/* Top Summary Section */}
      <h2 className="text-xl font-semibold mb-6">In Progress Courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
