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

let mysong = document.getElementById('mysong');
let icon = document.getElementById("icon");

// Play/pause
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

// Volume
let recent_volume = document.querySelector('#volume');
const volume_change = () => {
    mysong.volume = recent_volume.value / 100;
}

// Seletor de progresso da música
let slider = document.querySelector('#duration_slider');
const change_duration = () => {
    slider_position = mysong.duration * (slider.value/100);
    mysong.currentTime = slider_position;
}

// Atualizar a posição do slider de acordo com a música
const updateSlider = () => {
    let position = 0;

    if(!isNaN(mysong.duration)){
        position = mysong.currentTime * (100/ mysong.duration);
        slider.value = position;
    }
}

mysong.addEventListener('timeupdate', updateSlider);
