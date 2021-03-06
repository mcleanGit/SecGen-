// Revised submission 2022-02-13 following further extensive JS review and tutoring assistance 2022-01-29
// moves back to more common parsed-out var form, although const split method was previously functional
var alphaLc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var alphaUc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numeric = ['0','1','2','3','4','5','6','7','8','9'];
var specialChar = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','`','~','<','>','?'];
// arrays checked with console.log()

// getUserInfo function builds through prompts to gather user-driven password criteria
function getUserInfo() {
  alert(
    "Welcome to the SecGen Password Generator. Please click OK  to begin selecting your password criteria.");
// gets user info on password length, null returns to welcome alert if choices do not meet criteria; added null return for not-a-number input  
  var length = parseInt(prompt("Please choose a password length between 8 and 128 characters."));
  if (Number.isNaN(length)) {
    alert("Please enter a number between 8 and 128.");
  return null;
  }
  if (length < 8 || length > 128) {
  alert("The number must be between 8 and 128 characters.");
  return null;
  }
 
// requests user confirms for various character options
var hasAlphaLc = confirm("Click OK if you wish to include lower-case characters, abc etc., in your password.");
var hasAlphaUc = confirm("Click OK if you wish to include upper-case characters, ABC etc., in your password.");
var hasNumeric = confirm("Click OK if you wish to include numerals 0-9 in your password.");
var hasSpecialChar = confirm("Click OK if you wish to include special characters, !@#$ etc., in your password.");

// special case of all four char sets false, returns null to welcome alert
  if (hasAlphaLc === false && 
    hasAlphaUc === false && 
    hasNumeric === false &&
    hasSpecialChar === false) {
    alert("You must choose at least one of the character sets.");
    return null;
  }
  // creates object to confirm and store user input
  var confirmUserInfo = {
    length: length,
    hasAlphaLc: hasAlphaLc,
    hasAlphaUc: hasAlphaUc,
    hasNumeric: hasNumeric,
    hasSpecialChar: hasSpecialChar,
  }
  return confirmUserInfo;
}

//randomization function uses array index and length to generate temporary element
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomEl = arr[randomIndex];
  return randomEl;
}

// generatePassword function
function generatePassword() {
  var options = getUserInfo();
// var to store password as it is being concatenated
  var result = [];
 
// ensures guaranteed number of characters, via push, from concatenating possible characters in user-chosen arrays
var possibleCharacters = [];
var guaranteedCharacters = [];
// array turned into string
 if (!options) return null;
 if (options.hasAlphaLc) {
   possibleCharacters = possibleCharacters.concat(alphaLc);
   guaranteedCharacters.push(getRandom(alphaLc));
 }
 if (options.hasAlphaUc) {
   possibleCharacters = possibleCharacters.concat(alphaUc);
   guaranteedCharacters.push(getRandom(alphaUc));
 }
 if (options.hasNumeric) {
   possibleCharacters = possibleCharacters.concat(numeric);
   guaranteedCharacters.push(getRandom(numeric));
 }
 if (options.hasSpecialChar) {
   possibleCharacters = possibleCharacters.concat(specialChar);
   guaranteedCharacters.push(getRandom(specialChar));
 }
//gets random characters for each option adjusting for user-selected length and joins results as string which becomes password
  for (let i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }
  for (let i = 0; i < guaranteedCharacters.length; i++) {
  result[i] = guaranteedCharacters[i];
  } 
  return result.join('');
}
// ends generatePassword function //

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
// button starts program: welcome alert, gets and confirms user info, ensures randomization, and password generation
generateBtn.addEventListener("click", writePassword);
