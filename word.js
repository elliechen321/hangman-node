var lConstructor = require("./letter.js");

var Word = function (arrayOfWord){
    this.arrayOfWord = arrayOfWord;
    this.arrayOfLetters = [];
    this.letterGuessed = "";
    for (var i=0; i < this.arrayOfWord.length; i++){
        this.arrayOfLetters.push(new lConstructor.Letters(this.arrayOfWord[i]));
    }
};

Word.prototype.isComplete = function(){
	for(var i = 0; i < this.arrayOfLetters.length; i++){
		if(!this.arrayOfLetters[i].display) return false;
	}
	return true;
}

Word.prototype.findLetter = function(letter){
	var lowerLetter = letter;
	if (this.letterGuessed.indexOf(lowerLetter) != -1) {
		return "Duplicate";
	} 
	this.letterGuessed += lowerLetter; //Record the guess
	for(var i=0; i<this.arrayOfLetters.length;i++){
		if(this.arrayOfLetters[i].arrayOfWord === lowerLetter){
		this.arrayOfLetters[i].display = true;
		}
	}
};

Word.prototype.toString = function(){
  var output = "";
  for(var i=0; i<this.arrayOfLetters.length; i++){
    output += this.arrayOfLetters[i].print();
  }
  return output;
}

exports.wConstructor = Word;

