// Assignment Code
// Create arrays for all characters (caps, lower case, numbers, and symbols)
// Create index for different character list lengths
// Create prompts for individual options
// Write a for loop that iterates for the number amount that was entered
// Write the loop to be mindful of the selections True/False of the password requirements

var generateBtn = document.querySelector("#generate");

// The following 4 lines are are the list of different arrays based on character types

var alphaC = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerC = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "`", "{", "|", "}", "~"];
 
// omitted 0

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// establishing the function that is going to return the password as a result

function generatePassword() {
  
// the following 4 confirm windows ask the user the character types they would like to include, followed by the amount of characters

  var alphaChoice = window.confirm("Would you like to use Upper Case letters?");
  console.log("Upper Case? " + alphaChoice);
  
  var lowerChoice = window.confirm("Would you like to use Lower Case letters?");
  console.log("Lower Case? " + lowerChoice);
  
  var specialChoice = window.confirm("Would you like to use Special characters?");
  console.log("Special Characters? " + specialChoice);
  
  var numberChoice = window.confirm("Would you like to use Numbers?");
  console.log("Numbers? " + numberChoice);
  
  var passwordLength = window.prompt("How many characters would you like to use? Between 8 - 128.", 8);
  
// These variables contain criteria that the window.prompt question must contain in order for the function to run

  var minimum = passwordLength >= 8
  var maximum = passwordLength <= 128
  var criteriaStr = passwordLength !== String

// To ensure the variable is returned as a string after the generatePassword function runs

  var resultPassword = "";
  
// Checks to make sure that at least 1 of the prompts is true, if none are true it ends the function

  if (!alphaChoice && !lowerChoice && !specialChoice && !numberChoice){
    alert("Your password must contain at least 1 character type.");
    
    return "Please try again.";
  }

// Checks to see if the passwordLength criteria are met, if any of the 3 criteria returns false it ends the function

  else if (!minimum || !maximum || !criteriaStr) {
    alert("Your password must be a number between 8 - 128 characters.");
    return "Please try again.";
  }

  // The following else if statements from here are the 15 possible combinations that are possible for the True/False values with the 4 window.confirm questions (not including the all False option, since it would not return a result)
  // They are as follows: [TTTT, TTTF, TTFT, TFTT, FTTT, TTFF, TFTF, FTTF, FTFT, FFTT, TFFT, TFFF, FFFT, FFTF, FTFF]

  else if (alphaChoice && lowerChoice && specialChoice && numberChoice) {
    
    function generateRes() {

// Established inside the function are the random numbers generated for each array for each character type. The "index..." variables randomizes a different number based on the list length of each array type

      var indexAletter = Math.floor(Math.random() * alphaC.length);
      
      var indexLletter = Math.floor(Math.random() * lowerC.length);
        
      var indexSpecial = Math.floor(Math.random() * special.length);
        
      var indexNumber = Math.floor(Math.random() * numbers.length);
        
// The randomChar variable nests all 4 array character types and randomizes which character type is picked from all 4 lists. When an array is picked, the index variable picks a random character from the selected array
// Grouping the 4 arrays into one array allows for an equal percentage for any of the character list to be chosen

      var randomChar = [alphaC[indexAletter], lowerC[indexLletter], special[indexSpecial], numbers[indexNumber]];

// The selector variable picks from 0-3 to pick a random character type array

      var selector = Math.floor(Math.random() * randomChar.length);
      
// The finalIndex variable nests the previous variables into 1 variable that can return 1 random character of any type

      var finalIndex = randomChar[selector];
      
// return to ensure that the value is returned at the end of the function.

      return finalIndex;
    }
    
// The for loop to iterate the function based on the passwordLength entered by the user. Further logging and concantenating the result, return to ensure the password value is retrieved after the function iteration ends.

    for(var i = 0; i < passwordLength; i++){
     var ranPass = generateRes();
     console.log(resultPassword += ranPass);
    }
    return resultPassword;
  }

// The remaining else if statements encompass the different True/False value combinations that are possible, each statement re-defines the randomChar array to ensure that any specific character type is omitted, based on user choice

  else if (alphaChoice && lowerChoice && specialChoice && !numberChoice){

// This else if statement omits the number array and re-defines the variables as such. 

    function generateRes() {
      var indexAletter = Math.floor(Math.random() * alphaC.length);
      
      var indexLletter = Math.floor(Math.random() * lowerC.length);
        
      var indexSpecial = Math.floor(Math.random() * special.length);
        
      var randomChar = [alphaC[indexAletter], lowerC[indexLletter], special[indexSpecial]];
        
      var selector = Math.floor(Math.random() * randomChar.length);
        
      var finalIndex = randomChar[selector];
      
      return finalIndex;
    }
    for(var i = 0; i < passwordLength; i++){
      var ranPass = generateRes();
      console.log(resultPassword += ranPass);
     }
    return resultPassword;
  }

  else if (alphaChoice && lowerChoice && !specialChoice && numberChoice){

// Omits the special characters

    function generateRes() {
      var indexAletter = Math.floor(Math.random() * alphaC.length);
      
      var indexLletter = Math.floor(Math.random() * lowerC.length);
        
      var indexNumber = Math.floor(Math.random() * numbers.length);
        
      var randomChar = [alphaC[indexAletter], lowerC[indexLletter], numbers[indexNumber]];
        
      var selector = Math.floor(Math.random() * randomChar.length);
        
      var finalIndex = randomChar[selector];
      
      return finalIndex;
    }
    for(var i = 0; i < passwordLength; i++){
      var ranPass = generateRes();
      console.log(resultPassword += ranPass);
     }
    return resultPassword;
  }

  else if (alphaChoice && !lowerChoice && specialChoice && numberChoice) {
    
// Omits the lower case characters


      function generateRes() {
        var indexAletter = Math.floor(Math.random() * alphaC.length);
                
        var indexSpecial = Math.floor(Math.random() * special.length);
          
        var indexNumber = Math.floor(Math.random() * numbers.length);
          
        var randomChar = [alphaC[indexAletter], special[indexSpecial], numbers[indexNumber]];
          
        var selector = Math.floor(Math.random() * randomChar.length);
          
        var finalIndex = randomChar[selector];
        
        return finalIndex;
      }
      for(var i = 0; i < passwordLength; i++){
      var ranPass = generateRes();
      console.log(resultPassword += ranPass);
     }
    return resultPassword;
  }

  else if (!alphaChoice && lowerChoice && specialChoice && numberChoice) {
    
// Omits the upper case characters


    function generateRes() {
      var indexLletter = Math.floor(Math.random() * lowerC.length);
        
      var indexSpecial = Math.floor(Math.random() * special.length);
        
      var indexNumber = Math.floor(Math.random() * numbers.length);
        
      var randomChar = [lowerC[indexLletter], special[indexSpecial], numbers[indexNumber]];
        
      var selector = Math.floor(Math.random() * randomChar.length);
        
      var finalIndex = randomChar[selector];
      
      return finalIndex;
    }
    
    for(var i = 0; i < passwordLength; i++){
     var ranPass = generateRes();
     console.log(resultPassword += ranPass);
    }
    return resultPassword;
  }

  else if (alphaChoice && lowerChoice && !specialChoice && !numberChoice) {
    
// Omits the special and number characters


    function generateRes() {
      var indexAletter = Math.floor(Math.random() * alphaC.length);
      
      var indexLletter = Math.floor(Math.random() * lowerC.length);
        
      var randomChar = [alphaC[indexAletter], lowerC[indexLletter]];
        
      var selector = Math.floor(Math.random() * randomChar.length);
        
      var finalIndex = randomChar[selector];
      
      return finalIndex;
    }
    
    for(var i = 0; i < passwordLength; i++){
     var ranPass = generateRes();
     console.log(resultPassword += ranPass);
    }
    return resultPassword;
  }

  else if (alphaChoice && !lowerChoice && specialChoice && !numberChoice) {
    
// Omits the lower case and number characters


    function generateRes() {
      var indexAletter = Math.floor(Math.random() * alphaC.length);
    
      var indexSpecial = Math.floor(Math.random() * special.length);
        
      var randomChar = [alphaC[indexAletter], special[indexSpecial]];
        
      var selector = Math.floor(Math.random() * randomChar.length);
        
      var finalIndex = randomChar[selector];
      
      return finalIndex;
    }
    
    for(var i = 0; i < passwordLength; i++){
     var ranPass = generateRes();
     console.log(resultPassword += ranPass);
    }
    return resultPassword;
  }

  else if (!alphaChoice && lowerChoice && specialChoice && !numberChoice) {
    
// Omits the upper case and number characters


    function generateRes() {
      var indexLletter = Math.floor(Math.random() * lowerC.length);
        
      var indexSpecial = Math.floor(Math.random() * special.length);
        
      var randomChar = [lowerC[indexLletter], special[indexSpecial]];
        
      var selector = Math.floor(Math.random() * randomChar.length);
        
      var finalIndex = randomChar[selector];
      
      return finalIndex;
    }
    
    for(var i = 0; i < passwordLength; i++){
     var ranPass = generateRes();
     console.log(resultPassword += ranPass);
    }
    return resultPassword;
  }

  else if (!alphaChoice && lowerChoice && !specialChoice && numberChoice) {
    
// Omits the upper case and special characters


    function generateRes() {
      var indexLletter = Math.floor(Math.random() * lowerC.length);
        
      var indexNumber = Math.floor(Math.random() * numbers.length);
        
      var randomChar = [lowerC[indexLletter], numbers[indexNumber]];
        
      var selector = Math.floor(Math.random() * randomChar.length);
        
      var finalIndex = randomChar[selector];
      
      return finalIndex;
    }
    
    for(var i = 0; i < passwordLength; i++){
     var ranPass = generateRes();
     console.log(resultPassword += ranPass);
    }
    return resultPassword;
  }

  else if (!alphaChoice && !lowerChoice && specialChoice && numberChoice) {
   
// Omits the upper and lower case characters

 
    function generateRes() {
      var indexSpecial = Math.floor(Math.random() * special.length);
        
      var indexNumber = Math.floor(Math.random() * numbers.length);
        
      var randomChar = [special[indexSpecial], numbers[indexNumber]];
        
      var selector = Math.floor(Math.random() * randomChar.length);
        
      var finalIndex = randomChar[selector];
      
      return finalIndex;
    }
    
    for(var i = 0; i < passwordLength; i++){
     var ranPass = generateRes();
     console.log(resultPassword += ranPass);
    }
    return resultPassword;
  }
  
  else if (alphaChoice && !lowerChoice && !specialChoice && numberChoice) {
    
// Omits the lower case and special characters


    function generateRes() {
      var indexAletter = Math.floor(Math.random() * alphaC.length);

      var indexNumber = Math.floor(Math.random() * numbers.length);
        
      var randomChar = [alphaC[indexAletter], numbers[indexNumber]];
        
      var selector = Math.floor(Math.random() * randomChar.length);
        
      var finalIndex = randomChar[selector];
      
      return finalIndex;
    }
    
    for(var i = 0; i < passwordLength; i++){
     var ranPass = generateRes();
     console.log(resultPassword += ranPass);
    }
    return resultPassword;
  }

  else if (alphaChoice && !lowerChoice && !specialChoice && !numberChoice) {
    
// Omits the lower case, special, and number characters


    function generateRes() {
      var indexAletter = Math.floor(Math.random() * alphaC.length);
      
      var randomChar = [alphaC[indexAletter]];
      
      return randomChar;
    }
    
    for(var i = 0; i < passwordLength; i++){
     var ranPass = generateRes();
     console.log(resultPassword += ranPass);
    }
    return resultPassword;
  }

  else if (!alphaChoice && !lowerChoice && !specialChoice && numberChoice) {
    
// Omits the upper case, lower case, and special characters


    function generateRes() {
      var indexNumber = Math.floor(Math.random() * numbers.length);
        
      var randomChar = [numbers[indexNumber]];
      
      return randomChar;
    }
    
    for(var i = 0; i < passwordLength; i++){
     var ranPass = generateRes();
     console.log(resultPassword += ranPass);
    }
    return resultPassword;
  }

  else if (!alphaChoice && !lowerChoice && specialChoice && !numberChoice) {
    
// Omits the upper case, lower case, and number characters


    function generateRes() {
      var indexSpecial = Math.floor(Math.random() * special.length);
        
      var randomChar = [special[indexSpecial]];
      
      return randomChar;
    }
    
    for(var i = 0; i < passwordLength; i++){
     var ranPass = generateRes();
     console.log(resultPassword += ranPass);
    }
    return resultPassword;
  }

  else if (!alphaChoice && lowerChoice && !specialChoice && !numberChoice) {
    
// Omits the upper case, special, and number characters


    function generateRes() {
      var indexLletter = Math.floor(Math.random() * lowerC.length);

      var randomChar = [lowerC[indexLletter]];
      
      return randomChar;
    }
    
    for(var i = 0; i < passwordLength; i++){
     var ranPass = generateRes();
     console.log(resultPassword += ranPass);
    }
    return resultPassword;
  }

}
// Write password to the #password input
function writePassword() {
    

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
