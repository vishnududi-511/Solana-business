let menuicon = document.querySelector(".nav-menu");
let menulist = document.querySelector(".nav-items");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("show");
})

let accordion = document.querySelectorAll(".a-container");

accordion.forEach(element => {
    let text = element.querySelector(".acc-content");
    let icon = element.querySelector(".svg_icon");
    let label = element.querySelector(".label");

    element.addEventListener("click", () => {
        accordion.forEach(other => {
            if (other !== element) {
                let text = other.querySelector(".acc-content");
                let icon = other.querySelector(".svg_icon");
                icon.style.transform = "rotate(0deg)";
                text.style.display = "none";
            }
        });
        let text_prop = window.getComputedStyle(text).display;
        if (text_prop === "none") {
            icon.style.transform = "rotate(180deg)";
            text.style.display = "block";
        } else {
            icon.style.transform = "rotate(0deg)";
            text.style.display = "none";
        }
    });
});