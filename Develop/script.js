// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var lowerArray = lower.split("");
  var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var capitalArray = capital.split("");
  var number = "1234567890";
  var numberArray = number.split("");
  var special = " ~!@#$%^&*()[]\{}|:;-+,./<>=?'_`";
  var specialArray = special.split("");

function generatePassword() {
var result = "";
var availableCharacters = "";

  var passLength = prompt("How long would you like your password to be?"); 
      if(passLength > 7 && passLength < 129) {
      alert("valid length accepted.");
    }
    else {
      alert("Please choose a length between 8 and 128.");
      prompt("How long would you like your password to be?");
    }
  
  var passNumber = confirm("Would you like your password to include numbers?"); 
    if(passNumber === true) {
      alert("password will contain numbers!")
      result+= number[Math.floor(Math.random() * 10) + 1];
      availableCharacters+= number;
    } else {
      alert("password will not contain numbers!")
    }
  var passLower = confirm("Would you like your password to include lower case letters?"); 
    if(passLower == true) {
      alert("password will contain lower case letters!")
      result+= lower[Math.floor(Math.random() * 10) + 1];
      availableCharacters+= lower;
    }
    else {
      alert("password will not contain lower case letters!")
    }
  
  var passCapital = confirm("Would you like your password to include capitalized letters?"); 
    if(passCapital == true) {
      alert("password will contain capitalized letters!")
      result+= capital[Math.floor(Math.random() * 10) + 1];
      availableCharacters+= capital;
    }
    else {
      alert("password will not contain capitalized letters!")
    }
  
  var passSpecial = confirm("Would you like your password to include special characters?"); 
    if(passSpecial == true) {
      alert("password will contain special characters!")
      result+= special[Math.floor(Math.random() * 10) + 1];
      availableCharacters+= special;
    }
    else {
      alert("password will not contain special characters!")
    }
  
return result;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generatePassword