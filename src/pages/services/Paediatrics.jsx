// eslint-disable-next-line no-unused-vars
import React from "react";
import { teamData } from "../../components/TeamSection";

const Paediatrics = () => {
  const PaediatricsData = teamData.find(
    (dept) => dept.department === "Peadiatrics"
  );

  if (!PaediatricsData) {
    return (
      <div className="p-6 bg-red-100 text-red-900 rounded-lg">
        <p>Data for the Paediatrics department is not available.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-green-400 text-green-900 rounded-lg">
      <section className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2 border-b-2 border-green-400">
          About Paediatrics
        </h2>
        <p>
          Paediatrics is a specialized branch of medicine that focuses on the
          health and well-being of infants, children, and adolescents. It
          includes the diagnosis, treatment, and prevention of diseases, as well
          as ensuring proper growth and development during childhood. The
          department is committed to providing child-friendly care that meets
          the physical, emotional, and social needs of children.
        </p>
      </section>

      <section className="bg-green-50 shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2 border-b-2 border-green-400">
          Common Conditions Treated
        </h2>
        <ul className="list-disc list-inside space-y-1">
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

      <section className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2 border-b-2 border-green-400">
          Services Offered
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Newborn Care and Screening</li>
          <li>Vaccination and Immunization Programs</li>
          <li>Growth and Development Monitoring</li>
          <li>Management of Acute and Chronic Childhood Illnesses</li>
          <li>Adolescent Health Services</li>
          <li>Dietary and Nutritional Counseling</li>
          <li>Parental Guidance and Support</li>
        </ul>
      </section>

      <section className="bg-green-50 shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2 border-b-2 border-green-400">
          Why Choose Us?
        </h2>
        <p>
          The Paediatrics department is equipped with child-friendly facilities
          and staffed by highly trained paediatricians and nurses who are
          passionate about children&apos;s health. We provide comprehensive care
          with a focus on early detection, timely treatment, and family-centered
          approaches to ensure the best outcomes for every child.
        </p>
      </section>

      <section className="bg-white shadow-md rounded-lg p-4">
        <div className="container mx-auto py-10 px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-green-800 hover:text-green-400">
              Paediatrics Team
            </h1>
          </div>
          <div className="mb-10 rounded-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-green-200 hover:font-bold rounded-lg">
                  <th className="px-4 py-2 text-green-700">SI.NO</th>
                  <th className="px-4 py-2 text-green-700">Name of Employee</th>
                  <th className="px-4 py-2 text-green-700">Post</th>
                  <th className="px-4 py-2 text-green-700">Qualification</th>
                </tr>
              </thead>
              <tbody>
                {(PaediatricsData.employees || []).map((employee, index) => (
                  <tr key={index} className="hover:bg-green-100">
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{employee.name}</td>
                    <td className="border px-4 py-2">{employee.post}</td>
                    <td className="border px-4 py-2">
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
