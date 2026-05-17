const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuBtn.textContent = navLinks.classList.contains("show") ? "✕" : "☰";
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuBtn.textContent = "☰";
  });
});

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

let sparkleReady = true;

document.addEventListener("mousemove", (event) => {
  if (!sparkleReady || window.innerWidth < 760) return;

  sparkleReady = false;

  const sparkle = document.createElement("span");
  sparkle.className = "cursor-sparkle";
  sparkle.textContent = Math.random() > 0.5 ? "✦" : "★";
  sparkle.style.left = `${event.clientX}px`;
  sparkle.style.top = `${event.clientY}px`;

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 700);

  setTimeout(() => {
    sparkleReady = true;
  }, 120);
});
