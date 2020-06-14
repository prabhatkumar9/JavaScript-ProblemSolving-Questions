# Interview Algorithm Questions in Javascript() {...}

_A mostly reasonable collection of technical software development interview questions try to solve using Javascript_

## Table of Contents

1. [Array](#array)
1. [Strings](#strings)
1. [Stacks and Queues](#stacks-and-queues)
1. [Recursion](#recursion)
1. [Numbers](#numbers)

## Array

<a name="array--product"></a><a name="1.1"></a>

- **[1.1](#array--product) Given an array of integers, find the largest product yielded from three of the integers**

  ```javascript
  var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

  computeProduct(unsortedArray); // 21000

  //Write your program here
  function computeProduct(arr) {
    if (arr.length < 3) {
      console.log("no triplets are there");
      return 1;
    }

    let maxProduct = 0;
    let temp = 0;
    for (let i = 0; i < arr.length - 2; ++i) {
      for (let j = i + 1; j < arr.length - 1; ++j) {
        for (let k = j + 1; k < arr.length; ++k) {
          temp = arr[i] * arr[j] * arr[k];
          if (temp > maxProduct) {
            maxProduct = temp;
          }
        }
      }
    }
    return maxProduct;
  }
  ```

console.log(computeProduct(unsortedArray));

````

<a name="array--consecutive--sum"></a><a name="1.2"></a>
- **[1.2](#array--consecutive--sum) Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in `O(n)` time**
```javascript
// The output of the function should be 8
var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
var upperBound = 9;
var lowerBound = 1;

//Write your program here
function findMissinngNumber(arr) {
  let lenOfarray = arr.length;
  let sumOfConsicutiveNumber = 0;
  for (let i = 1; i <= lenOfarray + 1; ++i) {
    sumOfConsicutiveNumber += i;
  }

  let sum = arrayOfIntegers.reduce((a, b) => {
    return a + b;
  }, 0);

  return sumOfConsicutiveNumber - sum;
}

console.log(findMissinngNumber(arrayOfIntegers));
````

<a name="array--unique"></a><a name="1.3"></a>

- **[1.3](#array--unique) Removing duplicates of an array and returning an array of only unique elements**

  ```javascript
  // ES6 Implementation
  var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

  //Write your program here
  var unique = array.filter((cv, i, arr) => arr.indexOf(cv) === i);
  console.log(unique);
  ```

<a name="array--largest-difference"></a><a name="1.4"></a>

- **[1.4](#array--largest-difference) Given an array of integers, find the largest difference between two elements such that the element of lesser value must come before the greater element**

  ```javascript
  var array = [7, 8, 4, 9, 9, 15, 3, 1, 10];

  findLargestDifference(array);

  //Write your program here
  function findLargestDifference(arr) {
    // Maximum difference
    let maxDifference = arr[1] - arr[0];
    // Minimum number
    let min_element = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - min_element > maxDifference) {
        maxDifference = arr[i] - min_element;
      }

      if (arr[i] < min_element) {
        min_element = arr[i];
      }
    }
    return maxDifference;
  }
  console.log(findLargestDifference(array));
  ```

<a name="array--product-other-than-itself"></a><a name="1.5"></a>

- **[1.5](#array--product-other-than-itself) Given an array of integers, return an output array such that output[i] is equal to the product of all the elements in the array other than itself. (Solve this in O(n) without division)**

  ```javascript
  var firstArray = [2, 2, 4, 1];
  var secondArray = [0, 0, 0, 2];
  var thirdArray = [-2, -2, -3, 2];

  //Write your program here
  function product(arr) {
    let res = [];
    let t1 = new Array();
    let t2 = new Array();
    t1[0] = 1;
    t2[arr.length - 1] = 1;
    //   left to right
    for (let i = 0; i < arr.length; i++) {
      t1[i + 1] = arr[i] * t1[i];
    }
    //   right to left
    for (let i = arr.length - 1; i > 0; i--) {
      t2[i - 1] = t2[i] * arr[i];
    }
    // multiply
    for (let i = 0; i < arr.length; i++) {
      res[i] = t1[i] * t2[i];
    }
    console.log(res);
  }
  product(array);
  ```

<a name="array--intersection"></a><a name="1.6"></a>

- **[1.6](#array--intersection) Find the intersection of two arrays. An intersection would be the common elements that exists within both arrays. In this case, these elements should be unique!**
  ```javascript
  var firstArray = [2, 2, 4, 1];
  var secondArray = [1, 2, 0, 2];
  ```

//Write your program here
function findIntersection(arr1, arr2) {
let result = [];
for (let i = 0; i < arr1.length; ++i) {
for (let j = 0; j < arr2.length; ++j) {
if (arr1[i] == arr2[j]) {
if (!result.includes(arr1[i])) {
result.push(arr1[i]);
}
}
}
}
console.log(result);
}
findIntersection(firstArray, secondArray);

````

**[⬆ back to top](#table-of-contents)**

## Strings
<a name="string--reverse"></a><a name="2.1"></a>
- **[2.1](#string--reverse) Given a string, reverse each word in the sentence**
`"Welcome to this Javascript Guide!"` should be become `"emocleW ot siht tpircsavaJ !ediuG"`
```javascript
var string = "Welcome to this Javascript Guide!";

//Write your program here
function reverseString(str) {
  let result = "";
  let temp = str.split(" ");

  temp.forEach((element) => {
    // console.log(element.split("").reverse().join(""));
    result += element.split("").reverse().join("") + " ";
  });

  console.log(result);
}
reverseString(string);
````

<a name="string--anagram"></a><a name="2.2"></a>

- **[2.2](#string--anagram) Given two strings, return true if they are anagrams of one another**
  `"Mary" is an anagram of "Army"`

  ```javascript
  var firstWord = "Mary";
  var secondWord = "Army";

  //Write your program here
  function findAnagrams(str1, str2) {
    let arr1 = str1.toLowerCase().split("").sort();
    let arr2 = str2.toLowerCase().split("").sort();

    if (arr1.length !== arr2.length) {
      return false;
    } else {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
          return false;
        }
      }
      console.log('"' + str1 + '" is an anagram of "' + str2 + '"');
      return true;
    }
  }
  console.log(findAnagrams(firstWord, secondWord));
  ```

  <a name="string--palindrome"></a><a name="2.3"></a>

- **[2.3](#string--palindrome) Check if a given string is a palindrome**
  `"racecar" is a palindrome. "race car" should also be considered a palindrome. Case sensitivity should be taken into account`

  ```javascript
  isPalindrome("racecar"); // true
  isPalindrome("race Car"); // true

  //Write your program here
  function isPalindrome(str) {
    // remove symbols and comma, dots form string
    // contains only  characters
    var re = /[^A-Za-z0-9]/g;
    let str1 = str.toLowerCase().replace(re, "");
    var len = str1.length;
    for (let i = 0; i < len / 2; i++) {
      if (str1[i] !== str1[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  console.log(isPalindrome(s));
  ```

<a name="string--isIsomorphic"></a><a name="2.4"></a>

- **[2.4](#string--palindrome) Check if a given string is a isomorphic**

  ```
    For two strings to be isomorphic, all occurrences of a character in string A can be replaced with another character
    to get string B. The order of the characters must be preserved. There must be one-to-one mapping for ever char of
    string A to every char of string B.

    `paper` and `title` would return true.
    `egg` and `sad` would return false.
    `dgg` and `add` would return true.

    javascript
    isIsomorphic("egg", 'add'); // true
    isIsomorphic("paper", 'title'); // true
    isIsomorphic("kick", 'side'); // false

    //Write your program here
  ```

**[⬆ back to top](#table-of-contents)**

## Stacks and Queues

<a name="stack-queue--stack-as-queue"></a><a name="3.1"></a>

- **[3.1](#stack-queue--stack-as-queue) Implement enqueue and dequeue using only two stacks**

  ```javascript
  var inputStack = []; // First stack
  var outputStack = []; // Second stack

  //Write your program here
  ```

<a name="stack-queue--parentheses-balancing"></a><a name="3.2"></a>

- **[3.2](#stack-queue--parentheses-balancing) Create a function that will evaluate if a given expression has balanced parentheses -- Using stacks**
  In this example, we will only consider "{}" as valid parentheses
  `{}{}` would be considered balancing. `{{{}}` is not balanced

  ```javascript
  var expression = "{{}}{}{}";
  var expressionFalse = "{}{{}";

  isBalanced(expression); // true
  isBalanced(expressionFalse); // false
  isBalanced(""); // true

  //Write your program here
  ```

**[⬆ back to top](#table-of-contents)**

## Recursion

<a name="recursion--decimal-to-binary"></a><a name="4.1"></a>

- **[4.1](#recursion--decimal-to-binary) Write a recursive function that returns the binary string of a given decimal number**
  Given `4` as the decimal input, the function should return `100`

  ```javascript
  decimalToBinary(3); // 11
  decimalToBinary(8); // 1000
  decimalToBinary(1000); // 1111101000

  //Write your program here
  ```

<a name="recursion--binary-search"></a><a name="4.2"></a>

- **[4.2](#recursion--binary-search) Write a recursive function that performs a binary search**

  ```javascript
  function recursiveBinarySearch(array, value, leftPosition, rightPosition) {}
  ```

**[⬆ back to top](#table-of-contents)**

## Numbers

<a name="numbers--power-of-two"></a><a name="5.1"></a>

- **[5.1](#numbers--power-of-two) Given an integer, determine if it is a power of 2. If so,
  return that number, else return -1. (0 is not a power of two)**

  ```javascript
  isPowerOfTwo(4); // true
  isPowerOfTwo(64); // true
  isPowerOfTwo(1); // true
  isPowerOfTwo(0); // false
  isPowerOfTwo(-1); // false

  //Write your program here:
  ```

**[⬆ back to top](#table-of-contents)**
