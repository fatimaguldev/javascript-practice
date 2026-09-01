let arr = [1, 2, 3, 4, 5, 6, 6, 8, 9,88,45];

let max = arr.reduce((max, el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
});
console.log(max);
