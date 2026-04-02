/**
 * ============================================================================
 * File: main.js
 * Author: Antonio Corona
 * Project: Millersville Tennis Club Website
 *
 * Purpose:
 *     Acts as the main client-side entry point for shared site functionality.
 *     This script loads reusable layout components, injects shared config-based
 *     content, initializes homepage slideshow behavior, and applies shared link
 *     mappings across the site.
 *
 * Responsibilities:
 *     - Load the universal header component
 *     - Load the universal footer component
 *     - Populate shared header branding/contact information
 *     - Populate shared footer contact and social link information
 *     - Initialize slideshow controls and auto-rotation when present
 *     - Populate any elements using data-link attributes from config.js
 *
 * Notes:
 *     - This script is intended to be loaded on all pages
 *     - Logic is guarded so pages without certain elements do not fail
 *     - Shared configuration values are imported from config.js
 * ============================================================================
 */

import { SITE_CONFIG } from "./config.js";

/**
 * Loads the universal header component and injects shared site information.
 */
async function loadHeader() {
  const headerMount = document.getElementById("header");

  if (!headerMount) {
    return;
  }

  try {
    const res = await fetch("/components/header.html");

    if (!res.ok) {
      throw new Error(`Failed to load header: ${res.status}`);
    }

    const data = await res.text();
    headerMount.innerHTML = data;

    const clubName = document.getElementById("club-name");
    const clubAddress = document.getElementById("club-address");
    const clubEmail = document.getElementById("club-email");

    if (clubName) {
      clubName.textContent = SITE_CONFIG.clubName;
    }

    if (clubAddress) {
      clubAddress.textContent = SITE_CONFIG.address;
    }

    if (clubEmail) {
      clubEmail.textContent = SITE_CONFIG.email;
      clubEmail.href = `mailto:${SITE_CONFIG.email}`;
    }
  } catch (error) {
    console.error("Header load error:", error);
  }
}

/**
 * Loads the universal footer component and injects shared site information.
 */
async function loadFooter() {
  const footerMount = document.getElementById("footer");

  if (!footerMount) {
    return;
  }

  try {
    const res = await fetch("/components/footer.html");

    if (!res.ok) {
      throw new Error(`Failed to load footer: ${res.status}`);
    }

    const data = await res.text();
    footerMount.innerHTML = data;

    const linktreeLink = document.getElementById("linktree-link");
    const instagramLink = document.getElementById("instagram-link");
    const discordLink = document.getElementById("discord-link");
    const footerAddress = document.getElementById("footer-address");
    const footerEmail = document.getElementById("footer-email");

    if (linktreeLink) {
      linktreeLink.href = SITE_CONFIG.socials.linktree;
    }

    if (instagramLink) {
      instagramLink.href = SITE_CONFIG.socials.instagram;
    }

    if (discordLink) {
      discordLink.href = SITE_CONFIG.socials.discord;
    }

    if (footerAddress) {
      footerAddress.textContent = SITE_CONFIG.address;
    }

    if (footerEmail) {
      footerEmail.textContent = SITE_CONFIG.email;
      footerEmail.href = `mailto:${SITE_CONFIG.email}`;
    }
  } catch (error) {
    console.error("Footer load error:", error);
  }
}

/**
 * Applies config-driven links to any element using a data-link attribute.
 * Example:
 *     <a data-link="joinForm">Join Now</a>
 */
function applyConfigLinks() {
  document.querySelectorAll("[data-link]").forEach((el) => {
    const key = el.dataset.link;

    if (key && SITE_CONFIG.links?.[key]) {
      el.href = SITE_CONFIG.links[key];
    }
  });
}

/**
 * Initializes slideshow behavior when slideshow elements exist on the page.
 */
function initSlideshow() {
  const slides = document.querySelectorAll(".slide");
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");

  if (!slides.length || !nextButton || !prevButton) {
    return;
  }

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  setInterval(nextSlide, 4000);
}

/**
 * Initializes all shared page functionality.
 */
async function initPage() {
  await loadHeader();
  await loadFooter();
  applyConfigLinks();
  initSlideshow();
}

document.addEventListener("DOMContentLoaded", initPage);
