// Find the largest number without built-in function like Math.max();

function findLargestNumber(arr) {
  if (arr.length === 0) return null; //handle empty array

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // Check array values
    if (arr[i] > max) {
      //validate smaller or larger values
      max = arr[i]; //assign largest value to max
    }
  }
  return max;
}

const numbers = [3, 5, 7, 11, 30, 55];
console.log(findLargestNumber(numbers));
