// Assignment Code
var generateBtn = document.querySelector("#generate");
var caps = ["QWERTYUIOPLKJHGFDSAZXCVBNM"];
var spChar = [" !#$%&'()*+,-./:;<=>?@[]^_`{|}~" + '"'];
var lower = ["qwertyuiopasdfghjklzxcvbnm"];
var num = ["1234567890"];

// Write password to the #password input
function writePassword() {
  var passLen = prompt(
    "How many characters would you like your password to be?",
    "Choose a number between 8 and 128"
  );
  // Use prompts to generate criteria and store answers in variables
  var lowerQ = prompt("Should your password include lowercase letters?", "Yes");

  var capsQ = prompt("Should your password include capital letters?", "Yes");

  var numQ = prompt("Should your password include numbers?", "Yes");

  var spCharQ = prompt(
    "Should your password include special characters?",
    "Yes"
  );

  var answers = [lowerQ, capsQ, numQ, spCharQ];

  //Creates criteria value and defines it as lowercase or empty
  for (i = 0; i < answers.length; i++) {
    if (["Yes", "Y", "y", "yes", "affirmative"].includes(answers[i])) {
      answers[i] = true;
      console.log(answers[i]);
    } else if (
      [
        "No",
        "N",
        "n",
        "no",
        "Negative Ghostrider, the pattern is full",
      ].includes(answers[i])
    ) {
      answers[i] = false;
      console.log(answers[i]);
    } else {
      console.log("Error: Please enter a valid yes/no answer.");
    }
  }

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
