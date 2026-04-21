/*
============================================================================
File: Schedule.jsx
Author: Antonio Corona
Project: Millersville Tennis Club Website

Purpose:
    Serves as the Schedule page for the Millersville Tennis Club React
    application. This page will provide practice schedules, match dates,
    and event timing information for club members.

Responsibilities:
    - Render page-specific scheduling content
    - Provide a structured layout for future schedule and event data
    - Maintain consistent styling with the rest of the site

Architectural Role:
    - Acts as a routed page within the React application
    - Rendered via react-router-dom inside App.jsx
    - Relies on shared layout components (Header and Footer) defined at the app level

Notes:
    - Header and Footer are NOT loaded here directly; they are handled globally in App.jsx
    - Future enhancements may include:
        • Weekly practice schedule display
        • Match calendar or event list
        • Integration with a calendar API or embedded Google Calendar
============================================================================
*/

export default function Schedule() {
  return (
    <section className="standard-page">
      <div className="page-hero">
        <p className="section-eyebrow">WHEN WE PLAY</p>
        <h1 className="page-title">Club Schedule</h1>
        <p className="page-subtitle">
          This page will house the club’s recurring practices, match windows,
          and special events.
        </p>
      </div>

      <div className="page-content page-content-rich">
        <h2>Practice Structure</h2>
        <p>
          Club sessions typically balance skill development, drills, and match
          play so members can improve while also enjoying competitive and social
          tennis.
        </p>

        <h2>What will be listed here</h2>
        <ul className="content-list">
          <li>Weekly practice times</li>
          <li>Indoor and outdoor location notes</li>
          <li>Match and event dates</li>
          <li>Weather or location updates</li>
        </ul>
      </div>
    </section>
  );
}