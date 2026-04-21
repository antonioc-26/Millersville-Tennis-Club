<!--
============================================================================
File: header.html
Author: Antonio Corona
Project: Millersville Tennis Club Website

Purpose:
    Defines the reusable, multi-layer site header component that is injected
    dynamically into all pages. This header provides consistent branding,
    navigation, and contact information across the website.

Responsibilities:
    - Display the club name (linked to homepage)
    - Provide primary navigation links to key pages
    - Display club address and email contact information
    - Serve as a consistent UI element across all pages

Structure:
    1. Top Layer   → Branding (Club Name / Logo)
    2. Middle Layer→ Navigation Menu
    3. Bottom Layer→ Contact Information (Address + Email)

Dynamic Integration:
    - Values such as club name, address, and email are populated via config.js
    - Injected into the DOM using JavaScript fetch() in each page

Notes:
    - The club name is clickable and routes to the homepage
    - Navigation links are centralized and styled via CSS
    - Optional logo support is included (currently commented out)
============================================================================
-->

<header class="site-header">
  <!-- 
  =========================================================
  TOP LAYER: BRANDING
  Displays the club name centered and links back to homepage
  ========================================================= -->
  <div class="header-top">
    <h1 class="club-name">
      <a href="/index.html" class="home-link" id="club-name"></a>
    </h1>

    <!-- 
    =====================================================
    OPTIONAL: CLUB LOGO IMPLEMENTATION
    Uncomment to include logo alongside club name
    =====================================================
    <h1 class="club-name">
      <img src="/assets/images/logo.png" alt="Logo" class="logo">
      University Tennis Club
    </h1>
    -->
  </div>

  <!-- 
  =========================================================
  MIDDLE LAYER: NAVIGATION BAR
  Provides links to primary site pages
  ========================================================= -->
  <nav class="header-middle">
    <ul class="nav-links">
      <li><a href="/index.html">Home</a></li>
      <li><a href="/pages/officer-board.html">Officers</a></li>
      <li><a href="/pages/schedule.html">Schedule</a></li>
      <li><a href="/pages/join.html">Join</a></li>
      <li><a href="/pages/contact.html">Contact</a></li>
    </ul>
  </nav>

  <!-- 
  =========================================================
  BOTTOM LAYER: CONTACT INFO BAR
  Displays club address and email (populated dynamically)
  ========================================================= -->
  <div class="header-bottom-info">
    <p class="header-info-text">
      <span id="club-address"></span>
      <span class="divider">|</span>
      <a href="#" id="club-email" class="header-email"></a>
    </p>
  </div>
</header>
