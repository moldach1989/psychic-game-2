// VARIABLES
// array of letters to choose from
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// array to hold guessed letters
var guessedLetters = [];

// variable to hold value of randomly assigned letter
var letterToGuess = null;

// variable to define total guesses
var totalGuesses = 9;
// countdown guesses left
var guessesLeft = 9;

// counters for wins and losses
var wins = 0;
var losses = 0;

// FUNCTIONS
// generate a random letter and assign it to variable letterToGuess
var updateLetterToGuess = function() {
	this.letterToGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
	console.log(this.letterToGuess);
};
updateLetterToGuess();

// set variable guessesLeft equal to it's HTML counterpart
var updateGuessesLeft = function() {
	document.querySelector("#guesses-left").innerHTML = guessesLeft;
	console.log(guessesLeft);
};
updateGuessesLeft();

var updateGuessesSoFar = function() {
      // Here we take the guesses the user has tried -- then display it as letters separated by commas.
      document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
    };
// display guesses player has tried
// var updateGuessesSoFar = function() {
// 	document.querySelector("guesses-so-far").innerHTML = guessedLetters.join(", ");
// 	console.log(guessedLetters);
// };
updateGuessesSoFar();

// reset function to start back at the beginning 
var reset = function() {
	totalGuesses = 9;
	guessesLeft = 9;
	guessedLetters = [];
	updateLetterToGuess();
	updateGuessesLeft();
	updateGuessesSoFar();
};

// load game when page opens
updateLetterToGuess();
updateGuessesLeft();

// onkeyup function to capture letters guessed and use it for game logic
document.onkeyup = function(event) {
	console.log(event);
	// decrement guesses
	guessesLeft--;

	// normalise chosen letter to lower case
	var letter = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(letter);

	// add guessed letter to guessedLetters array
	guessedLetters.push(letter);
	console.log(guessedLetters);

	// update guessesLeft and guessesSoFar
	updateGuessesLeft();
	updateGuessesSoFar();


	// check if the guessed letter is correct
	if (letter === letterToGuess) {

		// increment wins
		wins++;
        document.querySelector("#wins").innerHTML = wins;
        alert("you are a psychic!!");

		// reset the game to play again
		reset();
	}

	// when player runs out of guesses
	if (guessesLeft === 0) {

		// increment losses because we lost this time
		losses++;
        document.querySelector("#losses").innerHTML = losses;
        alert("you lose try to beat me again")

		// reset the game to play again
		reset();
	} 

};