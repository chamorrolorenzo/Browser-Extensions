import { useState, createContext, useContext, useEffect } from "react";

const ThemeContext = createContext(null);

/**
 * Tema válido: "light" | "dark"
 * - Persistimos en localStorage para recordar la elección del usuario.
 * - Si no hay elección previa, detectamos la preferencia del sistema.
 * - Sincronizamos el atributo `data-theme` en <html> para que el CSS pueda reaccionar.
 */

// 1) Leemos localStorage; si no hay tema, usamos "light"
export function ThemeProvider({ children }) {
  
// 1) Inicializar tema: si hay uno guardado, úsalo; si no, arrancá en "light"
  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    return saved === "dark" || saved === "light" ? saved : "light"
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // 2) Sincronizar con el DOM y persistir en localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  // 3) Alternar entre light/dark
  const toggleTheme = () => setTheme(themePrevious => (themePrevious === "light" ? "dark" : "light"))

   // 4) Memo del valor compartido para evitar renders innecesarios
  const valueContext = useMemo(() => ({ theme, toggleTheme }), [theme]);

  // 5) Devolvemos el Provider **envolviendo** a sus hijos (children)
  return (
    <ThemeContext.Provider value={valueContext}>
     { children }
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme debe usarse dentro de <ThemeProvider>");
  return ctx;
}