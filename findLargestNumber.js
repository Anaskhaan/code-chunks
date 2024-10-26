// Find the largest number without built-in function like Math.max();

function findLargestNumber(arr) {
  if (arr.length === 0) return null; // Handle empty array case

  let max = arr[0]; // Initialize max with the first element of the array

  for (let i = 1; i < arr.length; i++) {
    // Corrected for loop syntax
    if (arr[i] > max) {
      // Corrected if syntax
      max = arr[i]; // Update max if the current element is larger
    }
  }

  return max; // Return the largest number
}

const numbers = [3, 5, 7, 11, 30];
console.log(findLargestNumber(numbers)); // Output: 30
