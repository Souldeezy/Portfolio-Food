// Fichier: carousel.js

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.hero-slide');
    // Suppression des références aux dots, prevButton et nextButton
    const slideInterval = 10000; // 10 secondes

    let currentSlide = 0;
    let autoSlideTimer;

    // 1. Fonction pour afficher une diapositive spécifique
    function goToSlide(index) {
        // Logique de boucle : si on dépasse la dernière slide, on revient à la première (index 0)
        if (index >= slides.length) {
            index = 0;
        }
        // Pas besoin de vérifier l'index < 0 car il n'y a plus de navigation arrière manuelle

        // Calculer la translation pour afficher la diapositive
        // Chaque slide fait 25% de la largeur du conteneur (400% au total)
        const offset = -index * 25; // Correction: Déplacer de 25% pour chaque slide
        carousel.style.transform = `translateX(${offset}%)`;

        currentSlide = index;
    }

    // 2. Logique de défilement automatique
    function startTimer() {
        autoSlideTimer = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, slideInterval);
    }

    // Démarrer le carrousel
    startTimer();
});
