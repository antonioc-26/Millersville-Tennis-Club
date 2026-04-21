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
      {/* Page hero section introducing the purpose of this page */}
      <div className="page-hero">
        <h1 className="page-title">Join the Club</h1>
        <p className="page-subtitle">
          Membership details, sign-up steps, and participation information will be added here soon.
        </p>
      </div>

      {/* Main content area for future join instructions */}
      <div className="page-content">
        <p>
          This page is currently under construction. It will eventually explain
          how students can join Millersville Club Tennis and what to expect as a member.
        </p>
      </div>
    </section>
  );
}