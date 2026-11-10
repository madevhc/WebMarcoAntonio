const typewriterPhrases = {
    es: ["desarrollador de aplicaciones", "técnico de hardware", "futuro administrador de sistemas"],
    en: ["an App Developer", "a PC Hardware Technician", "an Aspiring Systems Administrator"]
};
let phrases = typewriterPhrases.es;
let typingTimer;
let phraseIndex = 0;
let charIndex = 0;
const typingSpeed = 80;
const deletingSpeed = 50;
const delayBetweenPhrases = 5000; // ! Tiempo que dura antes de cambiar a la siguiente

function typeWriter() {
    const typewriterText = document.querySelector('.typewriter-text');
    const currentPhrase = phrases[phraseIndex];
    
    if (charIndex < currentPhrase.length) {
        typewriterText.textContent += currentPhrase.charAt(charIndex);
        charIndex++;
        typingTimer = setTimeout(typeWriter, typingSpeed);
    } else {
        typingTimer = setTimeout(deleteText, delayBetweenPhrases);
    }
}
// ! Borrar el texto
function deleteText() {
    const typewriterText = document.querySelector('.typewriter-text');
    const currentPhrase = phrases[phraseIndex];
    
    if (charIndex > 0) {
        typewriterText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingTimer = setTimeout(deleteText, deletingSpeed);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingTimer = setTimeout(typeWriter, typingSpeed);
    }
}

// * Iniciar la Function
function startTypewriter(language = document.documentElement.lang) {
    clearTimeout(typingTimer);
    phrases = typewriterPhrases[language] || typewriterPhrases.es;
    phraseIndex = 0;
    charIndex = 0;
    document.querySelector('.typewriter-text').textContent = '';
    typingTimer = setTimeout(typeWriter, typingSpeed);
}

window.addEventListener('load', () => startTypewriter());


// ! Hecho por MA_Dev
// * I spent 20 minutes making it work and I finally did it :)

