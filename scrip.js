const adressBtn = document.querySelector('#adress-forms');
const adressForm = document.querySelector('.adress-form');

adressBtn.addEventListener("click", function() {
    adressForm.style.display = "flex";
});
const adressBtn1 = document.querySelector('#adress-close');
const adressclose = document.querySelector('.adress-form');

adressBtn1.addEventListener("click", function() {
    adressclose.style.display = "none";
});


