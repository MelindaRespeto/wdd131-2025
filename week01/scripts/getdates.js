// ✅ Display the current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = currentYear;

// ✅ Display the date the document was last modified
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = lastModifiedDate;
