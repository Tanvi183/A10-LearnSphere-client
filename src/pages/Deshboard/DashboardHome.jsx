import React, { useEffect, useState } from "react";
import {
  FaUsers,
  FaBookOpen,
  FaLayerGroup,
  FaClipboardList,
} from "react-icons/fa";
import useTitle from "../../hooks/useTitle";
import Loading from "../../components/Shared/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Banner from "../../components/Dashboard/Banner";

const DashboardHome = () => {
  useTitle("Dashboard");
  const axiosInstance = useAxiosSecure();

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalEnrollments, setTotalEnrollments] = useState(0);
  const [totalCourses, setTotalCourses] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [usersRes, enrollmentsRes, coursesRes, categoriesRes] =
          await Promise.all([
            axiosInstance.get("/users"), // admin → all users
            axiosInstance.get("/enrollment"), // all enrollments
            axiosInstance.get("/courses"),
            axiosInstance.get("/category"),
          ]);

        setTotalUsers(usersRes.data.length);
        setTotalEnrollments(enrollmentsRes.data.length);
        setTotalCourses(coursesRes.data.length);
        setTotalCategories(categoriesRes.data.length);
      } catch (error) {
        console.error("Dashboard data fetch error:", error);
      }
    };

    fetchDashboardData();
  }, [axiosInstance]);

  const stats = [
    {
      title: "Total Users",
      value: totalUsers,
      icon: <FaUsers />,
      color: "bg-indigo-500",
    },
    {
      title: "Total Enrollments",
      value: totalEnrollments,
      icon: <FaClipboardList />,
      color: "bg-green-500",
    },
    {
      title: "Total Courses",
      value: totalCourses,
      icon: <FaBookOpen />,
      color: "bg-yellow-500",
    },
    {
      title: "Total Categories",
      value: totalCategories,
      icon: <FaLayerGroup />,
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="mx-10 mt-10">
      <Banner></Banner>
      <h1 className="text-2xl font-semibold my-6">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="p-6 flex items-center gap-4">
              <div
                className={`p-4 rounded-full text-white text-2xl ${item.color}`}
              >
                {item.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <p className="text-2xl font-bold">{item.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
