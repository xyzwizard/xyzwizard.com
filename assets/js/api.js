// assets/js/api.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.quote-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    try {
      const res = await fetch('https://api.xyzwizard.com/upload-quote', {
        method: 'POST',
        body: data
      });
      if (res.ok) {
        window.location.href = '/thank-you.html';
      } else {
        const text = await res.text();
        alert('Submission failed: ' + text);
      }
    } catch (err) {
      console.error(err);
      alert('Network error: ' + err.message);
    }
  });
});
