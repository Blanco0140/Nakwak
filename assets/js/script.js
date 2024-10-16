// Affiche le bouton "scroll to top" lorsque l'utilisateur fait défiler la page
window.onscroll = function() {
    const scrollBtn = document.getElementById("scroll-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// Fonction pour un défilement fluide
function smoothScrollTo(target) {
    const startPosition = window.scrollY;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Durée du défilement en millisecondes
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Assure que la progression ne dépasse pas 1

        // Applique l'animation avec une courbe de défilement
        window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    // Fonction d'accélération pour un défilement plus fluide
    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animation);
}

// Remonte en haut de la page lorsque le bouton est cliqué
document.getElementById("scroll-top").onclick = function() {
    smoothScrollTo(document.body); // Utilise la fonction de défilement fluide
};

// Ajoute l'URL d'invitation de ton bot Discord ici
document.getElementById("invite-btn").onclick = function() {
    window.open("https://discord.com/api/oauth2/authorize?client_id=1100442999181295626&permissions=8&scope=bot", "_blank");
};
