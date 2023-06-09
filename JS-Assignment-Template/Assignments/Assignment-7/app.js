
//Assignment 7: User Input & Conditional Statement

// task  / 01:

var city = prompt("Enter the city name: ")

if (city == "Karachi"){
    alert("Welcome to the city of lights!");
}
else {
    alert("Welcome!");
}

// task  /02:

var Gender = prompt("Please enter your gender...  (Male / Female)")

if (Gender == "Male") {
    alert("Good Morning Sir.");
    }
 
else  {
    alert("Good Morning Ma'am.");
}

// task  / 03:

var table = {
      red: "Must Stop",
      yellow: "Ready to move",
      green: "Move Now",
    };

    var colorInput = prompt("Enter the color of the traffic signal (red/yellow/green):");
    var color = colorInput.charAt(0).toUpperCase() + colorInput.slice(1);
    var message = table[colorInput.toLowerCase()] || "Invalid color entered.";

    document.getElementById("colorCell").textContent = color;
    document.getElementById("messageCell").textContent = message;

// task  / 04:

var remaining_fuel = prompt("Enter the remaining fuel in your car (in litres): ");

if (remaining_fuel < 0.25){

    alert("Please refill the fuel in your car");
}  

else {
    alert("you have enough fuel");
}

// task / 05:

var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}

if ("car" < "cat") {
  alert("car is smaller than cat");
}

// task / 06:

var subject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
var subject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
var subject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
var total_Marks = parseFloat(prompt("Enter total marks:"));
var ObtainedMarks = subject1 + subject2 + subject3;
var percentage = (ObtainedMarks / total_Marks) * 100;
var grade;
if (percentage >= 90) {
  grade = "A+";
} else if (percentage >= 80) {
  grade = "A";
} else if (percentage >= 50) {
  grade = "B";
} else if (percentage >= 70) {
  grade = "C";
} else if (percentage >= 60) {
  grade = "D";
} else {
  grade = "Fail";
}
document.write("<h3>Percentage: " + percentage.toFixed(2) + "%</h3>");
document.write("<h3>Grade: " + grade + "</h3>");

// task / 07:

secret_number = 5;
guess = +prompt("Guess the secret number (between 1 and 10): ")

if (guess == secret_number){
    alert("Bingo! Correct answer.");
}

  else if (guess == secret_number + 1 || guess == secret_number - 1)
  {
      alert("Close enough to the correct answer.");
    }
  
else {
    alert("Sorry wrong guess. The secret number was " + secret_number);
}

// task / 08:

var numb_divisible_by_3;
var number = +prompt("Enter a number ");
    if (number % 3 == 0){
        alert("The number " + number + " is divisible by 3.");
    }
    else{
        alert("The number " +  number + " is not divisible by 3.");
    }

// task / 09:

var check_numb_even_or_odd;
var number= +prompt("Enter a number");
if (number % 2 == 0) {
    alert(number + " is an even number");
}
else {
   alert(number + " is a odd number"); 
}

// task / 10:

var temperature = prompt("Enter the temperature: ");

if (temperature > 40){
    alert("It is too hot outside.");
}
else if (temperature > 30) {
    alert("The weather today is normal.");
}
else if (temperature > 20) {
    alert("Today's weather is cool.");
}
else if (temperature > 10) {
    alert("OMG! Today's weather is so cool.");
}
else{
    alert("It is very cold outside");
}

// task / 11 :

var a = +prompt("Enter the first number: ");
var b = +prompt("Enter the second number: ");
var operation = prompt("Enter the operation (+, -, *, /, %): ");

if (operation === "+") {
  result = a + b;
} else if (operation === "-") {
  result = a - b;
} else if (operation === "*") {
  result = a * b;
} else if (operation === "/") {
  if (b !== 0) {
    result = a / b;
  } else {
    result = "Error: Cannot divide by zero!";
  }
} else if (operation === "%") {
  result = a % b;
} else {
  result = "Error: Invalid operation!";
}
console.log("Result:", result);


