const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Optional: Save user preference to localStorage
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

// Optional: Load user preference from localStorage
const savedPreference = localStorage.getItem('darkMode');
if (savedPreference === 'true') {
  body.classList.add('dark-mode');
}
