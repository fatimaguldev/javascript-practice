// write a "for " loop that multiplies each element in an array '[2, 4, 6]' by 2 and stores the result in a new array called multipliedNumbers.
let multipliedNumbers = [];
let numbers = [2, 4, 6];
for (let l = 0; l < numbers.length; l++) {
    takeNumbers = numbers[l] * 2;
    multipliedNumbers.push(takeNumbers);
}

console.log(multipliedNumbers);
