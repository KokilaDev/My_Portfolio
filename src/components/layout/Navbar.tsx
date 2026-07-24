import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  // { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--navbar)] border-b border-transparent shadow-[0_2px_10px_rgba(0,0,0,0.1)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-2">

        <div className="hidden lg:flex items-center justify-between h-16">

          <h1 className="text-2xl font-extrabold tracking-wide cursor-pointer ml-10">
            KD
          </h1>

          <ul className="flex items-center gap-10 mr-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="
                    relative
                    pb-1
                    text-sm
                    font-bold
                    text-[var(--text)]
                    transition-colors
                    duration-300
                    hover:text-[var(--primary)]
                    after:absolute
                    after:left-0
                    after:bottom-0
                    after:h-[2px]
                    after:w-full
                    after:origin-left
                    after:scale-x-0
                    after:bg-[var(--primary)]
                    after:transition-transform
                    after:duration-300
                    hover:after:scale-x-100
                  "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex lg:hidden items-center justify-between h-20">
          <h1 className="text-2xl font-extrabold tracking-wide ml-10">
            KD
          </h1>

          <div className="flex items-center gap-3 mr-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-[var(--surface)] transition"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-5 px-6 py-5 bg-[var(--navbar)] border-t border-[var(--border)]">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base hover:text-[var(--primary)] transition-colors duration-300 ml-5"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;