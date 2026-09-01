// check if all the numbers in our array are multiples of 10 or not.

let nums = [10, 20, 300, 40, 50];
let ans = nums.every((el) => el % 10 == 0);
console.log(ans); //ans is true bcz all are multiples of 10 if we write something 5, 7, it will give us false
