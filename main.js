// Initialisation de l'index des slides à 1
let slideIndex = 1;

// Affichage initial de la slide
showSlides(slideIndex);

// Fonction pour changer la slide en ajoutant n à l'index actuel
// Augmente ou diminue slideIndex en fonction de n

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Fonction pour définir la slide actuelle en fonction de l'index n
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Fonction pour afficher la slide correspondant à l'index n
function showSlides(n) {
    // Récupération de toutes les slides par leur classe 'slide'
    let slides = document.getElementsByClassName('slide');
    
    // Récupération de tous les boutons radio par leur nom 'slide'
    let radios = document.getElementsByName('slide');
    
    // Si l'index n est supérieur au nombre de slides, revenir à la première slide
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    // Si l'index n est inférieur à 1, revenir à la dernière slide
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Cacher toutes les slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Désactiver tous les boutons radio
    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
    
    // Afficher la slide correspondant à l'index actuel
    slides[slideIndex - 1].style.display = 'block';
    
    // Activer le bouton radio correspondant à la slide actuelle
    radios[slideIndex - 1].checked = true;
}

// Fonction pour changer la slide avec les flèches
function changeSlide(n) {
    plusSlides(n);
}

// Fonction pour définir la slide actuelle avec les boutons radio
function setCurrentSlide(n) {
    currentSlide(n);
}
