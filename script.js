// Toggle dark mode
document.getElementById('darkToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Animate on scroll
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
fadeElements.forEach(el => observer.observe(el));
