/*
============================================================================
File: Footer.jsx
Author: Antonio Corona
Project: Millersville Tennis Club Website

Purpose:
    Defines the reusable footer component displayed across all pages of the
    React application. This component provides contact information, social
    media links, and branding/navigation back to the homepage.

Responsibilities:
    - Display a "Connect With Us" section for user engagement
    - Present club contact information (address and email)
    - Provide quick access to social media platforms
    - Reinforce branding through a footer home link with logo
    - Serve as a consistent UI component across all pages

Architectural Role:
    - Acts as a shared UI component used across all routed views
    - Relies on SITE_CONFIG for dynamic population of:
        • Address
        • Email
        • Social media links
    - Uses react-router-dom for internal navigation

Notes:
    - Social links open in a new tab using target="_blank"
    - rel="noreferrer" is included for security best practices
    - Logo image should exist at /assets/images/logo-mini.png
    - Social icons should exist in /assets/images/
============================================================================
*/

import { Link } from "react-router-dom";
import { SITE_CONFIG } from "../data/siteConfig";

/**
 * Renders the global footer used across the application.
 *
 * This component centralizes all contact and social information
 * and ensures consistency across every page.
 */
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Section: Call-to-action encouraging user engagement */}
        <h2 className="footer-title">Connect With Us</h2>

        {/* Section: Contact information pulled from centralized config */}
        <p className="footer-contact-text">
          {SITE_CONFIG.address}
          <span className="divider">|</span>

          {/* Clickable email link using mailto */}
          <a href={`mailto:${SITE_CONFIG.email}`} className="footer-email">
            {SITE_CONFIG.email}
          </a>
        </p>

        {/* Section: Social media links */}
        <div className="social-buttons">
          {/* Linktree */}
          <a
            href={SITE_CONFIG.socials.linktree}
            target="_blank"
            rel="noreferrer"
            className="cta-button cta-button-logo"
          >
            <img src="/assets/images/linktree-logo.svg" width="25" alt="Linktree" />
            <span>Linktree</span>
          </a>

          {/* Instagram */}
          <a
            href={SITE_CONFIG.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="cta-button cta-button-logo"
          >
            <img src="/assets/images/instagram-logo.svg" width="25" alt="Instagram" />
            <span>Instagram</span>
          </a>

          {/* Discord */}
          <a
            href={SITE_CONFIG.socials.discord}
            target="_blank"
            rel="noreferrer"
            className="cta-button cta-button-logo"
          >
            <img src="/assets/images/discord-logo.svg" width="25" alt="Discord" />
            <span>Discord</span>
          </a>
        </div>

        {/* Section: Footer branding + navigation back to homepage */}
        <div className="footer-bottom">
          <Link to="/" className="footer-home-link">
            <img
              src="/assets/images/logo-mini.png"
              alt="Club Logo"
              className="footer-logo"
            />
            <span className="footer-home-text">
              {SITE_CONFIG.clubName}
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}