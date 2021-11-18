var wins = 0;
var draws = 0;
var losses = 0;
var nbParties = 0;
var divWins = $("<div/>",  { id : "wins"}).appendTo("body");
var divDraws = $("<div/>",  { id : "draws"}).appendTo("body");
var divLosses = $("<div/>",  { id : "losses"}).appendTo("body");


$("#shifumi").click(function Shifumi() {
    nbParties++;
    var winner = "";

    var tableauValeurs = ['pierre', 'feuille', 'ciseau'];
    var dataMachine = tableauValeurs[Math.floor(Math.random() * 3)];

    var dataUser = $("#dataUser").val();

    if (dataMachine == dataUser) { 
        alert("Égalité. Rejouez !");
        draws++;
        
    } else {
        switch(dataUser) {
            case "pierre":
                 (dataMachine == "ciseau") ? winner = "Utilisateur": winner = "Ordinateur";
                 break;
            case "ciseau":     
                (dataMachine == "feuille") ? winner = "Utilisateur": winner = "Ordinateur";
                break;
            case "feuille":
                (dataMachine == "pierre") ? winner = "Utilisateur": winner = "Ordinateur";
                break;
        }
        alert("La Machine a choisi " + dataMachine + "\n" + winner + " a gagné");
        
        if (winner == "Utilisateur" ) { 
            wins++; 
        } else if (winner == "Ordinateur" ) { 
            losses++; 
        } 
    }
       
    $("#wins").text("Victoires : " + wins + " soit " + Math.floor((wins/nbParties)*100) + "%");
    $("#draws").text("Égalités : " + draws);
    $("#losses").text("Défaites : " + losses);
})