// Revised submission 2022-02-13 following further extensive JS review and tutoring assistance 2022-01-29
// moves back to more common parsed-out var form, although const split method was previously functional
var alphaLc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var alphaUc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numeric = ['0','1','2','3','4','5','6','7','8','9'];
var specialChar = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','`','~','<','>','?'];
// arrays checked with console.log()

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
