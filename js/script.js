// Selection des éléments scores
let globalPlayer1 = document.getElementById("GlobalPlayer1");
let globalPlayer2 = document.getElementById("GlobalPlayer2");
let currentPlayer1 = document.getElementById("RoundPlayer1");
let currentPlayer2 = document.getElementById("RoundPlayer2");
let score = document.getElementById("score")

//  Roll Dice parameter
let btnRollDice = document.querySelector("#ButtonRollDice");

btnRollDice.addEventListener("click", () => {
    var x = document.createElement("IMG");
    x.className="image";
    var roll = Math.floor(Math.random()*6)+1;
    var isScore = document.querySelector("#score > img")

    // Verification si un score n'est pas déjà présent, si présent, supprimer pour insérer nouvelle valeure
    if(!isScore){
        x.setAttribute("src","./images/Dice-"+roll+".png");
        score.appendChild(x);
    } else {
        score.removeChild(isScore);
        x.setAttribute("src","./images/Dice-"+roll+".png");
        score.appendChild(x);
    }
})