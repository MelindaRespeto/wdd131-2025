


function getCurrentDate() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1; 
    let day = currentDate.getDate();

    
    let formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;


    return formattedDate;
}


document.addEventListener('DOMContentLoaded', function() {
    let dateElement = document.getElementById('currentDate');
    if (dateElement) {
        dateElement.textContent = getCurrentDate();
    } else {
        console.error('Element with id "currentDate" not found.');
    }
});
function calculateWindChill() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var windSpeed = parseFloat(document.getElementById('windSpeed').value);
    var windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    document.getElementById('result').innerHTML = "The wind chill is " + windChill.toFixed(2) + " °F";
}