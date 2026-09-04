// Rotate an array to the right by k steps, in-place. (Tests array manipulation without extra space)

function rotate(nums, k) {
    const n = nums.length;
    
    // Handle cases where k is greater than the array length
    k = k % n; 
    
    if (k === 0) return nums;

    // Helper function to reverse a portion of the array
    function reverse(left, right) {
        while (left < right) {
            const temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    }

    // Step 1: Reverse the entire array
    reverse(0, n - 1);
    
    // Step 2: Reverse the first k elements
    reverse(0, k - 1);
    
    // Step 3: Reverse the remaining n - k elements
    reverse(k, n - 1);

    return nums;
}

// Example usage:
// const arr =;
// rotate(arr, 3);
// console.log(arr); // Output: [5, 6, 7, 1, 2, 3, 4]
