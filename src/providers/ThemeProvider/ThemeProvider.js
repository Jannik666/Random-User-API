import React, { useState, useCallback, createContext, useContext } from "react";

import {
  ThemeProvider as Provider,
  GlobalStyles,
  createTheme,
} from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const ThemeContext = createContext({});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light" || "dark");

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <Provider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </Provider>
  );
};

export default ThemeProvider;
