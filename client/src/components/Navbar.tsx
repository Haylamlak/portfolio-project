import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="bg-gray-950 text-white fixed top-0 w-full z-50 border-b border-gray-800">
      
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-cyan-400">
          HA
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>

          <ThemeToggle />
        </ul>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={() => setOpen(!open)}
            className="text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-gray-900 text-white px-4 pb-4 space-y-3 border-t border-gray-800">
          
          <li><a onClick={closeMenu} href="#home">Home</a></li>
          <li><a onClick={closeMenu} href="#about">About</a></li>
          <li><a onClick={closeMenu} href="#skills">Skills</a></li>
          <li><a onClick={closeMenu} href="#projects">Projects</a></li>
          <li><a onClick={closeMenu} href="#contact">Contact</a></li>

        </ul>
      )}
    </nav>
  );
}

export default Navbar;