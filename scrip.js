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
//slider
const rightBtn = document.querySelector(".fas.fa-arrow-right");
const leftBtn = document.querySelector(".fas.fa-arrow-left");
let index = 0;
const img = document.querySelectorAll(".slaider-content-left-top img");

rightBtn.addEventListener("click", function() {
    index = index + 1;
    if (index > img.length - 1) {
        index = 0;
    }
    document.querySelector(".slaider-content-left-top").style.right = index * 100 + "%";
});

leftBtn.addEventListener("click", function() {
    index = index - 1;
    if (index <= 0) {
        index = img.length-1;
    }
    document.querySelector(".slaider-content-left-top").style.right = index *100+"%";
});
////////////////////////auto
const imgList = document.querySelectorAll(".slaider-content-left-top img");
let currentIndex = 0;

function updateImage() {
    const translateXValue = -currentIndex * 100;
    document.querySelector(".slaider-content-left-top").style.transform = `translateX(${translateXValue}%)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % imgList.length;
    updateImage();
}

setInterval(nextImage, 4000); // Tự động chuyển ảnh sau mỗi 3 giây

updateImage();


