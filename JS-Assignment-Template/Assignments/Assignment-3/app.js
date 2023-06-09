//Assignment 3:  VARIABLES FOR NUMBERS

//Question / 01:

var age = 15;
alert("I am " + age + " years old");

// task / 02:

var visit_numb = localStorage.getItem('visitCount');

if (!visit_numb) {
  visit_numb = 1;  
} else {
  visit_numb = parseInt(visit_numb) + 1; 
}

localStorage.setItem('visit_numb', visit_numb);

alert("You have visited this site " + visit_numb + " times.");


// task / 03:

var birth_year = 1990; // isy index wali file ma likhna ha
document.write('My birth year is ' + birth_year);

// task / 04:

var Visitor = "Jhone Doe";
var product_quantity = 5 + "t-shirts(s)";
var Brand_Name = "XYZ Clothing store";
document.write(Visitor + ' ordered ' + product_quantity + ' on ' + Brand_Name);