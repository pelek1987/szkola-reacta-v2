import { ReactNode, createContext, useContext, useEffect, useRef } from "react";

const addDarkClass = () => document.body.classList.add("dark");
const removeDarkClass = () => document.body.classList.remove("dark");

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

type ThemeContextType = {
  theme: Theme | null;
  toggleTheme: () => void;
};

const ThemeContext = createContext<null | ThemeContextType>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }

  return context;
};

export const getMode = () => {
  if (window.matchMedia) {
    const matchesDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return matchesDarkMode ? Theme.DARK : Theme.LIGHT;
  }

  return null;
};

const useTheme = () => {
  const themeRef = useRef<Theme | null>(getMode());

  let { current: theme } = themeRef;

  const toggleTheme = () => {
    if (theme === Theme.LIGHT) {
      addDarkClass();
      theme = Theme.DARK;
    } else {
      removeDarkClass();
      theme = Theme.LIGHT;
    }
  };

  useEffect(() => {
    const themeMode = getMode();
    if (themeMode === Theme.DARK) {
      addDarkClass();
    } else {
      removeDarkClass();
    }

    const handleSchemeChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        addDarkClass();
      } else {
        removeDarkClass();
      }
    };

    let mediaQueries: MediaQueryList;

    if (themeMode) {
      mediaQueries = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQueries.addEventListener("change", handleSchemeChange);
    }

    return () => {
      mediaQueries.removeEventListener("change", handleSchemeChange);
    };
  }, []);

  return { theme, toggleTheme };
};

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={useTheme()}>{children}</ThemeContext.Provider>
  );
};
