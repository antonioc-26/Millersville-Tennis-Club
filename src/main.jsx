/*
============================================================================
File: main.jsx
Author: Antonio Corona
Project: Millersville Tennis Club Website

Purpose:
    Entry point for the React application. This file is responsible for
    bootstrapping the app and mounting the root React component into the DOM.

Responsibilities:
    - Import core React libraries and the root App component
    - Apply global styles for the application
    - Locate the root DOM node in index.html
    - Render the React component tree into the DOM

Process:
    1. Locate the DOM element with id="root"
    2. Create a React root using ReactDOM.createRoot (React 18+ API)
    3. Render the <App /> component inside React.StrictMode

Notes:
    - React.StrictMode helps identify potential issues during development
      (only active in development, not production)
    - All application components are ultimately rendered through <App />
    - index.css contains global styles applied across the entire site
============================================================================
*/

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 * Mount the React application to the DOM.
 *
 * The root element is defined in index.html as:
 * <div id="root"></div>
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Root application component */}
    <App />
  </React.StrictMode>
);