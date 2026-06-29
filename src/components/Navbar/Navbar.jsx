import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  //Bouton toggler
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="custom-navbar navbar navbar-expand-lg pt-2 pb-2">
      <div className="container-fluid justify-content-center">
        {/* BOUTON TOGGLE (mobile) */}
        <button
          className={`menu-toggler ${menuOpen ? "open" : ""} mx-auto border-0 d-lg-none`}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu */}

        <div
          className={`navbar-collapse justify-content-center ${menuOpen ? "open" : ""} d-lg-flex`}
          id="navbarContent"
        >
          <ul className="navbar-nav d-flex justify-content-around w-100 px-0 m-0">
            <li className="nav-item col-auto">
              <NavLink
                to="/"
                end
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav-item col-auto">
              <NavLink
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                to="/qui-sommes-nous"
              >
                Qui sommes-nous
              </NavLink>
            </li>
            <li className="nav-item col-auto">
              <NavLink
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                to="/prestations"
              >
                Prestations
              </NavLink>
            </li>
            <li className="nav-item col-auto">
              <NavLink
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                to="/tarifs"
              >
                Tarifs
              </NavLink>
            </li>
            <li className="nav-item col-auto">
              <NavLink
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
