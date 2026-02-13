import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block py-2 transition ${
      isActive ? "text-accent" : "text-gray-700 hover:text-accent"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">

        {/* Branding */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Sofia Smart Solutions"
            className="h-10 w-auto transition-transform group-hover:scale-105"
          />
          <div className="leading-tight">
            <p className="font-bold text-lg text-primary">
              Sofia Smart
            </p>
            <p className="text-xs text-gray-500 tracking-wide">
              Solutions
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink to="/" className={navLinkClass}>Accueil</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/about" className={navLinkClass}>À propos</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

          {/* Bibliothèque */}
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                       border border-accent text-accent font-semibold
                       hover:bg-accent hover:text-white transition"
          >
            🛒 Bibliothèque
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-accent text-white px-6 py-3 rounded-xl text-sm font-semibold
                       hover:scale-105 transition-transform shadow-md"
          >
            Demander un devis
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-6 py-6 space-y-4 text-sm font-medium">
            <NavLink to="/" onClick={() => setOpen(false)} className={navLinkClass}>
              Accueil
            </NavLink>
            <NavLink to="/services" onClick={() => setOpen(false)} className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className={navLinkClass}>
              À propos
            </NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className={navLinkClass}>
              Contact
            </NavLink>

            {/* Bibliothèque mobile */}
            <Link
              to="/shop"
              onClick={() => setOpen(false)}
              className="block text-center bg-accent text-white py-3 rounded-xl font-semibold"
            >
              🛒 Accéder à la bibliothèque
            </Link>

            {/* CTA mobile */}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block text-center border border-accent text-accent py-3 rounded-xl font-semibold"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
