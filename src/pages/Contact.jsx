//import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-green-50 min-h-screen text-center">
      {/* Header */}
      <h1 className="text-4xl font-bold text-green-700 mb-4">📍 Contact Us</h1>
      <p className="text-gray-600 mb-6">
        Feel free to reach out to us for any queries or assistance.
      </p>

      {/* Contact Details */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
        <p className="text-lg text-gray-700 flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-600" />
          Rajakumar Road, Near Sangam Circle, Ballari
        </p>
        <p className="text-lg text-gray-700 flex items-center justify-center gap-2 mt-2">
          <FontAwesomeIcon icon={faPhone} className="text-green-600" />
          +91 8392 275255
        </p>
        <p className="text-lg text-gray-700 flex items-center justify-center gap-2 mt-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-green-600" />
          <a
            href="mailto:bellaryds@gmail.com"
            className="text-blue-600 hover:underline"
          >
            bellaryds@gmail.com
          </a>
        </p>
      </div>

      {/* Google Map Embed */}
      <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Google Map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.879835563688!2d76.9214428741266!3d15.142121817554315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb69ff4c8e1a4fd%3A0x7d484c69e6e417a5!2sSangam%20Circle%2C%20Ballari!5e0!3m2!1sen!2sin!4v1710177743211!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
