/*
============================================================================
File: OfficerBoard.jsx
Author: Antonio Corona
Project: Millersville Tennis Club Website

Purpose:
    Serves as the Officer Board page for the Millersville Tennis Club React
    application. This page will provide information about the club’s leadership
    team and officer responsibilities.

Responsibilities:
    - Render page-specific content for the officer board
    - Provide a structured layout for future leadership information
    - Maintain consistent styling with the rest of the site

Architectural Role:
    - Acts as a routed page within the React application
    - Rendered via react-router-dom inside App.jsx
    - Relies on shared layout components (Header and Footer) defined at the app level

Notes:
    - Header and Footer are NOT loaded here directly; they are handled globally in App.jsx
    - Future enhancements may include:
        • Officer cards with names, roles, and photos
        • Short bios and responsibilities for each officer
        • Contact links for leadership positions
============================================================================
*/

const officers = [
  { name: "Peyton Loewer", role: "President" },
  { name: "Connor Zimmermen", role: "Vice President" },
  { name: "Lucas Dunkelberger", role: "Treasurer" },
  { name: "Leah Howard", role: "Secretary" },
];

export default function OfficerBoard() {
  return (
    <section className="standard-page">
      <div className="page-hero">
        <p className="section-eyebrow">CLUB LEADERSHIP</p>
        <h1 className="page-title">Officer Board</h1>
        <p className="page-subtitle">
          Meet the student leaders helping guide Millersville Club Tennis.
        </p>
      </div>

      <div className="page-content page-content-rich">
        <div className="officer-board-grid">
          {officers.map((officer) => (
            <article key={officer.name} className="board-card">
              <div className="board-card-initials">
                {officer.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <h2 className="board-card-name">{officer.name}</h2>
              <p className="board-card-role">{officer.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}