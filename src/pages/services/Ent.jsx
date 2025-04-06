import { useState } from "react";
import { teamData } from "../../components/TeamSection";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons

const Ent = () => {
  // Get Paediatrics department data
  const entData = teamData.find(
    (dept) => dept.department === "ENT"
  );

  // Define image paths
  const imagePaths = [1, 2, 3, 4, 5, 6].map(
    (num) => `/src/assets/images/paediatrics${num}.JPG`
  );

  // State to track selected image index
  const [selectedIndex, setSelectedIndex] = useState(null);

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

  // Check if department data is available
  if (!entData) {
    return (
      <div className="p-6 bg-red-100 text-red-900 rounded-lg text-center">
        <p className="text-lg font-semibold">
          Data for the Ent department is not available.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-r from-green-300 to-green-500 text-green-900 rounded-lg">
      {/* About Section */}
      <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-head-side-mask mr-2 text-green-600"></i> About ENT
        </h2>
        <p className="text-gray-700 leading-relaxed">
        The Department of Ear, Nose, and Throat (ENT) at District Hospital Ballari is a specialized unit dedicated to the comprehensive diagnosis, treatment, and management of disorders related to the ear, nose, throat, head, and neck. It is equipped with state-of-the-art medical technology and staffed by highly skilled ENT specialists, surgeons, and support staff who deliver quality care to patients.
        </p>
        
      </section>
      {/* Header Section */}
      <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-images mr-2 text-green-600"></i> Accreditations
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          {["nQas Certified", "MusQan Certified"].map((condition, index) => (
            <li key={index}>{condition}</li>
          ))}
        </ul>
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {imagePaths.map((path, index) => (
            <img
              key={index}
              src={path}
              alt={`Paediatric Facility ${index + 1}`}
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
      {/* Conditions Treated */}
      <section className="bg-green-50 shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-ear-listen mr-2 text-green-600"></i> Common
          Conditions Treated
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
  {[
    "Ear Infections (Otitis Media, Otitis Externa)",
    "Hearing Loss and Tinnitus (Ringing in the Ears)",
    "Balance Disorders and Vertigo",
    "Nasal Allergies and Sinusitis",
    "Deviated Nasal Septum and Nasal Polyps",
    "Tonsillitis, Pharyngitis, and Throat Infections",
    "Voice Disorders and Hoarseness",
    "Snoring, Sleep Apnea, and Breathing Problems",
    "Thyroid Swelling and Neck Masses",
    "Pediatric ENT Conditions (Adenoids, Speech Delay)",
    "Foreign Body Removal (Ear, Nose, Throat)",
  ].map((condition, index) => (
    <li key={index}>{condition}</li>
  ))}
</ul>
      </section>

      {/* Services Offered */}
      <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-user-nurse mr-2 text-green-600"></i> Services
          Offered
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
  {[
    "Comprehensive Ear, Nose, and Throat Examinations",
    "Hearing Assessment and Audiometry Testing",
    "Treatment of Ear Infections and Ear Discharge",
    "Management of Nasal Allergies and Sinus Problems",
    "Endoscopic Examination of Nose and Throat",
    "Surgical Procedures - Tonsillectomy, Adenoidectomy, Septoplasty",
    "Foreign Body Removal from Ear, Nose, and Throat",
    "Treatment of Voice, Speech, and Swallowing Disorders",
    "Vertigo and Balance Disorder Management",
    "Management of Snoring and Sleep Apnea",
    "Thyroid and Neck Swelling Evaluation",
    "Minor ENT Procedures - Ear Wax Removal, Ear Dressing",
  ].map((service, index) => (
    <li key={index}>{service}</li>
  ))}
</ul>
      </section>

      {/* Paediatrics Team */}
      <section className="bg-white shadow-lg rounded-lg p-6">
        <div className="container mx-auto py-6 px-4">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-green-800 hover:text-green-600 transition duration-300">
              ENT Team
            </h1>
          </div>
          <div className="mb-6 rounded-lg overflow-x-auto">
            <table className="w-full text-left border-collapse shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-green-200 hover:font-bold rounded-lg">
                  <th className="px-4 py-3 text-green-700">SI.NO</th>
                  <th className="px-4 py-3 text-green-700">Name of Employee</th>
                  <th className="px-4 py-3 text-green-700">Post</th>
                  <th className="px-4 py-3 text-green-700">Qualification</th>
                </tr>
              </thead>
              <tbody>
                {(entData.employees || []).map((employee, index) => (
                  <tr
                    key={index}
                    className="hover:bg-green-100 transition duration-200"
                  >
                    <td className="border px-4 py-2 text-gray-700">
                      {index + 1}
                    </td>
                    <td className="border px-4 py-2 text-gray-700">
                      {employee.name}
                    </td>
                    <td className="border px-4 py-2 text-gray-700">
                      {employee.post}
                    </td>
                    <td className="border px-4 py-2 text-gray-700">
                      {employee.qualification}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ent;
