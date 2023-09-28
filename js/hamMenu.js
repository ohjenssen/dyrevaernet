const menuButton = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".nav-links");

function toggleNav(){
    menu.classList.toggle("active");
}

menuButton.addEventListener("click", toggleNav);
