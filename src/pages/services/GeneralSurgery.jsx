// eslint-disable-next-line no-unused-vars
import React from "react";
import { teamData } from "../../components/TeamSection";

const GeneralSurgery = () => {
  const generalSurgeryData = teamData.find(
    (dept) => dept.department === "General Surgery"
  );

  if (!generalSurgeryData) {
    return (
      <div className="p-6 bg-red-100 text-red-900 rounded-lg text-center">
        <p className="text-lg font-semibold">
          Data for the General Surgery department is not available.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-r from-green-300 to-green-500 text-green-900 rounded-lg">
      <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-user-md mr-2 text-green-600"></i> About General
          Surgery
        </h2>
        <p className="text-gray-700 leading-relaxed">
          General Surgery is a specialized medical field that focuses on the
          diagnosis, treatment, and surgical management of various conditions
          affecting different parts of the body. It involves procedures ranging
          from minor outpatient surgeries to complex inpatient operations.
        </p>
      </section>

      <section className="bg-green-50 shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-heartbeat mr-2 text-green-600"></i> Common
          Conditions Treated
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Appendicitis</li>
          <li>Gallbladder Diseases (e.g., Gallstones, Cholecystitis)</li>
          <li>Hernias (e.g., Inguinal, Umbilical, Incisional)</li>
          <li>Thyroid Disorders requiring Surgery</li>
          <li>Breast Conditions (e.g., Lumps, Tumors)</li>
          <li>
            Gastrointestinal Disorders (e.g., Peptic Ulcers, Bowel Obstruction)
          </li>
          <li>Soft Tissue Infections and Abscesses</li>
        </ul>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-hospital mr-2 text-green-600"></i> Services
          Offered
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Emergency and Trauma Surgery</li>
          <li>Minimally Invasive Laparoscopic Procedures</li>
          <li>Elective Surgeries</li>
          <li>Wound Care and Management</li>
          <li>Cancer Surgeries (e.g., Breast, Thyroid)</li>
          <li>Preoperative and Postoperative Care</li>
          <li>Consultation and Surgical Planning</li>
        </ul>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-6">
        <div className="container mx-auto py-6 px-4">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-green-800 hover:text-green-600 transition duration-300">
              General Surgery Team
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
                {(generalSurgeryData.employees || []).map((employee, index) => (
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

export default GeneralSurgery;
