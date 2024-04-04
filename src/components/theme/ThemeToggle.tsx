import { useThemeStore } from "~/stores/theme.js";
import { Theme } from "~/types/themes.js";

import { DarkModeIcon, LightModeIcon } from "../icons/Theme.jsx";

const ThemeToggle = () => {
  const store = useThemeStore();
  const theme = store((state) => state.theme);
  const setTheme = store((state) => state.setTheme);

  return (
    <button
      class="bg-foreground text-background border-foreground flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border-2 p-1"
      onClick={(e) => handleThemeChange(e, theme(), setTheme)}
      data-current={theme()}
      aria-label="Toggle light/dark theme"
      style={{
        // @todo remove when cursor pointer is fixed in tw4
        cursor: "pointer",
      }}
    >
      {theme() === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </button>
  );
};

export default ThemeToggle;

const handleThemeChange = (
  e: MouseEvent & {
    currentTarget: HTMLButtonElement;
    target: Element;
  },
  currentTheme: Theme,
  setTheme: (theme: Theme) => void,
) => {
  e.preventDefault();
  setTheme(currentTheme);
};
