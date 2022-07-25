// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  /* 
     1. define variables
     2. criteria (length, upper, lower, number, special)
     3. Length 8-128
     4. Prompt password criteria
     5. Validate input includes selected parameter
     5. Generate password
     4. final password fill in
     6. Display password on screen
      */
  var passwordLength = 8;
  var ChoosenArr = [];

  var uppercaseLetters = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];
  var lowercaseLetters = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*"];
}

let randomCharacter = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  special: getRandomSpecialCharacter
}

function getUppercase() {
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
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = goodPassword;
  }

  function getPrompt() {
    ChoosenArr = [];

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

  function generatePassword() {
    for (var i = 0; i, passwordLength; i++) {
      var randomIndex = math.floor(math.random() + ChoosenArr.length);
      password = password + ChoosenArr[randomIndex];
    }
    return password
  }

  // Add event listener to generate button
  btn.addEventListener("click", writePassword) {
    const length = +passwordLength.value
    const hasUpper = uppercaseLetters;
    const hasLower = lowercaseLetters;
    const hasNumber = number;
    const hasSpecial = specialCharacter;

    resultPassword.innerText = generatePassword(
      hasUpper,
      hasLower,
      hasNumber,
      hasSpecial,
      length
    );
  } 