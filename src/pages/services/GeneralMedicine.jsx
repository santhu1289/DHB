
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { teamData } from "../../components/TeamSection";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const GeneralMedicine = () => {
  const generalMedicineData = teamData.find(
    (dept) => dept.department === "General Medicine"
  );
  const formats = [".JPG", ".JPEG", ".PNG", ".WEBP"];
  // Define image paths
  const imagePaths = [1, 2, 3, 4, 5, 6].map(
    (num) => `/src/assets/images/general${num}${formats.find(() => true)}`
  );

  // State to track selected image index
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!generalMedicineData) {
    return (
      <div className="p-6 bg-red-100 text-red-900 rounded-lg text-center">
        <p className="text-lg font-semibold">
          Data for the General Medicine department is not available.
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
      

      {/* About General Medicine */}
      <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-user-md mr-2 text-green-600"></i> About General Medicine
        </h2>
        <p className="text-gray-700 leading-relaxed">
        The General Medicine Department at the District Hospital Ballari is a cornerstone of healthcare, providing comprehensive diagnostic and therapeutic services for a wide range of medical conditions. Staffed by experienced physicians and supported by trained medical personnel, the department offers outpatient and inpatient care, focusing on managing chronic illnesses, acute conditions, and preventive health.
        </p>
        <br/>
        <p className="text-gray-700 leading-relaxed">
        Key services include the treatment of diabetes, hypertension, infectious diseases, respiratory ailments, and other non-communicable diseases. The department also plays a critical role in emergency care, conducting health camps, and managing seasonal outbreaks like dengue. Equipped with modern diagnostic facilities and integrated with telemedicine and eRounds, it ensures timely and high-quality care for patients across the region.
        </p>
      </section>
{/* Gallery Section */}
<section className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-images mr-2 text-green-600"></i> Ward & Facility Images
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
      {/* IPD Information */}
      <section className="bg-green-50 shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-procedures mr-2 text-green-600"></i> In-Patient Department (IPD) Services
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Male Ward</li>
          <li>Female Ward</li>
          <li>Emergency Services</li>
          <li>ICU for Critical Care Patients</li>
          <li>Isolation Ward</li>
          <li>Hemophilia Ward</li>
          <li>Geriatric Ward</li>
          <li>Chemo Therapy Ward for Cancer Patients</li>
        </ul>
      </section>

      {/* Services Offered */}
      <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-hospital mr-2 text-green-600"></i> Services Offered
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Health Check-ups</li>
          <li>Chronic Disease Management</li>
          <li>Acute Illness Treatment</li>
          <li>Preventive Care</li>
          <li>Cardiac Care</li>
          <li>Renal Dialysis</li>
          <li>NCD Services</li>
          <li>TeleICU (10BedICU)</li>
          <li>Brain Health Initiative</li>
          <li>e-Sanjivini</li>
        </ul>
      </section>

      {/* General Medicine Team */}
      <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-6">General Medicine Team</h2>
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
              {(generalMedicineData.employees || []).map((employee, index) => (
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
      </section>
    </div>
  );
};

export default GeneralMedicine;
