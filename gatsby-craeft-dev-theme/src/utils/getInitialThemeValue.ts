import { STORAGE_THEME_KEY, THEMES } from "../constants";
import { ThemeValue } from "../types";
import { isDarkModeEnabled } from "./isDarkModeEnabled";

export const getInitialThemeValue = () => {
  let initialTheme: ThemeValue = isDarkModeEnabled()
    ? THEMES.dark
    : THEMES.light;

  try {
    const settedTheme = localStorage.getItem(
      STORAGE_THEME_KEY
    ) as ThemeValue | null;

    if (settedTheme) {
      initialTheme = settedTheme;
    }
  } catch (e) {}

  return initialTheme;
};
