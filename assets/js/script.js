let menuicon = document.querySelector(".nav-menu");
let menulist = document.querySelector(".nav-items");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("show");
})