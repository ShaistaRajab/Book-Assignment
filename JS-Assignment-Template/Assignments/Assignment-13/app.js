//Assignment 13: DATE METHODS

// task / 01:

function displayDateTime() {
  var currentDate = new Date();
  var dateTimeString = "Current Date and Time: " + currentDate;
  document.body.innerHTML = "<h1>Current Date and Time</h1><p>" + dateTimeString + "</p>";
  }
 displayDateTime();

 // task / 02:

var months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];

var now = new Date();
var monthIndex = now.getMonth();
var currentMonth = months[monthIndex];
alert("Current month: " + currentMonth);

// task / 03:

var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var now = new Date();
var dayIndex = now.getDay();
var currentDay = days[dayIndex];
alert("Today is: " + currentDay);

// task / 04:

var now = new Date();
var dayIndex = now.getDay();

if (dayIndex === 0 || dayIndex === 6) {
  alert("It's Fun day");
} 
else {
  alert("It's not Fun day");
}

// task / 05:

var now = new Date();
var currentDate = now.getDate();

if (currentDate < 16) {
  alert("First fifteen days of the month");
} 
else {
  alert("Last days of the month");
}

// task / 06:

var currentDate = new Date();
document.write("Current Date:", currentDate + "<br>");

var minutesSinceEpoch = Math.floor(currentDate.getTime() / (1000 * 60));
document.write("Elapsed minutes since January 1, 1970:", minutesSinceEpoch);

// task / 07:

var now = new Date();
var currentHour = now.getHours();

if (currentHour < 12) {
  alert("It's AM");
} 
else {
  alert("It's PM");
}

// task / 08:

var laterDate = new Date(2020, 11, 31);
document.write("Later Date:", laterDate);

// task / 09:

var ramadanStartDate = new Date(2015, 5, 18);
var today = new Date();
var timeDiff = Math.abs(today.getTime() - ramadanStartDate.getTime());
var daysPassed = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
document.write(daysPassed + " days have passed since 1st Ramadan, 2015");

// task / 10:

var referenceDate = new Date("Sat Dec 05 2015 22:50:16 GMT+0500 (PKT)");
var beginningOfYear2015 = new Date("Thu Jan 01 2015 00:00:00 GMT+0000");
var timeDiff = Math.abs(referenceDate.getTime() - beginningOfYear2015.getTime());
var secondsPassed = Math.floor(timeDiff / 1000);
document.write("On reference date " + referenceDate + ", " + "<br>" + secondsPassed + " Seconds had passed since beginning of 2015.");

// task / 11:

var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
var updatedDate = currentDate.toDateString() + " " + currentDate.toLocaleTimeString();

document.write("Current date: " + currentDate + "<br>");
document.write("1 hour ago, it was: " + updatedDate);

// task / 12:

var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
document.write("Date reset to 100 years back: " + currentDate);

// task / 13:

var age = prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("Your age is " + age + "<br>" + "Your birth year is " + birthYear);

// task / 14:

var customerName = prompt("Enter customer name:");
var currentMonth = prompt("Enter current month:");
var numberOfUnits = +prompt("Enter number of units:");
var chargesPerUnit = +prompt("Enter charges per unit:");
var dueDate = +prompt("Enter due date:");
var latePaymentSurchargeRate = +prompt("Enter late payment surcharge rate (%):");

var netAmountPayable = numberOfUnits * chargesPerUnit;
var latePaymentSurcharge = (netAmountPayable * latePaymentSurchargeRate) / 100;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

document.write("<h2>K-Electric Bill</h2>");
document.write("<strong>Customer Name:</strong> " + customerName + "<br>");
document.write("<strong>Current Month:</strong> " + currentMonth + "<br>");
document.write("<strong>Number of Units:</strong> " + numberOfUnits.toFixed(2) + "<br>");
document.write("<strong>Charges per Unit:</strong> " + chargesPerUnit.toFixed(2) + "<br>");
document.write("<strong>Net Amount Payable (within Due Date):</strong> " + netAmountPayable.toFixed(2) + "<br>");
document.write("<strong>Late Payment Surcharge:</strong> " + latePaymentSurcharge.toFixed(2) + "<br>");
document.write("<strong>Gross Amount Payable (after Due Date)");

















  

