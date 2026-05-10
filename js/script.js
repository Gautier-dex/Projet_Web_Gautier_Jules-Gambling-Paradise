function inscription (){
    let username = document.getElementById("Username").value;
    let email = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;
    let statut = document.getElementById("Statut").value;
    if (username === ""  || email === "" || password === "" || statut === "option1"){
        alert("Vous n'avez pas remplis tous les champs !");
        return;
    }
    if(localStorage.getItem('isRegistered') === 'true'){
        alert("Vous êtes déjà inscrit!");
        return;
    }
    localStorage.setItem('isRegistered', 'true');
    alert('Inscription réussie ! Vous avez maintenant accès au contenu premium.');
}


function uninscription (){
    if (localStorage.getItem('isRegistered') !== 'true'){ //sinon nous ne gérons pas le cas null
        alert("Vous n'êtes pas encore inscrit !");
        return;
    }
    localStorage.setItem('isRegistered', 'false');
    alert("Désinscription réussie ! Vous n'avez maintenant plus accès au contenu premium.");
}

function blackjack_table() {

    let table_bj_strat = document.getElementById('strat_table_not_visible');

    if (table_bj_strat) {

        if (localStorage.getItem('isRegistered') === 'true') {
            table_bj_strat.style.filter = "none";
            table_bj_strat.style.pointerEvents = "auto";
        } else {
            table_bj_strat.style.filter = "blur(8px)";
            table_bj_strat.style.pointerEvents = "none";
        }
    }
}