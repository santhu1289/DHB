/* eslint-disable no-unused-vars */
import React from "react";

const SupportServices = () => {
  const services = [
    {
      icon: "fa-prescription-bottle-alt",
      title: "Pharmacy",
      description:
        "The Pharmacy Department has devoted a sincere effort to putting forth standardized clinical pharmacy implementation guidelines that include a clinical pharmacist job description, a hospital pharmacist job description, etc.",
      link: "/services/pharmacy",
    },
    {
      icon: "fa-flask",
      title: "24x7 Laboratory",
      description:
        "Clinical laboratories are healthcare facilities providing a wide range of laboratory procedures which aid the physicians in carrying out the diagnosis, treatment, and management of patients.",
      link: "/services/laboratory",
    },
    {
      icon: "fa-bowl-food",
      title: "Kitchen And Dhobi Section",
      description:
        "Hospital catering services are an essential part of patient care. Good-quality, nutritious meals play a vital part in patients’ rehabilitation & recovery, & limit the unnecessary use of nutritional supplements.",
      link: "#",
    },
    {
      icon: "fa-ambulance",
      title: "Ambulance Services",
      description:
        "The ambulance service provides first aid to the patient and transport them to the nearest Community Health Centre or Government hospitals.",
      link: "/services/emergency",
    },
    {
      icon: "fa-tint",
      title: "Blood Storage Unit",
      description:
        "A blood bank is a center where blood gathered as a result of blood donation is stored and preserved for later use in blood transfusion.",
      link: "#",
    },
    {
      icon: "fa-procedures",
      title: "Emergency Services",
      description:
        "Care of emergency and accident patients is of paramount importance in saving lives, preventing disability, and for achieving the intended health goals of the Nation.",
      link: "/services/emergency",
    },
    {
      icon: "fa-brain",
      title: "Brain Health Initiative",
      description:
        "The Brain Health Initiative (BHI) in the District Hospital, Ballari, focuses on addressing neurological and mental health issues through a multidisciplinary approach.",
      link: "#",
    },
    {
      icon: "fa-laptop-medical",
      title: "TeleICU (10-Bed ICU)",
      description:
        "A TeleICU Hub-and-Spoke Model for the District Hospital, Ballari can serve as a transformative approach to delivering critical care in Taluk Level Hospitals.",
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto py-16">
      <div className="text-center max-w-xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          We Provide Some Support Services at our Hospital
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 flex flex-col justify-between text-center"
          >
            {/* Icon */}
            <div>
              <div className="text-primary text-5xl mb-4">
                <i className={`fa ${service.icon} text-green-600`}></i>
              </div>
              {/* Title */}
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h4>
              {/* Description */}
              <p className="text-gray-600">{service.description}</p>
            </div>
            {/* Button */}
            <a
              href={service.link}
              className="btn bg-green-600 text-white px-4 py-2 mt-4 rounded shadow hover:bg-green-700"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportServices;
