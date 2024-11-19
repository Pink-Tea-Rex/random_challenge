/******************** voir le pswd   ********************/ 
//je récupère la checkbox
let eye = document.getElementById("visibility-pswd");
//console.log(eye);
//j'ajoute addEnventListener pour voir si c'est check ou pas
eye.addEventListener("change", function() {
    //console.log("change");
    //je récupère l'input du pswd
    let displayStatut = document.getElementById("pswd");
    //si c'est check je change le type en text
    if (this.checked) {
        console.log("checked");
        displayStatut.type = "text";
    } else {
        //sinon je laisse comme ça
        console.log("not checked");
        displayStatut.type = "password";
    }
});


/******************** récupérer les data session storage ********************/
let registerBtn = document.getElementById("register-btn-register");
registerBtn.addEventListener("click", function() {
    verification();
});

let registerForm = document.getElementById("register-form");
 
registerForm.addEventListener("submit", function(event){
    verification(event)
});

function verification(event){
    event.preventDefault();

    //preventDefault = empêche l'action de submit
    //je récupère les valeurs qui m'intéresse
    let userName = document.getElementById("username").value;
    let email = document.getElementById("mail").value;
    let pswd = document.getElementById("pswd").value;
    let confirmedPswd = document.getElementById("confirmed-pswd").value;
 
    // je vérifie que les pswd soient identiques
    if (pswd !== confirmedPswd) {
        alert("les mots de passe sont différents !")
        };
    
    const user = {
        username : userName,
        mail : email,
        passeword :pswd,
        confirmedPassword: confirmedPswd
    };
        //alert("Votre inscription a bien été enregistrée !");
        //j'ajoute les datas dans le sessionStorage
        localStorage.setItem(email,JSON.stringify(user));
        alert("Inscription réussie !");
        document.location.href="login.html";
 
};
    



