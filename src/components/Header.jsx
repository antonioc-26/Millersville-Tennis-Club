/*
============================================================================
File: Header.jsx
Author: Antonio Corona
Project: Millersville Tennis Club Website

Purpose:
    Defines the reusable site header component shared across the React
    application. The header provides consistent branding, primary navigation,
    and club contact details across all routed pages.

Responsibilities:
    - Display the club name and route users back to the homepage
    - Provide primary navigation links for core site sections
    - Surface club address and email contact information from shared config
    - Keep header content centralized and reusable across the application

Structure:
    1. Top Layer    → Branding (Club Name / Homepage Link)
    2. Middle Layer → Primary Navigation
    3. Bottom Layer → Contact Information (Address + Email)

Dynamic Integration:
    - Club-specific content is sourced from SITE_CONFIG
    - Internal navigation is handled through react-router-dom Link components

Notes:
    - The email link uses a mailto: URL so users can open their default mail client
    - Navigation stays inside the SPA for internal pages rather than forcing full page reloads
============================================================================
*/

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SITE_CONFIG } from "../data/siteConfig";

/**
 * Renders the global site header used across the application.
 *
 * This component is intentionally presentational and relies on shared
 * configuration data for club-specific branding and contact content.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  
  return (
    <header className="site-header">
      {/* Top layer: primary club branding and homepage route */}
      <div className="header-top">
        <h1 className="club-name">
          <Link to="/" className="home-link" onClick={closeMenu}>
            {SITE_CONFIG.clubName}
          </Link>
        </h1>
      </div>

      {/* Middle layer: primary site navigation for the main routed pages */}
      <div className="header-middle desktop-nav-row">
        <nav className="site-nav desktop-nav">
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

      {/* Bottom layer: club contact details pulled from centralized site config */}
      <div className="header-bottom-info">
        <div className="header-bottom-mobile-shell">
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

          <div className="header-contact-block">
            <p className="header-info-text desktop-contact-line">
              {SITE_CONFIG.address}
              <span className="divider">|</span>
              <a href={`mailto:${SITE_CONFIG.email}`} className="header-email">
                {SITE_CONFIG.email}
              </a>
            </p>

            <p className="header-info-text mobile-email-line">
              <a href={`mailto:${SITE_CONFIG.email}`} className="header-email">
                {SITE_CONFIG.email}
              </a>
            </p>
          </div>
        </div>

        <nav className={`site-nav mobile-nav ${menuOpen ? "open" : ""}`}>
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
    </header>
  );
}