// assets/js/api.js
// AJAX form submit for quote form

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.quote-form');
  const overlay = document.getElementById('loadingOverlay');
  const submitBtn = form && form.querySelector('.submit-btn');

  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    // show loader, disable button
    overlay.hidden = false;
    submitBtn.disabled = true;

    const formData = new FormData(form);
    try {
      const response = await fetch('https://api.xyzwizard.com/upload-quote', {
        method: 'POST',
        mode: 'cors',
        body: formData
      });

      if (response.ok) {
        window.location.href = '/thank-you.html';
      } else {
        const errorInfo = await response.json().catch(() => ({ error: 'Unknown error' }));
        alert('Submission failed: ' + JSON.stringify(errorInfo));
      }
    } catch (err) {
      console.error('Fetch error:', err);
      alert('Network error: ' + err.message);
    } finally {
      // hide loader, re-enable button (in case of error)
      overlay.hidden = true;
      submitBtn.disabled = false;
    }
  });
});
