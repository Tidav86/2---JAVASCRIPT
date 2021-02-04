//////////////////////////////////////////////////////////////////////////////

// Selection des éléments scores
let globalPlayer1 = document.getElementById("global-player1");
let globalPlayer2 = document.getElementById("global-player2");
let currentPlayer1 = document.getElementById("round-player1");
let currentPlayer2 = document.getElementById("round-player2");
let score = document.getElementById("score")

//  Selection des labels Players
let namePlayer1 = document.getElementById("player1");
let namePlayer2 = document.getElementById("player2");

// Selection des labels Gagnant et Initialisation
let winnerPlayer1 = document.getElementById("gagnant-player1");
let winnerPlayer2 = document.getElementById("gagnant-player2");
winnerPlayer1.classList.add("hide");
winnerPlayer2.classList.add("hide");

// Selecteur des Players et Initialisation
const selecteurP1 = document.getElementById("selecteur-player1");
const selecteurP2 = document.getElementById("selecteur-player2")
selecteurP1.classList.add("show");
selecteurP2.classList.add("hide");

// Initialisation des valeurs à 0
globalPlayer1.innerHTML = 0;
globalPlayer2.innerHTML = 0;
currentPlayer1.innerHTML = 0;
currentPlayer2.innerHTML = 0;

// Selection de l'élement d'indication du joueur en cours en arrière plan
let playerTurn = document.getElementById("player-turn");

//////////////////////////////////////////////////////////////////////////////

// Fonction pour recommencer une partie
function newGame() {
    if(confirm("Voulez-vous vraiment recommençer la partie ?")){
        // Remise à 0 des valeurs
        globalPlayer1.textContent = 0;
        globalPlayer2.textContent = 0;
        currentPlayer1.textContent = 0;
        currentPlayer2.textContent = 0;
        //  Réinitialisation de l'affichage du dé
        resetImage()   
        // Position du sélecteur
        selecteurP1.classList.replace("hide","show");
        selecteurP2.classList.replace("show","hide");
        // Réinitialiser affichage gagnant
        winnerPlayer1.classList.replace("show","hide");
        winnerPlayer2.classList.replace("show","hide");
        // Réinitialisation du style des scores
        globalPlayer1.setAttribute("style","font-weight:300");
        globalPlayer2.setAttribute("style","font-weight:300");
        namePlayer1.setAttribute("style","font-weight:500; color: rgb(150, 150, 150);");
        namePlayer2.setAttribute("style","font-weight:500; color: rgb(150, 150, 150);");
        //Réinitialisation du Bouton New Game
        btnNewGame.setAttribute("style", "font-weight:400; color: rgb(150, 150, 150)");
        //Réinitialisation de l'élément d'indication du joueur en cours
        playerTurn.setAttribute("style", "background: linear-gradient(to left, white 50%, rgb(210, 210, 210) 50%)");
        // Activation des boutons si une fin de partie à eu lieu
        btnRollDice.disabled = false;
        btnHold.disabled = false;
    }
}

// Fonction Reset en fin de partie
function endGame() {
    //  Réinitialisation de l'affichage du dé
    resetImage();   
    // Position du sélecteur
    selector();
    //Lancement nouvelle partie
    newGame();
}

// Fonction pour la sélection du Player
function selector() {
    player1 = selecteurP1.getAttribute("class");
    player2 = selecteurP2.getAttribute("class");
    if(player1 === "show" && player2 === "hide"){
        selecteurP1.removeAttribute("class");
        selecteurP1.setAttribute("class","hide");
        selecteurP2.removeAttribute("class");
        selecteurP2.setAttribute("class", "show");
        playerTurn.setAttribute("style", "background: linear-gradient(to right, white 50%, rgb(210, 210, 210) 50%)");
    } else if ( player1 === "hide" && player2 === "show") {
        selecteurP1.removeAttribute("class");
        selecteurP1.setAttribute("class","show");
        selecteurP2.removeAttribute("class");
        selecteurP2.setAttribute("class", "hide");
        playerTurn.setAttribute("style", "background: linear-gradient(to left, white 50%, rgb(210, 210, 210) 50%)");
    }
    
}

