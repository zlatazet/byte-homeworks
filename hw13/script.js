const slides = [...document.querySelectorAll(".slide")];
const prevBtn = document.getElementById("button__prev");
const nextBtn = document.getElementById("button__next");

const hideSlidesOnLoad = () => {
    const slidesToHide = slides.slice(1);

    slidesToHide.forEach((slide) => {
        slide.classList.add("slide__hide");
    });
};

window.addEventListener("DOMContentLoaded", hideSlidesOnLoad);

let currentSlideIndex = 0;

const showNextSlideV2 = () => {
    slides[currentSlideIndex].classList.add("slide__hide");

    if (currentSlideIndex === slides.length - 1) {
        slides[0].classList.remove("slide__hide");
        currentSlideIndex = 0;
    } else {
        slides[currentSlideIndex + 1].classList.remove("slide__hide");
        currentSlideIndex ++;
    }
};

const showPrevSlideV2 = () => {
    slides[currentSlideIndex].classList.add("slide__hide");
    if (currentSlideIndex === 0) {
        slides[slides.length - 1].classList.remove("slide__hide");
        currentSlideIndex = slides.length - 1;
    } else {
        slides[currentSlideIndex - 1].classList.remove("slide__hide");
        currentSlideIndex --;
    }
}

prevBtn.addEventListener("click", showPrevSlideV2)
nextBtn.addEventListener("click", showNextSlideV2);