const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearACtiveClasses()
        slide.classList.add('active')
    })
}

function clearACtiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
