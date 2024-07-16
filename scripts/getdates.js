<script>
        // Function to display last modified date
        function updateLastModified() {
            const lastModified = document.lastModified;
            document.getElementById('last-modified').textContent = lastModified;
        }

        // Function to display current year
        function updateYear() {
            const year = new Date().getFullYear();
            document.getElementById('current-year').textContent = year;
        }

        // Initial calls to display last modified date and year
        updateLastModified();
        updateYear();
    </script>