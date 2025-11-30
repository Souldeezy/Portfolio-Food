document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.hero-slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const slideInterval = 1000000; // 10 secondes

    let currentSlide = 0;
    let autoSlideTimer;

    // --- FONCTION goToSlide AMÉLIORÉE ---
    function goToSlide(index) {
        // Logique de boucle pour le carrousel
        if (index >= slides.length) {
            index = 0;
        }
        if (index < 0) {
            index = slides.length - 1;
        }

        // Déplacer le carrousel
        const offset = -index * (100 / slides.length);
        carousel.style.transform = `translateX(${offset}%)`;

        // --- C'EST LA PARTIE LA PLUS IMPORTANTE ---
        // 1. Retirer la classe .is-active de tous les slides
        slides.forEach(slide => {
            slide.classList.remove('is-active');
        });

        // 2. Ajouter la classe .is-active uniquement au slide actuel
        slides[index].classList.add('is-active');
        // -----------------------------------------

        currentSlide = index;
    }

    // --- GESTION DU TIMER ---
    function startTimer() {
        // On s'assure de ne pas avoir plusieurs timers en même temps
        clearInterval(autoSlideTimer); 
        autoSlideTimer = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, slideInterval);
    }

    // --- GESTION DES CLICS SUR LES FLÈCHES ---
    nextButton.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
        startTimer(); // On redémarre le timer après un clic manuel
    });

    prevButton.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
        startTimer(); // On redémarre le timer après un clic manuel
    });

    // --- DÉMARRAGE INITIAL ---
    goToSlide(0); // On active le premier slide au chargement
    startTimer();
});
