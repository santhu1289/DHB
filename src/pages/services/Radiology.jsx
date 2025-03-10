// eslint-disable-next-line no-unused-vars
import React from "react";
// import { teamData } from "../../components/TeamSection";
import { FaXRay, FaHeartbeat, FaHospitalUser, FaStethoscope } from "react-icons/fa";
import { motion } from "framer-motion";

const Radiology = () => {
//   const radiologyData = teamData.find(
//     (dept) => dept.department === "Radiology"
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
          <FaXRay className="mr-2 text-green-600" /> About Radiology Department
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The Radiology Department provides cutting-edge imaging services to aid in accurate diagnosis and treatment. Our department is equipped with modern imaging technology to ensure high-quality scans and reports.
        </p>
      </motion.section>

      <motion.section
        className="bg-green-50 shadow-lg rounded-lg p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <FaHeartbeat className="mr-2 text-green-600" /> Services Offered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {["X-Ray Imaging", "CT Scans", "MRI Scans", "Ultrasound Imaging", "Mammography", "Fluoroscopy"].map((service, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <FaStethoscope className="text-green-600 mr-3" />
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
          Our Radiology Department is staffed with experienced radiologists and technicians who ensure accurate imaging and timely reporting. We prioritize patient comfort and safety while delivering high-quality diagnostic services.
        </p>
      </motion.section>

      <motion.section
        className="bg-white shadow-lg rounded-lg p-6 mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-green-800 hover:text-green-600 transition duration-300">
          Book an Imaging Test
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
              Radiology Team (Coming Soon)
            </h1>
          </div>
          <p className="text-center text-gray-700">Team details will be added soon.</p>
        </div>
      </motion.section>
    </div>
  );
};

export default Radiology;
