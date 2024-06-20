
function updateDateTime() {
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
    document.getElementById('datetime').textContent = dateTimeString;
}


updateCurrentYear();
updateDateTime();
setInterval(updateDateTime, 1000);
const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');
const navLinks = document.querySelector('.nav-links');

hamburgerIcon.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('open');
});
