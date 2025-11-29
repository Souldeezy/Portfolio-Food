document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments du DOM
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.hero-slide');
    const prevButton = document.querySelector('.prev-button'); // Ajout
    const nextButton = document.querySelector('.next-button'); // Ajout
    
    const slideInterval = 100000; // 10 secondes
    let currentSlide = 0;
    let autoSlideTimer;

    // 1. Fonction pour afficher une diapositive spécifique
    function goToSlide(index) {
        // Logique de boucle pour la navigation
        if (index >= slides.length) {
            index = 0; // Si on dépasse la fin, on revient au début
        }
        if (index < 0) {
            index = slides.length - 1; // Si on va avant le début, on va à la fin
        }

        // Calculer la translation pour afficher la diapositive
        const offset = -index * (100 / slides.length); // Calcul dynamique (100 / 4 = 25%)
        carousel.style.transform = `translateX(${offset}%)`;

        currentSlide = index;
    }

    // 2. Fonctions pour la navigation manuelle
    function slideNext() {
        goToSlide(currentSlide + 1);
    }

    function slidePrev() {
        goToSlide(currentSlide - 1);
    }

    // 3. Logique de défilement automatique et réinitialisation
    function resetTimer() {
        clearInterval(autoSlideTimer); // Arrête le minuteur actuel
        startTimer(); // Redémarre un nouveau minuteur
    }

    function startTimer() {
        autoSlideTimer = setInterval(slideNext, slideInterval);
    }

    // 4. Ajout des écouteurs d'événements sur les flèches
    nextButton.addEventListener('click', () => {
        slideNext();
        resetTimer(); // Réinitialise le minuteur après un clic
    });

    prevButton.addEventListener('click', () => {
        slidePrev();
        resetTimer(); // Réinitialise le minuteur après un clic
    });

    // Démarrer le carrousel au chargement de la page
    startTimer();
});
