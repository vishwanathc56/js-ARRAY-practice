Write a function that takes in an array of integers and returns a new array that contains only the even integers from the original array. For example, if the input array is [1, 2, 3, 4, 5, 6], the function should return [2, 4, 6]. If the input array is [9, 7, 6, 3, 1, 0], the function should return [6, 0].

function evenNumbers(array) {
  // create an empty array to store even integers
  const evenArray = [];

  // loop through the input array
  for (let i = 0; i < array.length; i++) {
    // check if the current element is even
    if (array[i] % 2 === 0) {
      // if it is, add it to the even array
      evenArray.push(array[i]);
    }
  }

  // return the even array
  return evenArray;
}

2) Write a function that takes in an array of numbers and returns the sum of all the numbers in the array. For example, if the input array is [1, 2, 3, 4, 5], the function should return 15. If the input array is [10, -2, 5.5, 3], the function should return 16.5.

function evenNumbers(array) {
  // create an empty array to store even integers
  let sum=0;

  // loop through the input array
  for (let i = 0; i < array.length; i++) {
    // check if the current element is even
    console.log(array[i]);
    sum = sum+ array[i];
 
  }
//console.log(sum);
  return sum;
}

const inputArray = [1, 2, 3, 4, 5];
const outputArray = evenNumbers(inputArray);
console.log(outputArray); // should log [2, 4, 6]
//------------------------------------------------------------------------------------------------------------------------------

3)
