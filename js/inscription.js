// Loading Page

let loading = document.getElementById("blank");

window.onload = function loaded() {
    loading.style.opacity = 0;
    window.setTimeout(deleteLoad, 2000);
};


function deleteLoad() {
    document.body.removeChild(loading)
}


// Menu Hamburger








var menu = document.getElementById("icon");
var slash = document.getElementsByClassName("slash");
var sombre = document.getElementById("sombre");
var classSombre = document.getElementsByClassName("sombre");
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

        nav.style.right = "70%";

        slash[1].style.opacity = 0;

        slash[0].style.top = "12px";
        slash[2].style.top = "-12px";

        slash[0].style.transform = "rotate(220deg)";
        slash[2].style.transform = "rotate(-220deg)";

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

    for (let i = 0; i < slash.length; i++) {
        slash[i].classList.toggle("colorSlash");
    }
};








// Fin Menu Hamburger


// Questionnaire





// Nombre de Questions
var nbQuestions = 10;

// Variable pour la note finale
var grade = 0;

// Initialise les réponses et questions
var allAnswer = [];
var allRadios = [];

function init() {

    for (let i = 0; i < nbQuestions; i++) {
        allAnswer.push(document.getElementById("answer" + i));
        allRadios.push(document.getElementsByName("radiosQ" + i));
    }
};
init();



// Se lance si clique sur bouton
document.getElementById("submit").onclick = function click() {

    if (checking() == nbQuestions) {
        answerAll();
    }
    else {
        document.getElementById("submit").innerHTML = "Incomplet";
    }
};



// Se lance si tout est checked
function answerAll() {

    // Affiche la réponse aux questions et l'animation
    addAnswer();
    addAnimation();

    // Changement de texte du bouton et désactivation de celui-ci
    document.getElementById("sur20").innerHTML = "Vous avez " + grade + " bonnes réponses sur " + nbQuestions + "!";
    document.getElementById("submit").innerHTML = "Merci d'avoir pris le temps de répondre";
    document.getElementById("submit").disabled = true;
};



// Boucle pour vérifier que tout est checké
function checking() {
    var ifCheck = 0;

    for (let i in allRadios) {
        for (let j in allRadios[i]) {
            if (allRadios[i][j].checked) {
                ifCheck += 1;
            }
        }
    }
    return ifCheck;
};



// Boucle pour ajouter les réponses et pour calculer la note
function addAnswer() {

    for (let i in allRadios) {
        for (let j in allRadios[i]) {
            allRadios[i][j].disabled = true;

            if (allRadios[i][j].checked) {

                // Ajoute 1 si réponse juste
                if (allRadios[i][j].value.substring(0, 5) == "Bonne") {
                    allAnswer[i].classList.add("good");
                    grade += 1;
                }
                allAnswer[i].innerHTML = allRadios[i][j].value;
            }
        }
    }
};



//Boucle pour ajouter l'animation
function addAnimation() {
    for (let i in allAnswer) {
        allAnswer[i].classList.add("appear");
    }
};



// Boucle pour barre de progression et réinitialiser bouton
var progressBar = document.getElementById("myBar");





/**Cette fonction detecte tout changement sur le formulaire 
 * 1-Permet la possibilité de valider le formulaire
 * 2-Avancer la barre de progression 
 */

document.getElementById("form").onchange = function () {
    var radioChecked = checking();// on stock le resultat de la fonction pour eviter de l'appeler plusieurs fois


    //si tout les champs sont remplis on active le boutton valider , 
    //
    if (radioChecked == nbQuestions) //on comparre au nombre de questions checker (-via fonction cheking()-) à nbQuestions qui est une variable globale precedement defenie
    {

        document.getElementById("submit").innerHTML = "Valider";
        //  progressBar.style.opacity =0; // quand la barre atteint 100%, on la cache puisque elle sert plus à rien
    }

    // pour faire bouger la progressBar il suffit simplement de changer sa width ( largeur)
    progressBar.style.width =
        (
            Math.floor // Math.floor  pour enlever avoir des chiffres ronds cad sans virgules ...
                (
                (radioChecked * 100) / nbQuestions // on calcule le pourcentage des questions  repondu par rapport au nombre de questions total 
                )
        )
        + "%"; // <== faut pas l'oublier lui

    //On change bien évidament le chiffre qui est dans la barre de progression par la width fraichement affecter
    progressBar.innerHTML = progressBar.style.width



    // document.getElementById("counter").innerHTML = "il reste " + (nbQuestions - checking() )+ " à repondre"
};
