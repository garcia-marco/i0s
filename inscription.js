

(function ()
{
    ///// declaration de variables///

    var myForm = document.getElementById('inscription');
    var inputsOblig = document.getElementsByClassName('oblig'); //les inputs obligatoire 
    var newLine = escape("\n");                                 // un retour a la ligne
    var btInscrip = document.getElementById("btInscrip");
    var mail = '' // adresse mail
    var subject = ''
    var my_body = ''


    //////////////////////////////////////////////


    function check(list)
    {
        for (var i = 0; i < list.length; i++)
        {
            if (list[i].value == "")            
            {
                return false;
            }
        }
        return true;

    }
    function construireMail()
    {
        debugger
        //INITIALISATIONS
        mail = 'mailto:justine@wildcodeschool.fr';
        subject = "subject=Inscription formation Swift/iOS_" + document.getElementById("iNnom").value
        my_body = document.getElementById("content").value
        var str = ""
        var myName = document.getElementById("iNnom").value
        var urlG = document.getElementById("urlG").value
        var urlk = document.getElementById("urlk").value
        var tel = document.getElementById("tel").value
        var myMail = document.getElementById("mail").value
        //CONSTRUCTION DE LA CHAINE DE CARACTÈRE
        str = mail
            + "?" + subject
            + "&body=" + "Hello, je souhaite suivre la formation intensive Swift / iOS. " + newLine
            + my_body + newLine


        // console.log(str)
        if (urlG != "" || urlk != "")
        {
            str = str
                + "Voici mon profil GitHub et/ou Linkedin :" + newLine
                + urlG + newLine
                + urlk + newLine
        }
        str = str + newLine + newLine+ myName + newLine +"Tel  : "+ tel + newLine + "Email  : "+myMail + newLine
        console.log(str)
        return str;
    }

    btInscrip.addEventListener("click",
        function (e) 
        {
            // console.log("click inscription")
            var a = document.createElement('a');
            // console.log(construireMail())
            a.href = construireMail()
            // console.log(a.href)
            if (check(inputsOblig))
            {
                a.click();
                window.location.href = '#close';

                e.preventDefault();
            }

        }

    );

})();