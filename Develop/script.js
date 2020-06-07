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


var passLength = prompt("How long would you like your password to be?"); {
    if(passLength > 7 && passLength < 129) {
    alert("valid length accepted.")
  }
  else {
    alert("Please choose a length between 8 and 128.")
  }
}
var passNumber = confirm("Would you like your password to include numbers?"); {
  if(passNumber === true) {
    alert("password will contain numbers!")
  }
  else {
    alert("password will not contain numbers!")
  }
}

var passLower = confirm("Would you like your password to include lower case letters?"); {
  if(passLower == true) {
    alert("password will contain lower case letters!")
  }
  else {
    alert("password will not contain lower case letters!")
  }
}
var passCapital = confirm("Would you like your password to include capitalized letters?"); {
  if(passCapital == true) {
    alert("password will contain capitalized letters!")
  }
  else {
    alert("password will not contain capitalized letters!")
  }
}
var passSpecial = confirm("Would you like your password to include special characters?"); {
  if(passSpecial == true) {
    alert("password will contain special characters!")
  }
  else {
    alert("password will not contain special characters!")
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generatePassword();