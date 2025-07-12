// main.js: site-wide JavaScript for XYZ Wizard

document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.main-nav ul');

  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('open');
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
      if (!navList.contains(e.target) && !navToggle.contains(e.target)) {
        navList.classList.remove('open');
      }
    });
  }

  // Highlight active nav link based on current URL
  const links = document.querySelectorAll('.main-nav a');
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
