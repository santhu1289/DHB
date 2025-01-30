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
  const [isLightOn, setIsLightOn] = useState(true);

  // Sync with the body class whenever the theme changes
  useEffect(() => {
    document.documentElement.className = isLightOn ? "light" : "dark";
  }, [isLightOn]);

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  return (
    <ThemeContext.Provider value={{ isLightOn, toggleLight }}>
      {children}
    </ThemeContext.Provider>
  );
};
