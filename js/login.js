function validate() {
    var gebr = document.getElementById("EmailAddress").value;
    var wachtwoord = document.getElementById("mijnWachtwoord").value;
    if (gebr == "Dmitri@gmail.com" && wachtwoord == "123") {
        window.alert("Login successfully");
    }
    else {
        window.alert("Gebruikersnaam of wachtwoord zijn onjuist.Je hebt geen toegang");
    }
}