

(function () {
  const btn = document.getElementById('darkModeToggle');
  const root = document.documentElement;

  // Safe read from localStorage
  let savedTheme = null;
  try { savedTheme = localStorage.getItem('theme'); } catch (e) {}

  if (savedTheme === 'dark' || savedTheme === 'light') {
    root.setAttribute('data-theme', savedTheme);
  } else {
    root.setAttribute('data-theme', 'light');
  }

  function toggleTheme() {
    const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', current);
    try { localStorage.setItem('theme', current); } catch (e) {}
  }

  // Dark mode toggle
  btn && btn.addEventListener('click', toggleTheme, { passive: true });

  // Back to Top logic
  const topBtn = document.getElementById('topBtn');
  if (topBtn) {
    // Show/hide on scroll
    window.addEventListener('scroll', () => {
      topBtn.style.display = (window.scrollY > 300) ? 'block' : 'none';
    });

    // Smooth scroll on click
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Start hidden
    topBtn.style.display = 'none';
  }
})();
