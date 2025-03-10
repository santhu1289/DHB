// eslint-disable-next-line no-unused-vars
import React from "react";
import { teamData } from "../../components/TeamSection";

const Paediatrics = () => {
  const paediatricsData = teamData.find(
    (dept) => dept.department === "Peadiatrics"
  );

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
      <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-baby mr-2 text-green-600"></i> About Paediatrics
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Paediatrics is a specialized branch of medicine that focuses on the
          health and well-being of infants, children, and adolescents. It
          includes the diagnosis, treatment, and prevention of diseases, as well
          as ensuring proper growth and development during childhood.
        </p>
      </section>

      <section className="bg-green-50 shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-stethoscope mr-2 text-green-600"></i> Common
          Conditions Treated
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Respiratory Infections (e.g., Asthma, Bronchitis)</li>
          <li>Gastrointestinal Disorders (e.g., Diarrhea, Colic)</li>
          <li>
            Childhood Allergies and Skin Conditions (e.g., Eczema, Rashes)
          </li>
          <li>Developmental Delays</li>
          <li>Childhood Obesity and Nutrition-related Issues</li>
          <li>Newborn Jaundice</li>
          <li>Vaccination and Immunization-related Conditions</li>
        </ul>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-user-nurse mr-2 text-green-600"></i> Services
          Offered
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Newborn Care and Screening</li>
          <li>Vaccination and Immunization Programs</li>
          <li>Growth and Development Monitoring</li>
          <li>Management of Acute and Chronic Childhood Illnesses</li>
          <li>Adolescent Health Services</li>
          <li>Dietary and Nutritional Counseling</li>
          <li>Parental Guidance and Support</li>
        </ul>
      </section>

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
