// Find the contiguous subarray with the largest sum. (Tests dynamic loop tracking, very common in interviews)

function maxSubArray(nums) {
    // Handle edge case where array is empty
    if (nums.length === 0) return 0;

    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Decide whether to add the current element to the existing subarray 
        // or start a brand new subarray from the current element
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // Update the global maximum if the current subarray sum is larger
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Example usage:
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6 (Subarray is [4, -1, 2, 1])
