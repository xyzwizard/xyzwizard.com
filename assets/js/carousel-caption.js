// assets/js/carousel-caption.js
document.addEventListener('DOMContentLoaded', () => {
  // For every figure in your carousel
  document.querySelectorAll('.carousel-item figure').forEach(figure => {
    const img     = figure.querySelector('img');
    const caption = figure.querySelector('figcaption');
    if (img && caption) {
      // Remove the caption from its current spot
      caption.parentNode.removeChild(caption);
      // Insert it right after the image
      img.insertAdjacentElement('afterend', caption);
      // Clean up any leftover positioning
      caption.style.position = 'static';
      caption.style.background = 'transparent';
      caption.style.marginTop = '0.5rem';
      caption.style.textAlign = 'center';
    }
  });
});
