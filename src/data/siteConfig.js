/**
 * ============================================================================
 * File: config.js
 * Author: Antonio Corona
 * Project: Millersville Tennis Club Website
 *
 * Purpose:
 *     Defines centralized configuration values used across the website.
 *     This file acts as the single source of truth for global data such as
 *     club identity, contact information, and social media links.
 *
 * Responsibilities:
 *     - Store reusable site-wide constants
 *     - Provide consistent branding data (name, address, email)
 *     - Manage external links (social platforms)
 *     - Enable easy updates without modifying multiple components
 *
 * Architectural Role:
 *     - Acts as a configuration module within the frontend architecture
 *     - Imported by header/footer loaders and other scripts
 *     - Separates content/data from presentation (HTML/CSS)
 *
 * Notes:
 *     - All values are consumed dynamically via JavaScript
 *     - Social media logos are sourced from https://simpleicons.org
 *     - Updates here propagate across all pages automatically
 * ============================================================================
 */

// ==============================
// GLOBAL SITE CONFIG OBJECT
// ==============================

export const SITE_CONFIG = {
  /**
   * Core club identity
   * Used in header, footer, and page titles
   */
  clubName: "Millersville Tennis Club",

  /**
   * Physical location of the tennis courts
   * Displayed in header and footer contact sections
   */
  address: "68 James St, Millersville, PA 17551",

  /**
   * Official club email
   * Used for mailto links across the site
   */
  email: "Tennis.Club@millersville.edu",

  /**
   * Social media and external links
   * Icons sourced from https://simpleicons.org
   */
  socials: {
    instagram: "https://www.instagram.com/millersville_club_tennis/",
    discord: "https://discord.gg/hBWBrk9GMK",
    linktree: "https://linktr.ee/mu_clubtennis",
  },

  /**
   * Current active season
   * Can be used for banners, announcements, or scheduling context
   */
  season: "Spring 2026",

  externalLinks: {
    rcw: "https://www.rcwathleticclub.com/",
    hempfield: "https://hempfieldrec.com/departments/tennis/",
  },
};
