let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr = [...arr]; //copy of the above value

// if we add anything to the newArr than nothing will happen to arr

newArr.push(12);

let chars = [..."Hello World"];

let even = [2, 4, 6, 8.10];
let odd = [1, 3, 5, 7, 9];
let nums = [...odd, ...even];
