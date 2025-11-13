import React from "react";

const FilterSection = ({ title, options }) => (
  <div className="mb-6">
    <h3 className="font-semibold text-gray-800 mb-3">{title}</h3>
    <ul className="space-y-2 text-sm text-gray-600">
      {options.map((opt, i) => (
        <li key={i} className="flex items-center space-x-2">
          <input type="checkbox" id={opt} className="rounded text-primary" />
          <label htmlFor={opt}>{opt}</label>
        </li>
      ))}
    </ul>
  </div>
);

export default function SidebarFilters() {
  return (
    <aside className="hidden lg:block w-64 bg-white border border-gray-200 rounded-xl p-6 h-fit">
      <FilterSection title="Categories" options={["Art & Design", "Business", "Data Science", "Development", "Finance", "Health & Fitness", "Lifestyle"]} />
      <FilterSection title="Language" options={["English", "Arabic", "Spanish"]} />
      <FilterSection title="Price" options={["Free", "Paid"]} />
      <FilterSection title="Skill Level" options={["Beginner", "Intermediate", "High"]} />
      <FilterSection title="Ratings" options={["★★★★★", "★★★★☆", "★★★☆☆"]} />
    </aside>
  );
}
