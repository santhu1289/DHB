// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { teamData } from "../../components/TeamSection";
import { FaVial, FaMicroscope, FaFlask, FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Laboratory = () => {
const labData = teamData.find(
      (dept) => dept.department === "Lab"
    );
    const formats = [".JPG", ".JPEG", ".PNG", ".WEBP"];
    // Define image paths
    const imagePaths = [0,1, 2, 3, 4, 5, 6,7,8,9,10].map(
      (num) => `/src/assets/images/lab/lab${num}${formats.find(() => true)}`
    );
  
    // State to track selected image index
    const [selectedIndex, setSelectedIndex] = useState(null);
  
    if (!labData) {
      return (
        <div className="p-6 bg-red-100 text-red-900 rounded-lg text-center">
          <p className="text-lg font-semibold">
            Data for the Pharmacy Department is not available.
          </p>
        </div>
      );
    }
    
      // Function to go to the next image
      const handleNext = () => {
        setSelectedIndex((prevIndex) =>
          prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      // Function to go to the previous image
      const handlePrev = () => {
        setSelectedIndex((prevIndex) =>
          prevIndex === 0 ? imagePaths.length - 1 : prevIndex - 1
        );
      };

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
        <br />
        <p>
        Medical laboratories vary in size and complexity and so offer a variety of testing services. More comprehensive services can be found in acute-care hospitals and medical centers, where 70% of clinical decisions are based on laboratory testing. Doctors offices and clinics, as well as skilled nursing and long-term care facilities, may have laboratories that provide more basic testing services. Commercial medical laboratories operate as independent businesses and provide testing that is otherwise not provided in other settings due to low test volume or complexity.
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
              className="bg-white shadow-lg rounded-lg p-6 mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {/* Gallery Section */}
              <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
                      <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
                        <i className="fas fa-images mr-2 text-green-600"></i> Random Images
                      </h2>
                    
                        {/* Image Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {imagePaths.map((path, index) => (
                          <img
                            key={index}
                            src={path}
                            alt={`Medicine Facility ${index + 1}`}
                            className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                            onClick={() => setSelectedIndex(index)}
                          />
                        ))}
                      </div>
                     
                    </section>
              
                    {/* Fullscreen Image Preview Modal */}
                          {selectedIndex !== null && (
                            <div
                              className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                              onClick={() => setSelectedIndex(null)}
                            >
                              <div className="relative flex items-center">
                                {/* Previous Button */}
                                <button
                                  className="absolute left-4 text-white bg-green-700 p-3 rounded-full hover:bg-green-500 transition"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handlePrev();
                                  }}
                                >
                                  <FaArrowLeft size={18} />
                                </button>
                    
                                {/* Display Enlarged Image */}
                                <img
                                  src={imagePaths[selectedIndex]}
                                  alt="Enlarged View"
                                  className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
                                />
                    
                                {/* Next Button */}
                                <button
                                  className="absolute right-4 text-white bg-green-700 p-3 rounded-full hover:bg-green-500 transition"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleNext();
                                  }}
                                >
                                  <FaArrowRight size={18} />
                                </button>
                    
                                {/* Close Button */}
                                <button
                                  className="absolute top-4 right-4 text-white bg-green-600 p-3 rounded-full hover:bg-green-300 transition"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedIndex(null);
                                  }}
                                >
                                  <FaTimes size={18} />
                                </button>
                              </div>
                            </div>
                          )}
            </motion.section>
      
            <motion.section
              className="bg-white shadow-lg rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-green-800 text-center mb-6">Pharamcy Team</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse shadow-md rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-green-200">
                      <th className="px-4 py-3 text-green-700">SI.NO</th>
                      <th className="px-4 py-3 text-green-700">Name of Employee</th>
                      <th className="px-4 py-3 text-green-700">Post</th>
                      <th className="px-4 py-3 text-green-700">Qualification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(labData.employees || []).map((employee, index) => (
                      <tr key={index} className="hover:bg-green-100 transition duration-200">
                        <td className="border px-4 py-2 text-gray-700">{index + 1}</td>
                        <td className="border px-4 py-2 text-gray-700">{employee.name}</td>
                        <td className="border px-4 py-2 text-gray-700">{employee.post}</td>
                        <td className="border px-4 py-2 text-gray-700">{employee.qualification}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.section>
    </div>
  );
};

export default Laboratory;
