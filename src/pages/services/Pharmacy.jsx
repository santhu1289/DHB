// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaPills, FaCapsules, FaBriefcaseMedical } from "react-icons/fa";
import { motion } from "framer-motion";

const Pharmacy = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-green-300 to-green-500 text-green-900 rounded-lg">
      <motion.section
        className="bg-white shadow-lg rounded-lg p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <FaPills className="mr-2 text-green-600" /> About Pharmacy Department
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The Pharmacy Department ensures the availability of essential
          medicines and provides expert guidance on medication use. We are
          dedicated to patient safety and effective pharmaceutical care.
        </p>
      </motion.section>

      <motion.section
        className="bg-green-50 shadow-lg rounded-lg p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <FaCapsules className="mr-2 text-green-600" /> Services Offered
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Prescription Dispensing</li>
          <li>Medication Therapy Management</li>
          <li>Drug Information and Consultation</li>
          <li>Pharmacovigilance and Safety Monitoring</li>
          <li>Patient Counseling and Education</li>
        </ul>
      </motion.section>

      <motion.section
        className="bg-white shadow-lg rounded-lg p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <FaBriefcaseMedical className="mr-2 text-green-600" /> Why Choose Us?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our pharmacy is staffed with experienced professionals who ensure safe
          and effective medication use. We focus on patient-centered
          pharmaceutical care and uphold high standards of quality.
        </p>
      </motion.section>

      <motion.section
        className="bg-white shadow-lg rounded-lg p-6 mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-green-800 hover:text-green-600 transition duration-300">
          Order Medicines
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
              Pharmacy Team (Coming Soon)
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

export default Pharmacy;
