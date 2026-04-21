/*
============================================================================
File: header.jsx
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

import { Link } from "react-router-dom";
import { SITE_CONFIG } from "../data/siteConfig";

/**
 * Renders the global site header used across the application.
 *
 * This component is intentionally presentational and relies on shared
 * configuration data for club-specific branding and contact content.
 */
export default function Header() {
  return (
    <header className="site-header">
      {/* Top layer: primary club branding and homepage route */}
      <div className="header-top">
        <h1 className="club-name">
          <Link to="/" className="home-link">
            {SITE_CONFIG.clubName}
          </Link>
        </h1>
      </div>

      {/* Middle layer: primary site navigation for the main routed pages */}
      <nav className="header-middle">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
          <li>
            <Link to="/join">Join</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/officer-board">Officer Board</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Bottom layer: club contact details pulled from centralized site config */}
      <div className="header-bottom-info">
        <p className="header-info-text">
          {SITE_CONFIG.address}
          <span className="divider">|</span>

          {/* Use a mailto link so the address is both visible and directly actionable */}
          <a href={`mailto:${SITE_CONFIG.email}`} className="header-email">
            {SITE_CONFIG.email}
          </a>
        </p>
      </div>
    </header>
  );
}