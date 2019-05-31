//Creates an array that lists all available keys
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//Creates variables for score tallies
var W = 0;
var L = 0;
var G = 10;
var lettersGuessed = [];

//This function is run when the user presses a key
document.onkeyup = function (event) {

    //determines user key input
    var userKey = event.key;

    //Randomly chooses a letter from the alphabet array
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice)

    //Logic
    if (userKey === computerChoice) {
        W+= 1;
        G = 10;
        lettersGuessed = [];
    } else {
        G--;
        lettersGuessed.push(" " + userKey);
    } 
    if (W == 5) {
        W = 0;
        G = 10; 
        L = 0;
        letersGuessed = [];
        alert("Flawless Victory!");
    }
    if (G == 0) {
        L++;
        G = 10;
        lettersGuessed = [];
    }
    if (L == 10) {
        W = 0;
        G = 10; 
        L = 0;
        letersGuessed = [];
        alert("Game Over!");
    }

    //Turn user display into variables
    document.getElementById("wins").innerHTML = W;
    document.getElementById("losses").innerHTML = L;
    document.getElementById("guesses").innerHTML = G;
    document.getElementById("guessed letter").innerHTML = lettersGuessed;
}





