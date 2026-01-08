// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

// Example :

// Input: "hello"
// Output: "olleh"
const str = "hello";

const reverseString = (str) => {
  const reverseStr = str.split("").reverse().join("");
  console.log(reverseStr);
};
reverseString(str);

// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:

// Input: "programming"
// Output: 3
const str2 = "programing";
const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

const countVowel = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      count++;
    }
  }
  console.log(count);
};

countVowel(str2);

// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false
const str3 = "madam";
const isPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  console.log(reversedStr);
  if (str === reversedStr) {
    console.log(true);
  } else {
    console.log(false);
  }
};

isPalindrome(str3);

// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

// Example:

// Input: [5, 1, 9, 3]
// Output: 9

const arr = [5, 4, 8, 4, 10];

const maximumNumber = (arr) => {
  let maxNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  }
  console.log(maxNumber);
};

maximumNumber(arr);

// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

// Example:

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

const duplicateArr = [1, 2, 2, 3, 4, 4];
const removeDuplicate = (arr) => {
  console.log([...new Set(arr)]);
};

removeDuplicate(duplicateArr);

// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.

// Example:

// Input: [1, 2, 3, 4]
// Output: 10
const number = [1, 2, 3, 4];
const sumOfNumber = (arr) => {
  const total = arr.reduce((acc, value) => {
    return (acc += value);
  }, 0);
  console.log(total);
};
sumOfNumber(number);

// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

// Example:

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]
const mixedNumber = [1, 2, 3, 4, 5, 6];
const findEvenNumber = (arr) => {
  const evenNumber = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumber.push(arr[i]);
    }
  }
  console.log(evenNumber);
};

findEvenNumber(mixedNumber);

// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

// Example:

// Input: "hello world"
// Output: "Hello World"
const randomWords = "hello world";
const capitalizeFirstLetter = (sentence) => {
  const capitalizedArray = sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  console.log(capitalizedArray);
};

capitalizeFirstLetter(randomWords);

// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120

function factorialNumber(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  return n * factorialNumber(n - 1);
}

console.log(factorialNumber(5)); 

// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.

// Example:

// For multiples of 3, print "Ping"
// For multiples of 5, print "Pong"
// For multiples of both 3 and 5, print "PingPong"
// If the number is not a multiple of 3 or 5, print the number itself
// Example Output:

// 1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16 …..

function pingPong(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

pingPong(20);

