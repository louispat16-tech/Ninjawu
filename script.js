// On récupère les éléments du HTML
const ninja = document.getElementById('joueur');
const btnGauche = document.getElementById('btn-gauche');
const btnDroite = document.getElementById('btn-droite');
// ... tu pourras ajouter btn-saut et btn-accroupir ici plus tard ...

// --- FONCTION POUR ALLER À GAUCHE ---
btnGauche.addEventListener('click', function() {
    console.log("Aller à gauche");
    
    // 1. On tourne le ninja vers la gauche en ajoutant la classe miroir
    ninja.classList.add('ninja-tourne-gauche');
    
    // 2. [PLUS TARD : On ajoute le déplacement du ninja vers la gauche]
    // Par exemple : ninja.style.left = (parseInt(ninja.style.left) - 10) + 'px';
});

// --- FONCTION POUR ALLER À DROITE ---
btnDroite.addEventListener('click', function() {
    console.log("Aller à droite");
    
    // 1. On tourne le ninja vers la droite en ENLEVANT la classe miroir
    ninja.classList.remove('ninja-tourne-gauche');
    
    // 2. [PLUS TARD : On ajoute le déplacement du ninja vers la droite]
});
