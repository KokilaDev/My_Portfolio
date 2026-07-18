import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full p-5 flex justify-between">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;