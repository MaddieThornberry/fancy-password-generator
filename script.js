// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  /* 1. Prompt password criteria
     2. Criteria length 8-128
     3.character types (upper, lower, numeric, symbol) */
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// 1. create password
// 2. loop for variables
// 3. take out unchecked
// 4. final password fill in
