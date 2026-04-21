/*
============================================================================
File: Home.jsx
Author: Antonio Corona
Project: Millersville Tennis Club Website

Purpose:
    Serves as the main landing page for the Millersville Tennis Club React
    application. This page introduces the club, highlights key offerings,
    showcases facilities and leadership, and provides clear navigation paths
    for prospective and current members.

Responsibilities:
    - Render the primary homepage content and calls to action
    - Display a rotating slideshow of club images
    - Surface club highlights, facilities, FAQ previews, and officer information
    - Link users to important internal pages and approved external resources
    - Maintain a polished, recruiter- and client-facing first impression

Architectural Role:
    - Acts as the primary routed landing page within the React application
    - Uses shared configuration values from SITE_CONFIG for external links
    - Combines static content with lightweight interactive behavior

Notes:
    - Header and Footer are handled globally in App.jsx and are not rendered here
    - The slideshow auto-advances on an interval and also supports manual navigation
    - Officer cards fall back to initials if an image fails to load
    - Image assets are expected to exist under /assets/images/
============================================================================
*/

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "../data/siteConfig";

// Ordered list of homepage slideshow images.
// The current slide index cycles through this array.
const slideshowImages = [
  "/assets/images/slideshow/slide1.jpg",
  "/assets/images/slideshow/slide2.jpg",
  "/assets/images/slideshow/slide3.jpg",
  "/assets/images/slideshow/slide4.jpg",
  "/assets/images/slideshow/slide5.jpg",
  "/assets/images/slideshow/slide6.jpg",
  "/assets/images/slideshow/slide7.jpg",
];

// Officer data used to render the homepage leadership preview section.
const officers = [
  {
    name: "Peyton Loewer",
    role: "President",
    initials: "PL",
    image: "/assets/images/officers/peyton-loewer.jpg",
  },
  {
    name: "Connor Zimmermen",
    role: "Vice President",
    initials: "CZ",
    image: "/assets/images/officers/connor-zimmermen.jpg",
  },
  {
    name: "Lucas Dunkelberger",
    role: "Treasurer",
    initials: "LD",
    image: "/assets/images/officers/lucas-dunkelberger.jpg",
  },
  {
    name: "Leah Howard",
    role: "Secretary",
    initials: "LH",
    image: "/assets/images/officers/leah-howard.jpg",
  },
];

/**
 * Renders an officer avatar image with an initials fallback.
 *
 * If the image fails to load, the component switches to a text-based fallback
 * so the officer card still renders cleanly without a broken image icon.
 */
function OfficerAvatar({ officer }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="officer-avatar">
      {!imageError ? (
        <img
          src={officer.image}
          alt={officer.name}
          className="officer-photo"
          onError={() => setImageError(true)}
        />
      ) : null}

      {(imageError || !officer.image) && (
        <div className="officer-initials">{officer.initials}</div>
      )}
    </div>
  );
}

