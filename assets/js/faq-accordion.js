// assets/js/faq-accordion.js
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const isOpen = item.classList.toggle('open');
      button.setAttribute('aria-expanded', isOpen);
    });
  });
});
