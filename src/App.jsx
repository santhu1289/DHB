import React from "react";
//import ReactDOM from "react-dom/client"; // Make sure you import ReactDOM
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import GeneralMedicine from "./pages/services/GeneralMedicine";
import Paediatrics from "./pages/services/Paediatrics";
import GeneralSurgery from "./pages/services/GeneralSurgery";
import { ThemeProvider } from "./components/ThemeContext";
// Add other service pages similarly
import "./index.css";
import Orthopedic from "./pages/services/Orthopedic";
import Anesthesia from "./pages/services/Anesthesia";
import Gynecology from "./pages/services/Gynecology";
import Laboratory from "./pages/services/Laboratory";
import Radiology from "./pages/services/Radiology";
import Pharmacy from "./pages/services/Pharmacy";
import EmergencyServices from "./pages/services/EmergencyServices";

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Navbar links */}
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="activities" element={<Activities />} />
              <Route path="contact" element={<Contact />} />

              {/* Sidebar links */}
              <Route
                path="services/general-medicine"
                element={<GeneralMedicine />}
              />
              <Route path="services/paediatrics" element={<Paediatrics />} />
              <Route path="services/surgery" element={<GeneralSurgery />} />
              <Route path="services/ortho" element={<Orthopedic />} />
              <Route path="services/anesthesia" element={<Anesthesia />} />
              <Route path="services/gynecology" element={<Gynecology />} />
              <Route path="services/laboratory" element={<Laboratory />} />
              <Route path="services/radiology" element={<Radiology />} />
              <Route path="services/pharmacy" element={<Pharmacy />} />
              <Route
                path="services/emergency"
                element={<EmergencyServices />}
              />
              {/* Add other service routes here */}
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}

// Make sure to use ReactDOM.createRoot to render the app
//ReactDOM.createRoot(document.getElementById("root")).render(<App />);
export default App;
