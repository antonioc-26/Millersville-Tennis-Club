/*
============================================================================
File: Contact.jsx
Author: Antonio Corona
Project: Millersville Tennis Club Website

Purpose:
    Serves as the Contact page for the Millersville Tennis Club React application.
    This page provides a placeholder for future contact methods and communication
    details for students, prospective members, and visitors.

Responsibilities:
    - Render page-specific contact content
    - Provide a structured layout for future communication options
    - Maintain consistent styling with the rest of the site

Architectural Role:
    - Acts as a routed page within the React application
    - Rendered via react-router-dom inside App.jsx
    - Relies on shared layout components (Header and Footer) defined at the app level

Notes:
    - Header and Footer are NOT loaded here directly; they are handled globally in App.jsx
    - Future enhancements may include:
        • Contact forms
        • Officer email directory
        • Embedded social media links
============================================================================
*/

import { SITE_CONFIG } from "../data/siteConfig";

export default function Contact() {
  return (
    <section className="standard-page">
      <div className="page-hero">
        <p className="section-eyebrow">REACH OUT</p>
        <h1 className="page-title">Contact the Club</h1>
        <p className="page-subtitle">
          We would love to hear from prospective members, current students, and
          anyone interested in the club.
        </p>
      </div>

      <div className="page-content page-content-rich">
        <h2>Email</h2>
        <p>
          You can reach the club at{" "}
          <a href={`mailto:${SITE_CONFIG.email}`} className="inline-link">
            {SITE_CONFIG.email}
          </a>
          .
        </p>

        <h2>Location</h2>
        <p>{SITE_CONFIG.address}</p>

        <h2>Socials</h2>
        <ul className="content-list">
          <li>
            <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noreferrer" className="inline-link">
              Instagram
            </a>
          </li>
          <li>
            <a href={SITE_CONFIG.socials.discord} target="_blank" rel="noreferrer" className="inline-link">
              Discord
            </a>
          </li>
          <li>
            <a href={SITE_CONFIG.socials.linktree} target="_blank" rel="noreferrer" className="inline-link">
              Linktree
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}