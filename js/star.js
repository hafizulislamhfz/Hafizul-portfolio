// Get the stars and background elements
const stars = document.getElementById("stars");
const backG = document.getElementById("backG");

// How long a star stays on screen once it starts shooting
const SHOOT_DURATION = 2000;
// How often a random star shoots away on its own
const AUTO_SHOOT_INTERVAL = 3000;

// Send a star shooting away, then replace it with a fresh one
function shootStar(star, randomAngle) {
  // Rotate the star
  star.style.rotate = `${Math.floor(Math.random() * 360) - randomAngle / 5}deg`;

  // Add the shootingStar class to the star
  star.classList.add("shootingStar");

  // Remove the star once it has finished shooting, and respawn another
  setTimeout(() => {
    star.remove();
    generateStar();
  }, SHOOT_DURATION);
}

// Create a function to generate a single star
function generateStar(randomAngle = Math.floor(Math.random() * 360)) {
  const star = document.createElement("div");
  star.classList.add("singleStar");

  // Set the star's position and size
  const left = Math.floor(Math.random() * 100);
  const top = Math.floor(Math.random() * 100);
  const size = Math.floor(Math.random() * 5);
  star.style.width = size + "px";
  star.style.height = size + "px";
  star.style.left = (left / 100) * 100 + "%";
  star.style.top = (top / 100) * 100 + "%";

  // Add the star to the stars element
  stars.appendChild(star);

  // Shoot the star away on hover
  star.addEventListener("mouseover", () => shootStar(star, randomAngle), {
    once: true,
  });
}

// Generate 300 stars
for (let i = 0; i <= 300; i++) {
  generateStar();
}

// Shoot one random star away every few seconds
setInterval(() => {
  // Don't burn through stars while nobody is looking at the tab
  if (document.hidden) return;

  const idleStars = stars.querySelectorAll(".singleStar:not(.shootingStar)");
  if (!idleStars.length) return;

  const star = idleStars[Math.floor(Math.random() * idleStars.length)];
  shootStar(star, Math.floor(Math.random() * 360));
}, AUTO_SHOOT_INTERVAL);

setTimeout(() => {
  const twoSec = document.getElementById("twoSec");
  twoSec.remove();
}, 4000);
