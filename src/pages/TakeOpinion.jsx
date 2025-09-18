import React from "react";

const TakeOpinionFixed = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden font-sans">
      {/* ================= LEFT SIDE ================= */}
      <div className="w-1/2 h-full bg-white flex flex-col">
        {/* Hero */}
        <div className="relative flex-1 flex flex-col justify-center px-8 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <img
            src="/assets/hero-doctors.jpg"
            alt="Doctors"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative z-10 max-w-md">
            <h1 className="text-4xl font-bold leading-snug">
              Your Global Guide to <br /> World-Class Healthcare
            </h1>
            <p className="mt-4 text-gray-200">
              Connecting you with leading doctors and hospitals worldwide for a
              seamless medical journey.
            </p>
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded-lg">
              Explore Treatments
            </button>
          </div>
        </div>

        {/* Why Choose Us – horizontal scroll */}
        <div className="p-6 bg-white">
          <h2 className="text-lg font-bold mb-4">Why Choose Us</h2>
          <div className="flex space-x-4 overflow-x-auto no-scrollbar">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="min-w-[240px] bg-gray-50 rounded-lg shadow-md flex-shrink-0"
              >
                <img
                  src={`/assets/hospital${i}.jpg`}
                  alt=""
                  className="h-32 w-full object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold">Hospital {i}</h3>
                  <p className="text-sm text-gray-500">World-class care & service.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="w-1/2 h-full bg-gray-50 flex flex-col">
        {/* Navbar */}
        <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
          <nav className="flex space-x-6 text-sm font-medium">
            <a href="#">Country</a>
            <a href="#">Doctors</a>
            <a href="#">Hospitals</a>
            <a href="#">Treatments</a>
            <a href="#">Language ▾</a>
          </nav>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">
            Connect with Experts
          </button>
        </header>

        {/* Multi-Specialty Treatments – horizontal scroll */}
        <div className="px-6 py-4">
          <h2 className="text-lg font-bold mb-4">Multi-Specialty Treatments</h2>
          <div className="flex space-x-4 overflow-x-auto no-scrollbar">
            {[
              { name: "Cardiology", img: "/assets/cardio.jpg" },
              { name: "Orthopedics", img: "/assets/ortho.jpg" },
              { name: "Neurology", img: "/assets/neuro.jpg" },
              { name: "Fertility", img: "/assets/fertility.jpg" },
              { name: "ENT", img: "/assets/ent.jpg" },
            ].map((item, i) => (
              <div
                key={i}
                className="min-w-[180px] bg-white shadow-md rounded-lg overflow-hidden flex-shrink-0"
              >
                <img src={item.img} alt={item.name} className="w-full h-24 object-cover" />
                <div className="p-3">
                  <h3 className="font-semibold text-sm">{item.name}</h3>
                  <p className="text-xs text-gray-500">Short description</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Large Hospital Banner */}
        <div className="px-6">
          <img
            src="/assets/main-hospital.jpg"
            alt="Main Hospital"
            className="w-full rounded-xl shadow-md"
          />
        </div>

        {/* Testimonials – horizontal scroll */}
        <div className="px-6 py-4">
          <h2 className="text-lg font-bold mb-4">Testimonials</h2>
          <div className="flex space-x-6 overflow-x-auto no-scrollbar">
            {["Meval Cune", "Mectim Spatien", "Amgip Pations", "Beoc Putons","Meval Cune", "Mectim Spatien", "Amgip Pations",].map(
              (person, i) => (
                <div
                  key={i}
                  className="min-w-[140px] flex-shrink-0 text-center bg-white p-4 rounded-lg shadow-md"
                >
                  <img
                    src={`/assets/user${i + 1}.jpg`}
                    alt={person}
                    className="mx-auto w-16 h-16 rounded-full object-cover mb-3"
                  />
                  <p className="font-semibold text-sm">{person}</p>
                  <p className="text-xs text-gray-500">Happy Patient</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeOpinionFixed;
