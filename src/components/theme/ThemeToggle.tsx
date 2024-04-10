import { createSignal } from "solid-js";

import { useThemeStore } from "~/stores/theme.js";
import { Theme } from "~/types/themes.js";

import { DarkModeIcon, LightModeIcon } from "../icons/Theme.jsx";
import Button from "../ui/Button.jsx";

const ThemeToggle = () => {
  const store = useThemeStore();

  const [isTransitioning, setIsTransitioning] = createSignal(false);

  const theme = store((state) => state.theme);
  const setTheme = store((state) => state.setTheme);

  const handleTransitionStart = (
    e: MouseEvent & {
      currentTarget: HTMLButtonElement;
      target: Element;
    },
  ) => {
    setIsTransitioning(true);
    handleThemeChange(e, theme(), setTheme);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <Button
      size="icon"
      onClick={handleTransitionStart}
      data-current={theme()}
      aria-label="Toggle light/dark theme"
      style={{
        // @todo remove when cursor pointer is fixed in tw4
        cursor: "pointer",
      }}
      disabled={isTransitioning()}
    >
      {theme() === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </Button>
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
