
var menu = document.getElementById("icon");
var slash = document.getElementsByClassName("slash");
var sombre = document.getElementById("sombre");
var classSombre = document.getElementsByClassName("sombre");
nav.style.right = "100%";


document.getElementById("icon").onclick = function () {
    animMenu();
};

function animMenu() {

    if (nav.style.right == "100%") {

        nav.style.right = "70%";
        slash[1].style.opacity = 0;

        slash[0].style.top = "12px";
        slash[2].style.top = "-12px";

        slash[0].style.transform = "rotate(40deg)";
        slash[2].style.transform = "rotate(-40deg)";

    }
    else {

        nav.style.right = "100%";
        slash[1].style.opacity = 1;

        slash[0].style.top = "0px";
        slash[2].style.top = "0px";

        slash[0].style.transform = "rotate(0deg)";
        slash[2].style.transform = "rotate(0deg)";
    }

    sombre.classList.toggle("sombre");
    slash[0].classList.toggle("colorHamb");
    slash[1].classList.toggle("colorHamb");
    slash[2].classList.toggle("colorHamb");

};


sombre.onclick = function () {
    if (classSombre[0]) {
        animMenu();
    }
};