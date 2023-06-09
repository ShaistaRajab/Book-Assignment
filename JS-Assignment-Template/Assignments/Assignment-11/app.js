//Assignment 11: STRING METHODS

// task / 01:

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName + " " + lastName;
alert("Hello, " + fullName);

// task / 02:

var favoriteModel = prompt("Enter your favorite mobile phone model:");
var inputLength = favoriteModel.length;
document.write("The length of your input is: " + inputLength);

// task / 03:

var word = "Pakistani";
var index = word.indexOf('n');
document.write("String: " + word + "<br>");
document.write("Index of 'n': " + index);

// task / 04:

var word = "Hello World";
var lastIndex = word.lastIndexOf('l');
document.write("String: " + word + "<br>");
document.write("Last Index of ' l': " + lastIndex);

// task / 05:

var Word = "Pakistani";
var Character = Word.charAt(3);
document.write("String: " + Word + "<br>");
document.write("Character at 3rd Index: " + Character);

// task / 06:

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" " + lastName);
alert("Hello, " + fullName);

// task / 07:

var City_name = "Hyderabad";
var New_name = City_name.replace("Hyder", "Islam");
document.write("<h3>City:</h3> " + City_name + "<br>");
document.write("<h3>After replacement:</h3> " + New_name);

// task / 08:

var sentence = "Ali and Sami are best friends. They play cricket and football together.";
var new_sentence = sentence.replace(/and/g, "&");
document.write("<h3>Original sentence:</h3> " + sentence + "<br>");
document.write("<h3>After replacement:</h3> " + new_sentence);

// task / 09:

var str = "472";
var num = Number(str);

document.write("Value: " + str + "<br>");
document.write("Type: String" + "<br>");

document.write("Value: " + num + "<br>");
document.write("Type: Number" );

// task /10:

var userInput = prompt("Enter userinput");
var capitalizedInput = userInput.toUpperCase();

document.write("User Input: " + userInput + "<br>");
document.write("Capitalized Input: " + capitalizedInput);

// task / 11:

var userInput = prompt("Enter a sentence:");
var words = userInput.toLowerCase().split(' ');

for (var i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
var titleCaseText = words.join(' ');

document.write("User Input: " + userInput + "<br>");
document.write("Title Case: " + titleCaseText);

// task / 12:

var num = 35.36;
var num_string = num.toString().replace(".", "");
document.write("Number: " + num + "<br>");
document.write("Result: " + num_string);

// task / 13:

var username = prompt("Enter a username");

while (username.includes('@') || username.includes('.') || username.includes(',') || username.includes('!')) {
  alert("!Please enter a valid username.");
}

alert("Username accepted: " + username);

// task / 14:

function searchItem(array, item) {
  for (let index = 0; index < array.length; index++) {
    if (array[index].toLowerCase() === item.toLowerCase()) {
      return `${item} is available at index ${index} in our bakery`;
    }
  }
  return `We are sorry! ${item} is not available in our bakery`;
}

// Example usage
const A = ["cake", "apple pie", "cookie", "chips", "patties"];

const user_input = prompt("Enter an item to search:");
const result = searchItem(A, user_input);
document.write(result);

// task 15:

function validatePassword(password) {
  if (password.length < 6) {
    return false;
  }
  if (!isNaN(password.charAt(0))) {
    return false;
  }
  if (!/[a-zA-Z]/.test(password)) {
    return false;
  }
  if (!/\d/.test(password)) {
    return false;
  }
  return true;
}

function main() {
  var password = prompt("Enter a password:");
  while (!validatePassword(password)) {
    alert("Invalid password! Please enter a valid password.");
    password = prompt("Enter a password:");
  }
  alert("Password is valid.");
}
main();

// task / 16:

    var university = "University of Karachi";
    var array = university.split('');

    function displayArrayElements() {
      var output = "";
      for (var i = 0; i < array.length; i++) {
        output += array[i] + "<br>";
      }
      document.getElementById("result").innerHTML = output;
    }

 // task / 17:

 var userInput = prompt("Enter a string:");
 var lastCharacter = userInput.charAt(userInput.length - 1);
 document.write("User input: " + userInput + "<br>");
 document.write("Last character of input: " + lastCharacter);

 // task / 18:

var sentence = "The quick brown fox jumps over the lazy dog";
var wordToCount = "the";

var lowercaseSentence = sentence.toLowerCase();
var words = lowercaseSentence.split(" ");
var count = 0;

for (var i = 0; i < words.length; i++) {
  if (words[i] === wordToCount) {
    count++;
  }
}
document.write("Text: The quick brown for jumps over the lazy dog, There are " + count  + " occurrence(s) of the word " + wordToCount );
