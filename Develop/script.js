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
  
var indexAletter = Math.floor(Math.random() * alphaC.length);
  
var indexLletter = Math.floor(Math.random() * lowerC.length);
  
var indexSpecial = Math.floor(Math.random() * special.length);
  
var indexNumber = Math.floor(Math.random() * numbers.length);
  
// var randomChar = [alphaC[indexAletter], lowerC[indexLletter], special[indexSpecial], numbers[indexNumber]];
  
// var selector = Math.floor(Math.random() * randomChar.length);
  
var run = function generateRes() {
   var finalIndex = randomChar[selector];
   return finalIndex;
}

// Write password to the #password input
function writePassword() {
    
    var alphaChoice = window.confirm("Would you like to use Upper Case letters?");
    console.log("Upper Case? " + alphaChoice);
    
    var lowerChoice = window.confirm("Would you like to use Lower Case letters?");
    console.log("Lower Case? " + lowerChoice);
    
    var specialChoice = window.confirm("Would you like to use Special characters?");
    console.log("Special Characters? " + specialChoice);
  
    var numberChoice = window.confirm("Would you like to use Numbers?");
    console.log("Numbers? " + numberChoice);
    
    var passwordLength = window.prompt("How many characters would you like to use? Between 8 - 128", 8);

    if (alphaChoice === true , lowerChoice === true , specialChoice === true , numberChoice === true) {
      
      for(var i = 0; i < passwordLength; i++){
       run += "";
       console.log("")
      }
    }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
