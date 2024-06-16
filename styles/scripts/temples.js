function updateCurrentYear() {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
}


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