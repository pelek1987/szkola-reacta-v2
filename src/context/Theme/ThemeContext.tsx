import {
  MutableRefObject,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from "react";

const addDarkClass = () => document.body.classList.add("dark");
const removeDarkClass = () => document.body.classList.remove("dark");

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

type ThemeContextType = {
  theme: Theme;
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

const useTheme = () => {
  const theme = useRef<Theme>(Theme.LIGHT);
  const toggleTheme = () => {
    if (theme.current === Theme.LIGHT) {
      addDarkClass();
      theme.current = Theme.DARK;
    } else {
      removeDarkClass();
      theme.current = Theme.LIGHT;
    }
  };

  return { theme: theme.current, toggleTheme };
};

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={useTheme()}>{children}</ThemeContext.Provider>
  );
};
