// CREATE A FUNCTION TO FIND THE MINIMUM NUMBER IN AN ARRAY

let nums = [10, 20, 300, 40, 50];

let min = nums.reduce((min, el) => {
    if (min < el) {
        return min;
    } else {
        return el;
    }
});
console.log(min);
