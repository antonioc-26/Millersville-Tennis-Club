/*
============================================================================
File: App.jsx
Author: Antonio Corona
Project: Millersville Tennis Club Website

Purpose:
    Serves as the root component of the React application. This file defines
    the overall application layout and configures client-side routing using
    react-router-dom.

Responsibilities:
    - Wrap the application in BrowserRouter for SPA routing support
    - Render persistent layout components (Header and Footer)
    - Define all application routes and map them to page components
    - Ensure consistent page structure across all routes

Structure:
    1. BrowserRouter → Enables client-side routing
    2. Header        → Persistent top navigation (visible on all pages)
    3. Main Content  → Route-based page rendering
    4. Footer        → Persistent bottom section (visible on all pages)

Routing:
    "/"               → Home page
    "/join"           → Join page
    "/contact"        → Contact page
    "/schedule"       → Schedule page
    "/faq"            → FAQ page
    "/officer-board"  → Officer Board page

Notes:
    - Header and Footer are placed outside <Routes> so they persist across pages
    - <main> wraps routed content for semantic structure and styling
    - Each route renders a dedicated page component
============================================================================
*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import Schedule from "./pages/Schedule";
import FAQ from "./pages/FAQ";
import OfficerBoard from "./pages/OfficerBoard";

/**
 * Root application component.
 * Handles layout and routing for the entire site.
 */
function App() {
  return (
    <BrowserRouter>
      {/* Persistent header displayed on all pages */}
      <Header />

      {/* Main content area where routed pages are rendered */}
      <main>
        <Routes>
          {/* Route: Home Page */}
          <Route path="/" element={<Home />} />

          {/* Route: Join Page */}
          <Route path="/join" element={<Join />} />

          {/* Route: Contact Page */}
          <Route path="/contact" element={<Contact />} />

          {/* Route: Schedule Page */}
          <Route path="/schedule" element={<Schedule />} />

          {/* Route: FAQ Page */}
          <Route path="/faq" element={<FAQ />} />

          {/* Route: Officer Board Page */}
          <Route path="/officer-board" element={<OfficerBoard />} />
        </Routes>
      </main>

      {/* Persistent footer displayed on all pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;