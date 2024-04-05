import { MetaProvider } from "@solidjs/meta";
import { JSX } from "solid-js";

import Navbar from "~/components/navigation/navbar.jsx";

interface CoreLayoutProps {
  children: JSX.Element;
}

const CoreLayout = ({ children }: CoreLayoutProps) => {
  return (
    <>
      <Navbar />
      <div class="flex px-2">{children}</div>
    </>
  );
};

export default CoreLayout;
