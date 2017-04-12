
var menu = document.getElementById("icon");
var slash = document.getElementsByClassName("slash");
var sombre = document.getElementById("sombre");
nav.style.right = "100%";


document.getElementById("icon").onclick = function () {
console.log("test")

    if (nav.style.right == "100%") {
        sombre.classList.add("sombre");

        nav.style.right = "70%";
        slash[1].style.opacity = 0;

        slash[0].style.backgroundColor = "black";
        slash[1].style.backgroundColor = "black";
        slash[2].style.backgroundColor = "black";

        slash[0].style.top = "12px";
        slash[2].style.top = "-12px";

        slash[0].style.transform = "rotate(40deg)";
        slash[2].style.transform = "rotate(-40deg)";

    }
    else {
        sombre.classList.remove("sombre");

        nav.style.right = "100%";
        slash[1].style.opacity = 1;

        slash[0].style.backgroundColor = "white";
        slash[1].style.backgroundColor = "white";
        slash[2].style.backgroundColor = "white";

        slash[0].style.top = "0px";
        slash[2].style.top = "0px";

        slash[0].style.transform = "rotate(0deg)";
        slash[2].style.transform = "rotate(0deg)";
    }
}