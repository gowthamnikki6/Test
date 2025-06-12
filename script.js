// // ----- Task 1 -------

// let a = 3;

// let b = 5;

// // Step 2: Add B to A
// a = a + b;

// console.log(a)

// // Subtract original value of B from the updated A.

// b = a - b ;

// console.log(b)

// // Subtract the updated value of B from A.

// a = a - b

// console.log(a)

// // Now, A contains the original value of B, and B contains the original value of A.

// console.log(a,b)

// // Double the value of A.
// // Double the value of B.

// a = a * 2;
// b = b * 2;

// console.log(a,b)

// ----- Task 2 ------

// Whenever the percentage is Entered, then the following conditions must be satisfied.
//       a) Percentage between 40 to 50 => To print "Buy a pen."
//       b) Percentage between 50 to 60 => To print "Buy a Book."
//       c) Percentage between 60 to 70 => To print "Buy a Bag."
//       d) Percentage between 70 to 80 => To print "Buy a Watch."
//       e) Percentage between 80 to 90 => To print "Buy a Mobile."
//       f) Percentage between 90 to 100 => To print "Buy an Laptop."
//       g) otherwise => To print "Fail"

// let percentage;
// function percentageCheck(percentage) {
//   switch (true) {
//     case (percentage >= 40 && percentage < 50):
//       console.log("Buy a pen.");
//       break;
//     case (percentage >= 50 && percentage < 60):
//       console.log("Buy a Book.");
//       break;
//     case (percentage >= 60 && percentage < 70):
//       console.log("Buy a Bag.");
//       break;
//     case (percentage >= 70 && percentage < 80):
//       console.log("Buy a Watch.");
//       break;
//     case (percentage >= 80 && percentage < 90):
//       console.log("Buy a Mobile.");
//       break;
//     case (percentage >= 90 && percentage <= 100):
//       console.log("Buy a Laptop.");
//       break;
//     default:
//       console.log("Fail.");
//   }
//   return percentage;
// }
// percentageCheck(50)

// ----- Task 3 ------

// check if a number is an even or odd. then the following conditions must be satisfied.
//      a) "given Number is Even and to print double of the number"
//      b) "given Number is odd and to print adding by two"
//  Steps :
// Let the given number be N.
// Check if N is divisible by 2.
// If N is divisible by 2 (i.e., N % 2 equals 0), then it's even.
// Print "The given number is even."
// Print "Double of the number is: " followed by 2 times N.
// If N is not divisible by 2 (i.e., N % 2 is not equal to 0), then it's odd.
// Print "The given number is odd."
// Print "Adding 2 to the number results in: " followed by N + 2.

// function checkEvenOdd(N){
//     if(N % 2 === 0){
//         console.log( " Given number is even &", "double of the number is " + (N * 2));
//     }
//     else if(N % 2 != 0){
//         console.log( " Given number is odd &", "double of the number is " + (N + 2));
//     }
// }

// checkEvenOdd(10);

//----- Task 4 -------

// function basicCalculator() {
//     const firstNumber = parseFloat(prompt("Enter the first number:"));

//     const operation = prompt("Enter the operation (+, -, *, /):");

//     const secondNumber = parseFloat(prompt("Enter the second number:"));

//     let result;

//     switch (operation) {
//         case '+':
//             result = firstNumber + secondNumber;
//             break;
//         case '-':
//             result = firstNumber - secondNumber;
//             break;
//         case '*':
//             result = firstNumber * secondNumber;
//             break;
//         case '/':
//                 result = firstNumber / secondNumber;

//             break;
//         default:
//             result = " Invalid operation.";
//     }

//     alert(`The result is: ${result}`);
// }

// basicCalculator();

//------- Task 5 ---------

// let sum = 0;
// let displycurrNum = "";

// for(let i=1; i<=10; i++){
// sum = sum + i;
// displycurrNum += i;
// console.log(sum)
// if (i < 10){
//     displycurrNum += "+";
// }
// console.log(sum,`${displycurrNum}`)
// }

