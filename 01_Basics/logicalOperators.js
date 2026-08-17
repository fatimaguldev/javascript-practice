// && and operator will give true value only when both the conditions are true
// Think of it like a password and email login—you need both correct to get in.

let marks = 90;
if (marks >= 33 && marks >= 80) {
  console.log("Pass");
  console.log("Grade: A1");
} 
// else {
//   console.log("better luck next time!");
//  }
 
// OR operator

// either one condition true

let numbers = 10;
if (numbers >= 33 || numbers >= 80) {
  console.log("Pass");
  console.log("Grade: A1");
} 

// Logical NOT Operator !(exp)

let num = 40;
if (!(num >= 33)) {
  console.log("Pass");
  console.log("Grade: A1");
} 
