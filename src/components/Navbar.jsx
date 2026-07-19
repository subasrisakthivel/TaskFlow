import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-200 px-4 md:px-10 py-4">
      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold text-gray-800">
          TaskFlow
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <a href="#features" className="hover:text-blue-700">
                Features
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-blue-700">
                About
              </a>
            </li>

            <li>
              <Link
                to="/login"
                className="bg-blue-700 text-white px-4 py-2 rounded-xl hover:bg-blue-900"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col gap-4 text-center">

            <li>
              <a
                href="#features"
                onClick={() => setMenuOpen(false)}
              >
                Features
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>

            <li>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="bg-blue-700 text-white px-4 py-2 rounded-xl inline-block"
              >
                Login
              </Link>
            </li>

          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;