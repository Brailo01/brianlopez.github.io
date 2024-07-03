const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})





var audios = {
    sonido1: { audio: new Audio("../Sounds/Celtstheme.mp3"), isPlaying: false },
    sonido2: { audio: new Audio("../Sounds/Teutonstheme.mp3"), isPlaying: false },
    sonido3: { audio: new Audio("../Sounds/Mongolstheme.mp3"), isPlaying: false },
    sonido4: { audio: new Audio("../Sounds/Saracenstheme.mp3"), isPlaying: false },
    sonido5: { audio: new Audio("../Sounds/Turkstheme.mp3"), isPlaying: false }
};

function togglePlayPause(key) {
    var sound = audios[key];
    if (sound.isPlaying) {
        sound.audio.pause();
        sound.audio.currentTime = 0;
    } else {
        sound.audio.play();
    }
    sound.isPlaying = !sound.isPlaying;
}



let currentIndex = 0;

function moveSlide(step) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    items.forEach(item => {
        item.classList.remove('active', 'previous');
    });

    const previousIndex = currentIndex;
    currentIndex = (currentIndex + step + totalItems) % totalItems;

    items[previousIndex].classList.add('previous');
    items[currentIndex].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    items[currentIndex].classList.add('active');
});




