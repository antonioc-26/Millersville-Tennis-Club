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
      <div className="page-hero">
        <p className="section-eyebrow">COMMON QUESTIONS</p>
        <h1 className="page-title">Frequently Asked Questions</h1>
        <p className="page-subtitle">
          Here are a few core questions students often have about membership,
          play level, and club participation.
        </p>
      </div>

      <div className="page-content page-content-rich">
        <h2>How much does it cost to join?</h2>
        <p>
          Dues and membership details will be finalized and clearly posted here.
        </p>

        <h2>Do I need to be advanced to join?</h2>
        <p>
          No. The club includes a range of experience levels, and the goal is to
          help members improve while enjoying the team environment.
        </p>

        <h2>What happens during court time?</h2>
        <p>
          Depending on the day, sessions may include drills, doubles, singles,
          king of the court, or other organized activities.
        </p>
      </div>
    </section>
  );
}