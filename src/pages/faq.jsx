/*
============================================================================
File: FAQ.jsx
Author: Antonio Corona
Project: Millersville Tennis Club Website

Purpose:
    Serves as the FAQ (Frequently Asked Questions) page for the Millersville
    Tennis Club React application. This page will provide answers to common
    questions from current members and prospective students.

Responsibilities:
    - Render page-specific FAQ content
    - Provide a structured layout for future questions and answers
    - Maintain consistent styling with the rest of the site

Architectural Role:
    - Acts as a routed page within the React application
    - Rendered via react-router-dom inside App.jsx
    - Relies on shared layout components (Header and Footer) defined at the app level

Notes:
    - Header and Footer are NOT loaded here directly; they are handled globally in App.jsx
    - Future enhancements may include:
        • Expandable/collapsible FAQ sections
        • Categorized questions (membership, schedule, dues, etc.)
        • Search or filter functionality for questions
============================================================================
*/

export default function FAQ() {
  return (
    <section className="standard-page">
      {/* Page hero section introducing FAQ purpose */}
      <div className="page-hero">
        <h1 className="page-title">Frequently Asked Questions</h1>
        <p className="page-subtitle">
          Common questions and answers about membership, practices, dues, and club expectations will appear here.
        </p>
      </div>

      {/* Main content area for future FAQ entries */}
      <div className="page-content">
        <p>
          This page is currently under construction. It will eventually answer
          common questions students have about joining and participating in the club.
        </p>
      </div>
    </section>
  );
}