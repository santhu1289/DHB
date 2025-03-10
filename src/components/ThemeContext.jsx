// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context with default values
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// ThemeProvider component that will wrap the entire app
// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  // Load theme from localStorage or default to light mode
  const [isLightOn, setIsLightOn] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? false : true;
  });

  // Sync with the body class and store theme in localStorage
  useEffect(() => {
    document.documentElement.className = isLightOn ? "light" : "dark";
    localStorage.setItem("theme", isLightOn ? "light" : "dark");
  }, [isLightOn]);

  const toggleLight = () => {
    setIsLightOn((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isLightOn, toggleLight }}>
      {children}
    </ThemeContext.Provider>
  );
};
