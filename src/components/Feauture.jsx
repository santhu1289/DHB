// eslint-disable-next-line no-unused-vars
import React from "react";
import "font-awesome/css/font-awesome.min.css";
import Dhods from "../assets/images/dhods.jpg";

const Feature = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Image with Overlay Text */}
        <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden md:order-last">
          <img
            src={Dhods}
            alt="Doctors"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-4 bg-black bg-opacity-40">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 px-3 py-2 text-green-900 bg-green-400 bg-opacity-90 rounded-xl shadow-md">
              Few Reasons Why People Choosing Us!
            </h1>
            <p className="text-sm sm:text-base text-white max-w-md">
              We have departments like Medicine, Surgery, Orthopedics, ENT, Ophthalmology, Dermatology, Psychiatry, Radiology, NCD, Geriatrics.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-last md:order-first">
          <div className="text-center p-4 hover:bg-gray-50 rounded-lg shadow-lg transition">
            <i className="fa fa-user-md text-3xl sm:text-4xl text-green-800 mb-2"></i>
            <h5 className="text-green-800 font-semibold mt-2">
              Specialist Doctors
            </h5>
          </div>

          <div className="text-center p-4 hover:bg-gray-50 rounded-lg shadow-lg transition">
            <i className="fa fa-heartbeat text-3xl sm:text-4xl text-green-800 mb-2"></i>
            <h5 className="text-green-800 font-semibold mt-2">
              Health Programs
            </h5>
          </div>

          <div className="text-center p-4 hover:bg-gray-50 rounded-lg shadow-lg transition">
            <i className="fa fa-child text-3xl sm:text-4xl text-green-800 mb-2"></i>
            <h5 className="text-green-800 font-semibold mt-2">
              Maternal & Child Health Services
            </h5>
          </div>

          <div className="text-center p-4 hover:bg-gray-50 rounded-lg shadow-lg transition">
            <i className="fa fa-hospital-o text-3xl sm:text-4xl text-green-800 mb-2"></i>
            <h5 className="text-green-800 font-semibold mt-2">
              Out-Patient & In-Patient Facilities
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
