//Assignment 15:  FUNCTION, SWITCH STATEMENTS, WHILE.. DO WHILE LOOPS

// task / 01:

function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
      result *= a;
    }
    return result;
  }
  let base = 2;
  let exponent = 3;
  let result = power(base, exponent);
  document.write("The value of raised is " + result);
  
  // task / 02:

  function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  let year = 2020;
  let isLeap = isLeapYear(year);
  document.write("2020 was a leap year " + isLeap);
  
  // task / 03:

  function calculateS(a, b, c) {
    return (a + b + c) / 2;
  }
  function calculateTriangleArea(a, b, c) {
    let s = calculateS(a, b, c);
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }

let sideA = 5;
let sideB = 7;
let sideC = 9;

let area = calculateTriangleArea(sideA, sideB, sideC);
document.write("Area of triangle is " + area);

// task / 04:

function calculateAverage(subject1, subject2, subject3) {
    return (subject1 + subject2 + subject3) / 3;
  }
  
  function calculatePercentage(totalMarks, obtainedMarks) {
    return (obtainedMarks / totalMarks) * 100;
  }
  
  function mainFunction(subject1, subject2, subject3) {
    let average = calculateAverage(subject1, subject2, subject3);
    let totalMarks = 300; // Assuming each subject has a maximum of 100 marks
    let obtainedMarks = subject1 + subject2 + subject3;
    let percentage = calculatePercentage(totalMarks, obtainedMarks);
  
    document.write("Average marks: " + average + "<br>");
    document.write("Percentage: ", percentage, "%");
  }
  
  let subject1Marks = 80;
  let subject2Marks = 75;
  let subject3Marks = 90;
  
  mainFunction(subject1Marks, subject2Marks, subject3Marks);

  // task / 05:

  function customIndexOf(string, searchChar) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === searchChar) {
        return i;
      }
    }
    return -1; // Character not found
  }
  let str = "Hello, World!";
  let searchChar = "W";
  
  let index = customIndexOf(str, searchChar);
  console.log(index);
  
  // task / 06:

  function removeVowels(sentence) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
    
    for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i].toLowerCase();
      if (!vowels.includes(char)) {
        result += sentence[i];
      }
    }
    
    return result;
  }
  let sentence = "Hello, World!";
  let output = removeVowels(sentence);
  document.write(result);

  // task / 07:

  function countSuccessiveVowels(text) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (let i = 0; i < text.length - 1; i++) {
      let currentChar = text[i].toLowerCase();
      let nextChar = text[i + 1].toLowerCase();
  
      if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
        count++;
      }
    }
  
    return count;
  }
  let line = "Pleases read this application and give me gratuity";
  let count = countSuccessiveVowels(line);
  document.write(count); 

  // task / 08:

  function convertToMeters(distanceInKm) {
    return distanceInKm * 1000;
  }
  
  function convertToFeet(distanceInKm) {
    return distanceInKm * 3280.84;
  }
  
  function convertToInches(distanceInKm) {
    return distanceInKm * 39370.08;
  }
  
  function convertToCentimeters(distanceInKm) {
    return distanceInKm * 100000;
  }
  
  function printDistanceConversions(distanceInKm) {
    let distanceInMeters = convertToMeters(distanceInKm);
    let distanceInFeet = convertToFeet(distanceInKm);
    let distanceInInches = convertToInches(distanceInKm);
    let distanceInCentimeters = convertToCentimeters(distanceInKm);
  
    document.write("Distance in meters: ", distanceInMeters + "<br>");
    document.write("Distance in feet: ", distanceInFeet + "<br>");
    document.write("Distance in inches: ", distanceInInches + "<br>");
    document.write("Distance in centimeters: ", distanceInCentimeters);
  }
  let distanceInKm = 100;
  printDistanceConversions(distanceInKm);

  // task / 09:

  function calculateOvertimePay(hoursWorked) {
    const regularHours = 40;
    const overtimeRate = 12.00;
  
    if (hoursWorked <= regularHours) {
      return 0;
    } else {
      const overtimeHours = hoursWorked - regularHours;
      const overtimePay = overtimeHours * overtimeRate;
      return overtimePay;
    }
  }
  let hoursWorked = 45;
  let overtimePay = calculateOvertimePay(hoursWorked);
  document.write("Overtime Pay: Rs.", overtimePay);

  // task / 10:

const inputAmount = +prompt('Enter the amount to be withdrawn in hundreds:');
const amount = +prompt(inputAmount);

let hundreds = amount;
let remainingAmount = 0;
let fifties = 0;
let tens = 0;

if (amount >= 100) {
  hundreds = Math.floor(amount / 100);
  remainingAmount = amount % 100;
}

if (remainingAmount >= 50) {
  fifties = Math.floor(remainingAmount / 50);
  remainingAmount = remainingAmount % 50;
}

if (remainingAmount >= 10) {
  tens = Math.floor(remainingAmount / 10);
}

document.write("Number of currency notes :");
document.write(`Hundreds : ${hundreds}`);
document.write(`Fifties : ${fifties}`);
document.write(`Tens : ${tens}`);


  