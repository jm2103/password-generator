// Assignment code here

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+{}=";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = '';
  var allowed = '';

  var pwdLength = window.prompt("Between 8 and 128 how man characters would you like your password to contain?")

  while (pwdLength < 8 || pwdLength > 128 || isNaN(pwdLength) === true) {
    alert('Password must be a number and it must be between 8 and 128')
    pwdLength = window.prompt("Between 8 and 128 how man characters would you like your password to contain?")
  }
  console.log('passwords length', pwdLength)

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
