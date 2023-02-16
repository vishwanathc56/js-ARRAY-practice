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
