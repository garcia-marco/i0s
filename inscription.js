// Nombre de Questions
var nbQuestions = 3;

// Variable pour la note finale
var grade = 0;



// Initialise les réponses et questions
var allAnswer = [];
var allRadios = [];

function init() {

    for (let i = 0; i < nbQuestions; i++) {
        var currentAnswer = "answer" + i;
        allAnswer.push(document.getElementById(currentAnswer));

        var currentQuestion = "radiosQ" + i;
        allRadios.push(document.getElementsByName(currentQuestion));
    }
};
init();



// Se lance si clique sur bouton
document.getElementById("submit").onclick = function click() {

    if (checking() == nbQuestions) {
        answerAll();
    }
    else {
        document.getElementById("submit").innerHTML = "Répondez à toutes les questions!";
    }
};



// Se lance si tout est checked
function answerAll() {

    // Affiche la réponse aux questions et l'animation
    addAnswer();
    addAnimation();

    // Changement de texte du bouton et désactivation de celui-ci
    document.getElementById("sur20").innerHTML = "Vous avez " + grade + "/20"
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
            if (allRadios[i][j].checked) {

                // Ajoute 1 si réponse juste
                if (allRadios[i][j].value.substring(0, 5) == "Bonne") {
                    grade += 1;
                }
                allAnswer[i].innerHTML = allRadios[i][j].value;
            }


        }
    }
};



//Boucle pour ajouter l'animation
function addAnimation() {

    document.getElementById("sur20").classList.add("appear");
    for (let i in allAnswer) {
        allAnswer[i].classList.add("appear");
    }
};

var progressBar = 0;

// Boucle pour barre de progression
for (let i in allRadios) {
    for (let j in allRadios[i]) {
        allRadios[i][j].onclick = function progress() {
            progressBar += 1;
            console.log(progressBar);
        }
    }
};
