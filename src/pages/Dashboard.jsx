import React, { use, useEffect, useState } from "react";
// import { Clock, Users, Star } from "lucide-react";
import CourseCard from "../components/Courses/CourseCard";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = use(AuthContext);
  const [courses, setcourses] = useState([]);

  // const courses = [
  //   {
  //     id: 1,
  //     title: "Learning JavaScript With Imagination",
  //     category: "Development",
  //     level: "Expert",
  //     type: "Laravel Pro",
  //     instructor: "David Millar",
  //     rating: 4.8,
  //     reviews: 22,
  //     progress: 88,
  //     image: "https://i.ibb.co.com/qL1J2b5d/demo-app-6.webp",
  //     duration: "11h 20m",
  //     lessons: 5,
  //     students: 22,
  //   },
  //   {
  //     id: 2,
  //     title: "The Complete Graphic Design for Beginners",
  //     category: "Design",
  //     level: "Beginner",
  //     type: "Crush Course",
  //     instructor: "Wilson",
  //     rating: 4.5,
  //     reviews: 202,
  //     progress: 70,
  //     image: "https://i.ibb.co.com/qL1J2b5d/demo-app-6.webp",
  //     duration: "70h 45m",
  //     lessons: 60,
  //     students: 202,
  //   },
  //   {
  //     id: 3,
  //     title: "Learning JavaScript With Imagination",
  //     category: "Data Science",
  //     level: "Marketing",
  //     type: "Pro Expert",
  //     instructor: "Warren",
  //     rating: 4.8,
  //     reviews: 66,
  //     progress: 95,
  //     image: "https://i.ibb.co.com/qL1J2b5d/demo-app-6.webp",
  //     duration: "18h 20m",
  //     lessons: 8,
  //     students: 66,
  //   },
  // ];

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
