// Qs1.WriteaJSprogramtodeletealloccurrencesofelement‘num’inagivenarray.Example:ifarr=[1,2,3,4,5,6,2,3]&num=2Resultshouldbearr=[1,3,4,5,6,3]

let arr = 3; // Fixed: Added the numbers here
let num = 2;
let result = []; 

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== num) {
        result.push(arr[i]);
    }
}

console.log(result); // Output: [1, 3, 4, 5, 6, 3]

