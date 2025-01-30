// eslint-disable-next-line no-unused-vars
import React from "react";
import { teamData } from "../../components/TeamSection";

const GeneralMedicine = () => {
  const generalMedicineData = teamData.find(
    (dept) => dept.department === "General Medicine"
  );
  return (
    <div className="p-6 bg-green-400 text-green-900 rounded-lg">
      <section className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2 border-b-2 border-green-200">
          About General Medicine
        </h2>
        <p>
          General medicine involves the diagnosis, treatment, and prevention of
          diseases affecting adults. It encompasses a wide range of conditions
          and focuses on holistic patient care.
        </p>
      </section>

      <section className="bg-green-50 shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2 border-b-2 border-green-200">
          Common Conditions Treated
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Hypertension</li>
          <li>Diabetes Mellitus</li>
          <li>Respiratory Infections</li>
          <li>Gastrointestinal Disorders</li>
          <li>Cardiovascular Diseases</li>
        </ul>
      </section>

      <section className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2 border-b-2 border-green-200">
          Services Offered
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Health Check-ups</li>
          <li>Chronic Disease Management</li>
          <li>Acute Illness Treatment</li>
          <li>Preventive Care</li>
        </ul>
      </section>
      <section className="bg-white shadow-md rounded-lg p-4">
        <div className="container mx-auto py-10 px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-green-800 hover:text-green-400">
              General Medicine Team
            </h1>
          </div>
          <div className="mb-10 rounded-lg">
            {/* <h3 className="text-xl font-semibold text-green-800 mb-4">
              {generalMedicineData.department}
            </h3> */}
            <table className="w-full text-left border-collapse ">
              <thead>
                <tr className="bg-green-200 hover:font-bold rounded-lg ">
                  <th className="px-4 py-2 text-green-700">SI.NO</th>
                  <th className="px-4 py-2 text-green-700">Name of Employee</th>
                  <th className="px-4 py-2 text-green-700">Post</th>
                  <th className="px-4 py-2 text-green-700">Qualification</th>
                </tr>
              </thead>
              <tbody>
                {generalMedicineData.employees.map((employee, index) => (
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

export default GeneralMedicine;
