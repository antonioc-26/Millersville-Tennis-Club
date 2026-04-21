import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SITE_CONFIG } from "../data/siteConfig";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-top">
        <h1 className="club-name">
          <Link to="/" className="home-link" onClick={closeMenu}>
            {SITE_CONFIG.clubName}
          </Link>
        </h1>
      </div>

      <div className="header-middle">
        <div className="nav-shell">
          <button
            className="mobile-nav-toggle"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`site-nav ${menuOpen ? "open" : ""}`}>
            <ul className="nav-links">
              <li>
                <NavLink to="/" onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/schedule" onClick={closeMenu}>
                  Schedule
                </NavLink>
              </li>
              <li>
                <NavLink to="/join" onClick={closeMenu}>
                  Join
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" onClick={closeMenu}>
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink to="/officer-board" onClick={closeMenu}>
                  Officer Board
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={closeMenu}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="header-bottom-info">
        <p className="header-info-text">
          {SITE_CONFIG.address}
          <span className="divider">|</span>
          <a href={`mailto:${SITE_CONFIG.email}`} className="header-email">
            {SITE_CONFIG.email}
          </a>
        </p>
      </div>
    </header>
  );
}