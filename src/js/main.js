const menuButton = document.getElementById("hamburger");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (menu.style.display !== "block") {
        menu.style.display = "block"
        menu.style.transition = "opacity 1s";
        menu.style.opacity = 1
    } else {
        menu.style.transition = "opacity 1s";
        menu.style.opacity = 0
        menu.style.display = "none"
    }
});

window.addEventListener("resize", (e) => {
    e.preventDefault();
    if (window.screen.width > 450) {
        menu.style.display = "flex"
    }
})