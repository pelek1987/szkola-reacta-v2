import { useState } from "react";
import {
  Theme,
  getMode,
  useThemeContext,
} from "../../context/Theme/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export const ThemeSwitcher = () => {
  const themeContext = useThemeContext();
  const [theme, setTheme] = useState<Theme | null>(getMode());

  const handleClick = () => {
    themeContext.toggleTheme();
    setTheme((theme) => (theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  const icon =
    theme === Theme.LIGHT ? (
      <MoonIcon
        onClick={handleClick}
        className="cursor-pointer w-5 h-5 dark:text-slate-200"
      />
    ) : (
      <SunIcon
        onClick={handleClick}
        className="cursor-pointer w-5 h-5 dark:text-slate-200"
      />
    );

  return <div>{icon}</div>;
};
