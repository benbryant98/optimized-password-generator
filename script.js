// Assignment Code
var generateBtn = document.querySelector("#generate");
var caps = ["QWERTYUIOPLKJHGFDSAZXCVBNM"];
var spChar = [" !#$%&'()*+,-./:;<=>?@[]^_`{|}~" + '"'];
var lower = ["qwertyuiopasdfghjklzxcvbnm"];
var num = ["1234567890"];
var validInput = [
  "Yes",
  "Y",
  "y",
  "yes",
  "affirmative",
  "No",
  "N",
  "n",
  "no",
  "Negative Ghostrider, the pattern is full",
];

// Write password to the #password input
function writePassword() {
  var passLen = prompt(
    "How many characters would you like your password to be?",
    "Choose a number between 8 and 128"
  );
  while (passLen < 8 || passLen > 128) {
    passLen = prompt(
      "How many characters would you like your password to be?",
      "Choose a number between 8 and 128"
    );
  }
  // Use prompts to generate criteria and store answers in variables
  var lowerQ = prompt("Should your password include lowercase letters?", "Yes");
  // Uses a while loop to force user to enter valid response
  while (lowerQ == null || !validInput.includes(lowerQ)) {
    lowerQ = prompt("Should your password include lowercase letters?", "Yes");
  }

  var capsQ = prompt("Should your password include capital letters?", "Yes");
  while (capsQ == null || !validInput.includes(capsQ)) {
    capsQ = prompt("Should your password include capital letters?", "Yes");
  }

  var numQ = prompt("Should your password include numbers?", "Yes");
  while (numQ == null || !validInput.includes(numQ)) {
    numQ = prompt("Should your password include numbers?", "Yes");
  }

  var spCharQ = prompt(
    "Should your password include special characters?",
    "Yes"
  );
  while (spCharQ == null || !validInput.includes(spCharQ)) {
    spCharQ = prompt("Should your password include special characters?", "Yes");
  }

  var answers = [lowerQ, capsQ, numQ, spCharQ];
  // Placeholder value for password criteria string
  var criteria = "";

  // Iterates through prompts adding criteria based on prompt responses
  for (i = 0; i < answers.length; i++) {
    if (["Yes", "Y", "y", "yes", "affirmative"].includes(answers[i])) {
      console.log(answers[i]);
      switch (i) {
        case 0:
          criteria += lower;
          break;
        case 1:
          criteria += caps;
          break;
        case 2:
          criteria += num;
          break;
        case 3:
          criteria += spChar;
      }
    } else if (
      [
        "No",
        "N",
        "n",
        "no",
        "Negative Ghostrider, the pattern is full",
      ].includes(answers[i])
    ) {
      console.log(answers[i]);
    } else {
      console.log("Error: Please enter a valid yes/no answer.");
    }
  }

  console.log("Possible characters: " + criteria);

  function generatePassword(passLen) {
    let result = "";
    for (i = 0; i < passLen; i++) {
      result += criteria.charAt(Math.floor(Math.random() * criteria.length));
    }

    return result;
  }
  var password = generatePassword(passLen);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
