/* eslint-disable no-unused-vars */
import React from "react";
import Achiv from "../assets/images/achiv.jpeg";
const Achivements = () => {
  return (
    <div className="w-full  py-6 px-6  ">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[700px]">
        <div className="content-center shadow-md">
          <img className="rounded-lg shadow-md" src={Achiv} alt="" />
        </div>
        <div className="flex flex-col justif y-start gap-4 px-3 mx-3">
          <p className="md:py-2 text-xl md:text-2xl text-green-800 font-medium">
            Our Achievements:
          </p>
          <h1 className="md:py-2 text-sm md:text-xl ">
            <ul className="mb-2 text-justify">
              <li className="mb-2">
                <i className="text-primary me-2 fas fa-trophy text-green-800"></i>
                <span className="font-bold">
                  North Karnataka Achievers Award:{" "}
                </span>{" "}
                2024-2025 (Dr. Basa Reddy & Dr. Anil Reddy)
              </li>
              <li className="mb-2">
                <i className="text-primary me-2 fas fa-certificate text-green-800"></i>
                <span className="font-bold">musQan Certification: </span>
                2023-24
              </li>
              <li className="mb-2">
                <i className="text-primary me-2 fas fa-award text-green-800"></i>
                <span className="font-bold">LaQshya Certification:</span>{" "}
                National Level
              </li>
              <li className="mb-2">
                <i className="text-primary me-2 fas fa-medal text-green-800"></i>
                <span className="font-bold">NQAS Certification: </span> All 13
                Departments Conditionally Certified
              </li>
              <li className="mb-2">
                <i className="text-primary me-2 fas fa-star text-green-800"></i>
                <span className="font-bold">1st Place in Kayakalpa:</span>{" "}
                2019-20
              </li>
              <li className="mb-2">
                <i className="text-primary me-2 fas fa-star-half-alt text-green-800"></i>
                <span className="font-bold">2nd Place in Kayakalpa: </span>{" "}
                2017-18
              </li>
            </ul>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
