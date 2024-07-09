<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Set current year in the footer
        var currentYear = new Date().getFullYear();
        document.getElementById("currentYear").textContent = currentYear;

        // Get last modified date of the document
        var lastModifiedDate = new Date(document.lastModified);
        document.getElementById("lastModified").textContent = lastModifiedDate.toLocaleString();
    });
</script>