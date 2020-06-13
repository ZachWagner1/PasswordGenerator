// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// arrays
var lower = "abcdefghijklmnopqrstuvwxyz";
// splitting the characters in the array
var lowerArray = lower.split("");
var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var capitalArray = capital.split("");
var number = "1234567890";
var numberArray = number.split("");
var special = " ~!@#$%^&*()[]\{}|:;-+,./<>=?'_`";
var specialArray = special.split("");

function generatePassword() {
  var options = getOptions();
  var result = [];
  var possibleChars = [];
  var guaranteedChars = [];

  if(options.special) {
    possibleChars = possibleChars.concat(specialArray);
    guaranteedChars.push(generateRandom(specialArray));
  }
  if(options.lower) {
    possibleChars = possibleChars.concat(lowerArray);
    guaranteedChars.push(generateRandom(lowerArray));
  }
  if(options.capital) {
    possibleChars = possibleChars.concat(capitalArray);
    guaranteedChars.push(generateRandom(capitalArray));
  }
  if(options.number) {
    possibleChars = possibleChars.concat(numberArray);
    guaranteedChars.push(generateRandom(numberArray));
  }
  for(var i = 0; i < options.length; i++) {
    var possibleCharacter = generateRandom(possibleChars);
    result.push(possibleCharacter);
  }
  
  ////mixing at least one 
  for(var i = 0; i < guaranteedChars.length; i++) {
    result[i] = guaranteedChars[i];

  }
  return result.join("");
}


function generateRandom(arr) {
    var range = Math.floor(Math.random() * arr.length);
    var randomEl = arr[range];
    return randomEl;
  }

  function getOptions() {
    var passLength = prompt("How long would you like your password to be?");
    if (passLength > 7 && passLength < 129) {
      alert("valid length accepted.");
          }
    // numbers
    var passNumber = confirm("Would you like your password to include numbers?");
    if (passNumber === true) {
      alert("password will contain numbers!")
          }
    // lower case letters
    var passLower = confirm("Would you like your password to include lower case letters?");
    if (passLower == true) {
      alert("password will contain lower case letters!")
          }
    // capitalized letters 
    var passCapital = confirm("Would you like your password to include capitalized letters?");
    if (passCapital == true) {
      alert("password will contain capitalized letters!")
          }
    // special characters  
    var passSpecial = confirm("Would you like your password to include special characters?");
    if (passSpecial == true) {
      alert("password will contain special characters!")
          }
    if (passNumber === false &&
      passLower === false &&
      passCapital === false &&
      passSpecial === false
    ) {
      alert("you must select at least one option")
    }
    var options = {
      length: passLength,
      special: passSpecial,
      lower: passLower,
      capital: passCapital,
      number: passNumber
    };
    return options;
  }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generatePassword
