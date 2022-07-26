// Assignment Code
  /* 
     1. define elements
     2. criteria (length, upper, lower, number, special)
     3. Length 8-128
     4. Prompt password criteria
     5. Validate input includes selected parameter
     5. Generate password
     4. final password fill in
     6. Display password on screen
      */
/*var createPassword = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#newPassword");

// Data
let passwordLength = "";
let uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*"];
let passwordValue = '';

/*let choosenArr = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  special: getRandomSpecialCharacter
}*/

/*function getUppercase() {
  return String.uppercaseLettersArr(math.floor(math.random() * 26))
}

function getLowercase() {
  return String.lowercaseLettersArr(math.floor(math.random() * 26))
}

function number() {
  return String.number(math.floor(math.random() * 10))
}

function getLowercase() {
  return String.specialCharactersArr(math.floor(math.random() * 10))
}

// Write password to the #password input
function writePassword() {
  var yesPrompt = getPrompt();

  if (yesPrompt) {
    var password = createPassword();
    var passwordText = document.querySelector("#password");
  }
}


  function getPrompt() {
    choosenArr = [];

    passwordLength = prompt("What is your password length preference? (8-128)");

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Password must be a number, 8-128");
      return false;
    }
    if (confirm("Would you like uppercase letters?")) {
      ChoosenArr = ChoosenArr.concat(uppercaseLettersArr);
    }
    if (confirm("Would you like lowercase letters?")) {
      ChoosenArr = ChoosenArr.concat(lowercaseLettersArr);
    }
    if (confirm("Would you like numbers?")) {
      ChoosenArr = ChoosenArr.concat(numbersArr);
    }
    if (confirm("Would you like special characters?")) {
      ChoosenArr = ChoosenArr.concat(specialCharactersArr);
    }
    return true;
  }


  // Add event listener to generate button
generateBtn.addEventListener('click', createPassword => {
  let characters = (uppercaseLetters + lowercaseLetters + numbers + specialCharacter);
  uppercaseLetters.checked ? (characters += uppercaseLetters) :"";
  lowercaseLetters.checked ? (characters += lowercaseLetters) :"";
  numbers.checked ? (characters += numbers):"";
  specialCharacter.checked ? (characters += specialCharacter) :"";
  passwordText.value = createPassword(length.value, characters);
});

function createPassword() {
  let passwordValue = '';

  for (let i = 0; i < passwordLength; i++) {
    var randomIndex = math.floor(math.random() + ChoosenArr.length);
    password += choosenArr.substring[randomIndex];
  }
  return password;
  createPassword.value = passwordValue;
}*/


// Assignment Code

/*   1. define elements
     2. criteria (length, upper, lower, number, special)
     3. Length 8-128
     4. Prompt password criteria
     5. Validate input includes selected parameter
     5. Generate password
     4. final password fill in
     6. Display password on screen*/


// Data
var passwordLength = "";
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*"];
var passwordValue = '';

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var passwordLength = document.querySelector("legnth");
var addUpper = document.querySelector("#upper");
var addLower = document.querySelector("#lower");
var addNumber = document.querySelector("#number");
var addSpecial = document.querySelector("#special")

function getPrompt() {
  choosenArr = [];

  passwordLength = prompt("What is your password length preference? (8-128)");

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password must be a number, 8-128");
    return false;
  }
  if (confirm("Would you like uppercase letters?")) {
    ChoosenArr = ChoosenArr.concat(uppercaseLettersArr);
  }
  if (confirm("Would you like lowercase letters?")) {
    ChoosenArr = ChoosenArr.concat(lowercaseLettersArr);
  }
  if (confirm("Would you like numbers?")) {
    ChoosenArr = ChoosenArr.concat(numbersArr);
  }
  if (confirm("Would you like special characters?")) {
    ChoosenArr = ChoosenArr.concat(specialCharactersArr);
  }
  return true;
}

// Add event listener to generate button 
/* Felicia leave it alone, the button click works */
generateBtn.addEventListener("click", generatePassword);
function generatePassword() {
document.querySelector("#password").innerHTML = "Password Generated"
}



// Write password to the #password input
function writePassword() {
  var password = writePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