//------- Task 6 ------------
// let givenNumber = 5;
// let factorial = 1;
// let displyFactorial = "";

// for (let i = givenNumber; i >= 1; i--) {
//   factorial *= i;
//   displyFactorial += i;
//   if (givenNumber > 1) {
//     displyFactorial += "*";
//   }
// }
// console.log(givenNumber, factorial, displyFactorial);

//--------- Task 7-------

// let givenNumber = 5;

// for(let i = 1; i <= 10; i++){

//       let multiplication = givenNumber*i

//     console.log(givenNumber,i,multiplication)
// }

//---------Task 8 ---------------

// let list1 = [1,2,3,4,5,7,9];

// let list2 = [5,6,7,8,9,2,4];
// var x = 0;

// function foo() {
//     x++;
//     this.x = x;
//     return foo;
// }

// var bar = new new foo;
// console.log(bar.x);
// var x = 1;
// if (function f() {}) {
//     x += typeof f;
// }
// console.log(x);
// console.log(0.1 + 0.2 === 0.3);

// var x = 5;
// (function() {
// console.log(x);
// var x = 10;
// })()
// console.log('hello'.indexOf('o'));

// var x = 1;
// var output = (function() {
// delete x;
// return x;
// })();
// console.log(output);
// console.log(typeof null);
// console.log(2 + "2" - 1)

// function findLargest(a, b, c) {
//     let largest;

//     if (a >= b && a >= c) {
//         largest = a;
//     } else if (b >= a && b >= c) {
//         largest = b;
//     } else {
//         largest = c;
//     }

//     return largest;
// }
// console.log(findLargest(12,15,11));
// const num1 = 10; // Change these values to test
// const num2 = 20;
// const num3 = 15;

// const largest = findLargest(num1, num2, num3);
// console.log(`The largest number is: ${largest}`);

// function factorialIterative(n) {
//     if (n < 0) {
//         return "Factorial is not defined for negative numbers.";
//     }
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i; // Multiply result by each number from 2 to n
//     }
//     return result;
// }

// // Example usage:
// const number = 5; // Change this to any number you want
// console.log(`Factorial of ${number} is ${factorialIterative(number)}`);
// let n= 10;
// for (let i = n; i >= 1; i--) {
//     console.log(i);
// }
// const numbers = [1, 2, 3, 4, 5];
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i]; // Add each element to the sum
//     }
// console.log(sum)

// const vowels = 'aeiouAEIOU'; // Define the vowels
// let count = 0; // Initialize the count

// for (let i = 0; i < vowels.length; i++) {
//     if (vowels.includes(vowels[i])) {
//         count++; // Increment count if the character is a vowel
//     }
// }
// console.log(count);

// function findCommonElements(arr1, arr2) {
//   const commonElements = [];

//   for (let i = 0; i < arr1.length; i++) {
//     const number = arr1[i];
//     for (let j = 0; j < arr2.length; j++) {
//       if (number === arr2[j]) {
//         commonElements.push(number);
//         break;
//       }
//     }
//   }
//   console.log("Common Elements:", commonElements);
// }
//  const array1 = [1,2,3,4,5];

//  const array2 = [4,5,6,7,8];

//  findCommonElements(array1, array2)

//--------------Task 9 ---------------

// let num = 10;

// let isPrime = true;

// if(num < 2){
//     isPrime = false;
// }else{
//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if( num % i === 0){
//             isPrime = false;
//             break;
//         }
//     }
// }

// if(isPrime){
//     console.log(`${num} is a prime number`);
// }else{
//     console.log(`${num} is not a prime number`);
// }

//---------Task 10-----------

// const array = [1,2,3,4,5];

// const reverseArray = [];

// for(let i = array.length-1; i >= 0; i--){
//    reverseArray.push(array[i])
//    console.log(reverseArray)
// }

//---------Task 11---------------

// const numbers = [3,5,7,8,1,4];

// let max = numbers[0];

