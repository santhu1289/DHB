/* eslint-disable no-unused-vars */

import React from "react";
import HeroHeader from "../components/HeroHeader";
import AboutPage from "../components/AboutPage";
import Achivements from "../components/Achivements";
import TeamSection from "../components/TeamSection";
import { useTheme } from "../components/ThemeContext";
useTheme;
AboutPage;
HeroHeader;
const About = () => {
  const { isLightOn } = useTheme();
  return (
    <div
      className={`${
        isLightOn
          ? "bg-lightBackground text-gray-800"
          : "bg-darkBackground text-white"
      } min-h-screen py-6`}
    >
      <div className="container mx-auto px-4">
        <HeroHeader />
        <AboutPage />
        <Achivements />
        <TeamSection />
      </div>
    </div>
  );
};

// Make sure to export it as default
export default About;
