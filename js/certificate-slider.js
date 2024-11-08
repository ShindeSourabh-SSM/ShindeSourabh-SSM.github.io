let currentIndex = 0;
const slider = document.querySelector('.certificate-slider');
const slides = document.querySelectorAll('.certificate-slide');
const totalSlides = slides.length;
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// Function to update the slide position
function updateSliderPosition() {
    const offset = -currentIndex * (slides[0].clientWidth + 10); // Adjust for spacing
    slider.style.transform = `translateX(${offset}px)`;
}

// Function for automatic sliding
function autoSlide() {
    setInterval(() => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Restart from the first slide when reaching the last one
        }
        updateSliderPosition();
    }, 3000); // Change slide every 3 seconds
}

// Manual next button functionality
nextBtn.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first slide
    }
    updateSliderPosition();
});

// Manual previous button functionality
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; // Loop back to the last slide
    }
    updateSliderPosition();
});

// Start the automatic sliding
autoSlide();

// Touch swipe functionality
let touchStartX = 0;
let touchEndX = 0;

// Track the start of the touch swipe
slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

// Track the end of the touch swipe
slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleTouchSwipe();
});

// Handle the swipe direction
function handleTouchSwipe() {
    if (touchStartX - touchEndX > 50) {
        // Swiped left: Next slide
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first slide
        }
    } else if (touchEndX - touchStartX > 50) {
        // Swiped right: Previous slide
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1; // Loop back to the last slide
        }
    }
    updateSliderPosition();
}
