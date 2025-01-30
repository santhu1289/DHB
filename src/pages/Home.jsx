// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useTheme } from "../components/ThemeContext"; // Adjusted import path for useTheme
import Hero from "../components/Hero";
import HeroHeader from "../components/HeroHeader";
import Achivements from "../components/Achivements";
import About from "../components/About";
import Feature from "../components/Feauture";
import SupportServices from "../components/SupportServices";
import Dnb from "../components/Dnb";
const Home = () => {
  const { isLightOn } = useTheme(); // Accessing the current theme value from the context
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
        <Hero />
        <Achivements />
        <Feature />
        <About />
        <Dnb />
        <SupportServices />
      </div>
    </div>
  );
};

export default Home;
