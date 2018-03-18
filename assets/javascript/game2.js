//ALTERNATE ATTEMPT BUILDING THE JAVASCRIPT CODE
//CREATING GLOBAL VARIABLES 
var gameWords = ["romero", "brains", "walkingdead", "apocalypse", "undead", "guts"];//selection of words
var gameWord = "";//word that will be put into play
var lettersInWord = [];//empty array for letters in gameWord
var playWord = [];//will adjust based on randomly selected word
var blanksAndSuccesses = [];//this will adjust spaces with correct user letter input
var wrongLetters = [];//this will be incorrect user guesses 
var remainingLetters = 0;//I think my blanksAndSuccesses covers this ***CHECK IT OUT MIKE***

//CREATING GAME COUNTERS
var winsCount = 0;//win counter. Starts at zero
var guessesLeft = 10; //guesses remaining counter. 10 per word

//GAME AUDIO IF I GET THERE
//var gameSound = new Audio('assets/audio/gameaudio.wav');
//var winSound = 
//var loseSound = 

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
    console.log("FUNCTION WORKKING");
    //USER KEY SHOULD BE COMPARED TO THE GAMEWORD
        if(gameWord.indexOf(userKey) > -1) //If user key exists in the gameword
        {
            for(var i = 0; i< playWord; i++) //Loop on number of blank spaces
            {
                if(lettersInWord[i] === userKey)//This should populate the blanks and guesses letters
                {
                    document.getElementById("currentPlay").innerHTML = blanksAndSuccesses.join(' ');
                }
            }
            //Test and Debug
            console.log(blanksAndSuccesses);
        }
        //Wrong keys
        else
        {
            wrongLetters.push(userKey);
            guessesLeft--;
            //Changes HTML
			document.getElementById("guesses").innerHTML = guessesLeft;
            document.getElementById("lettersGuessed").innerHTML = wrongLetters;
            //Test and Debug
			console.log("Wrong Letters are " + wrongLetters);
			console.log("Guesses left are " + guessesLeft);
        } 
}

function winLose(){
        //Blank spaces fill and you win
        if( blanksAndSuccesses === playWord){
            winsCount++;
            //Changes HTML
            document.getElementById("playerWins").innerHTML = winsCount;
            //I want to change the pic and play audio. CSS change? ***COME BACK TO THIS MIKE***
            resetGame();
        }    
        //Guesses left reach zero you lose
        else if(guessesLeft === 0){
            alert("Your brains have been eaten!!!");
            //I want to change the pic and play audio. CSS change? ***COME BACK TO THIS MIKE***
            resetGame();
        }           
}


//CALLING THE FUNCTION TO RUN THE GAME****************************************************************
startGame();

/* window.addEventListener('keyup', function(e){
    var userKey = event.key;
    for (var i=0; i<lettersInWord.length; i++)
    {
        if(userKey === lettersInWord)
        {   
            //Test and debug
            console.log(blanksAndSuccesses);

            userGuesses();
            winLose();
        }         
    } 
},true);//SOMETHING NOT READING PROPERLY HERE****** FIX ME ***!!!!!!!!!!!!!!!
*/
window.onkeyup = function(e){

    var userKey = event.key;
    for (var i=0; i<lettersInWord.length; i++)
    {
        if(userKey === lettersInWord)
        {   
            //Test and debug
            console.log(blanksAndSuccesses);

        //    gameSound.play();
            userGuesses();
            winLose();
        }         
    } 
}    
