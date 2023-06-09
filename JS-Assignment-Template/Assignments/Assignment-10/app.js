//Assignment 10: ARRAYS AND LOOP

// task / 01:

var my_array = [[]];

// task / 02:

 matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]

 // task / 03:

 var i;

 for (var i = 1; i <=10; i++) {
    document.write(i + "<br>");
    
 }

 // task / 04:

var table_number = +prompt("Enter the number for the multiplication table: ");
var table_length = +prompt("Enter the length of the multiplication table: ");

for( i=1; i <= table_length; i++)
 {
 document.write(table_number + 'x' + i + ' = ' + table_number * i + '<br/>');
 }

 // task / 05:

 var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + "<br>");
}

// task / 06:

// Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
var countingSeries= "";
for (var i = 1; i <= 15; i++) {
  countingSeries += i + ", ";
}
document.write("<h3>Counting:</h3> " + countingSeries.slice(0, -2)); // remove the trailing comma and space

// Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
var reverseCountingSeries = "";
for (var i = 10; i >= 1; i--) {
  reverseCountingSeries += i + ", ";
}
document.write("<h3>Reverse counting:</h3> " + reverseCountingSeries.slice(0, -2)); // remove the trailing comma and space

// Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
var evenSeries = "";
for (var i = 0; i <= 20; i += 2) {
  evenSeries += i + ", ";
}
document.write("<h3>Even:</h3> " + evenSeries.slice(0, -2)); // remove the trailing comma and space

// Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
var oddSeries = "";
for (var i = 1; i <= 19; i += 2) {
  oddSeries += i + ", ";
}
document.write("<h3>Odd:</h3> " + oddSeries.slice(0, -2)); // remove the trailing comma and space

// Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
var seriesWithMultiplier = "";
for (var i = 1; i <= 10; i++) {
  seriesWithMultiplier += (2 * i) + "k, ";
}
document.write("<h3>Series:</h3> " + seriesWithMultiplier.slice(0, -2)); // remove the trailing comma and space

// task / 07:

var a = ["cake","apple pie","cookie","chips","patties"]
var user_input = prompt("Welcome to ABC Bkery what do you want to order sir/ma'am")
var b = a.indexOf(user_input)
if(b<0){
    alert("we are sorry" + user_input + "is not available in our bakery")
}
else{
    alert(user_input + "is available at index " + b + " in our bakery") 
}


// task / 08:

var A = [24, 53, 78, 91, 12];

var largestNumber = Math.max(...A)

document.write("Array items: "+ A + "<br>" + "The largest number is " + largestNumber);

// task / 09:

A = [24, 53, 78, 91, 12];

var smallestnumber = Math.min(...A)

document.write("Array items: "+ A + "<br>" + "The smallest number is " + smallestnumber)

// task / 10:

for (var i = 1; i <= 100; i++) {
  
  if (i % 5 === 0) {
    document.write(i + ",");
  }
}




