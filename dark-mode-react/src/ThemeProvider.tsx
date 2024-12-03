import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
  } from "react";
  
   interface ThemeContextType {
    darkMode: boolean; 
    toggleDarkMode: () => void;
  }
  
  // Contexto de React para el tema
  // El contexto tiene un valor inicial de `undefined` porque será proporcionado más adelante.
  const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
  
  // Hook personalizado para acceder al contexto del tema.
  export const useTheme = () => {
    const context = useContext(ThemeContext); // Obtiene el contexto actual.
    if (!context) {
      throw new Error("useTheme debe ser usado dentro de ThemeProvider");
    }
    return context;
  };
  
  // Proveedor del contexto del tema.
  // Este componente encapsula a otros componentes para proporcionarles acceso al tema.
  export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    // Estado que rastrea si el modo oscuro está activado.
    // Inicializa desde `localStorage` o establece `false` por defecto.
    const [darkMode, setDarkMode] = useState<boolean>(() => {
      const savedTheme = localStorage.getItem("darkMode"); // Obtiene el valor guardado en `localStorage`.
      return savedTheme === "true"; // Devuelve `true` si el valor guardado es "true".
    });
  
    // Alterna entre el modo oscuro y claro.
    const toggleDarkMode = () => {
      setDarkMode((prevMode) => !prevMode); 
    };
  
    // Efecto que se ejecuta cada vez que cambia el valor de `darkMode`.
    useEffect(() => {
      const root = document.documentElement; // Selecciona el elemento raíz (HTML).
      if (darkMode) {
        root.classList.add("dark"); 
      } else {
        root.classList.remove("dark"); // Elimina la clase `dark` si el modo claro está activado.
      }
      localStorage.setItem("darkMode", darkMode.toString()); // Guarda el estado del tema en `localStorage`.
    }, [darkMode]); // El efecto depende de `darkMode`.
  
    // Retorna el proveedor del contexto con los valores necesarios.
    return (
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  