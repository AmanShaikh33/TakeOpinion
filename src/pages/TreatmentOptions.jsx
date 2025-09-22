import React from "react";
import { FiFilter, FiSearch } from "react-icons/fi";

const treatments = [
  "Treatment Name",
  "Treatment Name",
  "Treatment Name",
  "Treatment Name",
  "Treatment Name",
  "Treatment Name",
];

export default function TreatmentOptions() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-6">
        {/* Replace with your actual logo if you have one */}
        <span className="text-2xl font-bold">🩺</span>
        <span className="text-xl font-semibold">TakeOpinion</span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Treatment Options for <span className="text-gray-800">[Condition]</span>
      </h1>

      {/* Search + Filter */}
      <div className="flex w-full max-w-xl items-center bg-white rounded-full shadow px-4 py-2 mb-10">
        <FiSearch className="text-gray-400 text-xl mr-2" />
        <input
          type="text"
          placeholder="Search treatments..."
          className="flex-1 outline-none text-gray-700 placeholder-gray-400"
        />
        <button className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 transition rounded-full px-4 py-2 ml-2 text-gray-600">
          <FiFilter />
          <span className="hidden sm:inline">Filter</span>
        </button>
      </div>

      {/* Treatments Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {treatments.map((treat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-between"
          >
            <h2 className="text-lg font-medium text-gray-800 mb-6">
              {treat}
            </h2>
            <button className="bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600 transition">
              View Specialists
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
