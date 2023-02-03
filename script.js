// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions () {  
  var a = prompt("How many characters would you like in your password?", "               ");  
  console.log(a);
  console.log(typeof a);

  if (a.length < 10 && a.length >= 64) {
    document.getElementById("password").innerHTML = "Valid Password";  
  } else { 
    document.getElementById("password").innerHTML = "Invalid Password";
  } 

  // variables to gather lower and uppercase options from the USER
  var lower = confirm("Would you like to use LOWERCASE characters in your password?");
  // console.log(lower);
  var upper = confirm("Would you like to use UPPERCASE characters in your password?");
  console.log(lower, upper);

  // if condition to validate the USER INPUT

  if(lower == false && upper == false) {
    alert("YOU must choose at least one character type");
    return;
  } else {
    console.log("Continue with code ...");
  }

  // variable to get numeric option from the USER
  var numeric = confirm("Would you like to use NUMERIC characters in your password?");
  console.log(numeric);

  // if condition to validate the USER INPUT

  if(numeric == false) {
    alert("YOU must choose at least one numeric character");
    return;
  } else {
    console.log("Continue with code ...");
  }

  // variable to get special character option from the USER
  var special = confirm("Would you like to use special characters in your password?");
  console.log(special);

  // if condition to validate the USER INPUT

  if(special == false) {
    alert("YOU must choose at least one special character");
    return;
  } else {
    console.log("Continue with code ...");
  }

}

// function fto get a random element from an array
function getRandom(arr) {
  Math.floor((Math.random() * arr.length - 1));

}

// Function to generate password with user input
function generatePassword() {
  // empty dataset variable to act as a PLACEHOLDER
  var randomPassword = "";  
  var availableCaharacters = [];

  var passwordInput = prompt("Type your password", "               ");  
  console.log(passwordInput);
  console.log(typeof passwordInput);

  if (passwordInput.length < 10 && passwordInput.length >= 64) {
    document.getElementById("password").innerHTML = "Valid Password";  
  } else { 
    document.getElementById("password").innerHTML = "Invalid Password";
    alert("Password length must be greater than 10 and less than 64 characters");
    return "Invalid Password";
  } 

  // if conditions to add randomly selected data to the placeholder variable
  if(lower == true) {
   document.getRandom(lowerCasedCharacters).append("password");
  }
   
  if(upper == true) {
    document.getRandom(upperCasedCharacters).append("password");
   }

   if(numeric == true) {
    document.getRandom(numericCharacters).append("password");
   }

   if(special == true) {
    document.getRandom(specialCharacters).append("password");
   }
   
  //  if (special == false && numeric == false && upper == false && lower == false) {   
  //  }

  // while method to collect chracters for the password looping through the availableCharacterSet until there are enough characters in the password 
  while(randomPassword.length == a);
  
  return randomPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
