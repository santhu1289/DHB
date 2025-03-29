// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useMemo } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import { useTheme } from "./ThemeContext"; // Import the custom hook
import QRS from "../assets/images/ors.png";
import eHospital from "../assets/images/eHospital.png";
import FloatingBackground from "./FloatingBackground ";
//import { FloatingBackground } from "./FloatingBackground ";


// eslint-disable-next-line react/prop-types
const ScrollableSidebar = ({ isOpen, isLightOn, children }) => (
  <aside
    className={`sticky top-[4rem] left-0 h-auto min-h-[calc(100vh-4rem)] ${
      isOpen ? "w-64" : "w-16"
    } transition-all duration-300 overflow-y-auto ${
      isLightOn ? "bg-green-800" : "bg-gray-800"
    }`}
  >
    {children}
  </aside>
);

const Layout = () => {
  const [visitorsCount, setVisitorsCount] = useState(0);
  const { isLightOn, toggleLight } = useTheme(); // Use the context to get theme state and toggle function
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const API_URL = "http://localhost:5000/api/visitors";

  // Fetch visitors count from the server
  useEffect(() => {
    const fetchVisitorsCount = async () => {
      try {
        const response = await axios.get(API_URL);
        setVisitorsCount(response.data.count); // Set the initial visitors count from the API
      } catch (error) {
        console.error("Error fetching visitors count:", error);
      }
    };

    fetchVisitorsCount();
  }, []);

  // Increment visitors count once per session
  useEffect(() => {
    const incrementVisitorsCount = async () => {
      if (!sessionStorage.getItem("visitorVisited")) {
        try {
          // Send POST request to increment visitors count
          await axios.post(API_URL);

          // Fetch updated count from the server
          const response = await axios.get(API_URL);
          setVisitorsCount(response.data.count);

          // Mark this session as visited
          sessionStorage.setItem("visitorVisited", "true");
        } catch (error) {
          console.error("Error updating visitors count:", error);
        }
      }
    };

    incrementVisitorsCount();
  }, []); // Ensure this runs only once on mount
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isLightOn ? "bg-white" : "bg-gray-900"
      }`}
    >
      {/* Header */}
      <header>
        {/* Top Bar */}
        <div
          className={`py-2 text-sm ${
            isLightOn ? "bg-green-800 text-white" : "bg-gray-700"
          }`}
        >
          <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
            {/* Contact Information */}
            <div className="flex space-x-4">
              <div className="flex items-center">
                <i className="fas fa-phone mr-2"></i>
                <span>+91 8392 275255</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                <span>bellaryds@gmail.com</span>
              </div>
            </div>

            {/* Visitors Count */}
            <div className="flex items-center space-x-2">
              <i className="fas fa-users mr-2"></i>
              <span>Visitors: {visitorsCount}</span>
            </div>

            {/* Light/Dark Mode Toggle */}
            <button
              onClick={toggleLight}
              className="hidden md:flex items-left space-x-2 px-3 py-1 rounded-md bg-green-500 hover:bg-green-400 focus:outline-none"
            >
              <i
                className={`fas ${isLightOn ? "fa-lightbulb" : "fa-moon"}`}
              ></i>
              <span>{isLightOn ? "Switch Off Light" : "Switch On Light"}</span>
            </button>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav
          className={`shadow-md sticky top-0 z-50 ${
            isLightOn ? "bg-white" : "bg-gray-800"
          }`}
        >
          <div className="container mx-auto flex items-center justify-between px-4 py-3">
            {/* Logo Section */}
            <a href="/" className="flex items-center space-x-3">
              <img
                className="w-14 h-14"
                src="/img/icon/karicon.png"
                alt="Karnataka Logo"
              />
              <div>
                <h1
                  className={`text-lg md:text-1xl lg:text-2xl font-bold font-kannada ${
                    isLightOn
                      ? "text-green-800 text-shadow-dark"
                      : "text-blue-300 text-shadow-dark"
                  }`}
                >
                  ಜಿಲ್ಲಾ ಆಸ್ಪತ್ರೆ ಬಳ್ಳಾರಿ | District Hospital Ballari
                </h1>
              </div>
            </a>

            {/* Hamburger Icon */}
            <button
              className="lg:hidden flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            {/* Navigation Links */}
            <div
              className={`lg:flex lg:space-x-6 ${
                isMenuOpen ? "block" : "hidden"
              } absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-40`}
            >
              {["Home", "About", "Blogs", "Activities", "Contact"].map(
                (text) => (
                  <a
                    href={`/${text === "Home" ? "" : text.toLowerCase()}`}
                    key={text}
                    className={`block lg:inline-block px-4 py-2 lg:py-0 ${
                      isLightOn
                        ? "text-gray-700 hover:text-green-600"
                        : "text-blue-300 hover:text-blue-400"
                    } transition`}
                  >
                    {text}
                  </a>
                )
              )}
            </div>
          </div>
        </nav>
      </header>
      <div className="flex">
        <ScrollableSidebar isOpen={isSidebarOpen} isLightOn={isLightOn}>
          <div className="flex items-center justify-between p-4">
          <FloatingBackground />
            {isSidebarOpen && (
              <h2 className="text-lg text-white font-bold top-20">Services</h2>
            )}
            <button
              onClick={toggleSidebar}
              className={`p-2 rounded-md ${
                isLightOn
                  ? "bg-green-500 hover:bg-green-400"
                  : "bg-gray-700 hover:bg-gray-600"
              } focus:outline-none`}
              title={isSidebarOpen ? "Collapse Sidebar" : "Expand Sidebar"}
            >
              <i
                className={`fas ${
                  isSidebarOpen ? "fa-chevron-left" : "fa-chevron-right"
                }`}
              ></i>
            </button>
          </div>

          <nav>
            <ul className="space-y-3 px-2">
              {[
                {
                  href: "/services/general-medicine",
                  label: "General Medicine",
                  icon: "fas fa-stethoscope",
                },
                {
                  href: "/services/paediatrics",
                  label: "Pediatrics",
                  icon: "fas fa-child",
                },
                {
                  href: "/services/surgery",
                  label: "Surgery",
                  icon: "fas fa-syringe",
                },
                {
                  href: "/services/ortho",
                  label: "Orthopedics",
                  icon: "fas fa-bone",
                },
                {
                  href: "/services/gynecology",
                  label: "Gynecology",
                  icon: "fas fa-female",
                },
                {
                  href: "/services/anesthesia",
                  label: "Anesthesia",
                  icon: "fas fa-procedures",
                },
                {
                  href: "/services/laboratory",
                  label: "Laboratory",
                  icon: "fas fa-vial",
                },
                {
                  href: "/services/radiology",
                  label: "Radiology",
                  icon: "fas fa-x-ray",
                },
                {
                  href: "/services/pharmacy",
                  label: "Pharmacy",
                  icon: "fas fa-pills",
                },
                {
                  href: "/services/emergency",
                  label: "Emergency",
                  icon: "fas fa-ambulance",
                },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`flex items-center space-x-3 p-2 rounded-md ${
                      isLightOn
                        ? "hover:bg-green-600 text-gray-200 hover:text-gray-900"
                        : "hover:bg-gray-600 text-gray-400"
                    }`}
                  >
                    <i className={link.icon}></i>
                    {isSidebarOpen && <span>{link.label}</span>}
                  </a>
                </li>
              ))}

              {/* Divider Line */}
              <li>
                <hr className="border-white shadow-2xl shadow-white" />
              </li>

              {/* Logos Section */}
              {[
                {
                  href: "https://ors.gov.in/orsportal/",
                  src: QRS,
                  label: "Online Registration System",
                },
                {
                  href: "https://ehospital.gov.in/ehospitalsso/",
                  src: eHospital,
                  label: "e-Hospital",
                },
                {
                  href: "https://esanjeevani.mohfw.gov.in/",
                  label: "e-Sanjivini",
                  icon: "fas fa-clinic-medical",
                },
              ].map((logo, index) => (
                <li key={index}>
                  <a
                    href={logo.href || "#"}
                    target="_blank" // Opens link in a new tab
                    rel="noopener noreferrer" // Security measure
                    className={`flex items-center space-x-3 p-2 rounded-md ${
                      isLightOn
                        ? "hover:bg-green-600 text-gray-200 hover:text-gray-900"
                        : "hover:bg-gray-600 text-gray-400"
                    }`}
                  >
                    {/* Conditionally Render an Image or Icon */}
                    {logo.src ? (
                      <img
                        src={logo.src}
                        alt={logo.label}
                        className="w-8 h-8 rounded-md object-cover"
                      />
                    ) : (
                      <i className={`${logo.icon} text-2xl`}></i>
                    )}
                    {isSidebarOpen && <span>{logo.label}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </ScrollableSidebar>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto transition-all duration-300">
          <Outlet />
        </main>
      </div>

      {/* Footer Section */}
      <footer className="bg-green-800 mt-auto">
        <div className="container mx-auto py-5 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
            {/* Hospital Info & Map */}
            <div>
              <h1 className="text-2xl font-bold mb-4">
                District Hospital, Ballari
              </h1>
              <div className="mb-4">
                <iframe
                  className="rounded-md border border-white w-full"
                  title="District Hospital Map"
                  src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28985.49268033529!2d76.93473453727142!3d15.144500549185086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v${new Date().getTime()}`}
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Address */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Address</h5>
              <p className="flex items-center mb-2">
                <i className="fa fa-map-marker-alt mr-3"></i>
                Rajakumar Road, Near Sangam Circle, Ballari
              </p>
              <p className="flex items-center mb-2">
                <i className="fa fa-phone-alt mr-3"></i>
                +91 8392 275255
              </p>
              <p className="flex items-center">
                <i className="fa fa-envelope mr-3"></i>
                bellaryds@gmail.com
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              {[
                "About Us",
                "Contact Us",
                "Our Services",
                "Terms & Conditions",
                "Support",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-green-200 hover:text-green-400 transition mb-2"
                >
                  <i className="fa fa-angle-right mr-2"></i>
                  {link}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Newsletter</h5>
              <div className="flex items-center bg-green-700 rounded-lg overflow-hidden">
                <input
                  className="flex-1 bg-green-700 text-green-200 placeholder-green-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 w-[70%]"
                  type="email"
                  placeholder="Your email"
                />
                <button className="bg-green-600 text-white px-4 py-2 hover:bg-green-500 transition w-[30%]">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-green-900 py-4">
          <div className="container mx-auto text-center text-green-200">
            <p>
              &copy; 2024 District Hospital Ballari. Licensed under{" "}
              <a
                href="https://www.gnu.org/licenses/gpl-3.0.html"
                target="_blank"
              >
                GPL-3.0
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
