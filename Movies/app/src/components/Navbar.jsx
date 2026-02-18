import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-red-500 hover:text-red-400 transition"
          >
            🎬 MovieHub
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-semibold border-b-2 border-red-500 pb-1"
                  : "hover:text-red-400 transition"
              }
            >
              Home
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-3">
          <NavLink
            to="/"
            className="block hover:text-red-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
