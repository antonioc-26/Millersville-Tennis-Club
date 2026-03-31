import { SITE_CONFIG } from "./config.js";

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((s) => s.classList.remove("active"));
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

document.querySelector(".next").onclick = nextSlide;
document.querySelector(".prev").onclick = prevSlide;

// Auto scroll
setInterval(nextSlide, 4000);

document.querySelectorAll("[data-link]").forEach((el) => {
  const key = el.dataset.link;
  el.href = SITE_CONFIG.links[key];
});
