// eslint-disable-next-line no-unused-vars
import React from "react";
import { teamData } from "../../components/TeamSection";

const GeneralSurgery = () => {
  const generalMedicineData = teamData.find(
    (dept) => dept.department === "General Surgery"
  );
  return (
    <div className="p-6 bg-green-400 text-green-900 rounded-lg">
      <section className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2 border-b-2 border-green-400">
          About General Surgery
        </h2>
        <p>
          General Surgery is a specialized medical field that focuses on the
          diagnosis, treatment, and surgical management of various conditions
          affecting different parts of the body. It involves procedures ranging
          from minor outpatient surgeries to complex inpatient operations. Our
          team of skilled surgeons is dedicated to providing safe and effective
          surgical care tailored to the individual needs of each patient.
        </p>
      </section>

      <section className="bg-green-50 shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2 border-b-2 border-green-400">
          Common Conditions Treated
        </h2>
        <ul className="list-disc list-inside space-y-1">
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

      <section className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2 border-b-2 border-green-400">
          Services Offered
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Emergency and Trauma Surgery</li>
          <li>Minimally Invasive Laparoscopic Procedures</li>
          <li>Elective Surgeries</li>
          <li>Wound Care and Management</li>
          <li>Cancer Surgeries (e.g., Breast, Thyroid)</li>
          <li>Preoperative and Postoperative Care</li>
          <li>Consultation and Surgical Planning</li>
        </ul>
      </section>

      <section className="bg-green-50 shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2 border-b-2 border-green-400">
          Why Choose Us?
        </h2>
        <p>
          The General Surgery department is equipped with state-of-the-art
          operating rooms and advanced surgical instruments. Our team of
          experienced surgeons and support staff ensures compassionate care,
          precision, and safety in every procedure. We are committed to
          delivering excellence in surgical outcomes and patient satisfaction.
        </p>
      </section>

      <section className="bg-white shadow-md rounded-lg p-4">
        <div className="container mx-auto py-10 px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-green-800 hover:text-green-400">
              General Surgery Team
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

export default GeneralSurgery;
