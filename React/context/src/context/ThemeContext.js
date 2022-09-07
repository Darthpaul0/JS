import { createContext, useState } from "react";

const ThemeContext = createContext();
const initialTheme = "light";

// este será el contenedor para los componentes que necesiten Theme
const ThemeProvider = ({ children }) => {
  /**
   * En este objeto conservaremos los valores globales
   */
  const [theme, setTheme] = useState(initialTheme);

  // función para cambiar el tema de la página
  const handleTheme = (e) => {
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  const data = { theme, handleTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
