
// All the variables for this game 
	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	var wins = 0;
	var losses = 0;
	var guessesLeft = 10; 
	var guessesSoFar = [];
	var userGuess = "";
	var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)]
			



	// To start game press space bar 
	document.onkeyup = function(event) {
		if(event.keyCode === 32) {
		// Computer chooses a letter randomly
				console.log("Computer guess is: " + computerGuess);
				alert("Let's begin, guess what letter I'm thinking of");
		}

		//Do not change computer guess if any other key besides space bar is clicked 
			else if(event.keyCode != 32) {
		//User picks a letter 
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			console.log("User Guessed: " + userGuess);
			}

			// make sure the  letter isn't used more then once 
		if (guessesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0){

			// make an array of the user guesses
				guessesSoFar[guessesSoFar.length] = userGuess;

			// decrease the "guess left" by 1 ifs the user guess doesn't match the computer guess
				guessesLeft--;

				if (guessesLeft === 0){
					alert("Game Over, sorry you have no more guesses left. My letter was \"" + computerGuess.toUpperCase() + "\"");
				}

				// if the user guess is the same as computer guess than user wins. Wins increase by 1
			if (userGuess == computerGuess) {
				wins++;
				guessesLeft = 10;
				guessesSoFar = [];
				alert("Yes! My letter was \"" + computerGuess.toUpperCase() + "\" you guessed correctly!");
					console.log("letters match user wins" + wins)

				computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)]
			}
			// else if user letter does not match  guess left goes down by 1 
			if (guessesLeft==0) {
				losses++;
				guessesLeft = 10;
				guessesSoFar = [];
				alert("You lost!");

				computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)]
			}
		}	
		

		// This is all my HTML that gets updated once a key is pressed 
			var html = "<h1 div class='container'>The Psychic Game</h1>" + 
		"<p>Guess what letter I\'m thinking of!!!</p>" + 
		"<h1>Press Spacebar to start</h1>" +
		"<p class='blue'>Your Wins: " + wins + "</p>" + 
		"<p>Your Losses: " + losses + "</p>" + 
		"<p>Your Guesses Left: " + guessesLeft + "</p>" + 
		"<p>Your guesses so far: " +  guessesSoFar  + "</p>";
		// place html into the game ID
		document.querySelector("#game").innerHTML = html;

	}
	
// This is all my HTML when the page loads. 
// I know it isn't best practice to have code in twice but it wouldn't work if it wasn't in both location, inside and outside the function. 

	var html = "<h1 div class='container'>The Psychic Game</h1>" + 
	"<p>Guess what letter I\'m thinking of!!!</p>" + 
	"<h1>Press Spacebar to start</h1>" +
	"<p class='blue'>Your Wins: " + wins + "</p>" + 
	"<p>Your Losses: " + losses + "</p>" + 
	"<p>Your Guesses Left: " + guessesLeft + "</p>" + 
	"<p>Your guesses so far: " +  guessesSoFar  + "</p>";
	// place html into the game ID
	document.querySelector("#game").innerHTML = html;
//}


//  	