let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

function imperativeFn() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// console.log(imperativeFn());

function declarativeFn() {
  let sum = 0;
  //   let cb = ;
  arr.forEach(function (item) {
    // console.log(item, i);
    sum += item;
  });
  console.log(`Result : `, sum);
  return sum;
}

// declarativeFn();

// Arrow function

// function sum(a, b) {
//   return a + b;
// }

// let sum = (a, b) => a + b;

// let sum = (a, b) => {
//   return a + b;
// };

/** Problem 1 : Convert lower case words to Upper case */
let wordsArr = ["apple", "banana", "mango", "grapes"];
// Output : ['APPLE', 'BANANA','MANGO','GRAPES']

function convertToUpperImperativeFn() {
  let result = [];
  for (let i = 0; i < wordsArr.length; i++) {
    const upperValue = wordsArr[i].toUpperCase();
    result.push(upperValue);
  }
  return result;
}

function convertToUpperDeclarativeFn() {
  /**
   * Below code is using forEach which do not return anything
   */
  //   let result = [];
  //   wordsArr.forEach(function (word) {
  //     result.push(word.toUpperCase());
  //     // console.log(typeof result);
  //   });
  //   return result;

  /**
   * Below code is using map which returns new array with modified values
   */
  let upperCaseArray = wordsArr.map(function (word) {
    return word.toUpperCase();
  });

  return upperCaseArray;
}

// console.log(`Imperative function :`, convertToUpperImperativeFn());
// console.log(`Decalative function :`, convertToUpperDeclarativeFn());

/** Problem 2 : Write function to convert each value to muiply by 2 */
// Input : [1,2,3,4];
// Output : [2,4,6,8];
let nums = [1, 2, 3, 4];

function multiplyTwoImperativeFn() {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i] * 2);
  }
  return result;
}

function multiplyTwoDecalativeFn() {
  // Approach 1: using map higher order function.
  let result = nums.map(function (num) {
    return num * 2;
  });
  return result;
}

// console.log(`Imperative function :`, multiplyTwoImperativeFn());
// console.log(`Declaraive function :`, multiplyTwoDecalativeFn());

/** Problem 3 : Write function to filter all the even values from an array */
let numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 10];

function filterEvenDeclarativeFn() {
  let result = numsArray.filter(function (item) {
    return item % 2 === 0;
  });
  return result;
}

// console.log(`Declaraive function :`, filterEvenDeclarativeFn());

/** Problem 4 : Write function to find sum of all values from an array */
function sumDeclarativeFn() {
  let result = numsArray.reduce(function (acc, item) {
    acc += item;
    return acc;
  }, 0);

  return result;
}

// console.log(`Declaraive function :`, sumDeclarativeFn());

/** Problem 5 : Write function to find sum of all values from an array */
const strArray = ["My", "name", "Is", "Nikhil"];
// output : My name is Nikhil
function generateStatementDecalativeFn() {
  let result = strArray.reduce(function (acc, item) {
    acc += item + " ";

    return acc;
  }, "");
  return result;
}

console.log(`Declaraive function :`, generateStatementDecalativeFn());
