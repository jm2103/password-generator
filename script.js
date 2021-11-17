// Assignment code here

// defining the allowed variable
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+{}=";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// contains the generate password function that is under the writePassword function
function generatePassword() {
  var password = '';
  var allowed = '';

  // prompts the user to enter how many characters they want the password to have
  var pwdLength = window.prompt("Between 8 and 128, how many characters would you like your password to contain?")

  // checks if the length of the password is within 8 and 128 and if not, reminds them that is has to be in between 8 and 128
  while (pwdLength < 8 || pwdLength > 128 || isNaN(pwdLength) === true) {
    alert('Password must be a number and it must be between 8 and 128 characters.')
    pwdLength = window.prompt("Between 8 and 128, how many characters would you like your password to contain?")
  }
  console.log('passwords length', pwdLength)

  // prompts the user to select what type of characters they want the password to contain
  var hasUppercase = window.confirm('Would you like uppercase letters?')
  var hasLowercase = window.confirm('Would you like lowercase letters?')
  var hasNumbers = window.confirm('Would you like numbers?')
  var hasSymbols = window.confirm('Would you like symbols?')

  // checks if the user selected at least one and if not, displays an alert that prompts them to choose at least one
  while (!hasUppercase && !hasLowercase && !hasNumbers && !hasSymbols) {
    alert('You must choose at least one character type')
    hasUppercase = window.confirm('Would you like uppercase letters?')
    hasLowercase = window.confirm('Would you like lowercase letters?')
    hasNumbers = window.confirm('Would you like numbers?')
    hasSymbols = window.confirm('Would you like symbols?')
  }
  
  // if the user hits OK for any of the prompts, the allowed charcters would show up as part of the password
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
  
  // creating a random password in a for loop for the length of the users choice
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
