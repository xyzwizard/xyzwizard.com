// main.js: site-wide JavaScript for XYZ Wizard

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu elements
  const toggleBtn = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileBackdrop = document.querySelector('.mobile-backdrop');
  const closeBtn = document.querySelector('.close-btn');

  // Function to open mobile menu
  function openMobileMenu() {
    if (mobileMenu && mobileBackdrop) {
      mobileMenu.classList.add('open');
      mobileBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
  }

  // Function to close mobile menu
  function closeMobileMenu() {
    if (mobileMenu && mobileBackdrop) {
      mobileMenu.classList.remove('open');
      mobileBackdrop.classList.remove('open');
      document.body.style.overflow = ''; // Restore scrolling
    }
  }

  // Hamburger menu toggle
  if (toggleBtn) {
    toggleBtn.addEventListener('click', openMobileMenu);
  }

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener('click', closeMobileMenu);
  }

  // Backdrop click to close
  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMobileMenu);
  }

  // Close menu when clicking on a link
  const mobileLinks = document.querySelectorAll('.mobile-nav a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Highlight active nav link based on current URL
  const links = document.querySelectorAll('.main-nav a, .mobile-nav a');
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });

  // Form file input label update (Quote form)
  const fileInput = document.querySelector('.quote-form input[type="file"]');
  if (fileInput) {
    const fileLabel = document.createElement('span');
    fileLabel.className = 'file-selected';
    fileInput.parentNode.appendChild(fileLabel);

    fileInput.addEventListener('change', () => {
      const fileName = fileInput.files.length ? fileInput.files[0].name : 'No file chosen';
      fileLabel.textContent = fileName;
    });
  }
});

