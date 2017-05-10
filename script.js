//On the lines below define four variables secretWord, guesses, misses, and images
// Set secretWord equal to null
// Set correctGuesses equal to an empty array
// Set wrongGuesses equal to an empty array
// Set images to an array contataining all of your images links as strings (in order)
var secretWord = null;
var correctGuesses = [];
var wrongGuesses = [];
var image = ['images hangman-0.png','images hangman-1.png','images hangman-2.png','images hangman-3.png','images hangman-4.png','images hangman-5.png','images hangman-6.png', '', '', ''];


// in the prepareGame() function below
// set correctGuesses to an empty array
// set wrongGuesses to an empty array
// call the drawWord() function
// call the drawHangman() function
function prepareGame() {
  secretWord = ['J','A','V','A','S','C','R', 'I', 'P', 'T'];
  correctGuesses = [];
  wrongGuesses = [];
   drawWord();
  drawHangman();
}

// in this onWin() function below 
// 1. alert "You won!"
function onWin() {
  alert("You won!");
  
}

// in this onLose() function below 
// 1. alert "You lost!"
function onLose() {
 alert("You lost!");
  
  
}

// in this checkIfWon() function below
// 1. Declare a variable hasAll and set equal to true
// 2. For each letter in secretWord 
//    a. if correctGuesses does not include the letter (!) set variable hasAll to false
// 3. return hasAll
function checkIfWon() {  
  
  
  
}

// in this checkIfLost() function below
// 1. declare a variable misses and set it equal to the length of wrongGuesses array
// 2. if misses is less than 6 return false else return true
function checkIfLost() {
  var misses = wrongGuesses.length
  if (misses < 6) {
    return false 
} else {
    return true;
}

  
  
}

// in the onCorrectGuess() function below
// 1. add the letter variable to the array correctGuesses
// 2. call the drawWord function
// 3. if the checkIfWon() is returns true call the onWin() function 
function onCorrectGuess(letter) { 
   correctGuesses.push(letter);
    
  
  
  
  
}

// in the onWrongGuess() function below
// 1. add the the letter variable to the array wrongGuesses
// 2. call the drawHangman function
// 3. if the checkIfLost() function returns true call the onLose() function 
function onWrongGuess(letter) {
    
  
  
  
  
}

// in the judgeGuess function below
// 1. if the letter is included in secretWord, call the onCorrectGuess(letter) function
//    otherwise call onWrongGuess(letter) function
function judgeGuess(letter) {
  
  
  
  
  
}

// in the drawWord function below
// 1. empty the div tag with the id "word"
// 2. For each letter in secretWord 
//    if correctGuesses includes letter append the letter
//    othewise append and underscore
function drawWord() {
  
  
  
  
  
  
}

// in the drawHangman function below
// 1. define a variable misses equal to the length of wrongGuesses
// 2. change the src of the img tag with the id hangman 
//    to the correct image url based on the number of misses
function drawHangman() {
  
  
  
  
}

// in the onKeyDown function below
// 1. define a variable letter an set it equal to the correct letter
// 2. set letter equal to the upperCase of itself
// 3. call the judgeGuess function with letter as an argument

function onKeyDown(event) {
  
  
  
  
}

// Call the prepare game function
// Initialize a jQuery keydown event handler 
//       (Keydown function should take onKeyDown function as an argument)
$(document).ready(function() {
 
  
});
