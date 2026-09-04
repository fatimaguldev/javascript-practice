// Given an array, move all zeroes to the end while keeping the relative order of non-zero elements, in-place. (Tests two-pointer / in-place array manipulation)

function moveZeroes(nums) {
    let writePointer = 0;

    // Step 1: Move all non-zero elements to the front
    for (let readPointer = 0; readPointer < nums.length; readPointer++) {
        if (nums[readPointer] !== 0) {
            nums[writePointer] = nums[readPointer];
            writePointer++;
        }
    }

    // Step 2: Fill the remaining positions with zeroes
    while (writePointer < nums.length) {
        nums[writePointer] = 0;
        writePointer++;
    }

    return nums;
}

// Example usage:
// const arr =;
// moveZeroes(arr);
// console.log(arr); // Output: [1, 3, 12, 0, 0]
