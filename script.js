// script.js - tiny client interactivity
document.getElementById('clickMe').addEventListener('click', () => {
  const el = document.getElementById('msg');
  el.textContent = 'Hello from the server-less static file!';
});

