//Assignment 8:  IF..ELSE AND ELSE IF STATEMENT, TESTING SET OF CONDITION

// task / 01:

var character = prompt("Enter a character:");
var asciiCode = character.charCodeAt(0);

if (asciiCode >= 48 && asciiCode <= 57) {
document.write("The input is a number.");
}
else if (asciiCode >= 65 && asciiCode <= 90) {
document.write("The input is an uppercase letter.");
}
else if (asciiCode >= 97 && asciiCode <= 122) {
document.write("The input is a lowercase letter.");
}
else {
document.write("The input is not a number or a letter.");
}

// task / 02:

var a = +prompt("Enter the first integer:");
var b = +prompt("Enter the second integer:");

if (a > b) {
  console.log(a + " is larger");
} else if (a < b) {
  console.log(b + " is larger");
} else {
  console.log("Both integers are equal");
}

// task / 03:

var number = +prompt("Enter a number:");

if (number > 0) {
  console.log("The number is positive");
} else if (number < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}

// task / 04:

var character = prompt("Enter a character:");

var lowercaseCharacter = character.toLowerCase()

var isVowel = lowercaseCharacter === "a" || lowercaseCharacter === "e" ||
              lowercaseCharacter === "i" || lowercaseCharacter === "o" ||
              lowercaseCharacter === "u";

console.log(isVowel);

// task / 05:

var correctPassword = "Eman_123";
var enteredPassword = prompt("Enter your password:");

if (enteredPassword === "") {
  console.log("Please enter your password");
} else if (enteredPassword === correctPassword) {
  console.log("Correct! The password you entered matches the original password");
} else {
  console.log("Incorrect password");
}

// task / 06:

var greeting;  // there was a missing closing curly brace (}) 
var hour = 13;
if (hour < 18) {
  console.log(greeting = "Good day");
} 
else {
  console.log(greeting = "Good evening");
}

//  task / 07:

var time = +prompt("Enter the time in 24-hour format (e.g., 1900):");

if (time >= 0 && time < 1200) {
  console.log("Good morning!");
} else if (time >= 1200 && time < 1700) {
  console.log("Good afternoon!");
} else if (time >= 1700 && time < 2000) {
  console.log("Good evening!");
} else if (time >= 2000 && time < 2400) {
  console.log("Good night!");
} else {
  console.log("Invalid time input!");
}



