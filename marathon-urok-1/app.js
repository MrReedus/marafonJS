const slides = document.querySelectorAll('.slide');
const body = document.querySelector('body');

body.style.background = 'rgb(49, 49, 49)';

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearACtiveClasses()
        slide.classList.add('active');
    })
}

function clearACtiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
