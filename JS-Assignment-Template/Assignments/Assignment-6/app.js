//Assignment 6:  MATH EXPRESSIONS

// task /01:

var a = 10;

document.write("<h3>Result:</h3>" + "</br>" + "The value of a is: " + a + "<br>" + "</br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br>" + "</br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br>" + "</br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br>" + "</br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>" + "</br>");

// task / 02:
var a = 2;
var b = 1;
document.write(+--a + "<br>");
document.write(+--a - --b + "<br>");
document.write(--a - --b + ++b + "<br>");
document.write(--a - --b + ++b + b + "<br>");

var result = --a - --b + ++b + b--;
document.write(result + "<br>");
document.write("a: " + a + "<br>");
document.write("b: " + b + "<br>");
document.write("result: " + result);

// task / 03:

var username = prompt("Enter  username: ")
alert("Hello, " + username + " Nice to meet you!")


// task / 05:

var input = +prompt("Enter a number:");
var number = parseInt(input);

if (isNaN(number)) {
  number = 5;
}

var table_numb = "Multiplication Table of " + number + ":\n";
for (var i = 1; i <= 10; i++) {
  table_numb += number + " x " + i + " = " + (number * i) + "<br>";
}

document.write(table_numb);

// task / 06:

var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

var totalMarks = 100;

var obtainedMarks1 = +prompt("Enter obtained marks for " + subject1 + ":");
var obtainedMarks2 = +prompt("Enter obtained marks for " + subject2 + ":");
var obtainedMarks3 = +prompt("Enter obtained marks for " + subject3 + ":");

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + obtainedMarks1 + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + obtainedMarks2 + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + obtainedMarks3 + "%</td></tr>");
document.write("<tr><<th>" + "Total" + "</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th>><th>" + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");




