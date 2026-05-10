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