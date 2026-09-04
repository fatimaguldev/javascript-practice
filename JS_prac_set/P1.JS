// Given an array of integers and a target, return indices of the two numbers that add up to the target. (Classic — tests loops + hashmap optimization)

function twoSum(nums, target) {
    // Create a map to store the number and its corresponding index
    const numMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if the complement already exists in the map
        if (complement in numMap) {
            return [numMap[complement], i];
        }

        // Otherwise, store the current number and its index in the map
        numMap[nums[i]] = i;
    }

    // Return an empty array if no solution is found
    return [];
}

// Example usage:
// console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
