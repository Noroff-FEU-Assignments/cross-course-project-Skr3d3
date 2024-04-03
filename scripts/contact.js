const submitButton = document.getElementById("submitbutton");
const contactForm = document.querySelectorAll("form")[0];

const submitMessage = document.querySelector("#submitmessage")

const formName = document.querySelector("#name")
const formEmail = document.querySelector("#email")
const formCategory = document.querySelector("#supportcategory")
const formMessage = document.querySelector("#textbox")
const nameError = document.querySelector("#nameerror")
const emailError = document.querySelector("#emailerror")
const categoryError = document.querySelector("#categoryerror")
const messageError = document.querySelector("#texterror")



function isEmailValid(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email)
}
function isNameValid(name) {
    const pattern = /^[A-Za-z]+(?: [A-Za-z]+)? [A-Za-z]+$/;
    return pattern.test(name)
}

function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false
    }
}
function enableButton() {
    if(isNameValid(formName.value) && isEmailValid(formEmail.value) && checkLength(formMessage.value, 10) && formCategory.value) {
        submitButton.classList.remove("disabled");
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
        submitMessage.innerHTML = ""
        submitMessage.style.display = "none"
    }
}
function showNameError() {
    if(isNameValid(formName.value)) {
        nameError.style.display = "none"
    }else {
        nameError.style.display = "block"
    } 
}
function showEmailError() {
    if(isEmailValid(formEmail.value)) {
        emailError.style.display = "none"
    }else {
        emailError.style.display = "block"
    } 
}
function showCategoryError() {
    if(formCategory.value) {
        categoryError.style.display = "none"
    }else {
        categoryError.style.display = "block"
    } 
}
function showMessageError() {
    if(checkLength(formMessage.value, 10)) {
        messageError.style.display = "none"
    }else {
        messageError.style.display = "block"
    } 
}

formName.addEventListener("keyup", enableButton);
formName.addEventListener("blur", showNameError);

formEmail.addEventListener("keyup", enableButton);
formEmail.addEventListener("blur", showEmailError);

formCategory.addEventListener("change", enableButton);
formCategory.addEventListener("blur", showCategoryError);

formMessage.addEventListener("keyup", enableButton);
formMessage.addEventListener("blur", showMessageError);




submitButton.addEventListener("click", function(event) {
    event.preventDefault()
    submitMessage.style.display = "block"
    submitMessage.innerHTML = "Thank you for the submission! <3";
    contactForm.reset();
})