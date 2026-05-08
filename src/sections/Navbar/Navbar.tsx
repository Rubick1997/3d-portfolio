import { Menu, X } from "lucide-react";
import { useState } from "react";
import NavItems from "./NavItems";
import ThemeToggle from "@/components/ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="z-50 fixed top-0 left-0 right-0 border-b border-white/10 bg-black/85 backdrop-blur">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-white-600 font-bold text-xl hover:text-white transition-colors"
          >
            Rustam
          </a>
          <div className="flex items-center gap-2">
            <nav className="sm:flex hidden">
              <NavItems />
            </nav>
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-md border border-white/10 bg-black-200 text-white-600 hover:text-white focus:outline-none sm:hidden"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 " />}
            </button>
          </div>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems onItemClick={() => setIsOpen(false)} />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
