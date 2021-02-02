// Selection des éléments scores
let globalPlayer1 = document.getElementById("GlobalPlayer1");
let globalPlayer2 = document.getElementById("GlobalPlayer2");
let currentPlayer1 = document.getElementById("RoundPlayer1");
let currentPlayer2 = document.getElementById("RoundPlayer2");
let score = document.getElementById("score")

// Initialisation des valeurs à 0
    globalPlayer1.innerHTML = 0;
    globalPlayer2.innerHTML = 0;
    currentPlayer1.innerHTML = 0;
    currentPlayer2.innerHTML = 0;

// // Variable utile pour le lancer de dés
// let roll = Math.floor(Math.random()*6)+1;

// New Game Parameter
let btnNewGame = document.querySelector("#ButtonNewGame");

btnNewGame.addEventListener("click", () => {
    if(confirm("Voulez vous vraiment recommencer la partie ?")){
    // Récupération des valeurs à réinitialiser
        globalPlayer1.innerHTML = 0;
        globalPlayer2.innerHTML = 0;
        currentPlayer1.innerHTML = 0;
        currentPlayer2.innerHTML = 0;
    }
})

//  Roll Dice parameter
let btnRollDice = document.querySelector("#ButtonRollDice");

btnRollDice.addEventListener("click", () => {
    var x = document.createElement("IMG");
    var isScore = document.querySelector("#score > img")
    var roll = Math.floor(Math.random()*6)+1;

    // Verification si un score n'est pas déjà présent, si présent, supprimer pour insérer nouvelle valeure
    if(!isScore){
        x.setAttribute("src","./images/Dice-"+roll+".png");
        score.appendChild(x);
        currentPlayer1.textContent = Number(currentPlayer1.textContent) + roll;
    } else {
        score.removeChild(isScore);
        x.setAttribute("src","./images/Dice-"+roll+".png");
        score.appendChild(x);
        currentPlayer1.textContent = Number(currentPlayer1.textContent) + roll;
    }

    if(roll === 1) {
        currentPlayer1.textContent = 0;
    }
})

// Hold Parameter
let btnHold = document.querySelector("#ButtonHold");

btnHold.addEventListener("click", () => {

})