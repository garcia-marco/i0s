// Loading Page

const loading = document.getElementById("blank");


window.onload = function loaded() {
    loading.classList.add("fadeOut");
    window.setTimeout(deleteLoad, 1000)
};

function deleteLoad() {
    document.body.removeChild(loading);
}


// Fixed Header

const header = document.getElementById("header");
const logo = document.getElementById("logo");
var fleche = document.getElementById("fleche");

function scrolled(){
	if (document.body.scrollTop > fleche.offsetTop || document.documentElement.scrollTop > fleche.offsetTop) {
        header.className = "fixed";
        logo.className = "fixed";

        slash[0].style.backgroundColor = "#fd9d45";
        slash[1].style.backgroundColor = "#FF553B";
        slash[2].style.backgroundColor = "#FF1E26";

    }
    else {
        header.className = "";
        logo.className = "";

        slash[0].style.backgroundColor = "white";
        slash[1].style.backgroundColor = "white";
        slash[2].style.backgroundColor = "white";
    }    
}

addEventListener("scroll", scrolled, false);


// Menu Hamburger








const menu = document.getElementById("icon");
const slash = document.getElementsByClassName("slash");
const sombre = document.getElementById("sombre");
const classSombre = document.getElementsByClassName("sombre");
const logoNav = document.getElementById("logoNav");
nav.style.right = "100%";

menu.onclick = function () {
    animMenu();
};

sombre.onclick = function () {
    if (classSombre[0]) {
        animMenu();
    }
};

function animMenu() {

    if (nav.style.right == "100%") {
        if (document.documentElement.clientWidth > 1024) {
            nav.style.right = "70%";

        } else {
            nav.style.right = "0%";
        }

        slash[1].style.opacity = 0;

        slash[0].style.top = "12px";
        slash[2].style.top = "-12px";

        slash[0].style.transform = "rotate(220deg)";
        slash[2].style.transform = "rotate(-220deg)";

        logoNav.style.opacity = 1;
        logoNav.style.paddingBottom = "0";
    }

    else {

        nav.style.right = "100%";
        slash[1].style.opacity = 1;

        slash[0].style.top = "0px";
        slash[2].style.top = "0px";

        slash[0].style.transform = "rotate(0deg)";
        slash[2].style.transform = "rotate(0deg)";

        logoNav.style.opacity = 0;
        logoNav.style.paddingBottom = "30%";
    }

    sombre.classList.toggle("sombre");

    for (var i = 0; i < slash.length; i++) {
        slash[i].classList.toggle("colorSlash");
    }
};








// Fin Menu Hamburger


$(document).ready(function() {
		$(fleche).on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});