document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    if (toggleBtn) toggleBtn.textContent = "☀️";
  }
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      const isDark = document.body.classList.contains("dark-theme");
      toggleBtn.textContent = isDark ? "☀️" : "🌚";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }
});
