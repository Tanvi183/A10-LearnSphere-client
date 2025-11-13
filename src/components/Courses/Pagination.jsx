import React from "react";

export default function Pagination() {
  return (
    <div className="flex justify-center items-center space-x-2 mt-10">
      {[1, 2, 3, 4].map((page) => (
        <button
          key={page}
          className={`w-8 h-8 rounded-full font-medium text-sm ${
            page === 1
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
