//ALTERNATE ATTEMPT BUILDING THE JAVASCRIPT CODE
//CREATING GLOBAL VARIABLES 
var gameWords = ["romero", "brains", "walkingdead", "apocalypse", "undead", "guts"];//selection of words
var gameWord = "";//word that will be put into play
var lettersInWord = [];//empty array for letters in gameWord
var playWord = [];//will adjust based on randomly selected word
var blanksAndSuccesses = [];//this will adjust spaces with correct user letter input
var wrongLetters = [];//this will be incorrect user guesses 
var remainingLetters = 0;

//CREATING GAME COUNTERS
var winsCount = 0;//win counter. Starts at zero
var guessesLeft = 10; //guesses remaining counter. 10 per word

//MAIN GAME FUNCTION**************************************************************************************
function resetGame(){

    //SETTING UP GAME FUNCTIONS
        gameWord = gameWords[Math.floor(Math.random() * gameWords.length)];//selecting a word from the array
        lettersInWord = gameWord.split("");//creating individual letter array
        playWord = lettersInWord.length;//should set the number of blank spaces

    // COUNTER RESETS
        guessesLeft= 10;// back to the original guesses left count
        wrongLetters=[]; //clear for the new word
        blanksAndSuccesses=[];//clear blanks from prior word              

        startGame();
} 

function startGame(){

    //SETTING UP GAME FUNCTIONS
        gameWord = gameWords[Math.floor(Math.random() * gameWords.length)];//selecting a word from the array
        lettersInWord = gameWord.split("");//creating individual letter array
        playWord = lettersInWord.length;//should set the number of blank spaces

    // COUNTER RESETS
        guessesLeft= 10;// back to the original guesses left count
        wrongLetters=[]; //clear for the new word
        blanksAndSuccesses=[];//clear blanks from prior word

    //POPULATE BLANKS
            for (var i =0; i<playWord; i++)
            {
                blanksAndSuccesses.push("_  ");
                document.getElementById("currentPlay").innerHTML = blanksAndSuccesses;
            }  
    
    //CREATE HTML
            document.getElementById("currentPlay").innerHTML = blanksAndSuccesses.join("  ");
            document.getElementById("playerWins").innerHTML = winsCount;
            document.getElementById("guesses").innerHTML = guessesLeft;
    
    //LOGGING AND DEBUGGING
            console.log(gameWord);
            console.log(lettersInWord); 
            console.log(playWord);
            console.log(blanksAndSuccesses);         
}            

function userGuesses(userKey){

}


//CALLING THE FUNCTION TO RUN THE GAME****************************************************************
startGame();


/*
document.onkeyup = function(event){
    var blanksAndSuccesses = event.key;
        for (var i=0;i<lettersInWord.length; i++)
            {
           //     if (blanksAndSuccesses === lettersInWord)
                   // {
              //          console.log(blanksAndSuccesses);
                   // }
            } */ 
