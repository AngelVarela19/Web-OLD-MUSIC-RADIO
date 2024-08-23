let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-images img");
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 20;
    document.querySelector(".carousel-images").style.transform = `translateX(${offset}%)`;
}

function changeSlide(step) {
    showSlide(currentSlide + step);
}

showSlide(currentSlide);

setInterval(() => changeSlide(1), 8000);


function redirigirTeleDanli() {
    window.location.href = 'https://teledanli.net';
}

function redirigirRadioDanli() {
    window.location.href = 'https://radiodanli.net';
}

function redirigirEstacionNaranja() {
    window.location.href = 'https://www.estacionnaranja.net';
}

function redirigirOldMusicRadio() {
    window.location.href = '#';
}