let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-images img');
    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    const newTransformValue = -slideIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue}%)`;
}
