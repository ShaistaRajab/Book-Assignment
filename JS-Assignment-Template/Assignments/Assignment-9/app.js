//Assignment 9:  ARRAYS

// task / 01:

var studentNames = [];

// task / 02:

var futureStudents = {
    names: []
  };

// task / 03:

var strings = ["Hello", "World", "Chair", "Door","Table"];

// task / 04:

var numbers = [1, 2, 3, 4, 5];

// task / 05:

var booleanArray = [true, false, true, false];

// task / 06:

var mixedArray = ["Hello", 42, true, null, { name: "Eman" }];

// task / 07:

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

document.write("<h2>Qualifications:</h2>");
document.write("<ol>");

for (let i = 0; i < qualifications.length; i++) {
  document.write("<li>" + ") " + qualifications[i] + "</li>");
}
document.write("</ol>");

// task / 08:

var studentNames = ["Michael", "Jhon", "Tony"];
var studentScores = [320, 230, 480];
var totalMarks = 500;

document.write("<h2>Student Scores and Percentages:</h2>");

for (var i = 0; i < studentNames.length; i++) {
    var percentage = (studentScores[i] / totalMarks) * 100;
    document.write("<p><strong>Name:</strong> " + studentNames[i] + "</p>");
    document.write("<p><strong>Score:</strong> " + studentScores[i] + "</p>");
    document.write("<p><strong>Percentage:</strong> " + percentage + "%</p>");
    document.write("<br>");
  }

  // task / 09:

  var colors = ["Red", "Blue", "Green"];

// Displaying the original array
document.write("<h3>Original Array:</h3>");
document.write(colors.join(", "));
document.write("<br><br>");

// a. Adding color to the beginning of the array
var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddBeginning);

// Displaying the updated array
document.write("<h3>Updated Array (Added color to the beginning):</h3>");
document.write(colors.join(", "));
document.write("<br><br>");

// b. Adding color to the end of the array
var colorToAddEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddEnd);

// Displaying the updated array
document.write("<h3>Updated Array (Added color to the end):</h3>");
document.write(colors.join(", "));
document.write("<br><br>");

// c. Adding two more colors to the beginning of the array
var additionalColors = prompt("Enter two colors to add to the beginning (separated by comma):");
var newColors = additionalColors.split(",");
colors = newColors.concat(colors);

// Displaying the updated array
document.write("<h3>Updated Array (Added two colors to the beginning):</h3>");
document.write(colors.join(", "));
document.write("<br><br>");

// d. Deleting the first color in the array
colors.shift();

// Displaying the updated array
document.write("<h3>Updated Array (Deleted the first color):</h3>");
document.write(colors.join(", "));
document.write("<br><br>");

// e. Deleting the last color in the array
colors.pop();

// Displaying the updated array
document.write("<h3>Updated Array (Deleted the last color):</h3>");
document.write(colors.join(", "));
document.write("<br><br>");

// f. Adding color at a desired position/index
var indexToAddColor = +prompt("Enter the index at which you want to add a color:");
var colorToAdd = prompt("Enter the color to add at the desired index:");
colors.splice(indexToAddColor, 0, colorToAdd);

// Displaying the updated array
document.write("<h3>Updated Array (Added color at the desired index):</h3>");
document.write(colors.join(", "));
document.write("<br><br>");

// g. Deleting color(s) from a user-defined position/index
var indexToDeleteColors = +prompt("Enter the index from which you want to delete color(s):");
var numColorsToDelete = +prompt("Enter the number of colors you want to delete:");
colors.splice(indexToDeleteColors, numColorsToDelete);

// Displaying the updated array
document.write("<h3>Updated Array (Deleted color(s) from the desired index):</h3>");
document.write(colors.join(", "));
document.write("<br><br>");

// task / 10:

var scores = [320, 230, 480, 120];
document.write("Scores of Students: " + scores.join(", ") + "<br>");

scores.sort(function(a, b) {
  return a - b;
});

document.write("Ordered Scores of Students: " + scores.join(", "));

// task / 11:

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<h3>Cities List:</h3>"  + cities +"<br>");

var selectedCities = [];
selectedCities = cities.slice(1, 4);
document.write("<h3>Selected Cities List:</h3>" + selectedCities);

// task / 12:

var arr = ["This", "is", "my", "cat"];
document.write("<h3>Array:</h3>" +  arr);

var singleString = arr.join(" ");
document.write("<h3>String:</h3>" + singleString);


// task / 13:

var devices = ["keyboard",",mouse","printer","monitor"]
document.write("devices : <br/>" + devices + "<br/>")
var device1 = devices.shift()
document.write("out : <br/>" + device1 + "<br/>")
var device2 = devices.shift()
document.write("out : <br/>" + device2 + "<br/>")
var device3 = devices.shift()
document.write("out : <br/>" + device3 + "<br/>")
var device4 = devices.shift()
document.write("out : <br/>" + device4 + "<br/>")


// task / 14:

var devices = ["keyboard",",mouse","printer","monitor"]
document.write("devices : <br/>" + devices + "<br/>")
var Device1 = devices.pop()
document.write("out : <br/>" + Device1 + "<br/>")
var Device2 = devices.pop()
document.write("out : <br/>" + Device2 + "<br/>")
var Device3 = devices.pop()
document.write("out : <br/>" + Device3 + "<br/>")
var Device4 = devices.pop()
document.write("out : <br/>" + Device4 + "<br/>")

// task / 15:

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write('<select>');
for (var i = 0; i < manufacturers.length; i++) {
    
  document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
}
document.write('</select>');









