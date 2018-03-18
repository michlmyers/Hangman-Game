//CREATING GLOBAL VARIABLES 
var gameWords = ["romero", "brains", "walkingdead", "apocalypse", "undead"];//selection of words
var gameWord = "";//word that will be put into play
var lettersInWord = [];//empty array for letters in gameWord
var playWord = [];//will adjust based on randomly selected word
var blanksAndCorrect = [];//this will adjust spaces with correct user letter input
var wrongLetters = [];//this will be incorrect user guesses 
var userGuess ;//I'm hoping this captures the user key input

//CREATING GAME COUNTERS
var winsCount = 0;//win counter. Starts at zero
var guessesLeft = 10; //guesses remaining counter. 10 per word

//MAIN GAME FUNCTION**************************************************************************************
function startGame(){

//SETTING UP GAME FUNCTIONS
    gameWord = gameWords[Math.floor(Math.random() * gameWords.length)];//selecting a word from the array
    lettersInWord = gameWord.split("");//creating individual letter array
//display the blank spaces in the currentplay ID
    playWord = lettersInWord.length;//should set the number of blank spaces
        for (var i =0; i<playWord; i++){
            blanksAndCorrect.push("_  ");
        }

//COLLECT USER GUESSES
    window.onkeyup = function(){    
    var userGuess = event.key;//this reads whatever key the user presses
        for (var i =0; i<userGuess; i++){
        console.log(userGuess);
        }
 //   console.log(userGuess);    
    //if (lettersInWord.indexOf(userGuess) === true){
        //console.log;
      //  }   
    }  

//HTML UPDATES DURING GAMEPLAY
    window.onload = function(){
        document.getElementById("currentPlay").innerHTML = blanksAndCorrect.join("  ");
        document.getElementById("playerWins").innerHTML = winsCount;
        document.getElementById("guesses").innerHTML = guessesLeft;
        document.getElementById("lettersGuessed").innerHTML = wrongLetters;
    }
// NEW WORD RESET
guessesLeft= 10;// back to the original guesses left count
wrongLetters=[]; //clear for the new word
blanksandSuccesses=[];//clear blanks from prior word

//LOGGING AND DEBUGGING
console.log(gameWord);
console.log(lettersInWord); 
console.log(playWord);
console.log(blanksAndCorrect);    

}

//CALLING THE FUNCTION TO RUN THE GAME****************************************************************
startGame();


//BS BELOW

//this should list on page (idea from rps4)
//THIS WORKS  window.onload = function() {
//    document.querySelector("#currentPlay").innerHTML = playWord;
//}
//console.log(gameWord);
//can probably remove this console.log
/*  document.onkeyup = function (event) {
    console.log("#currentPlay");
  }
 */ 
/*FOR RIGHT NOW I NEED TO COMMENT THIS OUT
var remainingLetters = gameWord.length;

var userGuess = document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess);
}

for (var j=0; j<playWord.length; j++){
    if (playWord[j] === userGuess){
//        playWord[j] = userGuess;
        remainingLetters--;
        document.querySelector("#currentPlay").innerHTML = gameWord;
        console.log("#currentPlay");
    }
} */


/*EVERYTHING BELOW THIS LINE IS NOTES AND TESTING AND REFERENCE AND BS

not sure first line here is vital
var playGame = document.getElementById("gameGo");
page loads and a random word is selected when user presses a button

while (remainingLetters > 0) {
    alert(answerArray.join(" "));

     Get a guess from the player

    var guess = prompt("Guess a letter, or click Cancel to stop

playing.");
------------------------------------------------------------------------

first two lines take user guess and determine which key was pressed
document.onkeyup = function(event) {
    var userGuess = event.key;
        // Select the div with the id "game", and insert the following HTML into it.
        document.querySelector("#game").innerHTML = "You chose: " + userGuess + ". The computer chose: " + computerGuess;
      }

    };    



 With selected word the displayed blank values need to appear
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

document.onkeyup = function(event) {
    var userPress = event.key;
    return gameWords = 
    this.getElementById("game") 
}

     Function that updates the score...
function updateWins() {
    document.querySelector("#playerWins").innerHTML = "Wins " + winsCount;
    }

 don't know what, if anything, I'm doing with this.
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
  });

function chooseWord () {
    return gameWords[Math.floor(Math.random() * gameWords.length)];
}

 EVERTYHING BELOW IS EXPERIMENT
var myGame = document.getElementById ("game");
myGame.addEventListener (keypress);

function newGame () {
    addEventListener(keypress.chooseWord());
}

function chooseWord () {
    return gameWords[Math.floor(Math.random() * gameWords.length)];
}

document.getElementById("userGuess").addEventListener("keypress", letterGuess);

 using this as a reference 
function letterGuess() {
    document.getElementById("userGuess").style.backgroundColor = "red";
}

I turned blanksFromAnswer to wordblanks
function wordBlanks ( gameWords ) {
    var result = "";
    for ( i in gameWords ) {
        result = "_" + result;
    }    
    return result;
}
 not positive what I'm doing with this
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
         Replace the letter in shown with alterAt() and then store in shown.
         Use indexOf() again and store in checkLetter   
    }   
     Return our string, modified or not
    return shown;
}        

messages = {
    win: 'You win!',
    lose: 'Game over!',
    guessed: ' already guessed, please try again...',
    validLetter: 'Please enter a letter from A-Z'
};
*/