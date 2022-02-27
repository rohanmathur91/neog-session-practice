import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({ theme: "light" });

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () =>
    setTheme((prev) => {
      console.log(prev);
      return prev === "light" ? "dark" : "light";
    });

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
