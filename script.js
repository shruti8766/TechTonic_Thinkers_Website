document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      if (document.body.classList.contains("light-theme")) {
        document.body.style.backgroundColor = "#f9f9f9";
        document.body.style.color = "#111";
        toggleBtn.textContent = "🌚";
      } else {
        document.body.style.backgroundColor = "#0e0e0e";
        document.body.style.color = "#fff";
        toggleBtn.textContent = "☀️";
      }
    });
  }
});
