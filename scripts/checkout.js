const visaBtn = document.getElementById("visa")
const paypalBtn = document.getElementById("paypal")
const vippsBtn = document.getElementById("vipps")

const visaForm = document.querySelector(".visaform")
const paypalForm = document.querySelector(".paypalform")
const vippsForm = document.querySelector(".vippsform")

const openForm = (selectedForm) => {
    const forms = [visaForm, paypalForm, vippsForm]

    forms.forEach((form) => {
        form.style.display = "none";
});
selectedForm.style.display = "flex";

};
visaBtn.addEventListener("click", () => openForm(visaForm));
paypalBtn.addEventListener("click", () => openForm(paypalForm));
vippsBtn.addEventListener("click", () => openForm(vippsForm));