
//Assignment 12:  MATH MATHODS

// task / 01:

var num = +prompt("Enter a positive integer:");

if (isNaN(num) || num <= 0) {
  document.write("Invalid input! Please enter a positive integer.");
  } 
  else {
  document.write("Entered Number: " + num + "<br>");
  document.write("Rounded-off Value: " + Math.round(num) + "<br>");
  document.write("Floor Value: " + Math.floor(num) + "<br>");
  document.write("Ceil Value: " + Math.ceil(num) + "<br>");
}

// task / 02:

var num = +prompt("Enter a negative floating-point number:");

  if (isNaN(num) || num >= 0) {
    document.write("Invalid input! Please enter a negative floating-point number.");
  } 
  else {
    document.write("Entered Number: " + num + "<br>");
    document.write("Rounded-off Value: " + Math.round(num) + "<br>");
    document.write("Floor Value: " + Math.floor(num) + "<br>");
    document.write("Ceil Value: " + Math.ceil(num) + "<br>");
  }

// task / 03:

var number = +prompt("Enter a number:");
var absoluteValue = Math.abs(number);
document.write("The absolute value of ", number, " is ", absoluteValue);

// task / 04:

var diceValue = Math.floor(Math.random() * 6) + 1;
document.write("Dice Value: " + diceValue);

// task / 05:

  var toss = +prompt("Perform a coin toss (enter 'toss' or 'flip'):");
  var coinValue = Math.random();
  var coinResult = coinValue < 0.5 ? "Heads" : "Tails";

  document.write("Coin Toss: " + toss + "<br>");
  document.write("Coin Value: " + coinResult);

 // task / 06:

var randomNumber = Math.floor(Math.random() * 100) + 1;
var resultString = "Random Number: " + randomNumber;
document.body.innerHTML = resultString;

// task / 07:

var weightInput = prompt("Enter your weight:");
var weightRegex = /(\d+(\.\d+)?)/; 
var weightMatch = weightInput.match(weightRegex);

if (weightMatch) {
   var weight = parseFloat(weightMatch[0]);
   document.write("The weight of User is " + weight + " kgs");
  } 
  else {
    document.write("Invalid input! Please enter a valid weight.");
  }

// task / 08:

var secret_Number = Math.floor(Math.random() * 10) + 1;
var user_input = +prompt("Enter a number between 1 and 10:");

if (user_input === secre_tNumber) {
    alert("Congratulations! You guessed the secret number!");
} else {
    alert("Sorry, that's not the secret number. The secret number was " + secret_Number);
}



