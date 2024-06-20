<scripts>
document.getElementById("datetime").textContent = new Date().getFullYear();

function toggleMenu() 
    if (menu.classList.contains("showMenu")) 
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
     else 
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
</scripts>