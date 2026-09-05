// Create a new array whose elements are in uppercase of words present in the original array.

const originalArray = ["apple", "banana", "cherry"];

// Create a new array with uppercase words
const newArray = originalArray.map(word => word.toUpperCase());

console.log(newArray); 
// Output: ["APPLE", "BANANA", "CHERRY"]
