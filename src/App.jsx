import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import GeneralMedicine from "./pages/services/GeneralMedicine";
import Paediatrics from "./pages/services/Paediatrics";
import GeneralSurgery from "./pages/services/GeneralSurgery";
import Orthopedic from "./pages/services/Orthopedic";
import Anesthesia from "./pages/services/Anesthesia";
import Gynecology from "./pages/services/Gynecology";
import Laboratory from "./pages/services/Laboratory";
import Radiology from "./pages/services/Radiology";
import Pharmacy from "./pages/services/Pharmacy";
import EmergencyServices from "./pages/services/EmergencyServices";
import Ent from "./pages/services/Ent";
import { ThemeProvider } from "./components/ThemeContext";
import "./index.css";

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blogs" element={<Home />} />
            <Route path="activities" element={<Activities />} />
            <Route path="contact" element={<Contact />} />

            <Route path="services/general-medicine" element={<GeneralMedicine />} />
            <Route path="services/paediatrics" element={<Paediatrics />} />
            <Route path="services/surgery" element={<GeneralSurgery />} />
            <Route path="services/ortho" element={<Orthopedic />} />
            <Route path="services/anesthesia" element={<Anesthesia />} />
            <Route path="services/gynecology" element={<Gynecology />} />
            <Route path="services/laboratory" element={<Laboratory />} />
            <Route path="services/radiology" element={<Radiology />} />
            <Route path="services/pharmacy" element={<Pharmacy />} />
            <Route path="services/emergency" element={<EmergencyServices />} />
            <Route path="services/ent" element={<Ent />} />
            
          </Route>
        </Routes>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;