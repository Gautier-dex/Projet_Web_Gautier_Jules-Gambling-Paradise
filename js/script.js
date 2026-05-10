function inscription (){
        localStorage.setItem('isRegistered', 'true');
        alert('Inscription réussie ! Vous avez maintenant accès au contenu premium.');
}


function uninscription (){
    localStorage.setItem('isRegistered', 'false');
    alert("Désinscription réussie ! Vous n'avez maintenant plus accès au contenu premium.");
}