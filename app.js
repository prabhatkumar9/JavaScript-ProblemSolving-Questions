// console.log("hello ")
// var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];
// function computeProduct(arr) {
//   if (arr.length < 3) {
//     console.log("no triplets are there");
//     return 1;
//   }
//   let maxProduct = 0;
//   let temp = 0;
//   for (let i = 0; i < arr.length - 2; ++i) {
//     for (let j = i + 1; j < arr.length - 1; ++j) {
//       for (let k = j + 1; k < arr.length; ++k) {
//         temp = arr[i] * arr[j] * arr[k];
//         if (temp > maxProduct) {
//           maxProduct = temp;
//         }
//       }
//     }
//   }
//   return maxProduct;
// }
// console.log(computeProduct(unsortedArray));

///////////////////////////////////////////////////
// var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
// function findMissinngNumber(arr) {
//   let lenOfarray = arr.length;
//   let sumOfConsicutiveNumber = 0;
//   for (let i = 1; i <= lenOfarray + 1; ++i) {
//     sumOfConsicutiveNumber += i;
//   }

//   let sum = arrayOfIntegers.reduce((a, b) => {
//     return a + b;
//   }, 0);

//   return sumOfConsicutiveNumber - sum;
// }

// console.log(findMissinngNumber(arrayOfIntegers));
////////////////////////////////////////////////////

// var myArray = ["a", 1, "a", 2, "1"];
// var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
// var unique = array.filter((cv, i, arr) => arr.indexOf(cv) === i);

// console.log(unique);
/////////////////////////////////////////////////////

// var array = [7, 8, 4, 9, 9, 15, 3, 1, 10];
// function findLargestDifference(arr) {
//   // Maximum difference
//   let maxDifference = arr[1] - arr[0];

//   // Minimum number
//   let min_element = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] - min_element > maxDifference) {
//       maxDifference = arr[i] - min_element;
//     }

//     if (arr[i] < min_element) {
//       min_element = arr[i];
//     }
//   }
//   return maxDifference;
// }

// console.log(findLargestDifference(array));
/////////////////////////////////////////////////

// function product(arr) {
//   let res = [];
//   let t1 = new Array();
//   let t2 = new Array();

//   t1[0] = 1;
//   t2[arr.length - 1] = 1;

//   //   left to right
//   for (let i = 0; i < arr.length; i++) {
//     t1[i + 1] = arr[i] * t1[i];
//   }

//   //   right to left
//   for (let i = arr.length - 1; i > 0; i--) {
//     t2[i - 1] = t2[i] * arr[i];
//   }

//   // multiply
//   for (let i = 0; i < arr.length; i++) {
//     res[i] = t1[i] * t2[i];
//   }
//   console.log(res);
// }
// let array = [1, 2, 3, 4];
// product(array);
/////////////////////////////////////////////////////////////

// var firstArray = [2, 2, 4, 1];
// var secondArray = [1, 2, 0, 2];

// function findIntersection(arr1, arr2) {
//   let result = [];
//   for (let i = 0; i < arr1.length; ++i) {
//     for (let j = 0; j < arr2.length; ++j) {
//       if (arr1[i] == arr2[j]) {
//         if (!result.includes(arr1[i])) {
//           result.push(arr1[i]);
//         }
//       }
//     }
//   }
//   console.log(result);
// }

// findIntersection(firstArray, secondArray);
/////////////////////////////////////////////////////////////

// var string = "Welcome to this Javascript Guide!";
// function reverseString(str) {
//   let result = "";
//   let temp = str.split(" ");

//   temp.forEach((element) => {
//     // console.log(element.split("").reverse().join(""));
//     result += element.split("").reverse().join("") + " ";
//   });

//   console.log(result);
// }
// reverseString(string);
////////////////////////////////////////////////////////////

// var firstWord = "Mary";
// var secondWord = "Army";

// function findAnagrams(str1, str2) {
//   let arr1 = str1.toLowerCase().split("").sort();
//   let arr2 = str2.toLowerCase().split("").sort();

//   if (arr1.length !== arr2.length) {
//     return false;
//   } else {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] != arr2[i]) {
//         return false;
//       }
//     }
//     console.log('"' + str1 + '" is an anagram of "' + str2 + '"');
//     return true;
//   }
// }
// console.log(findAnagrams(firstWord, secondWord));
//////////////////////////////////////////////////////////////////

let s = "race car";
function isPalindrome(str) {
  // remove symbols and comma, dots form string
  // contains only  characters
  var re = /[^A-Za-z0-9]/g;
  let str1 = str.toLowerCase().replace(re, "");

  //   let revString = str1.split("").join("");
  var len = str1.length;
  for (let i = 0; i < len / 2; i++) {
    if (str1[i] !== str1[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome(s));