// for(let i = 1 ; i< numbers.length; i++){
//     if(numbers[i] > max){
//         max = numbers[i];
//     }
// }
// console.log(max);

// let myObj = {
//     id: 6,
//     name: "Nikhil",
//     surname: "Pagidimarri",
//     age: 31,
// }

// for(let items in myObj){
//     console.log(myObj[items]);
// }

// const users = [
//     { id: 1, name: "A", age: 25 },
//     { id: 2, name: "B", age: 30 },
//     { id: 3, name: "C", age: 22 }
//   ];

//   const  userIdToUpdate = 2;

// const newAge = 35;
// let userFound = false;

// for(let i = 0; i < users.length; i++){

//     if(users[i].id === userIdToUpdate){
//         users[i].age = newAge;
//         userFound = true;
//         break;
//     }

// }
// if(!userFound){
//     console.log(`${userIdToUpdate}`)
// }
// console.log(users)

// function fibonacciSeries(numbers) {
//   let fistNum = 0;
//   let secondNum = 1;
//   console.log(fistNum);
//   for (let i = 1; i < numbers; i++) {
//     let next = fistNum + secondNum;
//     fistNum = secondNum;
//     secondNum = next;
//     console.log(fistNum);
//   }
// }
// const num = 10;
// fibonacciSeries(num);

// function isPalindrome(str) {
//     let start = 0;
//     let end = str.length - 1;

//     // Step 3: Use a while loop to iterate through the string
//     while (start < end) {
//         // Step 4: Compare characters at the start and end
//         if (str[start] !== str[end]) {
//             // Step 5: Return false if characters are not the same
//             return false;
//         }
//         // Move towards the middle
//         start++;
//         end--;
//     }

//     return true;
// }

// function isPalindrome(str){

//     let start = 0;
//     let end = str.length - 1;

//     while( start < end){

//         if(str[start] !== str[end]){
//             return false;
//         }
//         start++;
//         end--;
//     }
// return true;
// }
// // Step 7: Test the function with example strings
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello"));   // false
// console.log(isPalindrome("madam"));   // true
// console.log(isPalindrome("12321"));   // true
// console.log(isPalindrome("abcba"));   // true
// console.log(isPalindrome("abcd"));    // false

// function checkEvenOrOdd(a){

//     if( a % 2 === 0 ){
//         console.log("even");

//     }else {
//         console.log("odd");
//     }
// }

// checkEvenOrOdd(7)

// problem 1 sum of natural numbers
// function sumOfNaturalNumbers(n){
//     let sum = 0;
//     for(let i = 1; i <= n; i++){
//         sum += i;
//     }
//     return sum
// }
// console.log(sumOfNaturalNumbers(10))

// Problem 2 factorial of a Number

// function factorial(n){
//     let result = 1;
//     for(let i = 1; i <= n; i++){
//         console.log(i);
//         result *= i;
//     }
//     return result
// }
// console.log(factorial(5))

// Problem 3 fibonacci sequence

// function fibonacci(n){
//     let sequence = [0,1];
//     for(let i = 2; i < n; i++){
//         sequence.push(sequence[i - 1] + sequence[i - 2]);
//         console.log(i,sequence)
//     }
//     return sequence.slice(0,n);
// }
// console.log(fibonacci(10))

// Problem 4: Reverse a String

// function reversedString(str){
//     let reversed = '';
//     for(let i = str.length-1; i >= 0; i--){
//         // console.log(i);
//         reversed += str[i];
//         console.log(i);

//     }
//     return reversed;
// }
// console.log(reversedString('aphsuP'));

// Problem 5: Check Prime Number

// function isPrime(n){
//     if(n <= 1) return false;
//     for(let i = 2; i <= Math.sqrt(n); i++){
//         if( n % i === 0) return false;
//     }
//     return true;
// }

// console.log(isPrime(17))

// Problem 6: Find the Largest Element in an Array

// function findLargest(arr){
//     let largest = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i];
//         }
//     }
//     return largest;
// }

// console.log(findLargest([3,4,6,9,7,5]));

