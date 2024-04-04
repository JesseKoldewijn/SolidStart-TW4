import { createWithSignal } from "solid-zustand";

import { Theme } from "~/types/themes.js";

interface ThemeStore {
  theme: Theme;
  setTheme: (current: Theme) => void;
}

export const useThemeStore = (initProps?: Partial<ThemeStore>) => {
  const DEFAULT_THEME = {
    theme: initProps?.theme ?? "dark",
    ...initProps,
  } as ThemeStore;

  return createWithSignal<ThemeStore>((set) => ({
    ...DEFAULT_THEME,
    setTheme: (current: Theme) =>
      set(() => {
        const theme = {
          dark: "light",
          light: "dark",
        };
        const newTheme = theme[current] ?? "dark";

        const docRoot = document.documentElement;
        docRoot.classList.remove("dark", "light");
        docRoot.classList.add(newTheme);

        return newTheme as Partial<ThemeStore>;
      }),
  }));
};
