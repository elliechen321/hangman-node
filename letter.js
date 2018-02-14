var Letters = function(letter){
    //a string value that stores the letters in the word 
    this.letter = letter;
    //letterGuessed is a boolean has default of False and turns to true if the letter has been guessed correctly
    this.display = false;
    //this function update letterGuessed to true if the argument equals the underlying character
    this.checkLetter = function(){
        if (this.letter == ""){
            this.display = true;
        }
    };
};
Letters.prototype.print = function(){
    if(this.display){
        return this.letter;
    }
    return "_ ";
}
exports.Letters = Letters;