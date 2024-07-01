let slideIndex = 0;
let slides = document.getElementsByClassName("slideshow");
let timer;

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    timer = setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function changeSlide(n) {
    clearTimeout(timer);
    slideIndex += n;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";
    timer = setTimeout(showSlides, 3000); // Reset timer
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});

  