var now = new Date();
var dateTimeString = now.toLocaleString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true
});
hamburgerIcon.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('open');
});

