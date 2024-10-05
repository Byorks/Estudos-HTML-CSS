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

// Formatando o tempo em minutos e segundos
const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    } 

    return `${minutes}:${seconds}`;
};

// Speaker hahah fiz na mão :D
const volHigh = document.getElementById('vol-high');
const volLow = document.getElementById('vol-low');
const volOff = document.getElementById('vol-off');

const mostrarSpeaker = () => {
    if(mysong.volume * 100 > 50) {
        volHigh.style.display = 'block';
        volLow.style.display = 'none';
        volOff.style.display = 'none';
    }
    else if (mysong.volume  * 100 > 1) {
        volLow.style.display = 'block';
        volOff.style.display = 'none';
        volHigh.style.display = 'none';
    }
    else{
        volOff.style.display = 'block';
        volLow.style.display = 'none';
        volHigh.style.display = 'none';
    }
}

// Player de áudio

let mysong = document.getElementById('mysong');
let icon = document.getElementById("icon");
const currentTime = document.getElementById('current_time');
const totalDuration = document.getElementById('total_duration');


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
        position = mysong.currentTime * (100 / mysong.duration);
        slider.value = position;
        
        // Atualiza o tempo atual
        currentTime.textContent = formatTime(mysong.currentTime);
        // Atualiza a duração total
        totalDuration.textContent = formatTime(mysong.duration);
    }
};

// slider.addEventListener('input', () => {
//     slider_position = (mysong.duration/ 100) * slider.value;
//     mysong.currentTime = slider_position;
// });

// Atualiza o slider e o tempo automaticamente enquanto a música toca
mysong.addEventListener('timeupdate', updateSlider);

// Quando o audio carregar, definir a duração total
mysong.addEventListener('loadedmetadata', () => {
    totalDuration.textContent = formatTime(mysong.duration);
});


/* Animations on scroll */
let sections = document.querySelectorAll('section');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });
}