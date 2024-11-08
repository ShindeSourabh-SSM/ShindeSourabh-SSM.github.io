let currentIndex = 0;
const slider = document.querySelector('.certificate-slider');
const slides = document.querySelectorAll('.certificate-slide');
const totalSlides = slides.length;

// Function to update slide position
function updateSliderPosition() {
    const offset = -currentIndex * (slides[0].clientWidth + 10); // Adjust for spacing
    slider.style.transform = `translateX(${offset}px)`;
}

// Auto slide every 3 seconds
setInterval(function() {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the start
    }
    updateSliderPosition();
}, 3000); // Change slide every 3 seconds

// Optional: Restart the slider after it finishes
slider.addEventListener('transitionend', function() {
    if (currentIndex === totalSlides - 1) {
        slider.style.transition = 'none';
        slider.style.transform = 'translateX(0)';
        currentIndex = 0;
        setTimeout(function() {
            slider.style.transition = 'transform 0.5s ease-in-out';
        }, 50); // Small delay for smooth transition back
    }
});
