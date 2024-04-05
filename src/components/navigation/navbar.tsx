import ThemeToggle from "../theme/ThemeToggle.jsx";

const Navbar = () => {
  return (
    <nav class="flex w-full items-center justify-between p-2">
      <div>
        <h1 class="text-2xl font-bold">SolidJS Starter</h1>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
