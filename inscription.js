// Nombre de Questions
var nbQuestions = 3;

//Initialise les réponses et questions
var allAnswer = [];
var allQuestions = [];

function init() {
    for (let a = 0; a < nbQuestions; a++) {
        var currentAnswer = "answer" + a;
        allAnswer.push(document.getElementById(currentAnswer));

        var currentQuestion = "question" + a;
        allQuestions.push(document.getElementsByName(currentQuestion));
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
    document.getElementById("submit").innerHTML = "Merci d'avoir pris le temps de répondre";
    document.getElementById("submit").setAttribute("disabled", "disabled")

};

// Boucle pour vérifier que tout est checké
function checking() {
    var ifCheck = 0;
    for (let i in allQuestions) {
        for (let j in allQuestions[i]) {
            if (allQuestions[i][j].checked) {
                ifCheck += 1;
            }
        }
    }
    return ifCheck;
};

// Boucle pour ajouter les réponses
function addAnswer() {
    for (let i in allQuestions) {
        for (let j in allQuestions[i]) {
            if (allQuestions[i][j].checked) {
                allAnswer[i].innerHTML = allQuestions[i][j].value;
            }
        }
    }
};

//Boucle pour ajouter l'animation
function addAnimation() {
    for (let i in allAnswer) {
        allAnswer[i].setAttribute("class", "appear");
    }
};