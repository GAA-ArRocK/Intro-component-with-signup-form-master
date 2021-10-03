const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

const errorFirstName = document.getElementById("errorFN");
const errorLastName = document.getElementById("errorLN");
const errorMail = document.getElementById("errorMail");
const errorPassword = document.getElementById("errorPassword");

const iconFN = document.getElementById("iconFN");
const iconLN = document.getElementById("iconLN");
const iconMail = document.getElementById("iconMail");
const iconPassword = document.getElementById("iconPassword");

var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var nameFormat = /^[a-zA-Z]+$/

function claimPress() {
    
    let fStatus = 0;

    if (firstName.value != "" && firstName.value.match(nameFormat)) {
        fStatus += 1;
        errorFirstName.classList.remove("active");
        iconFN.classList.remove("active");
    }
    else {
        errorFirstName.classList.add("active");
        iconFN.classList.add("active");
    }
 
    if (lastName.value != "" && lastName.value.match(nameFormat)) {
        fStatus += 1;
        errorLastName.classList.remove("active");
        iconLN.classList.remove("active");
    }
    else {
        errorLastName.classList.add("active");
        iconLN.classList.add("active");
    }
    
    if (email.value != "" && email.value.match(mailFormat)) {
        fStatus += 1;
        errorMail.classList.remove("active");
        iconMail.classList.remove("active");
    }
    else {
        errorMail.classList.add("active");
        iconMail.classList.add("active");
    }

    if (password.value != "") {
        fStatus += 1;
        errorPassword.classList.remove("active");
        iconPassword.classList.remove("active");
    }
    else {
        errorPassword.classList.add("active");
        iconPassword.classList.add("active");
    }

    if (fStatus == 4) {
        console.log("Everything is OK!");
    }
    else {
        console.log("Something is WRONG!");
    }

}