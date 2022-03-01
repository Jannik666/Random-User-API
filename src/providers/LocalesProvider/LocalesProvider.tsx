import React, { createContext, useState, useCallback, useContext } from "react";

import { langs } from "./translations";
import { LocalesType } from "./LocalesProvider.types";

const LocalesContext = createContext<LocalesType>({ ...langs });

export const useLocales = () => useContext(LocalesContext);

const LocalesProvider: React.FC = ({ children }) => {
  const [lang, setLang] = useState<string>("en");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ru" : "en"));
  }, []);

  return (
    <LocalesContext.Provider value={{ trans: langs[lang], toggleLang }}>
      {children}
    </LocalesContext.Provider>
  );
};

export default LocalesProvider;
