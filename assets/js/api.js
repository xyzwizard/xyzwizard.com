// assets/js/api.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.quote-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // ← use the `form` variable you defined above, not formElement
    const data = new FormData(form);

    try {
      const res = await fetch('https://api.xyzwizard.com/upload-quote', {
        method: 'POST',
        mode: 'cors',
        body: data
      });
      if (res.ok) {
        window.location.href = '/thank-you.html';
      } else {
        const payload = await res.json().catch(() => ({ error: 'Unknown error' }));
        alert('Submission failed: ' + JSON.stringify(payload));
      }
    } catch (err) {
      console.error(err);
      alert('Network error: ' + err.message);
    }
  });
});
