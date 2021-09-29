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

// used a formula for uppercase array
const upperCase = lowerCaseArray.join("").toUpperCase();
const upperCaseArray = upperCase.split("");

// This gets the length and what the user decides to include in their password (lowercase/uppercase/special/num)
const getCriteria = function () {
  // prompt for user to decide the length of their password
  const x = prompt("Choose Password length");
  // convert the input from a string into an int
  const passwordLength = parseInt(x, 10);
  // if the string can not be converted into an int (this creates an error message)
  if (Number.isNaN(passwordLength)) {
    alert("Please enter a valid numerical value");
    return;
  }
  // if the length is not between 8 and 128 characters (this creates an error message)
  if (passwordLength > 128 || passwordLength < 8) {
    alert("Password must be between 8-128 characters");
    return;
  }
  // getting the boolean input for each attribute
  const lowerCase = confirm("Would you like to use lowercase characters?");
  const upperCase = confirm("Would you like to use uppercase characters?");
  const specialChar = confirm("Would you like to use special characters?");
  const numChar = confirm("Would you like to use a number?");
  // value and key properties of each attribute
  const attributes = {
    passwordLength: passwordLength,
    lowerCase: lowerCase,
    upperCase: upperCase,
    specialChar: specialChar,
    numChar: numChar,
  };
  return attributes;
};

const generatePassword = function () {
  const attributes = getCriteria();
  // creating an empty array for the attributes if selected
  const containerArray = [];
  // if user has received error message this quits the function
  if (!attributes) {
    return;
  }
  // if selected the attribute is added to the array
  if (attributes.lowerCase === true) {
    containerArray.push(...lowerCaseArray);
  }
  if (attributes.upperCase === true) {
    containerArray.push(...upperCaseArray);
  }
  if (attributes.specialChar === true) {
    containerArray.push(...specialArray);
  }
  if (attributes.numChar === true) {
    containerArray.push(...numArray);
  }
  // if the user has pick none of the above arrays there is an error message
  if (!containerArray.length) {
    alert("You need to choose at least one type of character");
    return;
  }

  //  empty array to fill with users chosen attributes
  const passwordArray = [];

  // this adds another random character to the array until it has reached the users passwords length
  for (let i = 0; i < attributes.passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * containerArray.length);
    const randomChar = containerArray[randomIndex];
    passwordArray.push(randomChar);
  }
  // this turns the array into a string
  const password = passwordArray.join("");
  // creates password
  return password;
};

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
