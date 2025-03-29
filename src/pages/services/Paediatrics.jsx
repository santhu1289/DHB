import { useState } from "react";
import { teamData } from "../../components/TeamSection";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons

const Paediatrics = () => {
  // Get Paediatrics department data
  const paediatricsData = teamData.find(
    (dept) => dept.department === "Peadiatrics"
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
  if (!paediatricsData) {
    return (
      <div className="p-6 bg-red-100 text-red-900 rounded-lg text-center">
        <p className="text-lg font-semibold">
          Data for the Paediatrics department is not available.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-r from-green-300 to-green-500 text-green-900 rounded-lg">
      {/* About Section */}
      <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-baby mr-2 text-green-600"></i> About Paediatrics
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The Department of Pediatrics at the District Hospital Ballari is
          dedicated to providing compassionate and comprehensive healthcare for
          Neonates,infants, children, and adolescents. With a team of skilled
          pediatricians and nurses, the department focuses on ensuring the
          physical, mental, and developmental well-being of young patients.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Key services include neonatal care, management of common childhood
          illnesses, immunization programmes, nutritional counseling, and
          treatment of pediatric infectious diseases. The department is equipped
          with a Special Newborn Care Unit (SNCU) for critical neonatal cases
          and facilities for growth and developmental assessments. Through
          community outreach and health education programmes, it aims to promote
          child health and prevent diseases. Integrated with telemedicine
          platforms, it ensures access to specialist consultations and advanced
          care for children across the district.
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
          <i className="fas fa-stethoscope mr-2 text-green-600"></i> Common
          Conditions Treated
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {[
            "Respiratory Infections (e.g., Asthma, Bronchitis)",
            "Gastrointestinal Disorders (e.g., Diarrhea, Colic)",
            "Childhood Allergies and Skin Conditions (e.g., Eczema, Rashes)",
            "Developmental Delays",
            "Childhood Obesity and Nutrition-related Issues",
            "Newborn Jaundice",
            "Vaccination and Immunization-related Conditions",
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
            "Out Patient Services",
            "In Patient Services",
            "Emergency Services",
            "SNCU (Special New Born Care Unit)",
            "DNB Course",
            "24 X 7 Services",
            "KMC (Kangaroo Mother Care)",
            "Immunization Services",
            "PICU (Pediatric Intensive Care Unit )",
            "HDU (High Density Unit)",
            "Speciality Clinics (Asthma Clinic, Nephrology Clinic, Cardiac Clinic, Haemotology Clinic, Neorology Clinic, Well Baby Clinic & Hearing Screening)",
            "DEIC ( Distric Early Intervention Center)",
            "Referral Services",
            "Tele Consultancy Services",
            "All National Programmes",
            "Nutritional Counselling",
            "Lactation Counselling",
            "Hemophilia Treatment Services",
            "e-Sanjivini Services",
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
              Paediatrics Team
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
                {(paediatricsData.employees || []).map((employee, index) => (
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

export default Paediatrics;
