// to take data from user or to take input

// let firstName = prompt("enter your name:")

// console.log(firstName);

// its working in console

let firstName = prompt("enter your first name:");
let lastName = prompt("enter your last name:");

// Cleaner way using commas (JS handles the spacing)
console.log("Welcome", firstName, lastName);

// Modern way using Template Literals (Backticks `)
console.log(`Welcome ${firstName} ${lastName}`);

