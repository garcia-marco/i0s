

var btInscrip = document.getElementById("btInscrip");
btInscrip.addEventListener("click", sendEmail);




function sendEmail() {


        var mail = 'mailto:justine@wildcodeschool.fr';
        var subject = "subject=Inscription formation Swift/iOS_" + document.getElementById("iNnom").value
        var my_body = document.getElementById("content").value
        var a = document.createElement('a');
        a.href = mail
            + "?" + subject
            + "&body=" + "Hello, je souhaite suivre la formation intensive Swift / iOS. Voici mon profil GitHub et/ou Linkedin :"+my_body
            + document.getElementById("urlG").value + "\n"
            + document.getElementById("urlk").value
            + "" 




        a.click();
    }