// Problem 7: Count Vowels in a String

// function countVowels(str){
//     const vowels = "aeiouAEIOU";
//     let count = 0;
//     for(let char of str){
//         // console.log(char)
//         if(vowels.includes(char)){
//             // console.log(char)
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("hello"));

// Problem 8: Find the GCD of Two Numbers

// function gcd(a,b){
//     while( b !== 0){
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a
// }
// console.log(gcd(56,98))

// Problem 9: Remove Duplicates from an Array

// function removeDuplicates(arr){
//     let uniqueArr = [];
//     for(let i = 0; i < arr.length; i++){
//         if(!uniqueArr.includes(arr[i])){
//             uniqueArr.push(arr[i])
//         }
//     }
//     return uniqueArr;
// }
// console.log(removeDuplicates([1,5,6,2,4,5,6,2,3,9,8,5,4,1,2]))

// Problem 10: Check Palindrome

// function isPalindrome(str){
//     let reversed = '';
//     for( let i = str.length - 1; i >= 0 ; i--){
//         reversed += str[i];
//     }
//     return reversed === str;
// }
// console.log(isPalindrome("madam"));

// Problem 11: Find the Second Largest Element in an Array

// function findSecondLargest(arr){
//     let largest = -Infinity;
//     let secondLargest = -Infinity;
//     for( let num of arr){
//         if(num > largest){
//             secondLargest = largest;
//             largest = num;
//         } else if( num > secondLargest && num != largest){
//             secondLargest = num;
//         }
//     }
//     return secondLargest;
// }
// console.log(findSecondLargest([1,5,9,7,5,6,8,10,12]))

// Problem 12: Sum of Digits

// function addSumOfDigits(num){
//     let sum = 0;
//     while(num > 0){
//         sum += num % 10;
//         num = Math.floor(num / 10);
//     }
//     return sum;
// }
// console.log(addSumOfDigits(12568))

// Problem 13: Convert Decimal to Binary

// function decimalToBinary(num){
//     let binary = '';
//     while( num > 0){
//         binary = (num % 2) + binary;
//         num = Math.floor( num / 2);
//     }
//     return binary || '0'
// }
// console.log(decimalToBinary(100))

// Problem 14: Count Occurrences of a Character

