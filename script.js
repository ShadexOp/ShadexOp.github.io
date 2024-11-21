function moveSlide(button, direction) {
    const sliderContainer = button.closest('.slider-container');
    const slider = sliderContainer.querySelector('.slider');
    const slides = slider.querySelectorAll('.slide');
    const slideWidth = slides[0].clientWidth;

    let currentTranslate = parseFloat(slider.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    const maxTranslate = -(slides.length - 1) * slideWidth;

    currentTranslate += direction * slideWidth;
    if (currentTranslate > 0) currentTranslate = maxTranslate; // Loop back
    if (currentTranslate < maxTranslate) currentTranslate = 0; // Loop forward

    slider.style.transform = `translateX(${currentTranslate}px)`;
}
