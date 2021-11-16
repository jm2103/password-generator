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

  var hasUppercase = window.confirm('Would you like uppercase letters?')
  var hasLowercase = window.confirm('Would you like lowercase letters?')
  var hasNumbers = window.confirm('Would you like numbers?')
  var hasSymbols = window.confirm('Would you like symbols?')

  while (!hasUppercase && !hasLowercase && !hasNumbers && !hasSymbols) {
    alert('You must choose at least one character type')
    hasUppercase = window.confirm('Would you like uppercase letters?')
    hasLowercase = window.confirm('Would you like lowercase letters?')
    hasNumbers = window.confirm('Would you like numbers?')
    hasSymbols = window.confirm('Would you like symbols?')
  }
  
  if (hasUppercase) {
    allowed += uppercase;
  }
  
  if (hasLowercase) {
    allowed += lowercase;
  }
  
  if (hasNumbers) {
    allowed += numbers;
  }
  
  if (hasSymbols) {
    allowed += symbols;
  }
  
  console.log('allowed variable', allowed)
  
  for (var i = 0; i < pwdLength; i++) {
    password += allowed.charAt(Math.floor(Math.random() * allowed.length))
  }

  // passwordText.value = password;
  console.log(password)
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
