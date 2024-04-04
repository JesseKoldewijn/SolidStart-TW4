import { JSX } from "solid-js";

import ThemeToggle from "~/components/theme/ThemeToggle.jsx";

interface CoreLayoutProps {
  children: JSX.Element;
}

const CoreLayout = ({ children }: CoreLayoutProps) => {
  return (
    <>
      <nav class="flex w-full items-center justify-between p-2">
        <div>
          <h1 class="text-2xl font-bold">SolidJS Starter</h1>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </nav>
      <div class="flex px-2">{children}</div>
    </>
  );
};

export default CoreLayout;
