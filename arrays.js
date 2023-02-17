Write a function that takes in an array of integers and returns a new array that contains only the even integers from the original array. For example, if the input array is [1, 2, 3, 4, 5, 6], the function should return [2, 4, 6]. If the input array is [9, 7, 6, 3, 1, 0], the function should return [6, 0].

function evenNumbers(array) {
  const evenArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenArray.push(array[i]);
    }
  }
  return evenArray;
}

2) Write a function that takes in an array of numbers and returns the sum of all the numbers in the array. For example, if the input array is [1, 2, 3, 4, 5], the function should return 15. If the input array is [10, -2, 5.5, 3], the function should return 16.5.

function evenNumbers(array) {
  let sum=0;

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    sum = sum+ array[i];
  }
  return sum;
}

const inputArray = [1, 2, 3, 4, 5];
const outputArray = evenNumbers(inputArray);
console.log(outputArray); //  [2, 4, 6]
//------------------------------------------------------------------------------------------------------------------------------

3) Write a function that takes in an array of strings and returns a new array that contains only the strings that have more than five characters. For example, if the input array is ["apple", "banana", "kiwi", "orange"], the function should return ["banana", "orange"].

function evenNumbers(array) {
  let arr = [];
  
  for (let i = 0; i < array.length; i++) {
   if(array[i].length>5){
       arr.push(array[i]);
   }
  }
  return arr;
}

const inputArray = ["apple", "banana", "kiwi", "orange"];
const outputArray = evenNumbers(inputArray);
console.log(outputArray);
//-------------------------------------------------------------------------------------------------------------------------------------

4) Write a function that takes in an array of numbers and returns a new array that contains only the unique numbers from the original array. For example, if the input array is [1, 2, 2, 3, 4, 4, 5, 5], the function should return [1, 2, 3, 4, 5]. If the input array is [1, 1, 2, 3, 3, 3, 4, 5], the function should return [1, 2, 3, 4, 5].

function uniqueNumbers(array) {
  const uniqueArray = [];

  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

const inputArray = [1, 2, 2, 3, 4, 4, 5, 5];
const outputArray = uniqueNumbers(inputArray);
console.log(outputArray); // should log [1, 2, 3, 4, 5]

using SET 

function uniqueNumbers(array) {
  const set = new Set(array);
  
  const uniqueArray = Array.from(set);

  return uniqueArray;
}

//------------------------------------------------------------------------------------------

5) Write a function that takes in an array of numbers and returns the average of all the numbers in the array. For example, if the input array is [1, 2, 3, 4, 5], the function should return 3. If the input array is [10, 20, 30], the function should return 20.

function calculateAverage(array) {
  const sum = array.reduce((acc, val) => acc + val, 0);
  
  const average = sum / array.length;
  
  return average;
}
const inputArray = [1, 2, 3, 4, 5];
const average = calculateAverage(inputArray);
console.log(average); // should log 3

const inputArray2 = [10, 20, 30];
const average2 = calculateAverage(inputArray2);
console.log(average2); // 20

//-----------------------------------------------------------------------------------------------------

6) Write a function that takes in an array of numbers and a target number, and returns a boolean indicating whether any two elements in the array sum to the target number. For example, if the input array is [2, 3, 5, 8] and the target number is 10, the function should return true, because 2 + 8 = 10.

function hasPairWithSum(array, targetSum) {
  // create a set to keep track of seen values
  const seenValues = new Set();

  // iterate through the array
  for (let i = 0; i < array.length; i++) {
    // calculate the difference between the target sum and the current element
    const difference = targetSum - array[i];

    // if the difference is in the set, we found a pair that sums to the target
    if (seenValues.has(difference)) {
      return true;
    }

    // add the current element to the set
    seenValues.add(array[i]);
  }

  // we didn't find a pair that sums to the target
  return false;
}

const inputArray = [2, 3, 5, 8];
const targetSum = 10;
const result = hasPairWithSum(inputArray, targetSum);
console.log(result); // should log true

const inputArray2 = [2, 3, 5, 8];
const targetSum2 = 12;
const result2 = hasPairWithSum(inputArray2, targetSum2);
console.log(result2); // should log false

//       alternative solution 

function hasPairWithSum(array, targetSum) {
  // sort the array in ascending order
  array.sort((a, b) => a - b);

  // use two pointers to search for a pair that sums to the target
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const sum = array[left] + array[right];

    if (sum === targetSum) {
      return true;
    } else if (sum < targetSum) {
      left++;
    } else {
      right--;
    }
  }

  // we didn't find a pair that sums to the target
  return false;
}

const inputArray = [2, 3, 5, 8];
const targetSum = 10;
const result = hasPairWithSum(inputArray, targetSum);
console.log(result); // should log true

const inputArray2 = [2, 3, 5, 8];
const targetSum2 = 12;
const result2 = hasPairWithSum(inputArray2, targetSum2);
console.log(result2); // should log false

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

7) Given an array of integers, write a function to find the second highest number in the array. If there are no duplicates in the array, return the highest number. If the array has less than two elements, return null. 
For example, given the array [1, 2, 3, 4, 5], your function should return 4. If the array is [1, 1, 2, 2, 3, 3], your function should return 2. If the array is [1], your function should return null.

function findSecondHighest(arr) {
  if (arr.length < 2) {
    return null;
  }
  
  let max = arr[0];
  let secondMax = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }
  
  if (max === secondMax) {
    return max;
  } else {
    return secondMax;
  }
}