/**
 * Renders the homepage and manages slideshow state.
 */
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Auto-advance the slideshow on a fixed interval.
    // The cleanup prevents orphaned timers when the component unmounts.
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  // Move to the previous slide, wrapping to the end when currently at the start.
  const goToPreviousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slideshowImages.length - 1 : prev - 1
    );
  };

  // Move to the next slide, wrapping back to the first image when needed.
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  return (
    <>
      {/* =========================================================
          HERO SECTION
          Primary landing section with high-level value proposition
          and immediate calls to action.
          ========================================================= */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h2 className="hero-title">Fun and Competitive Play</h2>
            <p className="hero-subtitle">
              Instruction, community, social, fun play, competitive play, and
              leadership at Millersville University.
            </p>

            <div className="hero-buttons">
              <Link to="/join" className="hero-button hero-button-primary">
                Join The Tennis Club
              </Link>

              <Link to="/contact" className="hero-button hero-button-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION
          Introduces the club mission and the type of experience members can expect. */}
      <section className="about">
        <h2>About the Club</h2>
        <p>
          Millersville Club Tennis brings together students who want to compete,
          improve, and be part of a strong campus community.
        </p>
        <p>
          This Club was set up to have fun while meeting new people over tennis
          and developing along the way. Members vary from beginners to
          experienced players. It is centered around developing at your own pace
          and having a great environment to prosper within!
        </p>
      </section>

      {/* HIGHLIGHTS SECTION
          Provides a quick scan of the club's main value areas. */}
      <section className="highlights">
        <div className="highlights-header">
          <p className="highlights-eyebrow">WHAT WE OFFER</p>
          <h2 className="highlights-title">Club Highlights</h2>
        </div>

        <div className="highlights-container">
          <div className="highlight-card">Competitive Matches</div>
          <div className="highlight-card">Team Practices</div>
          <div className="highlight-card">Social Events</div>
        </div>
      </section>

      {/* SLIDESHOW SECTION
          Showcases club photos with both auto-rotation and manual controls. */}
      <section className="slideshow-section">
        <h2 className="slideshow-title">Club Highlights</h2>

        <div className="slideshow">
          <button
            className="slide-btn prev"
            aria-label="Previous slide"
            onClick={goToPreviousSlide}
            type="button"
          >
            &#10094;
          </button>

          <div className="slides">
            {slideshowImages.map((image, index) => (
              <div
                key={image}
                className={`slide ${index === currentSlide ? "active" : ""}`}
              >
                <img
                  src={image}
                  alt={`Club group photo ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <button
            className="slide-btn next"
            aria-label="Next slide"
            onClick={goToNextSlide}
            type="button"
          >
            &#10095;
          </button>
        </div>
      </section>

      {/* COURTS SECTION
          Highlights the primary locations where the club plays, including
          approved external venue links for indoor options. */}
      <section className="courts-section">
        <div className="courts-container">
          <h2 className="section-title">The Courts We Play On</h2>

          <div className="courts-grid">
            <article className="court-card">
              <h3 className="court-title">Outdoor Courts - Millersville</h3>
              <img
                src="/assets/images/millersville-outdoor-courts.webp"
                alt="Outdoor tennis courts at Millersville"
                className="court-image"
              />
              <p className="court-description">
                We primarily play at our home tennis courts. The tennis courts
                are located next to McComsey on campus.
              </p>
            </article>

            <article className="court-card">
              <h3 className="court-title">Indoor Courts - Hempfield</h3>
              <img
                src="/assets/images/hempfield-indoor-courts.jpg"
                alt="Indoor tennis courts at Hempfield"
                className="court-image"
              />
              <p className="court-description">
                When the weather rains or turns cold, we stay warm by playing
                inside at the{" "}
                <a
                  href={SITE_CONFIG.externalLinks.hempfield}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-link"
                >
                  Hempfield Tennis Club
                </a>
              </p>
            </article>

            <article className="court-card">
              <h3 className="court-title">Indoor Courts - RCW</h3>
              <img
                src="/assets/images/rcw-indoor-courts.avif"
                alt="Indoor tennis courts at RCW"
                className="court-image"
              />
              <p className="court-description">
                When the weather rains or turns cold, we stay warm by playing
                inside at the{" "}
                <a
                  href={SITE_CONFIG.externalLinks.rcw}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-link"
                >
                  RCW Tennis Club
                </a>
              </p>
            </article>
          </div>

          <div className="section-button-wrapper">
            <Link to="/schedule" className="section-button">
              View club schedule
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW SECTION
          Answers common entry questions early and routes users to the full FAQ page. */}
      <section className="faq-preview-section">
        <div className="faq-preview-container">
          <h2 className="section-title">Frequently asked questions</h2>

          <div className="faq-preview-list">
            <article className="faq-preview-item">
              <h3 className="faq-question">
                How much does it cost to join the club?
              </h3>
              <p className="faq-answer">
                Only $15 per semester. These are the lowest club sport dues on
                campus since we are understanding that we are all college
                students!
              </p>
            </article>

            <article className="faq-preview-item">
              <h3 className="faq-question">
                What will I be doing at court hours? Who will I play?
              </h3>
              <p className="faq-answer">
                It depends. You'll likely be playing king of the court, doubles,
                singles, or another activity. We typically start with an hour of
                drills and then transition to game play in the second hour.
                You'll be playing against other members of the club.
              </p>
            </article>

            <article className="faq-preview-item">
              <h3 className="faq-question">How good are the other club members?</h3>
              <p className="faq-answer">
                With over 30 members in the club, there's a wide range of
                ability levels. Whether you're an advanced player or learning to
                play for the first time, we'll do our best to set you up on a
                court with players who are at the same level as you.
              </p>
            </article>
          </div>

          <div className="section-button-wrapper">
            <Link to="/faq" className="section-button">
              Read all FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* OFFICERS SECTION
          Introduces a subset of club leadership and provides navigation
          for deeper contact or officer information. */}
      <section className="officers-section">
        <div className="officers-container">
          <h2 className="section-title">We're here for you</h2>
          <p className="officers-subtitle">
            Our team of officers is here to help you make the most of your
            Tennis Club experience.
          </p>

          <div className="officers-grid">
            {officers.map((officer) => (
              <article className="officer-card" key={officer.name}>
                <OfficerAvatar officer={officer} />

                <div className="officer-info">
                  <h3 className="officer-name">{officer.name}</h3>
                  <p className="officer-role">{officer.role}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="officers-actions">
            <Link to="/contact" className="section-button">
              Contact us
            </Link>

            <Link to="/officer-board" className="officers-link">
              See all officers &amp; Board
            </Link>
          </div>
        </div>
      </section>

      {/* JOIN CTA SECTION
          Final conversion-focused section for users ready to take the next step. */}
      <section className="cta">
        <h2 className="section-title">Ready to Join?</h2>

        <Link to="/join" className="section-button hero-button-primary">
          Get Started
        </Link>

        <p className="cta-subtitle">
          Have any questions?{" "}
          <Link to="/contact" className="inline-link">
            Contact us
          </Link>
        </p>
      </section>
    </>
  );
}