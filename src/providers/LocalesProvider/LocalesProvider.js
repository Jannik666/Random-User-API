import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from "react";

import { langs } from "./translations";

const LocalesContext = createContext({});

export const useLocales = () => useContext(LocalesContext);

const LocalesProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("langs") || "ru");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ru" : "en"));
  }, []);

  useEffect(() => {
    localStorage.setItem("langs", lang);
  });

  return (
    <LocalesContext.Provider value={{ trans: langs[lang], toggleLang }}>
      {children}
    </LocalesContext.Provider>
  );
};

export default LocalesProvider;
