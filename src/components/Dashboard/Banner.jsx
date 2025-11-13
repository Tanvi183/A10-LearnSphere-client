import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";

const Banner = () => {
  const { user } = use(AuthContext);

  return (
    <div className="w-full flex justify-center items-center bg-gradient-to-b from-indigo-500 to-indigo-800 py-10 px-4">
      <div className="relative w-full max-w-7xl bg-gradient-to-r from-indigo-800 to-indigo-600 rounded-2xl text-white overflow-hidden flex flex-col md:flex-row justify-between items-center p-8 md:p-12 shadow-lg">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src={user.photoURL}
              alt={user.displayName || "User"}
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <h3 className="text-xl font-semibold">
              {user.displayName || "User"}
            </h3>
            {/* <div className="flex items-center mt-1">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="text-sm text-gray-200 ml-2">(10 Reviews)</span>
            </div> */}
            <p className="text-sm text-gray-300 mt-2">{user.email}</p>
            <h1 className="text-3xl md:text-4xl font-extrabold mt-1">
              Learn With {user.displayName || "User"}
            </h1>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-8 md:mt-0 flex flex-col items-center md:items-end">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-md flex items-center gap-2 transition">
            Create A New Course
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
