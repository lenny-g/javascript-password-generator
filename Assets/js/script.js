// Assignment Code
var generateBtn = document.querySelector("#generate");
// array for uppercase,lowercase,special characters and numbers.
const numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialArray = [
  "!",
  "£",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "?",
  "@",
  "#",
  "~",
  "|",
  "/",
  ".",
  ",",
  "<",
  ">",
  "'",
  ":",
  " ",
  ";",
  "`",
  "¬",
];
const lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const upperCase = lowerCaseArray.join("").toUpperCase();
const upperCaseArray = upperCase.split("");

// const arrayArray = [[lowerCaseArray], [upperCaseArray], [specialArray], [numArray]];

const getCriteria = function () {
  const x = prompt("Choose Password length", "0");
  const passwordLength = parseInt(x, 10);
  if (Number.isNaN(passwordLength)) {
    alert("Please enter a valid numerical value");
  }
  // if input is between the lengths of 8-128

  if (passwordLength > 128 || passwordLength < 8) {
    alert("Password must be between 8-128 characters");
  }
  const lowerCase = confirm("Would you like to use lowercase characters?");
  const upperCase = confirm("Would you like to use uppercase characters?");
  const specialChar = confirm("Would you like to use special characters?");
  const numChar = confirm("Would you like to use a number?");
  const attributes = {
    passwordLength: passwordLength,
    lowerCase: lowerCase,
    upperCase: upperCase,
    specialChar: specialChar,
    numChar: numChar,
  };
  return attributes;
};

console.log(getCriteria());

// need to ask for input to define the passwords length. (prompt)
// need to check if that input is valid (between 8 -128 characters long) if else: error message
// go through a series of checks (input required) prompt do you want uppercase/lowercase/special/numerical (Y/N)
// then get those requested arrays in a random password at their desired length. maths(floor).random

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // if getCriteria = function () {
//   const pwLength = Number(prompt("Choose Password length"));
//   if (isNaN(pwLength)) {
//     return "Not a valid number!";
//     if else (pwLength <= 8 && >= 128) {
//     return "Password must be between 8 - 128 characters long"
//     }
//     else {
//     return "you have chosen"
//       + pwLength;  }
//   }
// } {
// console.log(getCriteria);
