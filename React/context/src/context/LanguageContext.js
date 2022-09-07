import { createContext, useState } from "react";

const LanguageContext = createContext();
const initialLanguage = "es";
const translations = {
  es: {
    headerTitle: "Mi aplicación CON CONTEXT API",
    headerSubtitle: "Mi Cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar sesión",
    buttonLogout: "Cerrar sesión",
    mainWelcome: "¡Bienvenido!",
    mainHello: "Hola, Usuario",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pie de página",
  },
  en: {
    headerTitle: "My app WITH CONTEXT API",
    headerSubtitle: "My Header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome!",
    mainHello: "Hello, User",
    mainContent: "Main content",
    footerTitle: "My footer",
  },
};
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  // función para cambiar el lenguaje
  const handleLanguage = (e) => {
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translations.es);
    } else {
      setLanguage("en");
      setTexts(translations.en);
    }
  };
  const data = { handleLanguage, texts };
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};
export { LanguageProvider };
export default LanguageContext;
