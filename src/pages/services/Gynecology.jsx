// eslint-disable-next-line no-unused-vars
import React from "react";
import { teamData } from "../../components/TeamSection";

const Gynecology = () => {
  const GynecologyData = teamData.find(
    (dept) => dept.department === "Obstetrics and Gynaecology"
  );

  if (!GynecologyData) {
    return (
      <div className="p-6 bg-red-100 text-red-900 rounded-lg text-center">
        <p className="text-lg font-semibold">
          Data for the Gynecology department is not available.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-r from-green-300 to-green-500 text-green-900 rounded-lg">
      <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-stethoscope mr-2 text-green-600"></i> About
          Gynecology
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Gynecology is a medical specialty focused on women's reproductive
          health, including the diagnosis, treatment, and prevention of
          disorders affecting the female reproductive system. Our department
          provides comprehensive care for women of all ages, addressing a wide
          range of gynecological conditions and ensuring optimal reproductive
          health.
        </p>
      </section>

      <section className="bg-green-50 shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-heartbeat mr-2 text-green-600"></i> Common
          Conditions Managed
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Menstrual Disorders</li>
          <li>Polycystic Ovary Syndrome (PCOS)</li>
          <li>Endometriosis</li>
          <li>Pelvic Inflammatory Disease</li>
          <li>Gynecological Cancers</li>
          <li>Fertility and Contraceptive Counseling</li>
          <li>Menopause Management</li>
        </ul>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-hospital mr-2 text-green-600"></i> Services
          Offered
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Comprehensive Gynecological Exams</li>
          <li>Prenatal and Postnatal Care</li>
          <li>Minimally Invasive Gynecologic Surgeries</li>
          <li>Infertility Treatments and Counseling</li>
          <li>Hormonal Therapy and Menopause Care</li>
          <li>Ultrasound and Diagnostic Imaging</li>
          <li>Family Planning and Birth Control Services</li>
        </ul>
      </section>

      <section className="bg-green-50 shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-3 border-b-2 border-green-400 pb-2">
          <i className="fas fa-user-md mr-2 text-green-600"></i> Why Choose Us?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The Gynecology department is staffed by experienced specialists
          dedicated to providing personalized and compassionate care. We use the
          latest medical advancements to offer safe, effective, and
          patient-centered treatments, ensuring the best outcomes for women's
          health and well-being.
        </p>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-6">
        <div className="container mx-auto py-6 px-4">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-green-800 hover:text-green-600 transition duration-300">
              Gynecology Team
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
                {(GynecologyData.employees || []).map((employee, index) => (
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

export default Gynecology;
