function inscription (){
    let username = document.getElementById("Username").value;
    let email = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;
    let statut = document.getElementById("Statut").value;
    if (username === ""  || email === "" || password === "" || statut === "option1"){
        alert("Vous n'avez pas remplis tous les champs !");
        return;
    }
    localStorage.setItem('isRegistered', 'true');
    alert('Inscription réussie ! Vous avez maintenant accès au contenu premium.');
}


function uninscription (){
    if (localStorage.getItem('isRegistered') === 'false'){
        alert("Vous n'êtes pas encore inscrit !");
        return;
    }
    localStorage.setItem('isRegistered', 'false');
    alert("Désinscription réussie ! Vous n'avez maintenant plus accès au contenu premium.");
}