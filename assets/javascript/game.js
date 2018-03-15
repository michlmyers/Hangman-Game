var gameWords = ["romero", "brains", "walkingdead", "apocalypse", "undead"];
var winsCount = 0 ;//win counter
var guessesLeft = 0 ; //guesses remaining counte

//not sure first line here is vital
//var playGame = document.getElementById("gameGo");
//page loads and a random word is selected when user presses a button
var gameWord = gameWords[Math.floor(Math.random() * gameWords.length)];
//sets up the blanks
var playWord = [];
for (var i=0; i<gameWord.length; i++){
    playWord[i] = "_ ";
}
//this should list on page (idea from rps4)
window.onload = function() {
    document.querySelector("#currentPlay").innerHTML = playWord;
}
//console.log(gameWord);
//can probably remove this console.log
document.onkeyup = function (event) {
    console.log("#currentPlay");
  }
var remainingLetters = gameWord.length;

//while (remainingLetters > 0) {
//    alert(answerArray.join(" "));

    // Get a guess from the player

  /*  var guess = prompt("Guess a letter, or click Cancel to stop

playing.");
//------------------------------------------------------------------------

/* first two lines take user guess and determine which key was pressed
document.onkeyup = function(event) {
    var userGuess = event.key;
        // Select the div with the id "game", and insert the following HTML into it.
        document.querySelector("#game").innerHTML = "You chose: " + userGuess + ". The computer chose: " + computerGuess;
      }

    };    



/* With selected word the displayed blank values need to appear
Pseudo code 
while word is in play { 
    show progress
    receive user guesses
}
else {
    player guess is in word {
        update progres
    }
}

log.win / lose

/*
document.onkeyup = function(event) {
    var userPress = event.key;
    return gameWords = 
    this.getElementById("game") 
}

      // Function that updates the score...
function updateWins() {
    document.querySelector("#playerWins").innerHTML = "Wins " + winsCount;
    }

/* don't know what, if anything, I'm doing with this.
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
  });
*/
/*
function chooseWord () {
    return gameWords[Math.floor(Math.random() * gameWords.length)];
}
*/

/* EVERTYHING BELOW IS EXPERIMENT
var myGame = document.getElementById ("game");
myGame.addEventListener (keypress);

function newGame () {
    addEventListener(keypress.chooseWord());
}

function chooseWord () {
    return gameWords[Math.floor(Math.random() * gameWords.length)];
}

document.getElementById("userGuess").addEventListener("keypress", letterGuess);

/* using this as a reference 
function letterGuess() {
    document.getElementById("userGuess").style.backgroundColor = "red";
}*/

//I turned blanksFromAnswer to wordblanks
/*
function wordBlanks ( gameWords ) {
    var result = "";
    for ( i in gameWords ) {
        result = "_" + result;
    }    
    return result;
}
/* not positive what I'm doing with this
function alterAt ( n, c, originalString ) {
    return originalString.substr(0,n) + c + originalString
.substr(n+1,originalString.length);    
}

function guessLetter( letter, shown, answer ) {
    var checkLetter = -1;  // This variable will hold the indexOf()

    checkLetter = answer.indexOf(letter); // Single Argument Version starting at 0
    while ( checkLetter >= 0 ) {
        shown = alterAt( checkLetter, letter, shown );
        checkIndex = answer.indexOf(letter, checkLetter + 1);
        // Replace the letter in shown with alterAt() and then store in shown.
        // Use indexOf() again and store in checkLetter   
    }   
    // Return our string, modified or not
    return shown;
}        

/*
messages = {
    win: 'You win!',
    lose: 'Game over!',
    guessed: ' already guessed, please try again...',
    validLetter: 'Please enter a letter from A-Z'
};
*/