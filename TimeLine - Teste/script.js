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


// Player de áudio
let mysong = document.getElementById("mysong");
let icon = document.getElementById("icon");

icon.onclick = function() {
    if(mysong.paused){
        mysong.play();
        icon.src = "img/paused.png"
    }
    else {
        mysong.pause();
        icon.src = "img/Player.png"
    }
}