var inquirer = require("inquirer");
var wConstructor = require("./word.js");
var wordList = ["jeremy","james","john","joseph","jane"];
var chosenWord = "";
function randomWord() {
    chosenWord = wordList[Math.floor(Math.random())*wordList.length];
}
randomWord();
console.log(chosenWord);
var myWord = new wConstructor.wConstructor(chosenWord);
console.log(myWord);
var maxGuesses = 9;

function takeAGuess(){
	console.log(myWord.toString());
	if (myWord.letterGuessed.length >= maxGuesses){
		console.log('You have no more guesses.');
	return; //Game over
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Enter a letter:',
		validate: function(str){
//			if (str.length != 1) return false;
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
				}
		}]).then(function(letterInput){ //Game control
                var letter = letterInput.letter; 
                console.log(letter);
				myWord.findLetter(letter); //Check
					if(myWord.isComplete()){ 
					console.log('Yes! It was ' + myWord.toString() + '!');
					return; //Winner
					}
				console.log('-------------------\n'); //If we are here the game did not end. Next guess.
				console.log('You have ' + (maxGuesses - myWord.letterGuessed.length) + ' guesses left.')
				takeAGuess(); //Recursive call
				}
  );
}

takeAGuess(); //Start Game