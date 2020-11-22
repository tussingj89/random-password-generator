// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
// function list 
function generateRandomLower() {
  var lower = "abcdefghijklmnopqrstuvwxyz"

  return lower[Math.floor(Math.random() * lower.length)]

}
function generateRandomUpper() {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  return upper[Math.floor(Math.random() * upper.length)]

}
function generateRandomSpecial() {
  var special = "!@#$%^&*"

  return special[Math.floor(Math.random() * special.length)]

}
function GenerateRandomNumber() {
  var number = "0123456789"
 
  return number[Math.floor(Math.random() * number.length)]
}

// prompts
var lower1 = confirm("Do you want to use lowercase letters?");
var upper1 = confirm("Do you want to use upppercase letters?");
var special1 = confirm("Do you want to use special characters?");
var number1 = confirm("Do you want to use numbers?");
var length1 = prompt("How long would you like this password to be? must be between 8 and 128 characters.");


// array 

var conarr = [];

// if conditions 

if (lower1 === true) {
  conarr.push(generateRandomLower);
}
if (upper1 === true) {
  conarr.push(generateRandomUpper);
}
if (special1 === true) {
  conarr.push(generateRandomSpecial);
}
if (number1 === true) {
  conarr.push(GenerateRandomNumber);
}

if (lower1 === false && upper1 === false && special1 === false && number1 === false) { 
  alert("password must conatain atleast one option");
}
if (length1 < 8 || length > 128) {
  alert("length not between 8 and 128 characters");

}


// for loop 
var randpass = [];
for (var i = 0; i < length1; i++ ){
  var func = conarr[Math.floor(Math.random() * conarr.length)]
  randpass.push(func())

    var Final = randpass.join('');
    console.log(Final)

    document.getElementById("password").textContent = Final;
    return final;
}
}
