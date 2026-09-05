// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.


const doubleAndReturnArgs = (arr, ...args) => {
  // 1. Double all the additional arguments
  const doubledArgs = args.map(num => num * 2);
  
  // 2. Combine the original array with the doubled arguments
  return [...arr, ...doubledArgs];
};

// --- Example Usage ---
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); 
// Output: [1, 2, 3, 8, 8]

console.log(doubleAndReturnArgs([2], 10, 15, 20)); 
// Output: [2, 20, 30, 40]
