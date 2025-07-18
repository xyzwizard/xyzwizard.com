// main.js: site-wide JavaScript for XYZ Wizard

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.nav-toggle');

  if (!header || !toggleBtn) return;

  // Ensure the toggle button is on top of other elements
  toggleBtn.style.position = 'relative';
  toggleBtn.style.zIndex = '1100';

  // Toggle the 'open' class on the header to show/hide the mobile menu
  toggleBtn.addEventListener('click', () => {
    header.classList.toggle('open');
  });
});



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

// at the bottom of main.js
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.site-header').classList.toggle('open');
});

