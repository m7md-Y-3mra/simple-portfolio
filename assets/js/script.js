const menu = document.getElementById("menu");
const action = document.getElementById("action");

menu.addEventListener("click", () => {
    hadleMenu();
}) 

function hadleMenu() {
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");

}