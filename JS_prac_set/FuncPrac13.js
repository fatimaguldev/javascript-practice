// Square and sum the array elements using the arrow function and then find the average of the array.

const numbers = [2, 3, 4]; // Example array

// 1. Square and sum the elements
const squareSum = numbers.reduce((sum, num) => sum + num ** 2, 0); 
// (2² + 3² + 4²) = 4 + 9 + 16 = 29

// 2. Find the average of the squared sum
const average = squareSum / numbers.length; 
// 29 / 3 = 9.67

console.log("Square Sum:", squareSum); // Output: 29
console.log("Average:", average);     // Output: 9.666666666666666
