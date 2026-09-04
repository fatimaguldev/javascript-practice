// Given an array of n+1 integers where each is between 1 and n, find the duplicate without modifying the array and using O(1) extra space. (Harder — tests cycle detection or clever loop logic)/

function findDuplicate(nums) {
    // Phase 1: Find the intersection point of the two runners
    let tortoise = nums[0];
    let hare = nums[0];

    do {
        tortoise = nums[tortoise];       // Moves 1 step
        hare = nums[nums[hare]];         // Moves 2 steps
    } while (tortoise !== hare);

    // Phase 2: Find the entrance to the cycle (the duplicate number)
    tortoise = nums[0];                  // Reset tortoise to the beginning
    while (tortoise !== hare) {
        tortoise = nums[tortoise];       // Both move at the same speed now
        hare = nums[hare];
    }

    return tortoise;                     // Or return hare; both point to the duplicate
}

// Example usage:
// console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2
// console.log(findDuplicate([3, 1, 3, 4, 2])); // Output: 3
