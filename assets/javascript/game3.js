//CREATING GLOBAL VARIABLES 
var gameWords = ["romero", "brains", "outbreak", "walkingdead", "apocalypse", "undead", "guts", "pus", 
"corpse", "resurrect", "reanimate", "gore", "gross", "contagion", "flesheater"];//selection of words
var gameWord = "";//word that will be put into play
var lettersInWord = [];//empty array for letters in gameWord
var blanksAndSuccesses = [];//this will adjust spaces with correct user letter input
var wrongLetters = [];//this will be incorrect user guesses 
var remainingLetters = 0;//I think my blanksAndSuccesses covers this ***CHECK IT OUT MIKE***

//CREATING GAME COUNTERS
var winsCount = 0;//win counter. Starts at zero
var guessesLeft = 10; //guesses remaining counter. 10 per word

//GAME AUDIO 
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'assets/audio/zombietune.wav');

//MAIN GAME FUNCTION**************************************************************************************
function resetGame() {

    //SETTING UP GAME FUNCTIONS
    gameWord = gameWords[Math.floor(Math.random() * gameWords.length)];//selecting a word from the array
    lettersInWord = gameWord.split("");//creating individual letter array

    // COUNTER RESETS
    guessesLeft = 10;// back to the original guesses left count
    wrongLetters = []; //clear for the new word
    blanksAndSuccesses = [];//clear blanks from prior word              

    startGame();
}

function startGame() {

        audioElement.load();
        audioElement.play();        


    //SETTING UP GAME FUNCTIONS
    gameWord = gameWords[Math.floor(Math.random() * gameWords.length)];//selecting a word from the array
    lettersInWord = gameWord.split("");//creating individual letter array

    // COUNTER RESETS
    guessesLeft = 10;// back to the original guesses left count
    wrongLetters = []; //clear for the new word
    blanksAndSuccesses = [];//clear blanks from prior word

    //POPULATE BLANKS
    for (var i = 0; i < lettersInWord.length; i++) {
        blanksAndSuccesses.push("_ ");
        document.getElementById("currentPlay").innerHTML = blanksAndSuccesses;
    }

    //CREATE HTML
    document.getElementById("playerWins").innerHTML = winsCount;
    document.getElementById("guesses").innerHTML = guessesLeft;

    //LOGGING AND DEBUGGING
    console.log(gameWord);
    console.log(lettersInWord);
    console.log(blanksAndSuccesses);
}

function userGuesses(userKey) {
    //THIS PUSHES UPDATED BLANKSANDSUCCESSES TO HTML
    document.getElementById("currentPlay").innerHTML = blanksAndSuccesses.join(' ');
}

function winLose() {
    //Blank spaces fill and you win ****THIS IS NOT WORKING though function is being read
    console.log("I am being read", blanksAndSuccesses, lettersInWord);
    //Something off about the comparison of B&A to Gameword / letters in word
    if (blanksAndSuccesses.join() === lettersInWord.join()) {
        alert("You barely survived that one!");
        winsCount++;
        //Changes HTML
        document.getElementById("playerWins").innerHTML = winsCount;
        document.getElementById("lettersGuessed").innerText = "";
        //I want to change the pic and play audio. CSS change? ***COME BACK TO THIS MIKE***
        resetGame();
    }
    //Guesses left reach zero you lose ****THIS IS WORKING
    else if (guessesLeft === 0) {
        alert("Your brains have been eaten!!!");
        document.getElementById("lettersGuessed").innerText = "";
        //I want to change the pic and play audio. CSS change? ***COME BACK TO THIS MIKE***
        resetGame();
    }
}


//CALLING THE FUNCTION TO RUN THE GAME****************************************************************
startGame();

document.onkeypress = function (event) {

    audioElement.load();
    audioElement.play(); 

    var userKey = event.key.toLowerCase();
    if (event.keyCode < 97 || event.keyCode > 122) {
        alert('you must select a letter!');
    }
    else if (lettersInWord.indexOf(userKey) === -1) {
        wrongLetters.push(userKey);
        guessesLeft--;
        document.getElementById("guesses").innerHTML = guessesLeft;
        document.getElementById("lettersGuessed").innerHTML = wrongLetters;
        userGuesses(userKey);
        winLose();
    } else {
        for (var i = 0; i < lettersInWord.length; i++) {
            if (userKey === lettersInWord[i]) {
                blanksAndSuccesses.splice(i, 1, userKey);
                console.log('now you got a correct letter');
                userGuesses(userKey);
                winLose();
            }
        }
    }
}  