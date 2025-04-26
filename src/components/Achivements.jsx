/* eslint-disable no-unused-vars */
import React from "react";
import Achiv from "../assets/images/achiv.jpeg";

const Achivements = () => {
  return (
    <div className="w-full py-6 px-4">
      <div className="max-w-[700px] md:max-w-[1480px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            className="rounded-lg shadow-md w-full max-w-md md:max-w-full"
            src={Achiv}
            alt="Achievements"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center gap-4">
          <p className="text-xl md:text-2xl text-green-800 font-medium">
            Our Achievements:
          </p>
          <ul className="text-sm md:text-lg text-justify space-y-3">
            <li>
              <i className="fas fa-trophy text-green-800 mr-2"></i>
              <span className="font-bold">North Karnataka Achievers Award: </span>
              2024-2025 (Dr. Basa Reddy & Dr. Anil Reddy)
            </li>
            <li>
              <i className="fas fa-certificate text-green-800 mr-2"></i>
              <span className="font-bold">musQan Certification: </span>
              2023-24
            </li>
            <li>
              <i className="fas fa-award text-green-800 mr-2"></i>
              <span className="font-bold">LaQshya Certification: </span>
              National Level
            </li>
            <li>
              <i className="fas fa-medal text-green-800 mr-2"></i>
              <span className="font-bold">NQAS Certification: </span>
              All 13 Departments Conditionally Certified
            </li>
            <li>
              <i className="fas fa-star text-green-800 mr-2"></i>
              <span className="font-bold">1st Place in Kayakalpa: </span>
              2019-20
            </li>
            <li>
              <i className="fas fa-star-half-alt text-green-800 mr-2"></i>
              <span className="font-bold">2nd Place in Kayakalpa: </span>
              2017-18
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
