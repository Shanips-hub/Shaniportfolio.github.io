const textElement = document.querySelector('.typewriter');
const phrases = ["Sustainable Mobility", "EV Infrastructure", "Strategic Operations"];
let phraseIdx = 0;
let charIdx = 0;
let isDeleting = false;

function typeEffect() {
    const current = phrases[phraseIdx];
    if (isDeleting) {
        textElement.textContent = current.substring(0, charIdx - 1);
        charIdx--;
    } else {
        textElement.textContent = current.substring(0, charIdx + 1);
        charIdx++;
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIdx === current.length) {
        isDeleting = true;
        speed = 2000; // Pause at end
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        speed = 500;
    }
    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);