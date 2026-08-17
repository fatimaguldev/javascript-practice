// write a program to check if two numbers have the same last digit for example 22 and 47852 have the same last digit that is 2

let num1 = 57;
let num2 = 1047;

// Extract the last digits using % 10
let lastDigit1 = num1 % 10; // Becomes 7
let lastDigit2 = num2 % 10; // Becomes 7

// Compare them using ===
if (lastDigit1 === lastDigit2) {
  console.log("They have the same last digit!");
} else {
  console.log("They have different last digits.");
}
