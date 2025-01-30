/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import Abt from "../assets/images/obg5.jpg";
import { Link } from "react-router-dom";
//import CountUp from "react-countup";
const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / ((duration * 1000) / 16); // Approximate 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
};
const About = () => {
  return (
    <div className="container mx-auto overflow-hidden my-10 px-4 lg:px-0">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* About Text Section */}
        {/* Facts Counter Section */}

        <div className="flex items-center justify-center h-full p-6 rounded-lg ">
          <div className="grid grid-cols-2 gap-16">
            {/* In-Patient Dept */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-5xl font-bold text-green-600">
                <Counter end={10} duration={5} />
              </h1>
              <p className="text-lg text-gray-700 mt-2">In-Patient Dept</p>
            </div>
            {/* Out-Patient Dept */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-5xl font-bold text-green-600">
                <Counter end={14} duration={5} />
              </h1>
              <p className="text-lg text-gray-700 mt-2">Out-Patient Dept</p>
            </div>
            {/* Awards Achieved */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-5xl font-bold text-green-600">
                <Counter end={5} duration={5} />
              </h1>
              <p className="text-lg text-gray-700 mt-2">Awards Achieved</p>
            </div>
            {/* Number of Staff */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-5xl font-bold text-green-600">
                <Counter end={350} duration={5} />
              </h1>
              <p className="text-lg text-gray-700 mt-2">No of Staff Approx</p>
            </div>
          </div>
        </div>
        <div className="relative bg-green-800 text-white p-6 rounded-lg shadow-md order-first">
          {/* Background Image */}
          <img
            src={Abt}
            alt="Hospital"
            className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-lg shadow-md"
          />
          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-4">About Our Hospital</h1>
            <p className="text-white mb-6">
              The Present District Hospital is located in the heart of Ballari
              and has a glorious history with services to the public since its
              inception in 1958 as a maternal & child health hospital. This
              hospital is located in a vantage position in the city for which
              great philanthropists late Sri. Sabhapathi Modaliyar & Kuppuswamy
              Modaliyar gave the land.
            </p>
            <Link
              to="/about"
              className="inline-block bg-green-800 text-white py-3 px-6 rounded-lg shadow hover:bg-green-600 transition"
            >
              More Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
