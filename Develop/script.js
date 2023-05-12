// Assignment Code
// Create arrays for all characters (caps, lower case, numbers, and symbols)
// Create index for different character list lengths
// Create prompts for individual options
// Write a for loop that iterates for the number amount that was entered
// Write the loop to be mindful of the selections True/False of the password requirements

var generateBtn = document.querySelector("#generate");
var alphaC = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerC = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "`", "{", "|", "}", "~"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var passwordLength = window.prompt("How many characters would you like to use? Between 8 - 128", 8);
var indexLetter = Math.floor(Math.random() * alphaC.length);
var indexSpecial = Math.floor(Math.random() * special.length);
var indexNumber = Math.floor(Math.random() * numbers.length);
var selector = Math.floor(Math.random() * 4);
var randomChar = [alphaC[indexLetter], lowerC[indexLetter], special[indexSpecial], numbers[indexNumber]];
var finalIndex = randomChar[selector];
var generateRan = finalIndex;
// Write password to the #password input
function writePassword() {
// console.log(finalIndex);

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function alphaChoice() {
  var alphaChoice = window.confirm("Would you like to use Upper Case letters?");
  console.log(alphaChoice);
  return;
}

function lowerChoice() {
  var lowerChoice = window.confirm("Would you like to use Lower Case letters?");
  console.log(lowerChoice);
  return;
}

function specialChoice() {
  var specialChoice = window.confirm("Would you like to use Special characters?");
  console.log(specialChoice);
  return;
}

function numberChoice() {
  var numberChoice = window.confirm("Would you like to use Numbers?");
  console.log(numberChoice)
  return;
}