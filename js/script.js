//////////////////////////////////////////////////////////////////////////////

// Selection des éléments scores
let globalPlayer1 = document.getElementById("GlobalPlayer1");
let globalPlayer2 = document.getElementById("GlobalPlayer2");
let currentPlayer1 = document.getElementById("RoundPlayer1");
let currentPlayer2 = document.getElementById("RoundPlayer2");
let score = document.getElementById("score")

// Initialisation du selecteur du Player
const selecteurP1 = document.getElementById("SelecteurP1");
const selecteurP2 = document.getElementById("SelecteurP2")
selecteurP1.classList.add("show");
selecteurP2.classList.add("hide");

// Initialisation des valeurs à 0
globalPlayer1.innerHTML = 0;
globalPlayer2.innerHTML = 0;
currentPlayer1.innerHTML = 0;
currentPlayer2.innerHTML = 0;

//////////////////////////////////////////////////////////////////////////////

// Fonction pour recommencer une partie
function newGame() {
    if(confirm("Voulez vous vraiment recommencer la partie ?")){
        // Remise à 0 des valeurs
            globalPlayer1.innerHTML = 0;
            globalPlayer2.innerHTML = 0;
            currentPlayer1.innerHTML = 0;
            currentPlayer2.innerHTML = 0;
        //  Réinitialisation de l'affichage du dé
            if(document.querySelector("#score > img")){
                score.removeChild(document.querySelector("#score > img"));
            }    
        // Position du sélecteur
            selecteurP1.classList.replace("hide","show");
            selecteurP2.classList.replace("show","hide");
        }
}

// Fonction Reset en fin de partie
function endGame() {
    // Remise à 0 des valeurs
    globalPlayer1.innerHTML = 0;
    globalPlayer2.innerHTML = 0;
    currentPlayer1.innerHTML = 0;
    currentPlayer2.innerHTML = 0;
    //  Réinitialisation de l'affichage du dé
    if(document.querySelector("#score > img")){
        score.removeChild(document.querySelector("#score > img"));
    }    
    // Position du sélecteur
    selecteurP1.removeAttribute("class");
    selecteurP1.setAttribute("class","show");
    selecteurP2.removeAttribute("class");
    selecteurP2.setAttribute("class", "hide");
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
    } else if ( player1 === "hide" && player2 === "show") {
        selecteurP1.removeAttribute("class");
        selecteurP1.setAttribute("class","show");
        selecteurP2.removeAttribute("class");
        selecteurP2.setAttribute("class", "hide");
    }
    
}

// Function test si le score est supérieur ou égale à 100 
function testTotal() {
    if((Number(globalPlayer1.textContent) + Number(currentPlayer1.textContent)) >= 10){
        winner = document.getElementById("Player1");
        alert(winner.textContent + "a gagné la partie !")
        endGame();
    } else if ((Number(globalPlayer2.textContent) + Number(currentPlayer2.textContent)) >= 10){
        winner = document.getElementById("Player2");
        alert(winner.textContent + "a gagné la partie !")
        endGame();
    }
}


function scoreActualisation () {
    var x = document.createElement("IMG");
    var roll = Math.floor(Math.random()*6)+1;

    x.setAttribute("src","./images/Dice-"+roll+".png");
    score.appendChild(x);
    if(selecteurP1.classList.contains("show") && selecteurP2.classList.contains("hide") == true){
        currentPlayer1.textContent = Number(currentPlayer1.textContent) + roll;
    } else if (selecteurP1.classList.contains("hide") && selecteurP2.classList.contains("show") == true){
        currentPlayer2.textContent = Number(currentPlayer2.textContent) + roll;
    }
}


//////////////////////////////////////////////////////////////////////////////

// New Game Parameter
let btnNewGame = document.querySelector("#ButtonNewGame");
btnNewGame.addEventListener("click", () => {newGame();})

//////////////////////////////////////////////////////////////////////////////

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
let btnHold = document.querySelector("#ButtonHold");

btnHold.addEventListener("click", () => {
    if(selecteurP1.classList.contains("show") && selecteurP2.classList.contains("hide") == true){
        globalPlayer1.textContent = Number(currentPlayer1.textContent) + Number(globalPlayer1.textContent);
        currentPlayer1.textContent = 0;
        selector();
        //  Réinitialisation de l'affichage du dé
        if(document.querySelector("#score > img")){
            score.removeChild(document.querySelector("#score > img"));
        } 
    } else if (selecteurP1.classList.contains("hide") && selecteurP2.classList.contains("show") == true){
        globalPlayer2.textContent = Number(currentPlayer2.textContent) + Number(globalPlayer2.textContent);
        currentPlayer2.textContent = 0;
        selector();
        //  Réinitialisation de l'affichage du dé
        if(document.querySelector("#score > img")){
            score.removeChild(document.querySelector("#score > img"));
        }  
    }
    testTotal();
    
})

//////////////////////////////////////////////////////////////////////////////