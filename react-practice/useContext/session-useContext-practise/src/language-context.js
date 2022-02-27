import { createContext, useContext, useState } from "react";

const LanguageContext = createContext({ language: "english" });

const LocalisationProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");
  const changeLanguage = (lang) => setLanguage((prev) => lang);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => useContext(LanguageContext);
export { LocalisationProvider, useLanguage };