// Function test si le score est supérieur ou égale à 100 
function testTotal() {
    let totalP1 = Number(globalPlayer1.textContent) + Number(currentPlayer1.textContent);
    let totalP2 = Number(globalPlayer2.textContent) + Number(currentPlayer2.textContent);

    if(totalP1 >= 100){  
        // Modifications css du gagnant
        globalPlayer1.setAttribute("style","font-weight:bold");
        namePlayer1.setAttribute("style","font-weight:bold; color: rgb(255, 255, 0); text-shadow: black 2px 2px;");
        winnerPlayer1.classList.replace("hide","show");
        // Action sur les boutons
        btnRollDice.disabled = true;
        btnHold.disabled = true;
        btnNewGame.setAttribute("style", "font-weight:bold; color: rgb(253, 90, 90)");

    } else if (totalP2 >= 100){
        // Modifications css du gagnant
        globalPlayer2.setAttribute("style","font-weight:bold");
        namePlayer2.setAttribute("style","font-weight:bold; color: rgb(255, 255, 0); text-shadow: black 2px 2px;");
        winnerPlayer2.classList.replace("hide","show");
        // Action sur les boutons
        btnRollDice.disabled = true;
        btnHold.disabled = true;
        btnNewGame.setAttribute("style", "font-weight:bold; color: rgb(253, 90, 90)");
    }
}

//  Fonction de réinitialisation de l'affichage du dé
function resetImage() {
    if(document.querySelector("#score > img")){
        score.removeChild(document.querySelector("#score > img"));
    } 
}

//////////////////////////////////////////////////////////////////////////////

// New Game Parameter
let btnNewGame = document.querySelector("#btn-new-game");
btnNewGame.addEventListener("click", () => {newGame();})

//////////////////////////////////////////////////////////////////////////////

//  Roll Dice parameter
let btnRollDice = document.querySelector("#btn-roll-dice");

btnRollDice.addEventListener("click", () => {
    var x = document.createElement("IMG");
    var isScore = document.querySelector("#score > img")
    var roll = Math.floor(Math.random()*6)+1;

    // Verification si un score n'est pas déjà présent, si présent, supprimer pour insérer nouvelle valeure
    if(!isScore){
        x.setAttribute("src","./images/Dice-"+roll+".png");
        score.appendChild(x);
        if(selecteurP1.classList.contains("show") && selecteurP2.classList.contains("hide") == true){
            currentPlayer1.textContent = Number(currentPlayer1.textContent) + roll;
        } else if (selecteurP1.classList.contains("hide") && selecteurP2.classList.contains("show") == true){
            currentPlayer2.textContent = Number(currentPlayer2.textContent) + roll;
        }
        
    } else {
        score.removeChild(isScore);
        x.setAttribute("src","./images/Dice-"+roll+".png");
        score.appendChild(x);
        if(selecteurP1.classList.contains("show") && selecteurP2.classList.contains("hide") == true){
            currentPlayer1.textContent = Number(currentPlayer1.textContent) + roll;
        } else if (selecteurP1.classList.contains("hide") && selecteurP2.classList.contains("show") == true){
            currentPlayer2.textContent = Number(currentPlayer2.textContent) + roll;
        }
    }

    // Vérification si on tombe sur le dé numéro 1
    if(roll === 1) {
        if(selecteurP1.classList.contains("show") && selecteurP2.classList.contains("hide") == true){
            currentPlayer1.textContent = 0;
            selector();
        } else if (selecteurP1.classList.contains("hide") && selecteurP2.classList.contains("show") == true){
            currentPlayer2.textContent = 0;
            selector();
        }
    }
})

//////////////////////////////////////////////////////////////////////////////

// Hold Parameter
let btnHold = document.querySelector("#btn-hold");

btnHold.addEventListener("click", () => {
    if(selecteurP1.classList.contains("show") && selecteurP2.classList.contains("hide") == true){
        globalPlayer1.textContent = Number(currentPlayer1.textContent) + Number(globalPlayer1.textContent);
        currentPlayer1.textContent = 0;
    } else if (selecteurP1.classList.contains("hide") && selecteurP2.classList.contains("show") == true){
        globalPlayer2.textContent = Number(currentPlayer2.textContent) + Number(globalPlayer2.textContent);
        currentPlayer2.textContent = 0;
    }
    
    selector();
    testTotal();
    resetImage(); 
})

//////////////////////////////////////////////////////////////////////////////