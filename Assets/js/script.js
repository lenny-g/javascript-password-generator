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

arrayArray = [[lowerCaseArray], [upperCaseArray], [specialArray], [numArray]];

const getCriteria = function () {
  const x = prompt("Choose Password length", "0");
  if (x === Number) {
    console.log(isValid());
  } else {
    console.log("Please enter a valid numerical value");
  }

  const isValid = function () {
    const valid = pwLength;
    if ((valid) => 8) {
      console.log("poo");
    } else {
      console.log("Pee ");
    }
  };
};

console.log(getCriteria());

const getLowerCase = function () {
  const lowerCase = confirm("Would you like to use lowercase characters?");
  if (lowerCase === true) {
    console.log("YES");
  } else {
    console.log("NO");
  }
};

console.log(getLowerCase());

const getUpperCase = function () {
  const upperCase = confirm("Would you like to use uppercase characters?");
  if (upperCase === true) {
    console.log("YES");
  } else {
    console.log("NO");
  }
};

const getSpecial = function () {
  const specialChar = confirm("Would you like to use special characters?");
  if (specialChar === true) {
    console.log("YES");
  } else {
    console.log("NO");
  }
};

const getNum = function () {
  const numChar = confirm("Would you like to use a number?");
  if (numChar === true) {
    console.log("YES");
  } else {
    console.log("NO");
  }
};

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
