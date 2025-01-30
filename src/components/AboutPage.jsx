/* eslint-disable no-unused-vars */
import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-green-800 mb-4">
          District Hospital, Ballari
        </h1>
        <p className="text-lg text-green-700 leading-relaxed">
          Serving the community with comprehensive healthcare services, striving
          for excellence in patient care and health programs.
        </p>
      </div>

      {/* Content Section */}
      <div className="bg-white shadow-md rounded-lg p-8 space-y-6">
        <p className="text-lg text-green-900 leading-relaxed">
          This hospital is located in a vantage position in the city, for which
          great philanthropists late Sri Sabhapathi Modaliyar & Kuppu Swamy
          Modaliyar gave the land. The present hospital was erstwhile known as
          Maternal & Child Health Hospital (Headquarters Hospital) and was under
          the administrative & overall control of VIMS, Ballari from 1996 to
          2015.
        </p>
        <p className="text-lg text-green-900 leading-relaxed">
          As an MCH care provider at that time, the average outpatient seen was
          200 to 300 & the average inpatient was 50 to 70. However, after being
          handed over to the Health & Family Welfare Department, the average OPD
          has increased to 1000-1200 per day & IPD to 200-220 per day.
        </p>
        <p className="text-lg text-green-900 leading-relaxed">
          The honorable Government of Karnataka, in an order dated 04/08/2015,
          vide GO No: HFW/117/CGM/2015 Bangalore, completely handed over the
          present hospital into the fold of the Dept. of Health & Family Welfare
          as a fully functional District Hospital, Ballari.
        </p>
        <p className="text-lg text-green-900 leading-relaxed">
          Since 01/04/2016, the complete administrative & functional control of
          this hospital has been under the District Surgeon, Ballari. The
          hospital has all the specialist doctors (along with existing MCH
          specialties) providing comprehensive preventive, promotive & curative
          services to the community in general. A special aspect of the hospital
          is its involvement & implementation of various national &
          state-sponsored health programs.
        </p>
      </div>

      {/* Highlights Section */}
      <div className="mt-12 bg-green-50 shadow-md rounded-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          Key Features and Initiatives
        </h2>
        <ul className="space-y-4 text-lg text-green-900">
          <li className="flex items-start">
            <i className="fas fa-user-graduate text-green-700 text-2xl mr-4"></i>
            <div>
              <h3 className="font-semibold text-green-800">DNB Section</h3>
              <p>
                The hospital is a certified DNB (Diplomate of National Board)
                center, providing high-quality postgraduate medical education
                and training to aspiring doctors.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <i className="fas fa-procedures text-green-700 text-2xl mr-4"></i>
            <div>
              <h3 className="font-semibold text-green-800">
                TeleICU (10-bed ICU)
              </h3>
              <p>
                A state-of-the-art 10-bed TeleICU facility that ensures critical
                care with remote monitoring and consultation in collaboration
                with hub hospitals.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <i className="fas fa-brain text-green-700 text-2xl mr-4"></i>
            <div>
              <h3 className="font-semibold text-green-800">
                Brain Health Initiative
              </h3>
              <p>
                A pioneering initiative focusing on mental health and
                neurological care, catering to the growing needs of the
                community.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Decorative Divider */}
      <div className="mt-12 flex justify-center">
        <div className="h-1 bg-green-600 w-32 rounded-full"></div>
      </div>
    </div>
  );
};

export default AboutPage;
