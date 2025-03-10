// eslint-disable-next-line no-unused-vars
import React from "react";
import { teamData } from "../../components/TeamSection";

const Orthopedic = () => {
  const OrthoData = teamData.find((dept) => dept.department === "Orthopedics");

  if (!OrthoData) {
    return (
      <div className="p-6 bg-red-100 text-red-900 rounded-lg">
        <p>Data for the Orthopedics department is not available.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-green-400 text-green-900 rounded-lg">
      <section className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2 border-b-2 border-green-400">
          About Orthopedics
        </h2>
        <p>
          Orthopedics is a specialized branch of medicine focused on the
          diagnosis, treatment, and prevention of disorders related to the
          musculoskeletal system. This includes conditions affecting bones,
          joints, muscles, ligaments, and tendons. Our department is dedicated
          to providing high-quality orthopedic care using advanced surgical and
          non-surgical treatments to help patients regain mobility and improve
          their quality of life.
        </p>
      </section>

      <section className="bg-green-50 shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2 border-b-2 border-green-400">
          Common Conditions Treated
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Fractures and Dislocations</li>
          <li>Arthritis and Joint Disorders</li>
          <li>Sports Injuries (e.g., ACL Tears, Rotator Cuff Injuries)</li>
          <li>Spinal Disorders (e.g., Herniated Discs, Scoliosis)</li>
          <li>Osteoporosis and Bone Health Issues</li>
          <li>Carpal Tunnel Syndrome</li>
          <li>Congenital and Developmental Orthopedic Conditions</li>
        </ul>
      </section>

      <section className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2 border-b-2 border-green-400">
          Services Offered
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Joint Replacement Surgery (Knee, Hip, Shoulder)</li>
          <li>Arthroscopic Surgery</li>
          <li>Fracture and Trauma Management</li>
          <li>Spinal Surgery and Rehabilitation</li>
          <li>Sports Injury Treatment and Rehabilitation</li>
          <li>Pediatric Orthopedics</li>
          <li>Physiotherapy and Pain Management</li>
        </ul>
      </section>

      <section className="bg-green-50 shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2 border-b-2 border-green-400">
          Why Choose Us?
        </h2>
        <p>
          The Orthopedics department is equipped with state-of-the-art
          technology and a team of highly experienced orthopedic surgeons and
          specialists. We focus on personalized patient care, utilizing
          minimally invasive procedures and advanced rehabilitation techniques
          to ensure faster recovery and long-term well-being.
        </p>
      </section>

      <section className="bg-white shadow-md rounded-lg p-4">
        <div className="container mx-auto py-10 px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-green-800 hover:text-green-400">
              Orthopedics Team
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
                {(OrthoData.employees || []).map((employee, index) => (
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

export default Orthopedic;
