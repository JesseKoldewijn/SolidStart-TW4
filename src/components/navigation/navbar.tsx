import { Link } from "@kobalte/core";
import { createSignal, onMount } from "solid-js";

import { cn } from "~/utils/cn.js";

import ThemeToggle from "../theme/ThemeToggle.jsx";

const Navbar = () => {
  const [pathName, setPathName] = createSignal("");

  onMount(() => {
    setPathName(window.location.pathname);
  });

  const handleLinkClick = async (
    e: MouseEvent & {
      currentTarget: HTMLAnchorElement;
      target: Element;
    },
  ) => {
    e.preventDefault();
    const pathName = e.currentTarget.href
      ? new URL(e.currentTarget.href).pathname
      : window.location.pathname;
    setPathName(pathName);

    window.location.href = e.currentTarget.href;
  };

  return (
    <nav class="fixed flex w-full items-center justify-between overscroll-none p-2">
      <div>
        <Link.Root class="underline-offset-2 hover:underline" href="/">
          <h1 class="text-2xl font-bold">SolidJS Starter</h1>
        </Link.Root>
      </div>
      <div class="flex items-center gap-10">
        <div
          aria-label="Navigation links group"
          class="flex items-center gap-8"
        >
          <Link.Root
            class={cn(
              pathName() === "/"
                ? "underline underline-offset-2 hover:no-underline"
                : "underline-offset-2 hover:underline",
            )}
            href="/"
            onClick={handleLinkClick}
            aria-roledescription="Link that navigates you to the Home page"
            aria-current={pathName() === "/" ? "page" : undefined}
          >
            Home
          </Link.Root>
          <Link.Root
            class={cn(
              pathName() === "/about"
                ? "underline underline-offset-2 hover:no-underline"
                : "underline-offset-2 hover:underline",
            )}
            href="/about"
            onClick={handleLinkClick}
            aria-roledescription="Link that navigates you to the About page"
            aria-current={pathName() === "/about" ? "page" : undefined}
          >
            About
          </Link.Root>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
