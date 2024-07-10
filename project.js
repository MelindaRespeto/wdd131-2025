
const currentYear = new Date().getFullYear();

document.getElementByclassname("currentyear").textContent = currentYear;
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
});

document.getElementById("currentDate").textContent = formattedDate;
