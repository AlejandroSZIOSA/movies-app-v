import { createContext } from "react";

export interface ThemeCtxType {
  theme_: "light" | "dark";
  toggleTheme_Fn: () => void;
}

export const ThemeContext = createContext<ThemeCtxType | null>(null);
