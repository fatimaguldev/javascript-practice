// Write a JavaScript function to generate a random number within a specific range (start, end).

let start = 100;
let end = 200;

function generateRandom(start, end) {
  let diff = end - start;
  return Math.floor(Math.random() * diff) + start;
}

generateRandom(start, end);
