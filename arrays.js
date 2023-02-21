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

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

8)Given an array of integers, write a function to remove all duplicate elements and return a new array with only the unique elements. The order of the elements in the new array should be the same as in the original array.

For example, given the array [1, 2, 3, 2, 4, 5, 4], your function should return [1, 2, 3, 4, 5].

function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
9) Write a function that takes two arrays of integers as input and returns a new array that contains only the elements that are present in both of the input arrays. The order of the elements in the new array doesn't matter.

For example, given the arrays [1, 2, 3, 4] and [3, 4, 5, 6], your function should return [3, 4].

function commonElements(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}

//                     alternative

function commonElements(arr1, arr2) {
  let commonArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      commonArr.push(arr1[i]);
    }
  }
  return commonArr;
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
10)Write a function that takes an array of integers as input and returns the average of the positive integers in the array. If the array is empty or contains only negative numbers, the function should return 0.

For example, given the array [-2, 0, 5, 7, -3, 9], your function should return (5 + 7 + 9) / 3, which is approximately 7.0.

function pnums(arr){
    const arrlen =  arr.length;
    let pnos = [];
    for(let i=0;i<arrlen;i++){
        if(Math.sign(arr[i])===1)
        pnos.push(arr[i]);
        
    }
    console.log({pnos})
    let sum = pnos.reduce((previousValue, currentValue)=> {
    return previousValue + currentValue;
});

    return Math.floor(sum/pnos.length);
}

console.log(pnums([-2, 0, 5, 7, -3, 9]))

//                      alternative using es6 

function averagePositiveNumbers(arr) {
  const positiveNumbers = arr.filter(num => num > 0);
  const sum = positiveNumbers.reduce((acc, curr) => acc + curr, 0);
  const avg = positiveNumbers.length ? sum / positiveNumbers.length : 0;
  return avg;
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
11) Write a function that takes an array of numbers as input and returns a new array that contains only the unique numbers from the input array, in the order in which they first appear.
  For example, given the array [1, 2, 3, 2, 1, 4, 5, 4], your function should return [1, 2, 3, 4, 5].
  
  function getUniqueNumbers(arr) {
    const uniqueNumbers = arr.filter((num, index) => arr.indexOf(num) === index);
    return uniqueNumbers;
  }

  Note that this solution is not very efficient for very large arrays because it uses the indexOf() method to search the array for each element. 
  An alternative solution that is more efficient for larger arrays is to use a Set object: 
  
  function getUniqueNumbers(arr) {
    const uniqueNumbers = [...new Set(arr)];
    return uniqueNumbers;
  }
  
  This solution creates a new Set object from the input array, which automatically removes any duplicate elements. The ... operator is then used to convert the Set object back into an array.
  This solution is more efficient than the filter() method solution for larger arrays because the Set object uses a hash table to look up elements, which is much faster than the linear search used by the indexOf() method.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
 12)Write a JavaScript function that takes two arrays of integers as input and returns an array containing the intersection of the two arrays (i.e. the values that are present in both arrays). 
    The returned array should not contain any duplicates.
 
  function arrayIntersection(arr1, arr2) {
  const intersection = [];

  for (const num of arr1) {
    if (arr2.includes(num) && !intersection.includes(num)) {
      intersection.push(num);
    }
  }

  return intersection;
}

//                        alternative 

function arrayIntersection(arr1, arr2) {
  return arr1.filter((num, index) => {
    return arr2.includes(num) && arr1.indexOf(num) === index;
  });
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
13) Write a function that takes an array of numbers as input and returns the sum of the squares of all even numbers in the array. If the input array is empty or contains no even numbers, the function should return 0.
  For example, if the input array is [1, 2, 3, 4, 5], the function should return 20, which is the sum of the squares of the even numbers 2 and 4 in the array.
  

//let num = [1,2,3,4,5,6,7,8,9,];

// console.log('even numbers are');
// for (var i = 1 ; i < 10 ; i += 2 ) {
//   console.log(i);
// }


// console.log('odd numbers are ');
// for (var i = 2 ; i < 10 ; i += 2 ) {
//   console.log(i);
// }

function sumOfEvenSquares(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i] ** 2;
    }
  }
  return sum;
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
14) Write a JavaScript function that takes an array of strings as input and returns the longest string in the array.
For example, if the input array is ["apple", "banana", "orange", "kiwi"], the function should return "banana", since it is the longest string in the array.
Your function should handle the case where the input array is empty by returning null.

  function findLongestString(strings) {
    if (strings.length === 0) {
      return null;
    }

    let longestString = strings[0];
    for (let i = 1; i < strings.length; i++) {
      if (strings[i].length > longestString.length) {
        longestString = strings[i];
      }
    }

    return longestString;
  }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
15) Given an array of integers, write a function sumPairs that finds two numbers in the array that add up to a given sum. The function should return an array containing the indices of the two numbers.
    For example, if the input array is [2, 5, 6, 7, 10, 11, 13] and the sum is 16, the function should return [2, 4], since the numbers at indices 2 and 4 (6 and 10) add up to 16.
    If there are multiple pairs of numbers that add up to the sum, return the indices of the first pair found. If there are no such pairs, return an empty array.
    
    function getSumPairs(arr, sum) {
      let pairs = [];
      let length = arr.length;

      for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
          if (arr[i] + arr[j] === sum) {
            pairs.push([arr[i], arr[j]]);
          }
        }
      }
      return pairs;
    }

    //                        alternative 

    function getSumPairs(arr, sum) {
      let pairs = [];
      let map = new Map();

      for (let i = 0; i < arr.length; i++) {
        let complement = sum - arr[i];

        if (map.has(complement)) {
          pairs.push([complement, arr[i]]);
        }

        map.set(arr[i], i);
      }

      return pairs;
    }

