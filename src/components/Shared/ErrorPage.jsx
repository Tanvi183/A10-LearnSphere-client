import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h1 className="text-[150px] font-extrabold text-primary leading-none mb-4 flex space-x-2">
        <span className="transform rotate-[-6deg]">4</span>
        <span className="relative">
          <span className="inline-block relative">
            <span className="text-primary">0</span>
            <span className="absolute inset-0 flex flex-col items-center justify-center text-black text-4xl">
              <span className="flex space-x-2">
                <span className="w-3 h-3 bg-black rounded-full"></span>
                <span className="w-3 h-3 bg-black rounded-full mt-1"></span>
              </span>
              <span className="mt-2 w-6 h-1 bg-black rounded-full rotate-[20deg]"></span>
            </span>
          </span>
        </span>
        <span className="transform rotate-[6deg]">4</span>
      </h1>

      <h2 className="text-3xl font-bold text-gray-900 mb-2">ERROR PAGE!</h2>
      <p className="text-lg text-gray-600 mb-8">
        Sorry! This Page is Not Available!
      </p>

      <Link to="/" className="btn-primary">
        Go To Home Page <FaArrowRight></FaArrowRight>
      </Link>
    </div>
  );
};

export default ErrorPage;
