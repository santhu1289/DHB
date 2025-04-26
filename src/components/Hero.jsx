// eslint-disable-next-line no-unused-vars
import React from "react";
import "font-awesome/css/font-awesome.min.css";
import DSMain from "../assets/images/DS Main.jpeg";

const Hero = () => {
  return (
    <div className="w-full bg-white py-6">
      <div className="max-w-[700px] md:max-w-[1480px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        
        {/* Image Section (on top for mobile) */}
        <div className="md:order-last order-first flex flex-col items-center">
          <img
            className="rounded-lg shadow-md w-full max-w-md md:max-w-full"
            src={DSMain}
            alt="Dr Basa Reddy"
          />
          <h1 className="py-2 text-2xl md:text-3xl font-semibold text-center text-green-800">
            Dr Basa Reddy N{" "}
            <span className="text-xl text-gray-800">(MS Ortho)</span>
          </h1>
          <p className="text-lg text-center text-green-800 font-semibold">
            District Surgeon, District Hospital, Ballari
          </p>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center gap-4 px-2">
          <p className="text-lg md:text-2xl text-green-800 font-medium">
            OUR VALUES
          </p>
          <h1 className="text-2xl md:text-5xl font-semibold">
            Respect, Integrity, Ownership, Teamwork, and Passion
          </h1>
          <p className="text-sm md:text-lg text-gray-500 text-justify">
            To provide life-saving services through access to safe curative,
            preventive, and promotive services for all patients. Also, to work
            with the community to provide advocacy and education in health &
            related areas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
