// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme in localStorage
if (localStorage.getItem('cybrox-theme') === 'dark') {
  body.classList.add('dark-theme');
  themeToggle.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  if (body.classList.contains('dark-theme')) {
    themeToggle.textContent = '🌙';
    localStorage.setItem('cybrox-theme', 'dark');
  } else {
    themeToggle.textContent = '☀️';
    localStorage.setItem('cybrox-theme', 'light');
  }
});
