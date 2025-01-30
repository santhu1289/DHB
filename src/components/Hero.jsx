// eslint-disable-next-line no-unused-vars
import React from "react";
import "font-awesome/css/font-awesome.min.css";
import DSMain from "../assets/images/DS Main.jpeg";

const Hero = () => {
  return (
    <div className="w-full bg-white py-6">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[700px]">
        <div className="flex flex-col justify-start gap-4 px-3 mx-3">
          <p className="md:py-2 text-xl md:text-2xl text-green-800 font-medium">
            OUR VALUES
          </p>
          <h1 className="md:py-2 md:text-5xl text-2xl font-semibold">
            Respect, Integrity, Ownership, Teamwork, and Passion
          </h1>
          <p className="md:py-2 text-sm md:text-lg text-gray-500 text-justify">
            To provide life-saving services through access to safe curative,
            preventive, and promotive services for all patients. Also, to work
            with the community to provide advocacy and education in health &
            related areas.
          </p>
          {/* <form className="max-w-[550px] p-2 shadow-lg rounded-md flex justify-between ">
            <input className="bg-white" type="text" placeholder="Your text" />
            <i className="fas fa-search mr-2 "></i>
          </form> */}
        </div>
        <div className="md:order-last order-first content-center">
          <img
            className="rounded-lg shadow-md"
            src={DSMain}
            alt=""
          />
          <h1 className="py-2 md:text-3xl text-2xl font-semibold text-center text-green-800">
            Dr Basa Reddy N {""}
            <span className="text-xl text-gray-800">(MS Ortho)</span>
          </h1>
          <p className="text-xl text-center text-green-800 font-semibold">
            District Surgeon, District Hospital, Ballari
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
