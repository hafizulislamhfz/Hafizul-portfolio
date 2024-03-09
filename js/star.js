// Get the stars and background elements
const stars = document.getElementById("stars");
const backG = document.getElementById("backG");

// Create a function to generate a single star
function generateStar(randomAngle = Math.floor(Math.random(100) * 360)) {
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

  // Add a mouseover event listener to the star
  star.addEventListener("mouseover", () => {
    // Rotate the star
    star.style.rotate = `${
      Math.floor(Math.random(100) * 360) - randomAngle / 5
    }deg`;

    // Add the shootingStar class to the star
    star.classList.add("shootingStar");

    // Remove the star after 2 seconds
    setTimeout(() => {
      star.style.display = "none";
    }, 2000);
  });
}

// Generate 300 stars
for (let i = 0; i <= 300; i++) {
  generateStar();
}

setTimeout(() => {
    const twoSec = document.getElementById("twoSec");
    twoSec.remove();
}, 4000);