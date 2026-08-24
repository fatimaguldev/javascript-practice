// Print the factorial of a positive integer n (denoted as n!). The factorial is the product of all positive integers less than or equal to n. Note that 0! is always equal to 1.Example Input: n = 5Expected Output: factorial = 120 (1 × 2 × 3 × 4 × 5)Example Input: n = 7Expected Output: factorial = 5040

let n = 5; // You can change this to 7, 3, or any positive number
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
}

console.log(factorial); // Output: 120
