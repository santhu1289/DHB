// eslint-disable-next-line no-unused-vars
import React from "react";
import "font-awesome/css/font-awesome.min.css";
import Dhods from "../assets/images/dhods.jpg";

const Feature = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section with Text Overlay */}
        <div className="relative h-96 rounded-lg overflow-hidden order-last">
          <img
            src={Dhods}
            alt="Doctors"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-2 bg-black bg-opacity-30">
            <h1 className="text-3xl font-bold mb-6 p-2 text-green-800 text-shadow-xl border bg-green-400 rounded-xl ">
              Few Reasons Why People Choosing Us!
            </h1>
            <p className="text-lg text-white">
              We have departments like Medicine, Surgery, Orthopedics, ENT,
              Ophthalmology, Dermatology, Psychiatry, Radiology, NCD,
              Geriatrics.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-between items-center">
          {/* Specialist Doctors */}
          <a href="#" className="text-center">
            <div className="p-4">
              <i className="fa fa-user-md text-4xl text-green-800 mb-2 "></i>
              <h5 className="font-semibold text-green-800 shadow-xl">
                Specialist Doctors
              </h5>
            </div>
          </a>
          {/* Health Programs */}
          <a href="#" className="text-center">
            <div className="p-4">
              <i className="fa fa-heartbeat text-4xl text-green-800 mb-2"></i>
              <h5 className="font-semibold text-green-800 shadow-xl">
                Health Programs
              </h5>
            </div>
          </a>
          {/* Maternal & Child Health Services */}
          <a href="#" className="text-center">
            <div className="p-4">
              <i className="fa fa-child text-4xl text-green-800 mb-2"></i>
              <h5 className="font-semibold text-green-800 shadow-xl">
                Maternal & Child Health Services
              </h5>
            </div>
          </a>
          {/* Out-Patient & In-Patient Facilities */}
          <a href="#" className="text-center">
            <div className="p-4">
              <i className="fa fa-hospital-o text-4xl text-green-800 mb-2"></i>
              <h5 className="font-semibold text-green-800 shadow-xl">
                Out-Patient & In-Patient Facilities
              </h5>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feature;
