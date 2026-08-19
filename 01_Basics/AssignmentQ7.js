// write a program to get the first an element of an array and can be any positive number for example for array [7,9,0,- 2]and n = 3 print array of [7,9,0]

// 1. Create your array and choose how many elements you want (n)
const Array = [7, 9, 0, -2];
const n = 3;

// 2. Use slice to cut the array from the start (0) up to n
const result = Array.slice(0, n);

// 3. Print the answer to the screen
console.log(result); // Output: [7, 9, 0]

// write a JavaScript program to get the last n elements of an array and can be any positive number for example for a race [7,9,0] - 2 and n = 3 print [9,0, -2]

// 1. Create your array and choose how many elements you want from the end
const inputArray = [7, 9, 0, -2];
const n = 3;

// 2. Use a minus sign (-n) to tell JavaScript to count from the back
let ans = inputArray.slice(-n);

// 3. Print the answer
console.log(ans); // Output: [9, 0, -2]

// Qs 3: Check if a string is blank or notA string is "blank" if it is completely empty "" or if it only contains empty spaces "   ".

let str = prompt("please enter a string");
if (str.trim().length == 0) {
  console.log("string is empty");
} else {
  console.log("string is not empty");
}


// Qs 4: Check if a character at a specific index is lowercase

let str = "ApNaCoLlEgE";
let idx = 3;
if (str[idx] == str[idx].toLowerCase() && str[idx] != str[idx].toUpperCase()) {
  console.log("character is lowercase");
} else {
  console.log("character is not lowercase");
}
// Qs 5. Write a JavaScript program to strip leading and trailing spaces from a string.

let str = prompt("please enter a string");
console.log(`original string = ${str}`);
console.log(`string without spaces = ${str.trim()}`);


// Qs 6. Write a JavaScript program to check if an element exists in an array or not.

let arr = ["hello", "a", 23, 64, 99, -6];
let item = 64;
if (arr.indexOf(item) != -1) {
  console.log("element exists in array");
} else {
  console.log("element doesn't exist in array");
}


