// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  FaAmbulance,
  FaHospitalSymbol,
  FaUserMd,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const EmergencyServices = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-green-300 to-green-500 text-green-900 rounded-lg">
      <motion.section
        className="bg-white shadow-lg rounded-lg p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <FaAmbulance className="mr-2 text-green-600" /> About Emergency
          Services
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our emergency department operates 24/7, providing immediate medical
          care to critically ill and injured patients. With highly trained
          professionals and modern medical equipment, we ensure rapid response
          and effective treatment.
        </p>
      </motion.section>

      <motion.section
        className="bg-green-50 shadow-lg rounded-lg p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <FaUserMd className="mr-2 text-green-600" /> Services Offered
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>24/7 Emergency Response</li>
          <li>Advanced Trauma Care</li>
          <li>Cardiac and Stroke Management</li>
          <li>Immediate Resuscitation & Stabilization</li>
          <li>Ambulance and Mobile Medical Units</li>
        </ul>
      </motion.section>

      <motion.section
        className="bg-white shadow-lg rounded-lg p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <FaHospitalSymbol className="mr-2 text-green-600" /> Why Choose Us?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our emergency team is equipped with state-of-the-art facilities and
          trained professionals who are ready to provide life-saving
          interventions at any moment. We prioritize patient safety and rapid
          response to ensure the best possible outcomes.
        </p>
      </motion.section>

      <motion.section
        className="bg-white shadow-lg rounded-lg p-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-green-800 hover:text-green-600 transition duration-300">
          Emergency Helpline
        </h1>
        <p className="text-gray-700 mt-2">
          Call us anytime for immediate assistance.
        </p>
        <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 flex items-center mx-auto">
          <FaPhoneAlt className="mr-2" /> Call Now
        </button>
      </motion.section>
    </div>
  );
};

export default EmergencyServices;
