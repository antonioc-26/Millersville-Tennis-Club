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

export default function Contact() {
  return (
    <section className="standard-page">
      {/* Page hero section introducing contact purpose */}
      <div className="page-hero">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">
          Contact details, officer communication options, and future inquiry forms will live here.
        </p>
      </div>

      {/* Main content area for future contact information */}
      <div className="page-content">
        <p>
          This page is currently under construction. It will eventually include
          official club contact methods and other ways to connect with the club.
        </p>
      </div>
    </section>
  );
}