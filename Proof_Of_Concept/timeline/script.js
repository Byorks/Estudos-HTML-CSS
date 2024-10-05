document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const line = document.querySelector('.line');

    // Mostra a linha
    line.style.display = 'block';

    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            section.classList.add('show-me');
        }
    });
});
