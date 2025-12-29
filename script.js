// LOADER
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// THEME
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

// MOUSE GLOW
const glow = document.getElementById("mouse-glow");
document.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});