// function countOccurrences(str, char){
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === char){
//             count++;
//             console.log(count)
//         }
//     }
//     return count;
// }
// console.log(countOccurrences("boom hello", "o",))

// Problem 15: Check for Anagram

// function areAnagrams(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   const charCount = {};
//   for (let char of str1) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   for (let char of str2) {
//     if (!charCount[char]) return false;
//     charCount[char]--;
//   }
//   return true;
// }
// console.log(areAnagrams("silent", "listen"));

// Problem 16: Find the Minimum Element in an Array

// function minElementArray(arr){
//     let min = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//         }
//     }
//     return min;
// }
// console.log(minElementArray([9,4,7,6,5,6]))

// Problem 17: Generate a Multiplication Table

// function multiplicationTable(num, length){
//     let table = [];
//     for(let i = 0; i <= length; i++){
//         table.push(`${num}*${i} = ${num*i}`)
//     }
//     return table
// }
// console.log(multiplicationTable(5,10))

// Problem 18: Find the Length of the Longest Word

// function findLargest(sentense) {
//   const words = sentense.split(' ');
//   let longest = 0;
//   for (let word of words) {
//     if (word.length > longest) {
//       longest = word.length;
//     }
//   }
//   return longest;
// }
// console.log(findLargest("The quick brown fox jumped over the lazy dog"));

// Problem 19: Count the Number of Words in a Sentence

// function countNoOfWords(sentense){
//     const words = sentense.split(' ');
//     return words.length;
// }
// console.log(countNoOfWords('hi how are you namasthe'))

// Problem 20: Find the Intersection of Two Arrays

// function intersectionArrays(arr1, arr2){
//     let set1 = new Set(arr1);
//     let set2 = new Set(arr2);
//     let intersection = [];
//     for(let item of set2){
//         if(set1.has(item)){
//             intersection.push(item);
//         }
//     }
//     return intersection;
// }
// console.log(intersectionArrays([1,2,3,4,5,6],[3,4,5,6,7,8]))

// Problem 21: Merge Two Sorted Arrays

// function mergeTwoSortedArrays(arr1, arr2){
//     let mergedArrays = [];
//     let i = 0, j = 0;
//     while( i < arr1.length && j < arr2.length){
//         if(arr1[i] < arr2[j]){
//             mergedArrays.push(arr1[i]);
//             i++;
//         } else{
//             mergedArrays.push(arr2[j]);
//             j++;

//         }
//     }
//     while(i < arr1[i]){
//         mergedArrays.push(arr1[i]);
//         i++;
//     }
//     while(j < arr2[j]){
//         mergedArrays.push(arr2[j]);
//         j++
//     }
//     return mergedArrays;
// }
// console.log(mergeTwoSortedArrays([1,2,3,4],[4,5,8]))

//
// Problem 22: Remove All Occurrences of a Given Value from an Array

// function removeAllOccurrences(arr, value){
//     return arr.filter(item => item !== value);
// }
// console.log(removeAllOccurrences([1,2,3,4,2,5,6,2],2))

// Problem 23: Find the Nth Fibonacci Number

// function fibonacci(n){
//     if(n <= 1) return n;
//     let a = 0,
//     b = 1,
//     fib = 1;
//     for(let i = 2; i <= n ; i++){
//         fib = a + b;
//         a = b;
//         b = fib;
//         console.log(b)
//     }
//     return fib;
// }
// console.log(fibonacci(10))

// Problem 24: Generate All Prime Numbers Up to N

// function generatePrimeNumbers(n){
//     let primes = [];
//     for(let i = 2; i <= n; i++){
//         let isPrime = true;
//         for(let j = 2; j <= Math.sqrt(i); j++){
//             if(i%j === 0){
//                 isPrime = false;
//             }
//         }
//         if(isPrime){
//             primes.push(i);
//         }
//     }
//     return primes;
// }
// console.log(generatePrimeNumbers(30));

// Problem 25: Check if a String Contains Only Digits

// function checkStringContainsOnlyDigits(str){
//     for(let char of str){
//         if( char < '0' || char > '9'){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(checkStringContainsOnlyDigits('12354asf6'))
// console.log(checkStringContainsOnlyDigits('12356'))

// Problem 26: Find the Most Frequent Element in an Array

// function mostFrequentElement(arr){
//     let frequency = {};
//     let maxFreq = 0;
//     let mostFrequent = 0;
//     for(let item of arr){
//         frequency[item] = (frequency[item] || 0) + 1;
//         if(frequency[item] > maxFreq){
//             maxFreq = frequency[item];
//             mostFrequent = item;
//         }
//     }
//     return mostFrequent;
// }
// console.log(mostFrequentElement([1,2,6,3,4,5,3,1,5,3,8,1,1]))

// Problem 27: Calculate the Power of a Number

// function caluculatePowerOfNum(x, y){
//     let result = 1;
//     for(let i = 0; i < y; i++){
//         result *= x;
//     }
//     return result;
// }
// console.log(caluculatePowerOfNum(3,3))

// Problem 28: Check if a Number is a Perfect Square

// function isPerfectSquare(num){
//     let sqrt = Math.sqrt(num);
//     return sqrt === Math.floor(sqrt);
// }
// console.log(isPerfectSquare(4))

// Problem 29: Find the First Non-Repeated Character in a String

// function nonRepeatedChar(str){
//     let charCount = {};
//     for(let char of str){
//         charCount[char] = (charCount[char] || 0) + 1;
//     }
//     for(let char of str){
//         if(charCount[char] === 1){
//             return char;
//         }
//     }
//     return null;
// }
// console.log(nonRepeatedChar('swiss'))

// Problem 30: Find the Sum of Elements in an Array

// function sumOfElements(arr){
//     let sum = 0;
//     for(let num of arr){
//         sum += num;
//     }
//     return sum;
// }
// console.log(sumOfElements([1,2,3,4,5,6]))

// Problem 31: Check if Two Strings are Rotations of Each Other

// function areRotationOfEachOther(str1, str2){
//     if(str1.length !== str2.length) return false;
//     return (str1 + str1).includes(str2)
// }
// console.log(areRotationOfEachOther("abcd","dacb"));
// console.log(areRotationOfEachOther("abcd","bcda"));

// Problem 32: Find the Maximum Sum of a Subarray

// function maxSubArrSum(num){
//     let maxSoFar = num[0];
//     let maxEndHere = num[0];
//     for( let i = 1; i < num.length; i++){
//         maxEndHere = Math.max(num[i], (maxEndHere + num[i]));
//         maxSoFar = Math.max(maxEndHere, maxSoFar);
//     }
//     return maxSoFar;
// }
// console.log(maxSubArrSum([-2,-5,6,-2,-3,1,5,-6]));

// Problem 33: Flatten a Nested Array

// function nestedArray(arr){
//     let flattened = [];
//     for(let item of arr){
//         if(Array.isArray(item)){
//             flattened = flattened.concat(nestedArray(item));
//         }else{
//             flattened.push(item);
//         }
//     }
//     return flattened;
// }
// console.log(nestedArray([2,[3,4],[5,[6,7],8]]));

// Problem 34: Find the Missing Number in an Array

// function missingNumInArray(arr, n){
//     let expectedSum = (n*(n+1))/2;
//     let actualSum = arr.reduce((a,b) => a+b,0);
//     console.log(actualSum)
//     return expectedSum-actualSum;
// }
// console.log(missingNumInArray([1,2,4,5,6,7],7))

// Problem 35: Find the Longest Common Prefix

// function longestCommonPrefix(strs){
//     if(strs.length === 0) return "";
//     let prefix = strs[0];
//     for(let i = 1; i < strs.length; i++){
//         while(strs[i].indexOf(prefix) !== 0){
//             prefix = prefix.substring(0,prefix.length-1)
//             if(prefix === "") return "";
//         }
//     }
//     return prefix;
// }
// console.log(longestCommonPrefix(["dancer","darling","darjiling"]))

// Problem 36: Implement Binary Search

// function implementBinarySearch(arr, target){
//     let left = 0;
//     let right = arr.length-1;
//     while(left <= right){
//         let mid = Math.floor((left + right)/2);
//         if(arr[mid] === target) return mid;
//         if(arr[mid] < target) left = mid + 1;
//         else right = mid - 1;
//     }
//     return -1;
// }
// console.log(implementBinarySearch([1,2,3,4,5,6,7,8,9],5))

// Problem 37: Rotate an Array to the Right by K Steps

// function rotateArray(arr, k){
//     k = k % arr.length;
//     console.log(arr.slice(-k),arr.slice(0,-k))
//     return arr.slice(-k).concat(arr.slice(0,-k));
// }
// console.log(rotateArray([1,2,3,4,5,6,7],2))

// Problem 38: Find the Median of Two Sorted Arrays

// function medianOfTwoSortedArrays(nums1, nums2){-+5689777779-*9666666666666666666666666666666/852477645712222222222222222222222222222220000
//     let merged = nums1.concat(nums2).sort((a,b) => a-b);
//     let len = merged.length;
//     if(len % 2 === 0){
//         return (merged[len/2 -1]+merged[len/2])/2;
//     }else{
//         return merged[Math.floor(len/2)];
//     }
// }
// console.log(medianOfTwoSortedArrays([1,3],[2]));
// console.log(medianOfTwoSortedArrays([1,3],[2,4]));

// Problem 39: Find All Unique Combinations of Elements that Sum to a Target

// function combinationsSum(arr, target){
//     let result = [];
//     arr.sort((a, b) => a - b);
//     function backTrack(temp, start, remaining){
//         if(remaining === 0){
//             result.push([...temp]);
//             return;
//         }
//         for(let i = start; i < arr.length; i++){
//             if(i > start && arr[i] === arr[i]-1) continue;
//             if(arr[i] > remaining) break;
//             temp.push(arr[i]);
//             backTrack(temp,i,remaining-arr[i]);
//             temp.pop()
//         }

//     }
//     backTrack([],0,target);
//     return result;
// }
// console.log(combinationsSum([2,3,6,7],7));

// Problem 40: Generate All Permutations of an Array

// function permutaton(arr){
//     let result = [];
//     function backTrack(temp, remaining){
//         if(remaining.length === 0){
//             result.push([...temp]);
//             return;
//         }
//         for(let i = 0; i < remaining.length; i++){
//             temp.push(remaining[i]);
//             backTrack(temp,remaining.slice(0,i).concat(remaining.slice(i+1)));
//             temp.pop();

//         }

//     }
//     backTrack([],arr);
//     return result;
// }
// console.log(permutaton([1,2,3]))

// let str = "let";
// let permutation = (str, result) =>
// {
//     if(str.length == 0){
//         console.log(result)
//     }
//     for(let i = 0; i < str.length; i++){
//         let rest = str.substring(0,i) + str.substring(i + 1)
//     permutation(rest, result + str[i])
//     }
    
// }
// permutation(str,'')

// const calculateSpeed = (firstHalfSpeed, secondHalfSpeed)=>{
//     let distance = 1;
//     let time1 = 1/firstHalfSpeed;
//     let time2 = 1/secondHalfSpeed;
//     let speed = (distance+distance)/(time1+time2);
//     return speed;

// }
// const result = calculateSpeed(40, 60)
// console.log(`The avg speed is ${result.toFixed(1)}`)

// const calculateDistance = (speed, time) => {
//     let correctSpeed = speed * 18/5;
//     let distance = correctSpeed*time;
//     return distance;
// }
// const result = calculateDistance(12, 15/4);
// console.log(`${result}`)

// const isPrime = (num) => {
//     if(num < 2){
//         return false;
//     }
//     for(i =2; i < num; i++){
//         if(num % i === 0){
//             return false;
//         }
//         return true;
//     }
// }
// console.log(isPrime(1901))

// const generateFib = (number) => {
//     let n1 = 0;
//     let n2 = 1;
//     let sum;
//     let fib = [];
//     for(let i = 1; i <= number; i++){
//         fib.push(n1);
//         sum = n1 + n2;
//         n1 = n2;
//         n2 = sum;
//     }
//     return fib;
// }
// console.log(generateFib(5))


// const isPalindrome = (input) => {
//     const str = String(input);
//     for(let i = 0; i < str.length/2; i++){
//         console.log(i);
//         if(str[i] !== str[str.length -1 -i]){
//             console.log(i);
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPalindrome('madam'))

// const calculateReverse = (input) => {
//     let str = String(input);
//     let reversed = '';
//     for(let i = str.length-1; i >= 0; i-- ){
//          reversed = reversed + str[i];
//     }
//     return reversed;
// }
// console.log(calculateReverse(12456))

// const calculateFactorial = (number) => {
//     if(number === 0 || number === 1){
//         return 1;
//     }
//     let result = 1;
//     for( let i = 1; i <= number; i++){
//         result = result * i;
//         console.log(result,i)
//     }
//     return result;
// }
// console.log(calculateFactorial(5))

// let sum = (num1,num2) =>{
//     console.log(num1+num2);
// }
// sum(10,10)

// let heading = document.querySelector(".paragraph");
// heading.classList.remove('paragraph');
// heading.classList.add('newParagraph-class')
let heading = document.querySelector('h1')
let button = document.querySelector('.button');
button.addEventListener('click', ()=>{
    button.innerHTML = " This is changed";
    heading.innerHTML = "I am also changed";
    heading.style.cssText = "color:red";
    button.classList.remove('button')
})
