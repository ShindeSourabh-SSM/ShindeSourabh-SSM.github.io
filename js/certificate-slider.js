// certificate-slider.js
let currentIndex = 0;

const slider = document.querySelector('.certificate-slider');
const slides = document.querySelectorAll('.certificate-slide');
const totalSlides = slides.length;

// Function to update slide position
function updateSliderPosition() {
    const offset = -currentIndex * (slides[0].clientWidth + 20); // Adjust for spacing
    slider.style.transform = `translateX(${offset}px)`;
}

// Next button functionality
document.querySelector('.next-btn').addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the start
    }
    updateSliderPosition();
});

// Previous button functionality
document.querySelector('.prev-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; // Loop back to the end
    }
    updateSliderPosition();
});
