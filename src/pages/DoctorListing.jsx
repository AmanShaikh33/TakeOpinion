import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";


const doctors = [
  { id: 1, name: "Doctor Name", specialty: "Specialty", hospital: "Hospital Name", img: "https://via.placeholder.com/80" },
  { id: 2, name: "Doctor Name", specialty: "Specialty", hospital: "Hospital Name", img: "https://via.placeholder.com/80" },
  { id: 3, name: "Doctor Name", specialty: "Specialty", hospital: "Hospital Name", img: "https://via.placeholder.com/80" },
  { id: 4, name: "Doctor Name", specialty: "Specialty", hospital: "Hospital Name", img: "https://via.placeholder.com/80" },
  { id: 5, name: "Doctor Name", specialty: "Specialty", hospital: "Hospital Name", img: "https://via.placeholder.com/80" },
  { id: 6, name: "Doctor Name", specialty: "Specialty", hospital: "Hospital Name", img: "https://via.placeholder.com/80" },
];

export default function DoctorListing() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-6xl mb-10">
        <h1 className="text-2xl font-bold">TakeOpinion</h1>
        <button className="text-gray-700 text-3xl">
          <FaUserCircle />
        </button>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-semibold mb-6">Doctor Listing</h2>

      {/* Search Bar */}
      <div className="flex items-center w-full max-w-xl bg-white shadow rounded-lg px-4 py-2 mb-6">
        <input
          type="text"
          placeholder="Find a Doctor..."
          className="flex-grow outline-none text-gray-700"
        />
        <FaSearch className="text-gray-400" />
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-10">
        <select className="border border-gray-300 rounded-lg px-4 py-2">
          <option>Specialty</option>
        </select>
        <select className="border border-gray-300 rounded-lg px-4 py-2">
          <option>Hospital</option>
        </select>
        <select className="border border-gray-300 rounded-lg px-4 py-2">
          <option>Country</option>
        </select>
      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center bg-white shadow rounded-lg p-4"
          >
            <img
              src={doc.img}
              alt={doc.name}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="font-semibold text-lg">{doc.name}</h3>
              <p className="text-gray-500 text-sm">{doc.specialty}</p>
              <p className="text-gray-500 text-sm">{doc.hospital}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
