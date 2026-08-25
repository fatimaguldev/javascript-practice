//  Write a JavaScript program to find the largest number in an array containing only positive numbers.

let arr = [];// Added numbers inside the brackets
let num = 2;
let result = []; 

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== num) {
        result.push(arr[i]);
    }
}
console.log(result); // Will print: [1, 3, 4, 5, 6, 3]
 
