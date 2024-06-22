// Create a new Date object
let currentDate = new Date();

// Get individual date and time components
let day = currentDate.getDate(); // Get the day as a number (1-31)
let month = currentDate.getMonth() + 1; // Get the month (0-11)
let year = currentDate.getFullYear(); // Get the four-digit year (YYYY)
let hours = currentDate.getHours(); // Get the hour (0-23)
let minutes = currentDate.getMinutes(); // Get the minute (0-59)
let seconds = currentDate.getSeconds(); // Get the second (0-59)
