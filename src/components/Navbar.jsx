import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            onClick={closeMenu}
            className="text-2xl font-bold text-gray-900"
          >
            Spark<span className="text-blue-600">Nest</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <a
              href="#"
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              About
            </a>

            <a
              href="#services"
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              Services
            </a>

            <a
              href="#contact"
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              Contact
            </a>

            <a
              href="#contact"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Get a Quote
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-800 text-3xl focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-5">

            <div className="flex flex-col gap-4">

              <a
                href="#"
                onClick={closeMenu}
                className="text-gray-700 font-medium hover:text-blue-600 transition"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="text-gray-700 font-medium hover:text-blue-600 transition"
              >
                About
              </a>

              <a
                href="#services"
                onClick={closeMenu}
                className="text-gray-700 font-medium hover:text-blue-600 transition"
              >
                Services
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="text-gray-700 font-medium hover:text-blue-600 transition"
              >
                Contact
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="bg-blue-600 text-white text-center px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get a Quote
              </a>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;