import { jsx } from "react/jsx-runtime";

<!--
============================================================================
File: Template.jsx
Author: Antonio Corona
Project: Millersville Tennis Club Website

Purpose:
    Serves as a reusable base template for all pages in the Millersville
    Tennis Club website. This file provides a consistent layout structure
    and dynamically loads shared components such as the header and footer.

Responsibilities:
    - Define the base HTML document structure and metadata
    - Load the global stylesheet for consistent site-wide styling
    - Provide mount points for universal header and footer components
    - Import shared configuration values from config.js
    - Dynamically inject header content and populate branding/contact data
    - Dynamically inject footer content and populate social/contact data
    - Act as a scaffold for inserting page-specific content within <main>

Architectural Role:
    - Acts as a reusable page template for all site pages
    - Implements a component-based architecture using client-side rendering
    - Centralizes layout logic while keeping content modular and maintainable
    - Enables consistent branding and navigation across the entire site

Notes:
    - Header content is loaded from /components/header.html
    - Footer content is loaded from /components/footer.html
    - Shared site configuration values are sourced from /assets/js/config.js
    - The #header and #footer elements act as dynamic injection points
    - This template should be duplicated for new pages to ensure consistency
============================================================================
-->
<!doctype html>
<html lang="en">
  <head>
    <!-- Basic document metadata -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Browser tab title -->
    <title>Millersville Tennis Club</title>

    <!-- Global site stylesheet -->
    <link rel="stylesheet" href="/assets/css/style.css" />
  </head>

  <body>
    <!-- 
    =========================================================
    UNIVERSAL HEADER MOUNT POINT
    The shared site header is dynamically injected here.
    ========================================================= -->
    <div id="header"></div>

    <main></main>

    <!-- 
    =========================================================
    UNIVERSAL FOOTER MOUNT POINT
    The shared site footer is dynamically injected here.
    ========================================================= -->
    <div id="footer"></div>

    <!-- 
    =========================================================
    HEADER LOADER
    Imports site-wide config values and injects the reusable
    header component into the page. Once loaded, it fills in
    the club name, address, and email placeholders.
    ========================================================= -->
    <script type="module">
      import { SITE_CONFIG } from "/assets/js/config.js";

      fetch("/components/header.html")
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to load header: ${res.status}`);
          }
          return res.text();
        })
        .then((data) => {
          document.getElementById("header").innerHTML = data;

          document.getElementById("club-name").textContent =
            SITE_CONFIG.clubName;
          document.getElementById("club-address").textContent =
            SITE_CONFIG.address;

          const emailElement = document.getElementById("club-email");
          emailElement.textContent = SITE_CONFIG.email;
          emailElement.href = `mailto:${SITE_CONFIG.email}`;
        })
        .catch((error) => {
          console.error("Header load error:", error);
        });
    </script>

    <!-- 
    =========================================================
    FOOTER LOADER
    Imports site-wide config values and injects the reusable
    footer component into the page. Once loaded, it fills in
    social media links and shared contact information.
    ========================================================= -->
    <script type="module">
      import { SITE_CONFIG } from "/assets/js/config.js";

      // Load footer
      fetch("/components/footer.html")
        .then((res) => res.text())
        .then((data) => {
          document.getElementById("footer").innerHTML = data;

          // Social links
          document.getElementById("linktree-link").href =
            SITE_CONFIG.socials.linktree;
          document.getElementById("instagram-link").href =
            SITE_CONFIG.socials.instagram;
          document.getElementById("discord-link").href =
            SITE_CONFIG.socials.discord;

          // Contact info
          document.getElementById("footer-address").textContent =
            SITE_CONFIG.address;

          const footerEmail = document.getElementById("footer-email");
          footerEmail.textContent = SITE_CONFIG.email;
          footerEmail.href = `mailto:${SITE_CONFIG.email}`;
        });
    </script>
  </body>
</html>
