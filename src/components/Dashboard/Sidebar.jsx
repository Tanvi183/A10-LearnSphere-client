import React, { use } from "react";
import { FaHome, FaUser, FaSignOutAlt, FaBook } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { NavLink } from "react-router";

const Sidebar = () => {
  const { signOutUser } = use(AuthContext);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser()
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Logged Out!",
              text: "You have been successfully logged out.",
              showConfirmButton: false,
              timer: 1500, // auto-close after 1.5 seconds
            });
          })
          .catch((error) => {
            console.error("Logout Error:", error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong during logout. Please try again.",
            });
          });
      }
    });
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: <FaHome />,
      path: "/dashboard",
    },
    {
      title: "Enrolled Courses",
      icon: <FaBook />,
      path: "/enrolled-courses",
    },
    {
      title: "My Profile",
      icon: <FaUser />,
      path: "/profile",
    },
  ];

  return (
    <aside className="min-h-screen w-72 bg-white border-r shadow-sm p-6">
      <div className="space-y-1">
        {menuItems.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center w-full gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
            ${
              isActive
                ? "bg-indigo-100 text-indigo-600"
                : "text-gray-700 hover:bg-gray-100"
            }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            {item.title}
          </NavLink>
        ))}
      </div>

      {/* User Section */}
      <div className="mt-8">
        <h3 className="text-xs font-semibold text-gray-400 uppercase mb-2">
          User
        </h3>
        <div className="space-y-1">
          <button
            onClick={handleLogOut}
            className="flex items-center w-full gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all"
          >
            <span className="text-lg">
              <FaSignOutAlt />
            </span>
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
