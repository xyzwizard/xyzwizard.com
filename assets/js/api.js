// assets/js/api.js
// AJAX form submit for quote form

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.quote-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

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
        let errorInfo;
        try {
          errorInfo = await response.json();
        } catch (_) {
          errorInfo = { error: 'Unknown server error' };
        }
        alert('Submission failed: ' + JSON.stringify(errorInfo));
      }
    } catch (err) {
      console.error('Fetch error:', err);
      alert('Network error: ' + err.message);
    }
  });
});
