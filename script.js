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
    var passwordLength = 8;
    var ChoosenArr = [];

    var uppercaseLettersArr = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];
    var lowercaseLettersArr = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
    var numbersArr = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
    var specialCharactersArr = ["!","@","#","$","%","^","&","*"];


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getPrompt() {
  ChoosenArr = [];

  passwordLength = prompt("What is your password length preference? (8-128)");
  
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
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
generateBtn.addEventListener("click", writePassword);
// console.log = "Button Clicked!"
// 1. create password
// 2. loop for variables
// 3. take out unchecked
// 4. final password fill in