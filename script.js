// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  /* 1. Prompt password criteria
     2. Length 8-128
     3. Character types (upper, lower, numeric, symbol)
     4. Validate input includes selected parameter
     5. Generate password
     6. Display password on screen
      */
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()":
    var passwordLenght = 8;
    var password ="";

    for (var i=0, i <= passwordLenght; i++){
      var randomChars = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomChars, randomChars +1)
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
// 1. create password
// 2. loop for variables
// 3. take out unchecked
// 4. final password fill in
