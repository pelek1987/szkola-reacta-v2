import {
  MutableRefObject,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from "react";

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

type ThemeContextType = {
  theme: MutableRefObject<Theme>;
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
    theme.current = theme.current === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
  };

  return { theme, toggleTheme };
};

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={useTheme()}>{children}</ThemeContext.Provider>
  );
};
