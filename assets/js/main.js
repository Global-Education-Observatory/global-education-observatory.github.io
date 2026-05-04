/* Global Education Observatory — Shared JS */

document.addEventListener('DOMContentLoaded', () => {
  // Mark active nav link based on current path
  const path = window.location.pathname;
  document.querySelectorAll('.site-nav__links a[data-nav]').forEach(a => {
    const key = a.getAttribute('data-nav');
    if (key && path.includes(key)) a.classList.add('active');
  });
});
