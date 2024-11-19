/******************** voir le pswd   ********************/

//je récupère la checkbox
let eye = document.getElementById("visibility-pswd");
//console.log(eye);
//j'ajoute addEnventListener pour voir si c'est check ou pas
eye.addEventListener("change", function () {
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

let registerForm = document.getElementById("register-form");
//je récupère les valeurs qui m'intéresse
let userName = document.getElementById("username").value;
let email = document.getElementById("mail").value;
let pswd = document.getElementById("pswd").value;
let confirmedPswd = document.getElementById("confirmed-pswd").value;

registerForm.addEventListener("submit", function (event) {
    verification(event)
});

function verification(event) {
    event.preventDefault();

    //preventDefault = empêche l'action de submit

    // je vérifie que les pswd soient identiques
    if (pswd === confirmedPswd) {
        //alert("Votre inscription a bien été enregistrée !");
        console.log("Inscription réussie !");
        //j'ajoute les datas dans le sessionStorage
        localStorage.setItem("nom", userName);
        localStorage.setItem("email", email);
        localStorage.setItem("mot de passe", pswd);
        // je redirige vers la page login si connexion réussi
        document.location.href = "login.html";

    } else {
        console.log("les mots de passe sont différents !")
    }
};


let loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (event) {
    verificationConnexion(event)
});

function verificationConnexion(event) {
    event.preventDefault();

    let mailLogin = document.getElementById("mail-login").value;
    let pswdLogin = document.getElementById("passeword-login").value;

    if (mailLogin === userName && pswdLogin === pswd) {
        alert("connexion réussie !");
        document.location.href = "index.html";
    } else {
        alert("connexion échouée");
    }
};


