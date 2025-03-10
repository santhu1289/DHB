// eslint-disable-next-line no-unused-vars
import React from "react";
//import { teamData } from "../../components/TeamSection";
import { FaVial, FaMicroscope, FaHospitalUser, FaFlask } from "react-icons/fa";
import { motion } from "framer-motion";

const Laboratory = () => {
  //   const labData = teamData.find(
  //     (dept) => dept.department === "District Hospital Lab"
  //   );

  return (
    <div className="p-6 bg-gradient-to-r from-green-300 to-green-500 text-green-900 rounded-lg">
      <motion.section
        className="bg-white shadow-lg rounded-lg p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <FaVial className="mr-2 text-green-600" /> About District Hospital Lab
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The District Hospital Lab is equipped with advanced diagnostic
          technology to provide accurate and timely test results. Our laboratory
          services support medical professionals in diagnosing and managing
          various health conditions effectively.
        </p>
      </motion.section>

      <motion.section
        className="bg-green-50 shadow-lg rounded-lg p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <FaMicroscope className="mr-2 text-green-600" /> Services Offered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Hematology and Blood Analysis",
            "Biochemistry and Hormonal Testing",
            "Microbiology and Infectious Disease Testing",
            "Histopathology and Cytology",
            "Serology and Immunology",
            "Advanced Molecular Diagnostics",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex items-center"
            >
              <FaFlask className="text-green-600 mr-3" />
              <p className="text-gray-700">{service}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="bg-white shadow-lg rounded-lg p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <FaHospitalUser className="mr-2 text-green-600" /> Why Choose Us?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our lab ensures precision, speed, and reliability in diagnostic
          testing. With state-of-the-art equipment and skilled laboratory
          professionals, we are committed to supporting patient care with
          high-quality laboratory results.
        </p>
      </motion.section>

      <motion.section
        className="bg-white shadow-lg rounded-lg p-6 mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-green-800 hover:text-green-600 transition duration-300">
          Book a Lab Test
        </h1>
        <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
          Coming Soon
        </button>
      </motion.section>

      <motion.section
        className="bg-white shadow-lg rounded-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="container mx-auto py-6 px-4">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-green-800 hover:text-green-600 transition duration-300">
              District Hospital Lab Team (Coming Soon)
            </h1>
          </div>
          <p className="text-center text-gray-700">
            Team details will be added soon.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default Laboratory;
