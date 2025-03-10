// eslint-disable-next-line no-unused-vars
import React from "react";
import { teamData } from "../../components/TeamSection";

const Anesthesia = () => {
  const AnesthesiaData = teamData.find(
    (dept) => dept.department === "Anaesthesia"
  );

  if (!AnesthesiaData) {
    return (
      <div className="p-6 bg-red-100 text-red-900 rounded-lg text-center">
        <p className="text-lg font-semibold">
          Data for the Anesthesia department is not available.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-r from-green-300 to-green-500 text-green-900 rounded-lg">
      <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-user-md mr-2 text-green-600"></i> About
          Anesthesia
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Anesthesia is a critical medical specialty focused on pain management
          and patient care before, during, and after surgical procedures. The
          department ensures patient safety and comfort using advanced
          anesthetic techniques, including general, regional, and local
          anesthesia.
        </p>
      </section>

      <section className="bg-green-50 shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-heartbeat mr-2 text-green-600"></i> Common
          Conditions Managed
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Preoperative Patient Assessment</li>
          <li>Pain Management for Surgical Procedures</li>
          <li>Postoperative Pain Control</li>
          <li>Spinal and Epidural Anesthesia</li>
          <li>Critical Care and Emergency Anesthesia</li>
          <li>Management of Chronic Pain Conditions</li>
          <li>Sedation for Diagnostic and Therapeutic Procedures</li>
        </ul>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-hospital mr-2 text-green-600"></i> Services
          Offered
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>General Anesthesia for Major Surgeries</li>
          <li>Regional and Local Anesthesia</li>
          <li>Pain Management and Palliative Care</li>
          <li>Critical Care and Intensive Monitoring</li>
          <li>Advanced Airway Management</li>
          <li>Perioperative Anesthesia Consultation</li>
          <li>Sedation Services for Minor Procedures</li>
        </ul>
      </section>

      <section className="bg-green-50 shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-user-shield mr-2 text-green-600"></i> Why Choose
          Us?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The Anesthesia department is equipped with the latest monitoring and
          anesthetic delivery systems, ensuring patient safety and comfort. Our
          experienced anesthesiologists use evidence-based techniques to provide
          individualized care, minimizing risks and enhancing recovery outcomes.
        </p>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-6">
        <div className="container mx-auto py-6 px-4">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-green-800 hover:text-green-600 transition duration-300">
              Anesthesia Team
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
                {(AnesthesiaData.employees || []).map((employee, index) => (
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

export default Anesthesia;
