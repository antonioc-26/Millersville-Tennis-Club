/*
============================================================================
File: Join.jsx
Author: Antonio Corona
Project: Millersville Tennis Club Website

Purpose:
    Serves as the Join page for the Millersville Tennis Club React application.
    This page provides a placeholder for future membership and onboarding
    information for prospective club members.

Responsibilities:
    - Render page-specific content for joining the club
    - Provide a structured layout for future membership details
    - Maintain consistent styling with the rest of the site

Architectural Role:
    - Acts as a routed page within the React application
    - Rendered via react-router-dom inside App.jsx
    - Relies on shared layout components (Header and Footer) defined at the app level

Notes:
    - Header and Footer are NOT loaded here directly; they are handled globally in App.jsx
    - Future enhancements may include:
        • Signup instructions
        • Requirements and eligibility
        • Interest forms or external links
============================================================================
*/

export default function Join() {
  return (
    <section className="standard-page">
      <div className="page-hero">
        <p className="section-eyebrow">GET INVOLVED</p>
        <h1 className="page-title">Join Millersville Club Tennis</h1>
        <p className="page-subtitle">
          Whether you are brand new to tennis or already an experienced player,
          the club is built to help you improve, compete, and connect.
        </p>
      </div>

      <div className="page-content page-content-rich">
        <h2>Who can join?</h2>
        <p>
          Millersville Club Tennis is open to students interested in tennis,
          community, and personal growth through regular play and team
          involvement.
        </p>

        <h2>What to expect</h2>
        <ul className="content-list">
          <li>Regular court time and organized practice sessions</li>
          <li>Match play opportunities and competitive experiences</li>
          <li>A welcoming team environment with different skill levels</li>
          <li>Social events and club-wide engagement</li>
        </ul>

        <h2>Next steps</h2>
        <p>
          More detailed sign-up instructions, dues information, and onboarding
          steps will be added here soon.
        </p>
      </div>
    </section>
  );
}