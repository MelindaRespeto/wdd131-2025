// Get the current year
const currentYear = new Date().getFullYear();

// Display the current year in the first paragraph
document.getElementById("copyright").textContent = `© ${currentYear} Melinda Competente
`;

// Display the date the document was last modified in the second paragraph
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;