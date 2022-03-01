import React, {
  useState,
  useCallback,
  createContext,
  useContext,
  useEffect,
} from "react";

import {
  ThemeProvider as Provider,
  GlobalStyles,
  createTheme,
} from "@mui/material";

import { ThemeType } from "./ThemeProvider.types";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const ThemeContext = createContext<ThemeType>({});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "dark"
  );

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  });

  return (
    <Provider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: theme === "light" ? "#fff" : "#121212",
          },
        }}
      />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </Provider>
  );
};

export default ThemeProvider;
