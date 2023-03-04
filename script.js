'use strict';

// /****************************************************************
//  *             CODERBYTE ARRAY ADDITION I CHALLENGE             *
//  *                                                              *
//  * Problem Statement                                            *
//  * Have the function ArrayAdditionI(arr) take the array of      *
//  * numbers stored in arr and return the string true if any      *
//  * combination of numbers in the array (excluding the largest   *
//  * number) can be added up to equal the largest number in the   *
//  * array, otherwise return the string false.                    *
//  * For example: if arr contains [4, 6, 23, 10, 1, 3] the output *
//  * should return true because 4 + 6 + 10 + 3 = 23. The array    *
//  * will not be empty, will not contain all the same elements,   *
//  * and may contain negative numbers.                            *
//  *                                                              *
//  * Examples                                                     *
//  * Input 1: [5,7,16,1,2]                                        *
//  * Output 1: false                                              *
//  *                                                              *
//  * Input 2: [3,5,-1,8,12]                                       *
//  * Output 2: true                                               *
//  *                                                              *
//  ***************************************************************/

// let kedar = [4, 6, 23, 10, 1, 3];

// function ArrayAddition(arr) {
//   let largest = Math.max(...arr);

//   arr.splice(arr.indexOf(largest), 1);
//   khopdi.log(arr);

//   for(let i=0; i<arr.length; i++) {

//   }

// }

// ArrayAddition(kedar);

// const Car = function(make, speed) {
//   this.make = make;
//   this.speed = speed;
// }

// Car.prototype.accelerate = function() {
//   this.speed += 10;
//   khopdi.log(`${this.make} is going at ${this.speed} km/h`);
// }

// Car.prototype.brake = function() {
//   this.speed -= 5;
//   khopdi.log(`${this.make} is going at ${this.speed} km/h`);
// }

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// mercedes.brake();

/* 
1. Use a constructor function to implement a Car. A car has a make and 
a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed
 by 10, and log the new speed to the khopdi;
3. Implement a 'brake' method that will decrease the car's speed by 5, 
and log the new speed to the khopdi;
4. Create 2 car objects and experiment with calling 'accelerate' and 
'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function(make, speed) {
//   this.make = make;
//   this.speed = speed;

//   brake = function() {
//     this.speed -= 5;
//     console.log(`${this.make} going at ${this.speed} km/h`);
//   }

//   accelerate = function() {
//     this.speed += 10;
//     console.log(`${this.make} going at ${this.speed} km/h`);
//   }
// }

// let bmw = new Car('BMW', 120);
// let mercedes = new Car ('Mercedes', 95);

// bmw.accelerate();
// mercedes.brake();

// // Coding Challenge #2

// /*
// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h
// (divide by 1.6);
// 3. Add a sortedStringArrayer called 'speedUS' which sets the current speed in mi/h
// (but converts it to km/h before storing the value, by multiplying the
// input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake
// methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀
// */

// class Gaadi {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Gaadi('Ford', 120);
// console.log(ford.speedUS);
// // ford.accelerate();
// // ford.accelerate();
// // ford.brake();
// // ford.speedUS = 50;
// // console.log(ford);

// ///////////////////////////////////////
// // Coding Challenge #3

// /*
// 1. Use a constructor function to implement an Electric Car (called EV)
//  as a CHILD "class" of Car. Besides a make and current speed, the EV
//  also has the current battery charge in % ('charge' property);
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo'
//  and sets the battery charge to 'chargeTo';
// 3. Implement an 'accelerate' method that will increase the car's speed
// by 20, and decrease the charge by 1%. Then log a message like this:
// 'Tesla going at 140 km/h, with a charge of 22%';
// 4. Create an electric car object and experiment with calling
// 'accelerate', 'brake' and 'chargeBattery' (charge to 90%).
// Notice what happens when you 'accelerate'! HINT:
// Review the definiton of polymorphism

// DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
// */

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// }

// let a = [2,3,5];
// let k= 2;
// let queries = [1,2];

// function circularArrayRotation(a, k, queries) {

//   for(let i=1; i<=k; i++) {
//     let p = a.pop();
//     a.unshift(p);
//   }

//   for(let j=0; j<queries.length; j++) {
//   console.log(a[queries[j]]);
//   }

// }

// circularArrayRotation(a, k, queries)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const k = fruits.pop();
// fruits.unshift(k);
// console.log(fruits);

// let str = "jmjmjkk";

// function NonrepeatingCharacter(str) {
// let counter = 0;
//     for(let i=0; i<str.length; i++) {
//          counter = 0;
//       for(let j=0; j<str.length; j++) {
//         if(i != j && str[i] == str[j]) {
//             counter++
//         }
//       }
//       if(counter === 0) {
//         return str[i];
//       }
//     } if(counter > 0) {
//         return 'chutiyapa ho gaye broo'
//     }
// }

// console.log(NonrepeatingCharacter(str))

/****************************************************************
 *             CODERBYTE ARRAY ADDITION I CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ArrayAdditionI(arr) take the array of      *
 * numbers stored in arr and return the string true if any      *
 * combination of numbers in the array (excluding the largest   *
 * number) can be added up to equal the largest number in the   *
 * array, otherwise return the string false.                    *
 * For example: if arr contains [4, 6, 23, 10, 1, 3] the output *
 * should return true because 4 + 6 + 10 + 3 = 23. The array    *
 * will not be empty, will not contain all the same elements,   *
 * and may contain negative numbers.                            *
 *                                                              *
 * Examples                                                     *
 * Input 1: [5,7,16,1,2]                                        *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: [3,5,-1,8,12]                                       *
 * Output 2: true                                               *
 *                                                              *
 ***************************************************************/

// let arr = [5,7,16,1,2];

// function ArrayAdditionI(arr) {

//   let sorted = arr.sort((a,b) => {return b-a});
//   let max = sorted[0];
//   arr.shift();

//   for(let i=0; i<=0; i++) {
//     for(let j=0; j<arr.length; j++) {
//       if(i != j && arr[i]+arr[j] == max) {
//         return true;
//       }
//     }
//   }

//   for(let i=0; i<arr.length; i++) {
//     for(let j=0; j<arr.length; j++) {
//       for(let k=0; k<arr.length; k++) {
//         if(i != j != k && arr[i]+arr[j]+arr[k] == max) {
//           return true;
//         }
//       }
//     }
//   }

//   for(let i=0; i<arr.length; i++) {
//     for(let j=0; j<arr.length; j++) {
//       for(let k=0; k<arr.length; k++) {
//         for(let l=0; l<arr.length; l++) {
//           if(i != j != k && arr[i]+arr[j]+arr[k] == max) {
//             return true;
//           } else{
//             return false;
//           }
//         }
//       }
//     }
//   }

// }

// console.log(ArrayAdditionI(arr));

/****************************************************************
 *              CODERBYTE ARRAY MATCHING CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ArrayMatching(strArr) read the array of    *
 * strings stored in strArr which will contain only two elements*
 * both of which will represent an array of positive integers.  *
 * For example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], *
 * then both elements in the input represent two integer arrays *
 * and your goal for this challenge is to add the elements in   *
 * corresponding locations from both arrays. For the example    *
 * input your program should do the following additions:        *
 * [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then             *
 * equals [6, 4, 13, 17]. Your program should finally return    *
 * this resulting array in a string format with each element    *
 * separated by a hyphen: 6-4-13-17.                            *
 * If the two arrays do not have the same amount of elements,   *
 * then simply append the remaining elements onto the new array *
 * (example shown below). Both arrays will be in the            *
 * format: [e1, e2, e3, ...] where at least one element will    *
 * exist in each array.                                         *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["[5, 2, 3]", "[2, 2, 3, 10, 6]"]    strArr[0][0]   *
 *                0                1                            *
 * Output 1: 7-4-6-10-6                      + strArr[1][0]     *
 *                                                              *
 * Input 2: ["[1, 2, 1]", "[2, 1, 5, 2]"]                       *
 * Output 2: 3-3-6-2                                            *
 *                                                              *
 ***************************************************************/
// let strArr = ["[-5, 2, 56, 3, -666 ]", "[2, 2, 3, 10, 6,90,-22]"];

// function ArrayMatching(arr) {

// let arr1 = arr[0].match(/-?\d+/g).map(Number);
// let arr2 = arr[1].match(/-?\d+/g).map(Number);
// console.log(arr1, arr2);
// let m,k,newArr;
// let final = [];

// if(arr1.length > arr2.length) {
//     m = arr2.length;
//     k = arr1.length;
//     newArr = arr1.slice(m, k);
//     console.log(newArr);
// } else {
//     m = arr1.length;
//     k = arr2.length;
//     newArr = arr2.slice(m, k);
//     console.log(newArr);
// }

//     for(let i=0; i<m; i++) {
//         final.push(arr1[i] + arr2[i]);
//     }

//         final = [...final, ...newArr];

// return final;
// }

// console.log(ArrayMatching(strArr))

/****************************************************************
 *              CODERBYTE BITWISE ONE CHALLENGE                 *
 *                                                              *
 * Problem Statement                                            *
 * Have the function BitwiseOne(strArr) take the array of       *
 * strings stored in strArr, which will only contain two        *
 * strings of equal length that represent binary numbers, and   *
 * return a final binary string that performed the bitwise      *
 * OR operation on both strings. A bitwise OR operation places  *
 * a 0 in the new string where there are zeroes in both binary  *
 * strings, otherwise it places a 1 in that spot.               *
 * For example: if strArr is ["1001", "0100"] then your program *
 * should return the string "1101"                              *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["100", "000"]                                      *
 * Output 1: 100                                                *
 *                                                              *
 * Input 2: ["00011", "01010"]                                  *
 * Output 2: 01011                                              *
 *                                                              *
 ***************************************************************/

// let strArr = ["1011", "0011"];

// function BitwiseOne(strArr) {
//     let arr1 = [];
//     arr1 = strArr[0].split('');

//     let final = [];

//     let arr2 = [];
//     arr2 = strArr[1].split('');

//     for(let i=0; i<arr1.length; i++) {

//         if(arr1[i] == 1 && arr2[i] == 1) {
//             final.push(1);
//         } else if(arr1[i] == 0 || arr2[i] == 0) {
//             final.push(0);
//         } else {
//             final.push(0);
//         }

//     }
//     return final;

// }
// console.log(BitwiseOne(strArr));

/****************************************************************
 *             CODERBYTE CHANGING SEQUENCE CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ChangingSequence(arr) take the array of    *
 * numbers stored in arr and return the index at which the      *
 * numbers stop increasing and begin decreasing or stop         *
 * decreasing and begin increasing.                             *
 * For example: if arr is [1, 2, 4, 6, 4, 3, 1] then your       *
 * program should return 3 because 6 is the last point in the   *
 * array where the numbers were increasing and the next number  *
 * begins a decreasing sequence. The array will contain at least*
 * 3 numbers and it may contains only a single sequence,        *
 * increasing or decreasing. If there is only a single sequence *
 * in the array, then your program should return -1.            *
 * Indexing should begin with 0.                                *
 *                                                              *
 * Examples                                                     *
 * Input 1: [-4, -2, 9, 10]                                     *
 * Output 1: -1                                                 *
 *                                                              *
 * Input 2: [5, 4, 3, 2, 10, 11]                                *
 * Output 2: 3                                                  *
 *                                                              *
 ***************************************************************/

// function ChangingSequence(arr) {
//     let sequence;
//     let index = -1;

//     if(arr[0] < arr[1]) {
//         sequence = 'increasing';
//     } else if(arr[0] > arr[1]) {
//         sequence = 'decreasing';
//     }

// for(let i=0; i<arr.length; i++) {
//     if(sequence === 'increasing' && arr[i] > arr[i+1]) {
//         index = i;
//         break;
//     } else if(sequence === 'decreasing' && arr[i] < arr[i+1]) {
//         index = i;
//         break;
//     }
// }

// return index;

// }

// console.log(ChangingSequence(arr));

/****************************************************************
 *                 CODERBYTE CLOSEST ENEMY CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ClosestEnemy(arr) take the array of numbers*
 * stored in arr and from the position in the array where a 1	*
 * is, return the number of spaces either left or right you	*
 * must move to reach an enemy which is represented by a 2.	*
 * For example: if arr is [0, 0, 1, 0, 0, 2, 0, 2] then your	*
 * program should return 3 because the closest enemy (2) is 3	*
 * spaces away from the 1. The array will contain any number of	*
 * 0's and 2's, but only a single 1. It may not contain any 2's	*
 * at all as well, where in that case your program should	*
 * return a 0. 							*
 *                                                              *
 * Examples                                                     *
 * Input 1: [1, 0, 0, 0, 2, 2, 2] 	                        *
 * Output 1: 4                                                  *
 *           0                 6                                 *
 * Input 2: [2, 0, 0, 0, 2, 2, 1, 0]                            *
 * Output 2: 1                                                  *
 *                                                              *
 ***************************************************************/
// let arr = [1, 0, 0, 0, 2, 2, 2];

// // let arr = [2, 0, 0, 0, 2, 2, 1, 0]; (PROBLEM HERE);

// function ClosestEnemy(arr) {

// let temp1, temp2;

// let given = [...arr];
// const kedar = given.filter((item) => {
//     return item === 2;
// });

// if(kedar.length === 0) {
//     return 0;
// }

// for(let i=0; i<arr.length; i++) {

//     if(arr[i] === 1) {
//         temp1 = Number(i);
//         console.log(temp1);
//     }
//     if(arr[i] === 2) {
//         temp2 = Number(i);
//         break;
//     }

// }

// return temp2 - temp1;

// }
// console.log(ClosestEnemy(arr));

/****************************************************************
 *             CODERBYTE COUNTING ANAGRAMS CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function CountingAnagrams(str) take the str         *
 * parameter & determine how many anagrams exist in the string. *
 * An anagram is a new word that is produced from rearranging   *
 * the characters in a different word.                          *
 * For example: cars and arcs are anagrams.                     *
 *                                                              *
 * Your program should determine how many anagrams exist in a   *
 * given string and return the total number.                    *
 *                                                              *
 * For example: "cars are very cool so are arcs and my os"      *
 * then your program should return 2 because "cars" and "arcs"  *
 * form 1 anagram and "so" and "os" form a 2nd anagram.         *
 *                                                              *
 * The word "are" occurs twice in the string but it isn't an    *
 * anagram because it is the same word just repeated.           *
 * The string will contain only spaces and lowercase letters,   *
 * no punctuation, numbers, or uppercase letters.               *
 *                                                              *
 * Examples                                                     *
 * Input 1: "aa aa odg dog gdo"                                 *
 * Output 1: 2                                                  *
 *                                                              *
 * Input 2: "a c b c run urn urn"                               *
 * Output 2: 1                                                  *
 *                                                              *
 ***************************************************************/

// let str = "a c b c run urn urn" ;

// function CountingAnagrams(str) {

//     let counter = 0;
//     let input = str.split(' ').sort();

// for(let i=0; i<input.length; i++) {
//     for(let j=i+1; j<input.length; j++) {
//         if(input[i] === input[j]) {
//             // console.loinput(input[i]);
//             break;
//         }
//         if(input[i].split("").sort().join("") == input[j].split("").sort().join("") ) {
//             counter++;
//             break;
//         }
//     }
// }

// return counter;
// }

/////////////////////////////////////////

// function CountingAnagrams( str ) {
//     let string_array = str.split(" ").sort();
//     let anagram_count = 0;
//     for( let i = 0; i<string_array.length; i++ ) {
//             for( let j=i+1; j<string_array.length; j++ ) {
//                     if( string_array[i] === string_array[j] ) {
//                             break;
//                     }
//                     if( string_array[i].split("").sort().join("") === string_array[j].split("").sort().join("") ) {
//                             anagram_count++;
//                             break;
//                     }
//             }
//     }

//     return anagram_count;
// }

// console.log(CountingAnagrams(str));

/****************************************************************
 *              CODERBYTE DISTINCT LIST CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function DistinctList(arr) take the array of numbers*
 * stored in arr and determine the total number of duplicate    *
 * entries. For example if the input is [1, 2, 2, 2, 3] then    *
 * your program should output 2 because there are two duplicates*
 * of one of the elements.                                      *
 *                                                              *
 * Examples                                                     *
 * Input 1: [0,-2,-2,5,5,5]                                     *
 * Output 1: 3                                                  *
 *                                                              *
 * Input 2: [100,2,101,4]                                       *
 * Output 2: 0                                                  *
 *                                                              *
 ***************************************************************/

// let arr = [0,-2,-2,5,5,5];

// function DistinctList(arr) {

//     let counter = 0;

//     for(let i=0; i<arr.length; i++) {
//         for(let j=i+1; j<arr.length; j++) {
//             if(arr[i] === arr[j]) {
//                 counter++;
//                 break;
//             }
//         }
//     }
// return counter;
// }

// console.log(DistinctList(arr));

/****************************************************************
 *             CODERBYTE CAMEL CASE CHALLENGE                   *
 *                                                              *
 * Problem Statement                                            *
 * Have the function CamelCase(str) take the str parameter being*
 * passed and return it in proper camel case format where the   *
 * first letter of each word is capitalized (excluding the first*
 * letter). The string will only contain letters and some       *
 * combination of delimiter punctuation characters separating   *
 * each word.                                                   *
 *                                                              *
 * For example: if str is "BOB loves-coding" then your program  *
 *  should return the string bobLovesCoding.                    *
 *                                                              *
 * Examples                                                     *
 * Input 1: "cats AND Dogs are Awesome"                         *
 * Output 1: catsAndDogsAreAwesome                              *
 *                                                              *
 * Input 2: "a b c-d e*f g"                                     *
 * Output 2: aBCDEFG                                            *
 ***************************************************************/

// let str = "cats AND Dogs-ARE*Awesome";

// function CamelCase(str) {

// let input = str.split(/[" "%*-]/g);
// console.log(input);
// let final = '';

// for(let i=0; i<input.length; i++) {
//     if(i === 0) {
//         final += input[i].toLowerCase();
//         // console.log(final);
//     } else {
//             final += input[i][0].toUpperCase();
//             for(let j=1; j<(input[i].length); j++) {
//                 final += input[i][j].toLowerCase();
//             }

//     }
// }
//  return final;
// }

// console.log(CamelCase(str));

// function CamelCase(str) {
//     let arr = str.split(/[" "%*-]/g);
//     let strr = "";
//     console.log(arr);

//     for (let i = 0; i < arr.length; i++) {
//     let v = arr[i];
//     for (let j = 0; j < v.length; j++) {
//     if (i === 0 && j === 0) {
//     strr += v[j].toLowerCase();
//     } else if (j === 0) {
//     strr += v[j].toUpperCase();
//     } else {
//     strr += v[j];
//     }
//     }
//     }
//     return strr;
//     }

//     // KEEP THIS FUNCTION CALL HERE
//     console.log(CamelCase( "cats AND Dogs are Awesome"));

/****************************************************************
 *              CODERBYTE ELEMENT MERGER CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ElementMerger(arr) take the array of       *
 * positive integers stored in arr and perform the following    *
 * algorithm: continuously get the difference of adjacent       *
 * integers to create a new array of integers, then do the same *
 * for the new array until a single number is left and return   *
 * that number.                                                 *
 *                                                              *
 * For example: if arr is [4, 5, 1, 2, 7] then taking the       *
 * difference of each pair of elements produces the following   *
 * new array: [1, 4, 1, 5]. Then do the same for this new array *
 * to produce [3, 3, 4] -> [0, 1] -> 1. So for this example your*
 * program should return the number 1 because that is what's    *
 * left at the end.                                             *
 *                                                              *
 * Examples                                                     *
 * Input 1: [5, 7, 16, 1, 2]                                    *
 * Output 1: 7                                                  *
 *                                                              *
 * Input 2: [1, 1, 1, 2]                                        *
 * Output 2: 1                                                  *
 *                                                              *
 ***************************************************************/

// let arr = [5, 7, 16, 1, 2];

// function ElementMerger(arr) {

// let temp = [];

//     for(let i=0; i<arr.length-1; i++) {
//         temp.push(Math.abs(arr[i] - arr[i+1]));
//     }

//     return temp.length>1 ? ElementMerger(temp) : temp[0];

// }

// console.log(ElementMerger(arr));

// function merger(arr){
//         let temp=[];
//         for(let i=0;i<arr.length-1;i++){
//             temp.push(Math.abs(arr[i+1]-arr[i]));
//         }
//         return temp.length>1 ? merger(temp) : temp[0];
//     }
//     console.log(merger([5, 7, 16, 1, 2]))
//     console.log(merger([1, 1, 1, 2]))
//     console.log(merger([4, 5, 1, 2, 7]))

/****************************************************************
 *             CODERBYTE DASH INSERT TWO CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function DashInsertII(str) insert dashes ('-')      *
 * between each two odd numbers and insert asterisks ('*')      *
 * between each two even numbers in str.                        *
 *                                                              *
 * For example: if str is 4546793 the output should be          *
 * 454*67-9-3. Don't count zero as an odd or even number.       *
 *                                                              *
 * Examples                                                     *
 * Input 1: 99946                                               *
 * Output 1: 9-9-94*6                                           *
 *                                                              *
 * Input 2: 56647304                                            *
 * Output 2: 56*6*47-304                                        *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 36.2% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

// let str = 99946;

// function DashInsertII(str) {

//     str = String(str);
//     console.log(str);
//     let final = '';
//     let a,b;

//     for(let i=0; i<str.length; i++) {
//         a = Number(str[i]);
//         b = Number(str[i+1]);
//         if(a % 2 == 0 && b % 2 == 0) {
//             final += str[i] + "*";
//         } else if(a % 2 != 0 && b % 2 != 0) {
//             final += str[i] + "-";
//         } else {
//             final += str[i];
//         }
//     }
// return final;
// }

// console.log(DashInsertII(str));

/****************************************************************
 *              CODERBYTE MISSING DIGIT CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function MissingDigit(str) take the str parameter,	*
 * which will be simple mathematical formula with three numbers,*
 * a single operator (+, -, *, or /) and an equal sign (=) and  *
 * return the digit that completes the equation.                *
 *                                                              *
 * In one of the numbers in the equation, there will be an x    *
 * character, and your program should determine what digit is   *
 * missing.                                                     *
 *                                                              *
 * For example, if str is "3x + 12 = 46" then your program      *
 * should output 4. The x character can appear in any of the    *
 * three numbers and all three numbers will be greater than or  *
 * equal to 0 and less than or equal to 1000000.                *
 *                                                              *
 *                                                              *
 * Examples                                                     *
 * Input 1: "4 - 2 = x"		                                *
 * Output 1: 2                                                  *
 *                                                              *
 * Input 2: "1x0 * 12 = 1200"		                        *
 * Output 2: 0                                                  *
 *                                                              *
 ***************************************************************/

// let str = "4 - 2 = ?";

// function MissingDigit(str) {
//   str.trim();
//   let a = str.split('=');
// //   console.log(a);

// for(let i=0; i<10; i++) {
//     for(let j=0; j<10; j++) {

//     if(eval(a[0].replace('?', i)) == eval(a[1].replace('?', j))) {
//         a[0] = a[0].replace('?', i);
//         a[1] = a[1].replace('?', j);
//     }
// }
// }
// return a;
// }
// console.log(MissingDigit(str));

/****************************************************************
 *              CODERBYTE HAPPY NUMBERS CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function HappyNumbers(num) determine if a number is	*
 * Happy, which is a number whose sum of the square of the	*
 * digits eventually converges to 1. Return true if it's a Happy*
 * number, otherwise return false.       			*
 *                                                              *
 * For example: the number 10 is Happy because 1^2 + 0^2	*
 * converges to 1.       					*
 *                                                              *
 * Examples                                                     *
 * Input 1: 1		                                        *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: 101		                                        *
 * Output 2: false                                              *
 *                                                              *
 ***************************************************************/

// let num = 1000;

// function HappyNumbers(num) {

//     let given = String(num);
//     let k = given.split('');
//     console.log(k);
//     let sum = 0;

//     for(let i=0; i<k.length; i++) {
//         sum += Number(k[i])**2;
//     }
// if(sum > 1) {
//     return("Not a Happy Number");
// } else {
//     return("Happy Number");
// }

// }

// console.log(HappyNumbers(num));

/****************************************************************
 *             CODERBYTE AB CHECKS CHALLENGE                    *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ABCheck(str) take the str parameter being  *
 * passed and return the string true if the characters a and b  *
 * are separated by exactly 3 places anywhere in the string at  *
 * least once (ie. "lane borrowed"
 *                  0123456789
 * would result in true because *
 * there is exactly three characters between a and b).          *
 * Otherwise return the string false.                           *
 *                                                              *
 * Examples                                                     *
 * Input 1: after badly                                         *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: Laura sobs                                          *
 * Output 2: true                                               *
 *                                                              *
 ***************************************************************/
// let str = 'laaane borrowed';

// function ABCheck(str) {

// let char = str.split('');
// console.log(char);

// for(let i=0; i<char.length; i++) {
//     if(char[i] === 'a' && char[i+4] === 'b') {
//         return true;
//     }
// }
// return false;
// }

// console.log(ABCheck(str));

/****************************************************************
 *             CODERBYTE ALPHABET SEARCHING CHALLENGE           *
 *                                                              *
 * Problem Statement                                            *
 * Have the function AlphabetSearching(str) take the string     *
 * parameter being passed and return the string true if every   *
 * single letter of the English alphabet exists in the string,  *
 * otherwise return the string false.                           *
 * For example: if str is "zacxyjbbkfgtbhdaielqrm45pnsowtuv"    *
 * then your program should return the string true because every*
 * character in the alphabet exists in this string even though  *
 * some characters appear more than once.                       *
 *                                                              *
 * Examples                                                     *
 * Input 1: abcdefghijklmnopqrstuvwxyyyy                        *
 * Output 1: false                                              *
 *                                                              *
//  * Input 2: abc123456kmo                                        *
//  * Output 2: false                                              *
//  ***************************************************************/
// let str = "abcdefghijklmnopqrerhsh546stuvwxyyyyz";

// function AlphabetSearching( str ) {

//     let sortedStringArray = Array.from(new Set (str.split('').sort()));
//     let counter = 0;

//     for(let i=0; i<sortedStringArray.length; i++) {
//     if(sortedStringArray[i].toLowerCase() >= 'a' && sortedStringArray[i].toLowerCase() <= 'z' ) {
//         counter++;
//     }
//     }
//     return (counter === 26) ? true : false;

//   }

//   // KEEP THIS FUNCTION CALL HERE
//   console.log(AlphabetSearching("abcdefghijklmnopqrs65456tuvwxyyyyzzzz"));

// function AlphabetSearching( string ) {
//     //SORT THE STRING & REMOVE DUPLICATES FROM THE STRING
//     let sortedStringArray = Array.from( new Set( string.split("").sort() ) );
//     //COUNT THE ENGLISH ALPHABET CHARACTERS
//     console.log(sortedStringArray);
//     let count = 0;

//     //LOOP THROUGH STRING
//     for ( let i = 0; i < sortedStringArray.length; i++ ) {
//       if ( sortedStringArray[i].toLowerCase() >= "a" && sortedStringArray[i].toLowerCase() <= "z" ) {
//         count++;
//       }
//     }

//     return ( count === 26 ) ? true : false;

//   }

//   // KEEP THIS FUNCTION CALL HERE
//   console.log(AlphabetSearching(str));

/****************************************************************
 *             CODERBYTE ASCII CONVERTION CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ASCIIConversion(str) take the str parameter*
 * being passed and return a new string where every character,  *
 * aside from the space character, is replaced with its         *
 * corresponding decimal character code. For example: if str is *
 * "dog" then your program should return the string 100111103   *
 * because d = 100, o = 111, g = 103.                           *
 *                                                              *
 * Examples                                                     *
 * Input 1: "hello world"                                       *
 * Output 1: 104101108108111 119111114108100                    *
 *                                                              *
 * Input 2: "abc **"                                            *
 * Output 2: 979899 4242                                        *
 ***************************************************************/
// let str = "hello world" ;

// function ASCIIConversion(str) {
//     let final = '';

//     for(let i=0; i<str.length; i++) {

//         if(str[i] == ' ') {
//             final += str[i];
//         } else {
//         final += str.charCodeAt(i);
//         }
//     }
// return final;
// }

// console.log(ASCIIConversion(str));

/****************************************************************
 *             CODERBYTE BASIC ROMAN NUMERALS CHALLENGE         *
 *                                                              *
 * Problem Statement                                            *
 * Have the function BasicRomanNumerals(str) read str which     *
 * will be a string of Roman numerals. The numerals being used  *
 * are: I for 1, V for 5, X for 10, L for 50, C for 100, D for  *
 * 500 and M for 1000. In Roman numerals, to create a number    *
 * like 11 you simply add a 1 after the 10, so you get XI. But  *
 * to create a number like 19, you use the subtraction notation *
 * which is to add an I before an X or V (or add an X before    *
 * an L or C). So 19 in Roman numerals is XIX.                  *
 *                                                              *
 * The goal of your program is to return the decimal equivalent *
 * of the Roman numeral given. For example: if str is "XXIV"    *
 * your program should return 24                                *
 *                                                              *
 * Examples                                                     *
 * Input 1:    IV                                             *
 * Output 1: 4                                                  *
 *                                                              *
 * Input 2: XLVI                                                *
 * Output 2: 46                                                 *
 ***************************************************************/

// let str = "XXIV";

// function BasicRomanNumerals(str) {

//     str = str.toString();
//     let obj = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000,
//         };

// let num = 0;
//         for(let i=0; i<str.length; i++) {
//             if(obj[str[i]] < obj[str[i+1]]) {
//                 num -= obj[str[i]];
//             } else {
//                 num += obj[str[i]];
//             }
//         }
// return num;
// }

// console.log(BasicRomanNumerals(str));

/****************************************************************
 *             CODERBYTE BINARY REVERSAL CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function BinaryReversal(str) take the str parameter *
 * being passed, which will be a positive integer, take its     *
 * binary representation (padded to the nearest N * 8 bits),    *
 * reverse that string of bits, and then finally return the new *
 * reversed string in decimal form. For example: if str is "47" *
 * then the binary version of this integer is 101111 but we pad *
 * it to be 00101111. Your program should reverse this binary   *
 * string which then becomes: 11110100 and then finally return  *
 * the decimal version of this string, which is 244.            *
 *                                                              *
 * Examples                                                     *
 * Input 1: "213"                                               *
 * Output 1: 171                                                *
 *                                                              *
 * Input 2: "4567"                                              *
 * Output 2: 60296                                              *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 54.6% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
//  ***************************************************************/
// let str = "213";

// function BinaryReversal(str) {

//     let given = (+str).toString(2).split("").reverse().join("");
//     given += "00";
//     console.log(given);
//     given = given.split("").reverse().join("");
//     console.log(given);
//     const ans = parseInt(given, 2);
// console.log(ans);

// }
// console.log(BinaryReversal(str));

// BUBBLE SORT

// let arr = [2, 8, 5, 9, 1];
// console.log(arr);
// let counter = 0;
// for(let i=0; i<arr.length; i++) {
//     for(let j=0; j<arr.length-i; j++) {
//         if(arr[j+1] < arr[j]) {
//             const temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//             counter++;
//         }
//     }
// }
// console.log(arr, counter);

/****************************************************************
 *                  CODERBYTE FIZZBUZZ CHALLENGE                *
 *                                                              *
 * Problem Statement                                            *
 * Have the function FizzBuzz(num) take the num parameter being *
 * passed and return all the numbers from 1 to num separated by *
 * spaces but replace every number that is divisible by 3       *
 * with the word "Fizz", replace every number that is divisible *
 * by 5 with the word "Buzz", & every number that is divisible  *
 * by both 3 and 5 with the word "FizzBuzz".                    *
 * For example: if num is 16, the code should return the string *
 * 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 *
 * The input will be within the range 1 - 50.                   *
 *                                                              *
 * Test Cases                                                   *
 * For example: if the input string is "Hello World and Coders" *
 * then your program should return the string                   *
 * sredoC dna dlroW olleH.                                      *
 *                                                              *
 * Examples                                                     *
 * Input 1: 3                                                   *
 * Output 1: "1 2 Fizz"                                         *
 *                                                              *
 * Input 2: 8                                                   *
 * Output 2: "1 2 Fizz 4 Buzz Fizz 7 8"                         *
 *                                                              *
 * Solution Efficiency                                          *
 * This user scored higher than 62.1% of users who solved this  *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

// function FizzBuzz(num) {

//     let final = '';
//     for(let i=1; i<=num; i++) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             final += "FizzBuzz ";
//         } else if(i % 3 === 0) {
//             final += 'Fizz ';
//         } else if(i % 5 === 0) {
//             final += 'Buzz ';
//         } else {
//             final += i + " ";
//         }
//     }
//     return final;
// }

// console.log(FizzBuzz(25));

/****************************************************************
 *          CODERBYTE PALINDROMIC SUBSTRING CHALLENGE		*
 *                                                              *
 * Problem Statement                                            *
 * Have the function PalindromicSubstring(str) take the str     *
 * parameter being passed and find the longest palindromic      *
 * substring, which means the longest substring which is read   *
 * the same forwards as it is backwards.                        *
 * For example: if str is "abracecars" then your program should *
 * return the string racecar because it is the longest          *
 * palindrome within the input string.                          *
 *                                                              *
 * The input will only contain lowercase alphabetic characters. *
 * The longest palindromic substring will always be unique,     *
 * but if there is none that is longer than 2 characters,       *
 * return the string none.                                      *
 *                                                              *
 * Examples                                                     *
 * Input 1: "hellosannasmith"                                   *
 * Output 1: sannas                                             *
 *                                                              *
 * Input 2: "abcdefgg"                                          *
 * Output 2: none                                               *
 *                                                              *
 ***************************************************************/

// let string = "hellmosannasomith";

// function isPalindrome(str) {
//     let str1 = str;
//     let str2 = str.split('').reverse().join('');

//     if(str1 === str2) {
//         return true;
//     } else {
//         return false;
//     }
//     }

// function PalindromicSubstring(string) {

//     function isPalindrome(str) {
//     let str1 = str;
//     let str2 = str.split('').reverse().join('');

//     if(str1 === str2) {
//         return true;
//     } else {
//         return false;
//     }
//     }

//     let pal = '';

//     for(let i=string.length; i>2; i--) {
//         for(let j=0; j<string.length; j++) {
//             let slce = string.substr(j, i);
//             if(isPalindrome(slce) && pal.length < slce.length) {
//                 pal = slce;
//             }
//         }
//     }

//     if(pal.length > 2) {
//         return pal;
//     } else {
//         return false;
//     }

// }

// console.log(PalindromicSubstring(string));

/////////////////////////////////

// function isPalindrome(string) {
//     /* max string palindrome */
//     function pali(str) {
//     const str1 = str;
//     const str2 = str.split("").reverse().join("");
//     if (str1 === str2) {
//     return true;
//     } else {
//     return false;
//     }
//     }
//     let pal = "";
//     for (let i = string.length; i > 2; i--) {
//     for (let j = 0; j < string.length; j++) {
//     let slce = string.substr(j, i);
//     // console.log(`slce${i}:${slce}`);

//     if (pali(slce) && pal.length < slce.length) {
//     pal = slce;
//     }
//     }
//     }
//     if (pal.length > 2) {
//     return pal;
//     }
//     return "none";
//     }

//     // KEEP THIS FUNCTION CALL HERE
//     console.log(`ans:${isPalindrome(str)}`);

/****************************************************************
 *               CODERBYTE EVEN PAIRS CHALLENGE		        *
 *                                                              *
 * Problem Statement                                            *
 * Have the function EvenPairs(str) take the str parameter being*
 * passed & determine if a pair of adjacent even numbers exists *
 * anywhere in the string. If a pair exists, return the string  *
 * true, otherwise return false. For example: if str is         *
 * "f178svg3k19k46" then there are two even numbers at the end  *
 * of the string, "46" so your program should return the string *
 * true. Another example: if str is "7r5gg812" then the pair is *
 * "812" (8 & 12) so your program should return the string true *
 *                                                              *
 * Examples                                                     *
 * Input 1: "3gy41d216"                                         *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: "f09r27i8e67"                                       *
 * Output 2: false                                              *
 *                                                              *
 ***************************************************************/

// let str = "3gy41d23365446";

// function EvenPairs( str ) {

//     for(let i=0; i<str.length; i++) {
//         if(typeof +str[i] === 'number' && typeof +str[i] === 'number') {
//             for(let j=i+1; j<str.length; j++) {
//                 if( !( +str[j] ) ) {
//                     break;
//             }
//                 if(+str[j] % 2 === 0 && +str[i] % 2 === 0) {
//                     console.log(str[i], str[j]);
//                     return true;
//                 }
//             }
//         }
//     }
// return false
// }

// console.log(EvenPairs( str ));

/****************************************************************
 *             CODERBYTE SWIPE CASE TWO CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function SwapII(str) take the str parameter and swap*
 * the case of each character. Then, if a letter is between two *
 * numbers (without separation), switch the places of the two   *
 * numbers.                                                     *
 * For example: if str is "6Hello4 -8World, 7 yes3"             *
 * the output should be 4hELLO6 -8wORLD, 7 YES3.                *
 *                                                              *
 * Examples                                                     *
 * Input 1: "Hello -5LOL6"                                      *
 * Output 1: hELLO -6lol5                                       *
 *                                                              *
 * Input 2: "2S 6 du5d4e"                                       *
 * Output 2: 2s 6 DU4D5E                                        *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 51.8% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

// let str = '6Hello4 -8World, 7 yes3';

// function SwapII(str) {
//   str = str.split(' ');
//   console.log(str);
//   let temp = '';

//   for (let i = 0; i < str.length; i++) {

//     console.log( +str[i][0]);
//     console.log( +str[i][(str[i].length) - 1]);

//     if (typeof +str[i][0] === 'number' && typeof +str[i][(str[i].length) - 1] === 'number') {

//     //   console.log(Number(str[i][(str[i].length) - 1]));
//       temp = (str[i][1]);
//       console.log(temp);
//       (str[i][0]) = parseInt(str[i][(str[i].length) - 1]);
//       (str[i][(str[i].length) - 1]) = temp;

//     }
//         for(let j=0; j<str.length; j++) {

//             if (typeof str[i][j] === 'string') {

//                 if(str[i][j] == str[i][j].toUpperCase()) {

//                     str[i][j].toLowerCase();

//                 } else {

//                     str[i][j].toUpperCase();

//                     }
//                 }
//             }

//     }
//   return str;
// }

// console.log(SwapII(str));

/****************************************************************
 *             CODERBYTE CAESAR CIPHER CHALLENGE                *
 *                                                              *
 * Problem Statement                                            *
 * Have the function CaesarCipher(str,num) take the str         *
 * parameter and perform a Caesar Cipher shift on it using the  *
 * num parameter as the shifting number. A Caesar Cipher works  *
 * by shifting each letter in the string N places in the        *
 * alphabet (in this case N will be num). Punctuation, spaces,  *
 * and capitalization should remain intact.                     *
 * For example if the string is "Caesar Cipher" and num is 2    *
 * the output should be "Ecguct Ekrjgt".                        *
 *                                                              *
 * Examples                                                     *
 * Input 1: "Hello" and num = 4                                 *
 * Output 1: Lipps                                              *
 *                                                              *
 * Input 2: "abc" and num = 0                                   *
 * Output 2: abc                                                *
 *                                                              *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 49.2% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/
// let str = "Hello";
// let num = 4;
// let temp = '';

// function CaesarCipher(str,num) {

//     let arr = str.split('');
//     console.log(arr);

//     for(let i=0; i<arr.length; i++) {
//       temp += String.fromCharCode(str.charCodeAt(i) + num);
//     }
// return temp;
// }

// console.log(CaesarCipher(str,num));

/****************************************************************
 *             CODERBYTE CALCULATOR CHALLENGE                   *
 *                                                              *
 * Problem Statement                                            *
 * Have the function Calculator(str) take the str parameter     *
 * being passed and evaluate the mathematical expression within *
 * in. For example, if str were "2+(3-1)*3" the output should   *
 * be 8. Another example: if str were "(2-0)(6/2)" the output   *
 * should be 6. There can be parenthesis within the string so   *
 * you must evaluate it properly according to the rules of      *
 * arithmetic.                                                  *
 * The string will contain the operators: +, -, /, *, (, and ). *
 * If you have a string like this: #/#*# or #+#(#)/#, then      *
 * evaluate from left to right. So divide then multiply, and    *
 * for the second one multiply, divide, then add.               *
 * The evaluations will be such that there will not be any      *
 * decimal operations, so you do not need to account for        *
 * rounding and whatnot.                                        *
 *                                                              *
 * Examples                                                     *
 * Input 1: "6*(4/2)+3*1"                                       *
 * Output 1: 15                                                 *
 *                                                              *
 * Input 2: "6/3-1"                                             *
 * Output 2: 1                                                  *
 *                                                              *
 ***************************************************************/

// let str = "2+(3-1)*3";

// function Calculator(str) {
//     return eval(str);
// }
// console.log(Calculator(str));

/****************************************************************
 *      CODERBYTE CODELAND USERNAME VALIDATION CHALLENGE        *
 *                                                              *
 * Problem Statement                                            *
 * Have the function CodelandUsernameValidation(str) take the   *
 * str parameter being passed and determine if the string is a  *
 * valid username according to the following rules:             *
 * 1. The username is between 4 and 25 characters.              *
 * 2. It must start with a letter.                              *
 * 3. It can only contain letters, numbers, & underscore.       *
 * 4. It cannot end with an underscore character.               *
 * If the username is valid then your program should return the *
 * string true, otherwise return the string false.              *
 *                                                              *
 * Examples                                                     *
 * Input 1: "aa_"                                               *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: "u__hello_world123"                                 *
 * Output 2: true                                               *
 *                                                              *
 ***************************************************************/
// let str = "u__hello_world123_154545";

// function CodelandUsernameValidation(str) {

//         if(str.match(/^[a-zA-Z][\w]{2,22}[^_]$/g)) {
//             return true;
//         } else {
//             return false
//         }
// }

// console.log(CodelandUsernameValidation(str));

/****************************************************************
 *              CODERBYTE COMMAND LINE CHALLENGE                *
 *                                                              *
 * Problem Statement                                            *
 * Have the function CommandLine(str) take the str parameter    *
 * being passed which represents the parameters given to a      *
 * command in an old PDP system. The parameters are alphanumeric*
 * tokens (without spaces) followed by an equal sign & by their *
 * corresponding value. Multiple parameters/value pairs can be  *
 * placed on the command line with a single space between each  *
 * pair. Parameter tokens and values cannot contain equal signs *
 * but values can contain spaces. The purpose of the function is*
 * to isolate the parameters and values to return a list of     *
 * parameter and value lengths. It must provide its result in   *
 * the same format and in the same order by replacing each entry*
 * (tokens and values) by its corresponding length.             *
 *                                                              *
 * For example, if str is: "SampleNumber=3234 provider=Dr. M.   *
 * Welby patient=John Smith priority=High" then your function   *
 * should return the string "12=4 8=12 7=10 8=4" because        *
 * "SampleNumber" is a 12 character token with a 4 character    *
 * value ("3234") followed by "provider" which is an 8 character*
 * token followed by a 12 character value ("Dr. M. Welby"), etc.*
 *                                                              *
 * Examples                                                     *
 * Input 1: "letters=A B Z T numbers=1 2 26 20 combine=true"    *
 * Output 1: 7=7 7=9 7=4                                        *
 *                                                              *
 * Input 2: "a=3 b=4 a=23 b=a 4 23 c="                          *
 * Output 2: 1=1 1=1 1=2 1=6 1=0                                *
 *                                                              *
 ***************************************************************/

// let str = "letters=A B Z T numbers=1 2 26 20 combine=true";

// function CommandLine(str) {

// }

// console.log(CommandLine(str));

/****************************************************************
 *             CODERBYTE CONSONANT COUNT CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ConsonantCount(str) take the str string	*
 * parameter being passed and return the number of consonants 	*
 * the string contains.  					*
 *                                                              *
 * Examples                                                     *
 * Input 1: "Hello World"                                       *
 * Output 1: 7		                                        *
 *                                                              *
 * Input 2: "Alphabets"                                         *
 * Output 2: 6                                                  *
 *                                                              *
 ***************************************************************/
// let swipe = "Alphabets";

// function ConsonantCount(str) {

//     const reg = /^[^aeiouAEIOU/^\s]$/g;
//     let kedar = str.trim();
//     let counter = 0;

//     for(let i=0; i<kedar.length; i++) {
//         if(kedar[i].match(reg)) {
//             console.log(kedar[i]);
//             counter++;
//         }
//     }

// return counter;
// }
// console.log(ConsonantCount(str));

/****************************************************************
 *             CODERBYTE CORRECT PATH CHALLENGE                 *
 *                                                              *
 * Problem Statement                                            *
 * Have the function CorrectPath(str) read the str parameter    *
 * being passed, which will represent the movements made in a   *
 * 5x5 grid of cells starting from the top left position. The   *
 * characters in the input string will be entirely composed     *
 * of: r, l, u, d, ?. Each of the characters stand for the      *
 * direction to take within the grid,                           *
 * for example: r = right, l = left, u = up, d = down. Your goal*
 * is to determine what characters the question marks should be *
 * in order for a path to be created to go from the top left of *
 * the grid all the way to the bottom right without touching    *
 * previously travelled on cells in the grid.                   *
 *                                                              *
 * For example: if str is "r?d?drdd" then your program should   *
 * output the final correct string that will allow a path to be *
 * formed from the top left of a 5x5 grid to the bottom right.  *
 * For this input, your program should therefore return the     *
 * string rrdrdrdd. There will only ever be one correct path &  *
 * there will always be at least one question mark within the   *
 * input string.                                                *
 *                                                              *
 * Examples                                                     *
 * Input 1: "???rrurdr?"                                        *
 * Output 1: dddrrurdrd                                         *
 *                                                              *
 * Input 2: "drdr??rrddd?"                                      *
 * Output 2: drdruurrdddd    dddrrurdrd 
 * 
 * 
 * 
 *  [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0], drdruurrdddd
    [0, 0, 0, 0, 0], dddrrurdrd 
    [0, 0, 0, 0, 0],                                  *
 ***************************************************************/
// let str = "drdr??rrddd?";

// function CorrectPath(str) {

//     let arr = str.split('');
//     console.log(arr);

//     let down = arr.filter((a) => {
//         return a == "d"; });

//     let up = arr.filter((a) => {
//         return a == 'u'; });

//     let right = arr.filter((a) => {
//         return a == 'r'; });

//     let left = arr.filter((a) => {
//         return a == 'l'; });

//     let questionMark = arr.filter((a) => {
//         return a == '?'; });

//         console.log(`                    up ${up}
//                     down ${down}
//                     left ${left}
//                     right ${right}
//                     questionMark ${questionMark}`);

// }

// console.log(CorrectPath(str));

/************************************************************************
 *                 CODERBYTE WORD SPLIT CHALLENGE                       *
 *                                                                      *
 * Problem Statement                                                    *
 * Have the function WordSplit(strArr) read the array of strings stored *
 * strArr, which will contain 2 elements: the first element will be a   *
 * sequence of characters, and the second element will be a long string *
 * of comma-separated words, in alphabetical order, that represents a   *
 * dictionary of some arbitrary length. For example: strArr can be:     *
 * ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"].              *
 *                                                                      *
 * Your goal is to determine if the first element in the input can be   *
 * split into two words, where both words exist in the dictionary that  *
 * is provided in the second input. In this example, the first element  *
 * can be split into two words: hello and cat because both of those     *
 * words are in the dictionary. Your program should return the two words*
 * that exist in the dictionary separated by a comma. So for the example*
 * above,your program should return hello,cat. There will only be one   *
 * correct way to split the first element of characters into two words. *
 * If there is no way to split string into two words that exist in the  *
 * dictionary, return the string not possible. The first element itself *
 * will never exist in the dictionary as a real word.                   *
 *                                                                      *
 * Examples                                                             *
 * Input 1: ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]   *
 * Output 1: base,ball                                                  *
 *                                                                      *
 * Input 2: ["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]             *
 * Output 2: abcg,efd                                                   *
 *                                                                      *
 ***********************************************************************/
// let strArr = ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"];

// function WordSplit(strArr) {

//   let word = strArr[0];
//   let arr = strArr[1].split(',');
//   let temp, temp2;

//   for (let i = 0; i < word.length; i++) {
//     for (let j = word.length - 1; j >= 0; j--) {
//       temp = word.substr(i, j);
//       if (arr.includes(temp)) {
//         temp2 = word.substr(j, arr.length - 1);
//         if (arr.includes(temp2)) {
//           return `${temp}, ${temp2}`;
//         }
//       }
//     }
//   }
// }

// console.log(WordSplit(strArr));

/****************************************************************
 *             CODERBYTE ARRAY ADDITION I CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ArrayAdditionI(arr) take the array of      *
 * numbers stored in arr and return the string true if any      *
 * combination of numbers in the array (excluding the largest   *
 * number) can be added up to equal the largest number in the   *
 * array, otherwise return the string false.                    *
 * For example: if arr contains [4, 6, 23, 10, 1, 3] the output *
 * should return true because 4 + 6 + 10 + 3 = 23. The array    *
 * will not be empty, will not contain all the same elements,   *
 * and may contain negative numbers.                            *
 *                                                              *
 * Examples                                                     *
 * Input 1: [5,7,16,1,2]                                        *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: [3,5,-1,8,12]                                       *
 * Output 2: true                                               *
 *                                                              *
 ***************************************************************/
// let arr = [5,7,16,1,2] ;

// function ArrayAdditionI(arr) {

//     let arr2 = arr.sort((a,b) => {
//         return a-b;
//     });
//     let max = arr2.pop();

// function combinations(arr) {
//     return new Array(1 << arr.length).fill().map(
//       (e1, i) => arr.filter((e2, j) => i & 1 << j));
//   }
// console.log(combinations(arr2).filter(a => a.length >= 2));

//   let str = combinations(arr2);
//   console.log(str);

//   for(let i=0; i<str.length; i++) {
//     let sum = str[i].reduce((result, item) => {
//         return result + item;
//     }, 0);

//     if(sum == max) {
//         return str[i];
//     }
//   }
// return false;
// }

// console.log(ArrayAdditionI(arr));

/****************************************************************
 *              CODERBYTE ARRAY SIMILAR CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Two arrays are called similar if one can be obtained from    *
 * another by swapping at most one pair of elements in one of   *
 * the arrays. Given two arrays a and b, check whether they are *
 * similar.                                                     *
 *                                                              *
 * Examples                                                     *
 * Input 1: a = [1, 2, 3] and b = [1, 2, 3]                     *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: [1, 2, 3] and b = [2, 1, 3]                         *
 * Output 2: true                                               *
 * Explanation: We can obtain b from a by swapping 2 and 1 in b.*
 *                                                              *
 * Input 3: [1, 2, 2] and b = [2, 1, 1]                         *
 * Output 3: false                                              *
 * Explanation: Any swap of any two elements either in a or b   *
 * won't make a and b equal                                     *
 *                                                              *
 ***************************************************************/
// let a = [1, 2, 2];
// let b = [2, 1, 1];

// function similarArray(a, b) {

//    let c = a.sort((a,b) => {
//     return a-b;
//    });
//    console.log(c);

//    let d = b.sort((a,b) => {
//     return a-b;
//    });
//    console.log(d);

//    for (var i = 0; i < c.length; ++i) {
//     if (c[i] !== d[i]) return false;
//   }
//   return true;
// }

// console.log(similarArray(a,b));

/****************************************************************
 *            CODERBYTE BRACKET COMBINATIONS CHALLENGE          *
 *                                                              *
 * Problem Statement                                            *
 * Have the function BracketCombinations(num) read num which    *
 * will be an integer greater than or equal to zero, and return *
 * the number of valid combinations that can be formed with num *
 * pairs of parentheses.                                        *
 *                                                              *
 * For example, if input is 3, then the possible combinations   *
 * of 3 pairs of parenthesis,                                   *
 * namely: ()()(), are ()()(), ()(()), (())(), ((())), & (()()) *
 *                                                              *
 * There are 5 total combinations when the input is 3, so your  *
 * program should return 5.                                     *
 *                                                              *
 * Examples                                                     *
 * Input 1: 3                                                   *
 * Output 1: 5                                                  *
 *                                                              *
 * Input 2: 2                                                   *
 * Output 2: 2                                                  *
 *                                                              *
 ***************************************************************/
// let num = 1;

// function BracketCombinations(num) {

//     function factorial(n) {
//         let fact = 1;

//         for(let i=1; i<=n; i++) {
//             fact *= i;
//         }
//         return fact;
//     }

//     let upper = factorial(2*num);
//     let lower = factorial(num + 1) * factorial(num);

//     console.log(upper, lower);

//     let final = upper/lower;
//     console.log(final);

// }

// console.log(BracketCombinations(num));

/****************************************************************
 *                CODERBYTE LARGEST FOUR CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function LargestFour(arr) take the array of integers*
 * stored in arr, and find the four largest elements and return *
 * their sum.                                                   *
 *                                                              *
 * For example: if arr is [4, 5, -2, 3, 1, 2, 6, 6] then the    *
 * four largest elements in this array are 6, 6, 4, and 5 and   *
 * the total sum of these numbers is 21, so your program should *
 * return 21.                                                   *
 *                                                              *
 * If there are less than four numbers in the array your program*
 * should return the sum of all the numbers in the array.       *
 *                                                              *
 * Examples                                                     *
 * Input 1: [1, 1, 1, -5]                                       *
 * Output 1: -2                                                 *
 *                                                              *
 * Input 2: [0, 0, 2, 3, 7, 1]                                  *
 * Output 2: 13                                                 *
 *                                                              *
 ***************************************************************/
// let arr = [4, 5, -2, 3, 1, 2, 6, 6];

// function LargestFour(arr) {

//     let sum = 0;

//     arr.sort((a,b) => {
//         return b-a;
//     });

//     for(let i=0; i<4; i++) {
//         sum += arr[i];
//     }
//     return sum;

// }

// console.log(LargestFour(arr));

/****************************************************************
 *             CODERBYTE LONGEST CONSECUTIVE CHALLENGE          *
 *                                                              *
 * Problem Statement                                            *
 * Have the function LongestConsecutive(arr) take the array of  *
 * positive integers stored in arr and return the length of the *
 * longest consecutive subsequence (LCS).                       *
 * An LCS is a subset of the original list where the numbers    *
 * are in sorted order, from lowest to highest, and are in a    *
 * consecutive, increasing order. The sequence does not need to *
 * be contiguous and there can be several different subsequences*
 *                                                              *
 * For example: if arr is [4, 3, 8, 1, 2, 6, 100, 9] then a few *
 * consecutive sequences are [1, 2, 3, 4], and [8, 9].          *
 * For this input, your program should return 4 because that is *
 * the length of the longest consecutive subsequence.           *
 *                                                              *
 * If there are less than four numbers in the array your program*
 * should return the sum of all the numbers in the array.       *
 *                                                              *
 * Examples                                                     *
 * Input 1: [6, 7, 3, 1, 100, 102, 6, 12]                       *
 * Output 1: 2                                                  *
 *                                                              *
 * Input 2: [5, 6, 1, 2, 8, 9, 7]                               *
 * Output 2: 5                                                  *
 *                                                              *
 ***************************************************************/

// function LongestConsecutive(arr) {
//   let counter = 0;

//   arr.sort((a, b) => {
//     return a - b;
//   });

//   const = new Set(arr);
//   const str = Array.from(vraj)

//   console.log(str);

//   for (let i = 0; i < str.length; i++) {

//     // console.log(str[i]);
//     if (str[i] + 1 === str[i + 1]) {
//       counter++;
//     }
//   }
//   if(counter == 0) {
//     return 0;
//   }
//   return counter+1;
// }
// console.log(LongestConsecutive(arr));

// console.log(LongestConsecutive(arr));

//////////////////////////////////////////////////

// function LongestConsecutive(arr) {
//       const set = new Set(arr);
// let maxLen = 0;
// for (const num of set) {
//   if (!set.has(num - 1)) {
//     let currNum = num;
//     let currLen = 1;
//     while (set.has(currNum + 1)) {
//       currNum += 1;
//       currLen += 1;
//     }
//     maxLen = Math.max(maxLen, currLen);
//   }
// }
// return maxLen;
// }

// ///////////////////////////////////////////////////

// let arr = [6, 7, 3, 1, 100, 102, 6, 12];

// function LongestConsecutive(arr) {

//   arr.sort((a,b) => {
//     return a-b;
//   });

//   const sett = new Set(arr);
//   console.log(sett);
//   let maxLen = 1;
//   let currNum = 0;

//   for (let num of sett) {
//     if (!sett.has(num - 1)) {
//       currNum = num;
//       // maxLen = 1;
//       while (sett.has(currNum + 1)) {
//         maxLen++;
//         currNum++;
//       }
//     }
//   }
//   return maxLen;
// }

// console.log(LongestConsecutive(arr));

/****************************************************************
 *             CODERBYTE HAMMING DISTANCE CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function HammingDistance(strArr) take the array of  *
 * strings stored in strArr, which will only contain two strings*
 * of equal length and return the Hamming distance between them.*
 * The Hamming distance is the number of positions where the    *
 * corresponding characters are different.                      *
 * For example: if strArr is ["coder", "codec"] then your       *
 * program should return 1. The string will always be of equal  *
 * length and will only contain lowercase characters from the   *
 * alphabet and numbers.                                        *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["10011", "10100"]                                  *
 * Output 1: 3                                                  *
 *                                                              *
 * Input 2: ["helloworld", "worldhello"]                        *
 * Output 2: 8                                                  *
 *                                                              *
 ***************************************************************/
// let strArr = ["helloworld", "worldhello"];

// function HammingDistance(strArr) {
//   let counter = 0;
//   let length = strArr[0].length;
//   for(let i=0; i<length; i++) {
//     if(strArr[0][i] !== strArr[1][i]) {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(HammingDistance(strArr));

/****************************************************************
 *           CODERBYTE EQUIVALENT KEYPRESSES CHALLENGE          *
 *                                                              *
 * Problem Statement                                            *
 * Have the function EquivalentKeypresses(strArr) read the array*
 * of strings stored in strArr which will contain 2 strings     *
 * representing two comma separated lists of keypresses.        *
 * Your goal is to return the string true if the keypresses     *
 * produce the same printable string and the string false if    *
 * they do not.                                                 *
 *                                                              *
 * A keypress can be either a printable character or a backspace*
 * represented by -B.                                           *
 *                                                              *
 * You can produce a printable string from such a string of     *
 * keypresses by having backspaces erase one preceding character*
 *                                                              *
 * For example: if strArr contains ["a,b,c,d", "a,b,c,c,-B,d"]  *
 * the output should return true because those keypresses       *
 * produce the same printable string.                           *
 *                                                              *
 * The array given will not be empty. The keypresses will only  *
 * contain letters from the alphabet and backspaces.            *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["a,b,c,d", "a,b,c,d,-B,d"]	                        *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: ["c,a,r,d", "c,a,-B,r,d"]                           *
 * Output 2: false                                              *
 *                                                              *
 ***************************************************************/

// let strArr = ["a,b,c,d", "a,b,c,c,-B,d"];

// function EquivalentKeypresses(strArr) {
//   let arr1 = strArr[0].match(/-?\w+/g).map(String);
//   let arr2 = strArr[1].match(/-?\w+/g).map(String);

//   for(let i=0; i<arr2.length; i++) {
//     if(arr2[i] === '-B') {
//       arr2.splice(i-1, 2);
//     }
//   }

//   for(let i=0; i<arr1.length; i++) {
//     if(arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
// return true;
// }

// console.log(EquivalentKeypresses(strArr));

/****************************************************************
 *                CODERBYTE LRU CACHE CHALLENGE                 *
 *                                                              *
 * Problem Statement                                            *
 * Have the function LRUCache( strArr ) take the array of       *
 * characters stored in strArr, which will contain characters   *
 * ranging from A to Z in some arbitrary order, and determine   *
 * what elements still remain in a virtual cache that can hold  *
 * up to 5 elements with an LRU cache algorithm implemented.    *
 *                                                              *
 * For example: if strArr is ["A","B","C","D","A","E","D","Z"], *
 * then the following steps are taken:                          *
 *                                                              *
 * 1) "A" doesn't exist in the cache, so store it in the cache  *
 * 2) "B" doesn't exist in the cache, so store it in the cache  *
 * So far the cache contains: ["A", "B"].                       *
 * 3) "C" doesn't exist in the cache, so store it in the cache  *
 * 4) "D" doesn't exist in the cache, so store it in the cache  *
 * So far the cache contains: ["A", "B", "C", "D"].             *
 * 5) Now A is accessed again, but it exists in th cache already*
 * so it is brought to the front: ["B", "C", "D", "A"].         *
 * 6) "E" doesn't exist in the cache, so store it in the cache  *
 * So far the cache contains: ["B", "C", "D", "A", "E"].        *
 * 7) D is accessed again so its brought to the front as follows*
 * So far the cache contains: ["B", "C", "A", "E", "D"].        *
 * 8) Z does not exist in the cache so add it to the front &    *
 * remove the least recently used element                       *
 * So far the cache contains: ["C", "A", "E", "D", "Z"].        *
 *                                                              *
 * Now the caching steps have been completed and your program   *
 * should return the order of the cache with the elements joined*
 * into a string, separated by a hyphen. Therefore, for the     *
 * example above your program should return C-A-E-D-Z.          *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["A", "B", "A", "C", "A", "B"]                      *
 * Output 1: C-A-B                                              *
 *                                                              *
 * Input 2: ["A", "B", "C", "D", "E", "D", "Q", "Z", "C"]       *
 * Output 2: E-D-Q-Z-C                                          *
 *                                                              *
 ***************************************************************/
// let strArr = ["A","B","C","D","A","E","D","Z"];

// function LRUCache( strArr ) {

//   let final = [];

//   for(let i=0; i<strArr.length; i++) {
//     if(!final.includes(strArr[i])) {
//       final.push(strArr[i]);
//     } else {
//       final.splice(final.indexOf(strArr[i]), 1);
//       final.push(strArr[i]);
//     }
//   }

//   if(final.length > 5) {
//     let kedar = final.length - 5;
//     for(let i=0; i<kedar; i++) {
//       final.shift();
//     }
//     final = final.join('-');
//     return final;
//   } else {
//     final = final.join('-');
//     return final;
//   }
// }

// console.log(LRUCache( strArr ));

/****************************************************************
 *                 CODERBYTE MATRIX SPIRAL CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function MatrixSpiral(strArr) read the array of     *
 * strings stored in strArr which will represent a 2D N matrix, *
 * and your program should return the elements after printing   *
 * them in a clockwise, spiral order. You should return the     *
 * newly formed list of elements as a string with the numbers   *
 * separated by commas.                                         *
 *                                                              *
 * For example: strArr is "[1, 2, 3]", "[4, 5, 6]", "[7, 8, 9]" *
 * then this looks like the following 2D matrix:                *
 *                              1 2 3                           *
 *                              4 5 6                           *
 *                              7 8 9                           *
 * So your program should return the elements of this matrix in *
 * a clockwise, spiral order which is: 1,2,3,6,9,8,7,4,5        *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["[1, 2]", "[10, 14]"]                              *
 * Output 1: 1,2,14,10
 *
 *                  1 2
 *                 10 14                              *
 *                                                              *
 * Input 2: ["[4, 5, 6, 5]", "[1, 1, 2, 2]", "[5, 4, 2, 9]"]    *
 * Output 2: 4,5,6,5,2,9,2,4,5,1,1,2
 *
 *                      4 5 6 5
 *                      1 1 2 2
 *                      5 4 2 9                     *
 *                                                              *
 ***************************************************************/

// let strArr = ["[1, 2]", "[10, 14]"];

// function MatrixSpiral(strArr) {

//   let final = [];

//   if(strArr.length > 2) {

//     let arr1 = strArr[0].match(/-?\d/g).map(Number);
//     let arr2 = strArr[1].match(/-?\d/g).map(Number);
//     let arr3 = strArr[2].match(/-?\d/g).map(Number);
//     let k = arr2.pop();

//     arr3.reverse();
//     final = [...arr1, k, ...arr3, ...arr2];

//     return final;

//   } else {

//     let arr1 = strArr[0].match(/-?[0-9]+/g).map(Number);
//     let arr2 = strArr[1].match(/-?\d+/g).map(Number);

//     arr2.reverse();
//     final = [...arr1, ...arr2];
//     return final;
//   }

// }

// console.log(MatrixSpiral(strArr));

/****************************************************************
 *                 CODERBYTE MAX SUBARRAY CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function MaxSubarray(arr) take the array of numbers *
 * stored in arr and determine the largest sum that can be      *
 * formed by any contiguous subarray in the array.              *
 * For example, if arr is [-2, 5, -1, 7, -3] then your program  *
 * should return 11 because the sum is formed by the subarray   *
 * [5, -1, 7]. Adding any element before or after this subarray *
 * would make the sum smaller.                                  *
 *                                                              *
 * Examples                                                     *
 * Input 1: [1, -2, 0, 3]                                       *
 * Output 1: 3                                                  *
 *                                                              *
 * Input 2: [3, -1, -1, 4, 3, -1]                               *
 * Output 2: 8                                                  *
 *                                                              *
 ***************************************************************/

// let arr = [3, -1, -1, 4, 3, -1];

// function MaxSubarray(arr) {

//   let sum = 0;
//   let max = 0;
//   let final = [];

//   function combinations(arr) {
//     return new Array(1 << arr.length)
//       .fill()
//       .map((e1, i) => arr.filter((e2, j) => i & (1 << j)));
//   }
//   console.log(combinations(arr).filter(a => a.length >= 2));

//   let str = combinations(arr);
//   console.log(str);

//   for(let i=0; i<str.length; i++) {
//     let sum = str[i].reduce((result, item) => {
//       return result + item;
//     }, 0);
//     if(sum > max) {
//       max = sum
//       final = str[i];
//     }
//   }

// return max - (final.length-1);
// }

// console.log(MaxSubarray(arr));

/****************************************************************
 *             CODERBYTE OFF LINE MINIMUM CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function OffLineMinimum(strArr) take the strArr     *
 * parameter being passed which will be an array of integers    *
 * ranging from 1...n and the letter "E" and return the correct *
 * subset based on the following rules. The input will be in    *
 * the following format: ["I","I","E","I",...,"E",...,"I"] where*
 * the I's stand for integers and the E means take out the      *
 * smallest integer currently in the whole set. When finished,  *
 * your program should return that new set with integers        *
 * separated by commas. For example: if strArr is               *
 * ["5","4","6","E","1","7","E","E","3","2"] then your program  *
 * should return 4,1,5.                                         *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["1","2","E","E","3"]                               *
 * Output 1: 1,2                                                *
 *                                                              *
 * Input 2: ["4","E","1","E","2","E","3","E"]                   *
 * Output 2: 4,1,2,3                                            *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 34.8% of users who solved this   *
 * challenge.                                                   *
 ***************************************************************/
// let strArr = ["1","2","E","E","3"];

// function OffLineMinimum(strArr) {

//   let final = [];
//   let k = []

//   for(let i=0; i<strArr.length; i++) {
//     if(strArr[i] != 'E') {
//       final.push(+strArr[i]);
//     } else {
//       let min = Math.min(...final);
//       k.push((final.splice(final.indexOf(min), 1))[0]);
//     }
//   }
//   return k;
// }

// console.log( OffLineMinimum(strArr));

/****************************************************************
 *             CODERBYTE COUNTING MINUTES ONE CHALLENGE         *
 *                                                              *
 * Problem Statement                                            *
 * Have the function CountingMinutesI(str) take the str         *
 * parameter being passed which will be two times               *
 * (each properly formatted with a colon and am or pm)          *
 * separated by a hyphen and return the total number of minutes *
 * between the two times. The time will be in a 12 hour clock   *
 * format.                                                      *
 * For example: if str is 9:00am-10:00am then the               *
 * output should be 60. If str is 1:00pm-11:00am the output     *
 * should be 1320.                                              *
 *                                                              *
 * Examples                                                     *
 * Input 1: "12:30pm-12:00am"                                   *
 * Output 1: 690                                                *
 *                                                              *
 * Input 2: "1:23am-1:08am"                                     *
 * Output 2: 1425                                               *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 44.7% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

// let str = "12:30pm-12:00am";

// function CountingMinutesI(str) {

//   let arr = str.split('-');
//   console.log(arr);

//   let arr1 = arr[0].split(':');
//   let arr2 = arr[1].split(':');
//   console.log(arr1, arr2);

// }

// console.log(CountingMinutesI(str));

/****************************************************************
 *              CODERBYTE OTHER PRODUCTS CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function OtherProducts(arr) take the array of       *
 * numbers stored in arr and return a new list of the products  *
 * of all the other numbers in the array for each element.      *
 * For example: if arr is [1, 2, 3, 4, 5] then the new array,   *
 * where each location in the new array is the product of all   *
 * other elements, is [120, 60, 40, 30, 24].                    *
 * The following calculations were performed to get this answer *
 * [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)].     *
 * You should generate this new array and then return the       *
 * numbers as a string joined by a hyphen: 120-60-40-30-24.     *
 * The array will contain at most 10 elements and at least 1    *
 * element of only positive integers.                           *
 *                                                              *
 * Examples                                                     *
 * Input 1: [1,4,3]                                             *
 * Output 1: 12-3-4                                             *
 *                                                              *
 * Input 2: [3,1,2,6]                                           *
 * Output 2: 12-36-18-6                                         *
 *                                                              *
 ***************************************************************/

// let arr = [1,4,3];

// function OtherProducts(arr) {

//   let final = [];

//   for(let i=0; i<arr.length; i++) {

//     let str = [...arr];
//     str.splice(i, 1);

//       let ked = str.reduce((result, item) => {
//         return result * item;
//       });

//       final.push(ked);
//   }
// return final.join('-');
// }

// console.log(OtherProducts(arr));

/****************************************************************
 *             CODERBYTE OVERLAPPING RANGES CHALLENGE           *
 *                                                              *
 * Problem Statement                                            *
 * Have the function OverlappingRanges(arr) take the array of   *
 * numbers stored in arr which will contain 5 positive integers,*
 * the first two representing a range of numbers (a to b), the  *
 * next 2 also representing another range of integers (c to d), *
 * and a final 5th element (x) which will also be a positive    *
 * integer, and return the string true if both sets of ranges   *
 * overlap by at least x numbers.                               *
 * For example: if arr is [4, 10, 2, 6, 3] then your program    *
 * should return the string true.                               *
 * The first range of numbers are 4, 5, 6, 7, 8, 9, 10 & the    *
 * second range of numbers are 2, 3, 4, 5, 6.                   *
 * The last element in the array is 3, and there are 3 numbers  *
 * that overlap between both ranges: 4, 5, and 6.               *
 * If both ranges do not overlap by at least x numbers,         *
 * then your program should return the string false.            *
 *                                                              *
 * Examples                                                     *
 * Input 1: [5,11,1,5,1]                                        *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: [1,8,2,4,4]                                         *
 * Output 2: false                                              *
 *                                                              *
 ***************************************************************/
// let arr = [1,8,2,4,4];

// function OverlappingRanges(arr) {

//   let arr1 = [];
//   let arr2 = [];

//   console.log(arr);
//   let range1 = arr.slice(0, 2);
//   console.log(range1);
//   let range2 = arr.slice(2, 4);
//   console.log(range2);
//   let x = arr[4];
//   console.log(x);

//   for(let i=range1[0]; i<=range1[1]; i++) {
//     arr1.push(i);
//   }
//   console.log(arr1);

//   for(let i=range2[0]; i<=range2[1]; i++) {
//     arr2.push(i);
//   }
//   console.log(arr2);

//  const intersection = arr1.filter((ele) =>  arr2.includes(ele));

//   if(intersection.length >= x) {
//     return true;
//   }

//   return false;
// }
// console.log(OverlappingRanges(arr));

/****************************************************************
 *             CODERBYTE RECTANGLE AREA CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function RectangleArea(strArr) take the array of    *
 * strings stored in strArr, which will only contain 4 elements *
 * and be in the form (x y) where x and y are both integers, and*
 * return the area of the rectangle formed by the 4 points on a *
 * Cartesian grid. The 4 elements will be in arbitrary order.   *
 * For example: strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"]  *
 * then your program should return 6 because the width of the   *
 * rectangle is 3 and the height is 2 and the area of a         *
 * rectangle is equal to the width * height.                    *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["(1 1)","(1 3)","(3 1)","(3 3)"]                   *
 * Output 1: 4                                                  *
 *                                                              *
 * Input 2: ["(0 0)","(1 0)","(1 1)","(0 1)"]                   *
 * Output 2: 1                                                  *
 *                                                              *
 ***************************************************************/
// let strArr = ["(0 0)", "(3 0)", "(0 2)", "(3 2)"];

// function RectangleArea(strArr) {

//   let width = 0;
//   let height = 0;

//   let w = strArr[1].match(/\d+/g).map(Number);
//   let h = strArr[2].match(/\d+/g).map(Number);

//   console.log(w, h);

//   if(w[0] === w[1]) {
//     width = 1;
//   } else {
//     width = Math.abs(w[0] - w[1]);
//   }

//   if(h[0] === h[1]) {
//     height = 1;
//   } else {
//     height = Math.abs(h[0] - h[1]);
//   }

//   return width * height;

// }

// console.log(RectangleArea(strArr));

/****************************************************************
 *             CODERBYTE SCALE BALANCING CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ScaleBalancing(strArr) read strArr which   *
 * will contain two elements, the first being the two positive  *
 * integer weights on a balance scale (left and right sides)    *
 * and the second element being a list of available weights as  *
 * positive integers. Your goal is to determine if you can      *
 * balance the scale by using the least amount of weights from  *
 * the list, but using at most only 2 weights.                  *
 *                                                              *
 * For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"] then    *
 * this means there is a balance scale with a weight of 5 on    *
 * the left side and 9 on the right side. It is in fact         *
 * possible to balance this scale by adding a 6 to the left     *
 * side from the list of weights and adding a 2 to the right    *
 * side. Both scales will now equal 11 and they are perfectly   *
 * balanced.                                                    *
 *                                                              *
 * Your program should return a comma separated string of the   *
 * weights that were used from the list in ascending order,     *
 * so for this example your code should return the string 2,6   *
 *                                                              *
 * There will only ever be one unique solution and the list of  *
 * available weights will not be empty. It is also possible to  *
 * add two weights to only one side of the scale to balance it. *
 * If it is not possible to balance the scale then your program *
 * should return the string not possible.                       *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["[3, 4]", "[1, 2, 7, 7]"]                          *
 * Output 1: 1                                                  *
 *                                                              *
 * Input 2: ["[13, 4]", "[1, 2, 3, 6, 14]"]                     *
 * Output 2: 3,6                                                *
 *                                                              *
 ***************************************************************/

///////////MY SOLUTION DOWN//////////////////

// let strArr = ['[5, 9]', '[1, 2, 6, 7]'];

// function ScaleBalancing(strArr) {
//   let scales = strArr[0].match(/\d+/g).map(Number);
//   let weights = strArr[1].match(/\d+/g).map(Number);

//   // console.log(scales, weights);

//   for (let i = 0; i < weights.length; i++) {
//     for (let j = 0; j < weights.length; j++) {
//       if (eval(scales[0] + weights[j]) === scales[1]) {
//         return `${weights[j]}`;
//       } else if (scales[0] === eval(scales[1] + weights[j])) {
//         return `${weights[j]}`;
//       } else if (
//         i !== j &&
//         eval(scales[0] + weights[i] + weights[j]) === scales[1]
//       ) {
//         if (i > j) {
//           return `${weights[j]},${weights[i]}`;
//         } else {
//           return `${weights[i]},${weights[j]}`;
//         }
//       } else if (
//         i !== j &&
//         scales[0] === eval(scales[1] + weights[i] + weights[j])
//       ) {
//         if (i > j) {
//           return `${weights[j]},${weights[i]}`;
//         } else {
//           return `${weights[i]},${weights[j]}`;
//         }
//       } else if (
//         i !== j &&
//         eval(scales[0] + weights[i]) === eval(scales[1] + weights[j])
//       ) {
//         if (i > j) {
//           return `${weights[j]},${weights[i]}`;
//         } else {
//           return `${weights[i]},${weights[j]}`;
//         }
//       }
//     }
//   }
// }

// console.log(ScaleBalancing(strArr));

//////////////MY SOLUTION UP//////////////////////////

// for(let i=0; i<weights.length; i++) {
//    for(let j=0; j<weights.length; j++) {
//    if(i !== j && eval(scales[0]+weights[i]+weights[j]) === scales[1]) {
//       return `${weights[i]},${weights[j]}`;
//    } else if(i !== j && scales[0] === eval(scales[1]+weights[i]+weights[j])) {
//       return `${weights[i]},${weights[j]}`;
//    } else if(i !== j && eval(scales[0]+weights[i]) === eval(scales[1]+weights[j])) {
//       return `${weights[i]},${weights[j]}`;
//    } else if(i !== j && eval(scales[0]+weights[i]) === scales[1]) {
//       return `${weights[i]},${weights[j]}`;
//    } else if(i !== j && scales[0] === eval(scales[1]+weights[j])) {
//       return `${weights[i]},${weights[j]}`;
//    }
//    }
// }

// for(let i=0; i<weights.length; i++) {
//    for(let j=0; j<weights.length; j++) {

//       if(eval(scales[0]+weights[j]) === scales[1]) {
//          return `${weights[j]}`;
//       } else if(scales[0] === eval(scales[1]+weights[j])) {
//          return `${weights[j]}`;
//       } else if(i !== j && eval(scales[0]+weights[i]+weights[j]) === scales[1]) {
//          return `${weights[i]},${weights[j]}`;
//       } else if(i !== j && scales[0] === eval(scales[1]+weights[i]+weights[j])) {
//          return `${weights[i]},${weights[j]}`;
//       } else if(i !== j && eval(scales[0]+weights[i]) === eval(scales[1]+weights[j])) {
//          return `${weights[i]},${weights[j]}`;
//       }

//    }
// }

// if (i > j) {
//   return `${weights[j]},${weights[i]}`;
// } else {
//   return `${weights[i]},${weights[j]}`;
// }

/****************************************************************
 *                  CODERBYTE PLUS MINUS CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function PlusMinus(num) read the num parameter being*
 * passed which will be a combination of 1 or more single       *
 * digits, and determine if it's possible to separate the digits*
 * with either a plus or minus sign to get the final expression *
 * to equal zero.                                               *
 *                                                              *
 * For example: if num is 35132 then it's possible to separate  *
 * the digits the following way, 3 - 5 + 1 + 3 - 2, and this    *
 * expression equals zero.                                      *
 *                                                              *
 * Your program should return a string of the signs you used, so*
 * for this example your program should return -++-. If it's not*
 * possible to get the digit expression to equal zero, return   *
 * the string not possible.                                     *
 *                                                              *
 * If there are multiple ways to get the final expression to    *
 * equal zero, choose the one that contains more minus          *
 * characters. For example: if num is 26712 your program        *
 * should return -+-- and not +-+-.                             *
 *                                                              *
 * Examples                                                     *
 * Input 1: 199                                                 *
 * Output 1: not possible                                       *
 *                                                              *
 * Input 2: 26712                                               *
 * Output 2: -+--                                               *
 *                                                              *
 ***************************************************************/

// let num = 1993241315;

// function PlusMinus(num) {
//   let arr = [];

//   let str = String(num).split('');
//   console.log(str);

//   const length = str.length - 1;
//   console.log(length);

//   const obj = { 0: '-', 1: '+' };

//   for (let i = 0; i < 2 ** length; i++) {
//     let bnr = '1' + i.toString(2).padStart(length, '0');
//     let sum = 0;

//     for (let j = 0; j < str.length; j++) {
//       sum = eval(`${sum}${obj[bnr[j]]}${str[j]}`);
//     }
//     if (sum === 0) {
//       const final = bnr.split('');
//       final.shift();

//       return final.map(ele => obj[ele]).join('');
//     }
//   }
//   return 'not possible';
// }

// console.log(PlusMinus(num));

/*
Have the function QuestionsMarks(str) which takes the str 
 string parameter, which will contain single digit numbers, 
 letters, & question marks, & check if there are exactly 3 
 question marks between every pair of two numbers that add up 
 to 10. If so, then your program should return the string 
 true, otherwise it should return the string false. If there 
 aren't any two numbers that add up to 10 in the string, then 
 your program should return false as well. 
 
 Test Cases 
 For example: if str is "arrb6???4xxbl5???eee5" then your 
 program should return true because there are exactly 3 
 question marks between 6 and 4, and 3 question marks between 
 5 and 5 at the end of the string. 
 
 Examples 
 Input 1: aa6?9 
 Output 1: false 
 
 Input 2: acc?7??sss?3rr1??????5 
 Output 2: true 
 
 Input 3: 5??aaaaaaaaaaaaaaaaaaa?5?5 
 Output 3: false 
 
 Input 4: 9???1???9???1???9 
 Output 4: true 
 
 Solution Efficiency 
 The user scored higher than 68.6% of users who solved this 
* challenge. */

//  let str = "arrb6???4xxbl5???eee5";

// function QuestionsMarks(str) {

//    let arr = str.match(/[\W\d]/g);
//    console.log(arr);

//    const ked = arr.filter((item) => {
//       if(item.includes('???')) {

//       }
//    })

//    console.log(ked);

// }

// console.log(QuestionsMarks(str));

/****************************************************************
 *             CODERBYTE SUM MULTIPLIER CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function SumMultiplier(arr) take the array of       *
 * numbers stored in arr and return the string true if any two  *
 * numbers can be multiplied so that the answer is greater than *
 * double the sum of all the elements in the array. If not,     *
 * return the string false.                                     *
 * For example: if arr is [2, 5, 6, -6, 16, 2, 3, 6, 5, 3] then *
 * the sum of all these elements is 42 and doubling it is 84.   *
 * There are two elements in the array, 16 * 6 = 96 and 96 is   *
 * greater than 84 so your program should return the string true*
 *                                                              *
 * Examples                                                     *
 * Input 1: [2, 2, 2, 2, 4, 1]                                  *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: [1, 1, 2, 10, 3, 1, 12]                             *
 * Output 2: true                                               *
 *                                                              *
 ***************************************************************/
// let arr = [2, 5, 6, -6, 16, 2, 3, 6, 5, 3];
// let max = 0;
// let result = 0;

// function SumMultiplier(arr) {

//    let su = arr.reduce((a,b) => {
//       return a+b;
//    });

//    let sum = su*2;
//    console.log(sum);

//    for(let i=0; i<arr.length; i++) {
//       for(let j=0; j<arr.length; j++) {

//          result = (arr[i] * arr[j]);

//          if(max > result) {
//             max = (result);
//          }

//       }
//    }
//    const kedar = Math.abs(max);
//    if(kedar >= sum) {
//       return true;
//    }
// return false;
// }
// console.log(SumMultiplier(arr));

/*
Have the function SearchingChallenge(str) take the str parameter, search for all the numbers in the string, add them together,
 then return that final number divided by the total amount of letters 
 in the string. For example: if str is "Hello6 9World 2, Nic8e D7ay!"
  the output should be 2. First if you add up all the numbers, 6 + 9 + 2 + 8 + 7 you get 32.
   Then there are 17 letters in the string. 32 / 17 = 1.882, 
   and the final answer should be rounded to the nearest whole number, 
   so the answer is 2. Only single digit numbers separated by spaces 
   will be used throughout the whole string (So this won't ever be the case: hello44444 world). 
Each string will also have at least one letter.
*/

// let str = "Hello6 9World 2, Nic8e D7ay!";

// function SearchingChallenge(str) {

//    let num = str.match(/\d+/g).map(Number);
//    console.log(num);
//    let alpha = str.match(/[a-zA-Z]+/g).join('').split('');
//    console.log(alpha);

//    let sum = num.reduce((a, b) => {
//       return a+b;
//    }, 0);
//    let length = alpha.length;
//    console.log(length, sum);

//    let final = Math.round(sum/length);
//    return final;

// }

// console.log(SearchingChallenge(str));

/************************************************************************
 *                 CODERBYTE WAVE SORTING CHALLENGE                     *
 *                                                                      *
 * Problem Statement                                                    *
 * Have the function WaveSorting(arr) take the array of positive integer*
 * stored in arr and return the string true if the numbers can be       *
 * arranged in a wave pattern: a1 > a2 < a3 > a4 < a5 > ..., otherwise  *
 * return the string false. For example, if arr is: [0, 1, 2, 4, 1, 4], *
 * then a possible wave ordering of the numbers is: [2, 0, 4, 1, 4, 1]. *
 * So for this input your program should return the string true.        *
 * The input array will always contain at least 2 elements.             *
 * More examples are given below as sample test cases.                  *
 *                                                                      *
 * Examples                                                             *
 * Input 1: [0, 1, 2, 4, 1, 1, 1]                                       *
 * Output 1: false                                                      *
 *                                                                      *
 * Input 2: [0, 4, 22, 4, 14, 4, 2]                                     *
 * Output 2: true                                                       *
 *                                                                      *
 ***********************************************************************/
// let arr = [0, 4, 22, 4, 14, 4, 2];

// function WaveSorting(arr) {

//    let final = [];

//    let arr1 = arr.sort((a, b) => {
//       return a-b;
//    });

//    let str1 = arr1.slice(0, Math.floor(arr1.length/2));
//    let str2 = arr1.slice(Math.floor(arr1.length/2), arr1.length);

//    console.log(str1, str2);

//    for(let i=0; i<str1.length; i++) {
//       if(str1[i] >= str2[i]) {
//          return false;
//       }
//    }

// return true;
// }

// console.log(WaveSorting(arr));

/****************************************************************
 *             CODERBYTE SUPERINCREASING CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function Superincreasing(arr) take the array of     *
 * numbers stored in arr and determine if the array forms a     *
 * superincreasing sequence where each element in the array is  *
 * greater than the sum of all previous elements. The array will*
 * only consist of positive integers.                           *
 * For example: if arr is [1, 3, 6, 13, 54] then your program   *
 * should return the string "true" because it forms a           *
 * superincreasing sequence. If a superincreasing sequence      *
 * isn't formed, then your program should return the string     *
 * "false"                                                      *
 *                                                              *
 * Examples                                                     *
 * Input 1: [1,2,3,4]                                           *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: [1,2,5,10]                                          *
 * Output 2: true                                               *
 *                                                              *
 ***************************************************************/

// let arr = [1, 3, 6, 13, 54];

// function Superincreasing(arr) {

//    let final = [];
//    final.push(arr[0]);

//    for(let i=1; i<arr.length; i++) {

//       let sum = final.reduce((a,b) => {
//          return a+b;
//       }, 0);
//       console.log(sum);

//       if(sum < arr[i]) {
//          final.push(arr[i]);
//       }  else {
//          return false;
//       }

//    }
//    return true;

// }

// console.log(Superincreasing(arr));

/****************************************************************
 *               CODERBYTE FORMATTED DIVISION CHALLENGE         *
 *                                                              *
 * Problem Statement                                            *
 * Have the function FormattedDivision(num1,num2) take both     *
 * parameters being passed, divide num1 by num2, and return the *
 * result as a string with properly formatted commas and 4      *
 * significant digits after the decimal place.                  *
 *                                                              *
 * For example: if num1 is 123456789 and num2 is 10000          *
 * the output should be "12,345.6789".                          *
 * The output must contain a number in the one's place even     *
 * if it is a zero.                                             *
 *                                                              *
 * Examples                                                     *
 * Input 1: 2 and 3                                             *
 * Output 1: 0.6667                                             *
 *                                                              *
 * Input 2: 10 and 10                                           *
 * Output 2: 1.0000                                             *
 *                                                              *
 * Solution Efficiency                                          *
 * This user scored higher than 53.8% of users who solved this  *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/
// let num1 = 10 ;
// let num2 = 10;

// function FormattedDivision(num1,num2) {

//    return (num1/num2).toFixed(4);

// }

// console.log(FormattedDivision(num1,num2));

/****************************************************************
 *             CODERBYTE FORMATTED NUMBERS CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function FormattedNumber(strArr) take the strArr    *
 * parameter being passed, which will only contain a single     *
 * element, and return the string true if it is a valid number  *
 * that contains only digits with properly placed decimals &    *
 * commas, otherwise return the string false.                   *
 * For example: if strArr is ["1,093,222.04"] then your program *
 * should return the string true, but if the input were         *
 * ["1,093,22.04"] then your program should return the string   *
 * false. The input may contain characters other than digits.   *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["0.232567"]                                        *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: ["2,567.00.2"]                                      *
 * Output 2: false                                              *
 *                                                              *
 ***************************************************************/
// let strArr = ["1,093,222.04"];

// function FormattedNumber(strArr) {

//    let arr = strArr.join('').split('.');
//    console.log(arr);

//    if(arr.length > 2) {
//       return false;
//    }

//    if(arr[0].includes(',')) {

//       let num = arr[0].split(',');
//    console.log(num);

//    if(num[num.length-1].length === 3 ) {

//       for(let i=1; i<num.length-1; i++) {
//          if(num[0].length < 4 && num[i].length === 3 ) {
//             return true;
//          } else {
//             return false;
//          }
//       }

//    } else {
//       return false;
//    }

//    } else if(arr[0].length <= 3) {
//       return true;
//    } else {
//       return false;
//    }

// }

// console.log(FormattedNumber(strArr));

/****************************************************************
 *             CODERBYTE LETTER CHANGES CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function LetterChanges(str) take the str parameter  *
 * being passed and modify it using the following algorithm.    *
 * Replace every letter in the string with the letter following *
 * it in the alphabet (ie. c becomes d, z becomes a). Then      *
 * capitalize every vowel in this new string (a, e, i, o, u)    *
 * & finally return this modified string.                       *
 *                                                              *
 * Examples                                                     *
 * Input 1: hello*3                                             *
 * Ouput 1: Ifmmp*3                                             *
 *                                                              *
 * Input 2: fun times!                                          *
 * Output 2: gvO Ujnft!                                         *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 60.4% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/
// let str = 'fun times!';
// function LetterChanges(str) {
//   let reg = /[a-zA-Z]/g;
//   let vowel = 'aeiou'
//   let arr = str.split('');
//   let final = '';

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].match(reg)) {
//       final += String.fromCharCode(str.charCodeAt(i) + 1);
//     } else {
//       final += arr[i];
//     }
//   }

//   let ked = final.split('');
//   let v = /[aeiou]/g;

//   for(let i=0; i<ked.length; i++) {
//    if(ked[i].match(v)) {
//       ked[i] = ked[i].toUpperCase();
//    }
//   }

//   return ked.join('');
// }

// console.log(LetterChanges(str));

// let str = "hello*3";
// function LetterChanges(str) {
// let arr = "";
// let reg = str.match(/[a-z]/g);
// console.log(reg);

// for (let i = 0; i < str.length; i++) {
// if (reg.includes(str[i])) {
// if (
// "aeiou".split("").includes(String.fromCharCode(str.charCodeAt(i) + 1))
// ) {
// arr += String.fromCharCode(str.charCodeAt(i) + 1).toUpperCase();
// } else {
// arr += String.fromCharCode(str.charCodeAt(i) + 1).toLowerCase();
// }
// } else {
// arr += str[i];
// }
// }
// return arr;
// }

// console.log(LetterChanges(str));

// let num = 4;

// function binaryNumber(num) {

//    let str = parseInt(num, 2);
//    console.log(str);

//    let str1 = num.toString(2);
//    console.log(str1);

// }
// console.log(binaryNumber(num));

// let arr = [1,3,1,6];

// function kedar(arr) {

//    let first = arr[0];

//    let ajay = arr.splice(0, first);

//    let final = []

//    final = [...arr, ...ajay];

//    return final;

// }
// console.log(kedar(arr));

// let preFix = str => {
//   const arry = str.split(' ');
//   const arr = [];
//   const ar = [];
//   const num = [];
//   const sign = [];
//   let count = 0;
//   let s = '+-*/';
//   let digit = '1234567890';
//    console.log(arry);
//   for (let i = arry.length - 1; i >= 0; i--) {
//     if (!s.includes(arry[i])) {
//       break;
//     } else {      //'4 5 2 + 1 + *'
//       count++;
//     }
//   }
//   console.log(count);

//   for (let i = arry.length - count; i < arry.length; i++) {
//     if (s.includes(arry[i])) {
//       sign.push(arry[i]);
//     }
//   }
//   for (let i = 0; i < arry.length - count; i++) {
//     if (s.includes(arry[i])) {
//       sign.push(arry[i]);
//     }
//   }
//   console.log(sign);

//   for (let i = 0; i < arry.length; i++) {
//     if (digit.includes(arry[i])) {
//       num.push(arry[i]);
//     }
//   }
//   console.log(num);

//   for (let i = 0; i < num.length; i++) {
//     arr.push(num[i]);
//     for (let j = i; j < i + 1; j++) {
//       if (j < sign.length) {
//         arr.push(sign[j]);
//       }
//     }
//   }
//   console.log(arr);

//   for (let i = 0; i < arr.length; i++) {
//     if (i == 0 || i == 4) {
//       ar.push('(');
//       ar.push(arr[i]);
//     } else if (i == 3) {
//       ar.push(')');
//       ar.push(arr[i]);
//     } else {
//       ar.push(arr[i]);
//     }
//   }
//   ar.push(')');
//   let t = ar.join('').toString();
//   console.log(t);
//   return eval(t);
// };

// let add = '4 5 2 + 1 + *';
// console.log(preFix(add));

/****************************************************************
 *             CODERBYTE LETTER COUNT ONE CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function LetterCountI(str) take the str parameter   *
 * being passed and return the first word with the greatest     *
 * number of repeated letters.                                  *
 * For example: "Today, is the greatest day ever!"              *
 * should return greatest because it has 2 e's (and 2 t's) & it *
 * comes before ever which also has 2 e's. If there are no      *
 * words with repeating letters return -1. Words will be        *
 * separated by spaces.                                         *
 *                                                              *
 * Examples                                                     *
 * Input 1: Hello apple pie                                     *
 * Output 1: Hello                                              *
 *                                                              *
 * Input 2: No words                                            *
 * Output 2: -1                                                 *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 39.2% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/
// let str = "Today, is the greatest day ever!";

// function LetterCountI(str) {

//    let arr = str.split('');
//    console.log(arr);

// }

// console.log(LetterCountI(str));

// function postfix(str) {
//    let arr = str.split(" ").map((i)=>{
//    if(!Number.isNaN(Number(i))) return Number(i)
//    else return i
//    })

//    let stack = []
//    stack.push(arr.shift())
//    while(arr.length > 0){
//    if(Number.isNaN(Number(arr[0]))){
//    let a = stack.pop()
//    let b = stack.pop()
//    stack.push(eval(`${b}${arr.shift()}${a}`))
//    }
//    else{
//    stack.push(arr.shift())
//    }
//    }
//    return stack[0]
//    }
//    console.log(postfix("1 1 + 1 + 1 +"))

/************************************************************************
 *                 CODERBYTE WORD SPLIT CHALLENGE                       *
 *                                                                      *
 * Problem Statement                                                    *
 * Have the function WordSplit(strArr) read the array of strings stored *
 * strArr, which will contain 2 elements: the first element will be a   *
 * sequence of characters, and the second element will be a long string *
 * of comma-separated words, in alphabetical order, that represents a   *
 * dictionary of some arbitrary length. For example: strArr can be:     *
 * ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"].              *
 *                                                                      *
 * Your goal is to determine if the first element in the input can be   *
 * split into two words, where both words exist in the dictionary that  *
 * is provided in the second input. In this example, the first element  *
 * can be split into two words: hello and cat because both of those     *
 * words are in the dictionary. Your program should return the two words*
 * that exist in the dictionary separated by a comma. So for the example*
 * above,your program should return hello,cat. There will only be one   *
 * correct way to split the first element of characters into two words. *
 * If there is no way to split string into two words that exist in the  *
 * dictionary, return the string not possible. The first element itself *
 * will never exist in the dictionary as a real word.                   *
 *                                                                      *
 * Examples                                                             *
 * Input 1: ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]   *
 * Output 1: base,ball                                                  *
 *                                                                      *
 * Input 2: ["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]             *
 * Output 2: abcg,efd                                                   *
 *                                                                      *
 ***********************************************************************/

// let strArr = ['hellocat', 'apple,bat,cat,goodbye,hello,yellow,why'];

// function WordSplit(strArr) {
//   let key = strArr[0];
//   let words = strArr[1].split(',');
//   console.log(key);
//   console.log(words);

//   for (let i = 0; i < key.length; i++) {
//     for (let j = key.length; j >= 0; j--) {
//       let temp = key.substr(i, j);
//       console.log(temp);
//       if (words.includes(temp)) {
//         let temp2 = key.substr(j, key.length - 1);
//         console.log(temp2);

//         if (words.includes(temp)) {
//           return `${temp}, ${temp2}`;
//         }
//       }
//     }
//   }
// }

// console.log(WordSplit(strArr));

// let nums = [1,2,1];

// var nextGreaterElements = function(nums) {
//    let final = [];
//    console.log(nums);
//    for(let i=0; i<nums.length; i++) {
//        for(let j=0; j<nums.length; j++) {
//            if(nums[i] < nums[j]) {
//                final.push(nums[j])
//            } else if(i !== j && nums[i] > nums[j]){
//                final.push(-1)
//            }
//        }
//    }
//    return final;
// };

// console.log(nextGreaterElements(nums));

/****************************************************************
 *             CODERBYTE ARRAY ADDITION I CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ArrayAdditionI(arr) take the array of      *
 * numbers stored in arr and return the string true if any      *
 * combination of numbers in the array (excluding the largest   *
 * number) can be added up to equal the largest number in the   *
 * array, otherwise return the string false.                    *
 * For example: if arr contains [4, 6, 23, 10, 1, 3] the output *
 * should return true because 4 + 6 + 10 + 3 = 23. The array    *
 * will not be empty, will not contain all the same elements,   *
 * and may contain negative numbers.                            *
 *                                                              *
 * Examples                                                     *
 * Input 1: [5,7,16,1,2]                                        *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: [3,5,-1,8,12]                                       *
 * Output 2: true                                               *
 *                                                              *
 ***************************************************************/
// let arr = [3,5,-1,8,12];

// function ArrayAdditionI(arr) {

//    let str = [...arr];
//    str.sort((a,b) => {
//       return a-b;
//    });

//    let max = str.pop();

// function combinations(arr) {
//    return new Array(1 << arr.length)
//      .fill()
//      .map((e1, i) => arr.filter((e2, j) => i & (1 << j)));
//  }

//     let subSet = combinations(str);

//     for(let i=0; i<subSet.length; i++) {
//       let sum = subSet[i].reduce((a, b) => {
//          return a + b;
//       }, 0);
//       if(sum === max) {
//          console.log(subSet[i]);
//          return true;
//       }
//     }
//     return false;
// }

// console.log(ArrayAdditionI(arr));

// let nums = [1, 2, 3, 4, 3];

// var nextGreaterElements = function (nums) {
//   let final = [];
//   console.log(nums);

//   let max = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j <= nums.length; j++) {

//       }

//     }

//   return final;
// };

// console.log(nextGreaterElements(nums));

// if(nums[i] < nums[j]) {
//    final.push(nums[j]);
//    break;
// } else {
//    final.push(-1);
// }

/****************************************************************
 *             CODERBYTE LETTER COUNT ONE CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function LetterCountI(str) take the str parameter   *
 * being passed and return the first word with the greatest     *
 * number of repeated letters.                                  *
 * For example: "Today, is the greatest day ever!"              *
 * should return greatest because it has 2 e's (and 2 t's) & it *
 * comes before ever which also has 2 e's. If there are no      *
 * words with repeating letters return -1. Words will be        *
 * separated by spaces.                                         *
 *                                                              *
 * Examples                                                     *
 * Input 1: Hello apple pie                                     *
 * Output 1: Hello                                              *
 *                                                              *
 * Input 2: No words                                            *
 * Output 2: -1                                                 *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 39.2% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/
// let str = 'Hello apple pie';

// function LetterCountI(str) {
//   let ele = [];
//   let arr = str.split(' ');
//   console.log(arr);

//   for (let k = 0; k < arr.length; k++) {
//     let ked = arr[k].split('');
//     for (let i = 0; i < ked.length; i++) {
//       for (let j = 0; j < ked.length; j++) {
//         if (i !== j && ked[i] === ked[j]) {
//           ele.push(arr[k]);
//         }
//       }
//     }
//   }

//   if (ele.length >= 1) {
//     let set = new Set(ele);
//     let arr1 = Array.from(set);
//     return arr1[0];
//   } else {
//     return -1;
//   }
// }

// console.log(LetterCountI(str));

/****************************************************************
 *           CODERBYTE LONGEST WORD CHALLENGE                   *
 *                                                              *
 * Problem Statement                                            *
 * Have the function LongestWord(sen) take the sen parameter    *
 * being passed and return the largest word in the string.      *
 * If there are two or more words that are the same length,     *
 * return the first word from the string with that length.      *
 * Ignore punctuation and assume sen will not be empty.         *
 *                                                              *
 * Examples                                                     *
 * Input 1: "fun&!! time"                                       *
 * Output 1: time                                               *
 *                                                              *
 * Input 2: "I love dogss"                                       *
 * Output 2: love                                               *
 *                                                              *
 * Solution Efficiency                                          *
 * This user scored higher than 63.3% of users who solved this  *
 * challenge.                                                   *
 ***************************************************************/
// let sen = "I lovesdfrh dogss";

// function LongestWord(sen) {

//    let arr = sen.match(/\w+/g);
//    console.log(arr);
//    let max = arr[0].length;
//    let temp = '';

//    for(let i=0; i<arr.length; i++) {

//       if(arr[i].length > max) {
//          max = arr[i].length
//          temp = arr[i];
//       }

//    }

//    return temp;

// }
// console.log(LongestWord(sen));

/****************************************************************
 *           CODERBYTE NUMBER ENCODING CHALLENGE                *
 *                                                              *
 * Problem Statement                                            *
 * Have the function NumberEncoding(str) take the str parameter *
 * and encode the message according to the following rule:      *
 * encode every letter into its corresponding numbered position *
 * in the alphabet. Symbols and spaces will also be used in the *
 * input. For example: if str is "af5c a#!" then your program   *
 * should return 1653 1#!.                                      *
 *                                                              *
 * Examples                                                     *
 * Input 1: "hello 45"                                          *
 * Output 1: 85121215 45                                        *
 *                                                              *
 * Input 2: "jaj-a"                                             *
 * Output 2: 10110-1                                            *
 *                                                              *
 * Solution Efficiency                                          *
 * This user scored higher than 30.7% of users who solved this  *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/
// let str = "hello 45";

// function NumberEncoding(str) {

//    let arr = str.split('');
//    console.log(arr);

//    for(let i=0; i<arr.length; i++) {
//       if(str[i].match(/[a-zA-Z]/g)) {
//          let num = str.charCodeAt(i) - 96;
//          arr[i] = num;
//       } else {
//          arr[i] = arr[i];
//       }
//    }
//    return arr.join('');
// }

// console.log(NumberEncoding(str));

/****************************************************************
 *               CODERBYTE OFF BINARY CHALLENGE                 *
 *                                                              *
 * Problem Statement                                            *
 * Have the function OffBinary(strArr) read the array of strings*
 * stored in strArr, which will contain two elements, the first *
 * will be a positive decimal number and the second element will*
 * be a binary number. Your goal is to determine how many digits*
 * in the binary number need to be changed to represent the     *
 * decimal number correctly (either 0 change to 1 or vice versa)*
 *                                                              *
 * For example: if strArr is ["56", "011000"] then your program *
 * should return 1 because only 1 digit needs to change in the  *
 * binary number (the first zero needs to become a 1) to        *
 * correctly represent 56 in binary.                            *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["5624", "0010111111001"]                           *
 * Output 1: 2                                                  *
 *                                                              *
 * Input 2: ["44", "111111"]                                    *
 * Output 2: 3                                                  *
 *                                                              *
 ***************************************************************/
// let strArr = ["44", "111111"];

// function OffBinary(strArr) {

//    let arr = strArr.map(Number);
//    let digit = arr[0];
//    let binary = strArr[1];
//    console.log(binary);
//    let counter = 0;

//    let digitBinary = digit.toString(2);
//    console.log(digitBinary);

//    for(let i=0; i<digitBinary.length; i++) {
//       if(binary[i] !== digitBinary[i]) {
//          counter++;
//       }
//    }
//    return counter;
// }

// console.log(OffBinary(strArr));

/****************************************************************
 *             CODERBYTE ONE DECREMENTED CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function OneDecremented(str) count how many times a *
 * digit appears that is exactly one less than the previous     *
 * digit. For example: if str is "5655984" then your program    *
 * should return 2 because 5 appears directly after 6 and 8     *
 * appears directly after 9. The input will always contain at   *
 * least 1 digit.	                                        *
 *                                                              *
 * Examples                                                     *
 * Input 1: "56"                                                *
 * Output 1: 0                                                  *
 *                                                              *
 * Input 2: "9876541110"                                        *
 * Output 2: 6                                                  *
 *                                                              *
 ***************************************************************/
// let str = "9876541110";

// function OneDecremented(str) {

//    let arr = str.split('').map(Number);
//    let counter = 0;
//    console.log(arr);

//    for(let i=0; i<arr.length; i++) {
//       if(arr[i] === arr[i+1]+1) {
//          counter++;
//       }
//    }
// return counter;
// }

// console.log(OneDecremented(str));

/****************************************************************
 *             CODERBYTE PALINDROME TWO CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function PalindromeTwo(str) take the str parameter  *
 * being passed and return the string true if the parameter is  *
 * a palindrome, (the string is the same forward as it is       *
 * backward) otherwise return the string false. The parameter   *
 * entered may have punctuation and symbols but they should not *
 * affect whether the string is in fact a palindrome.           *
 * For example: "Anne, I vote more cars race Rome-to-Vienna"    *
 * should return true.                                          *
 *                                                              *
 * Examples                                                     *
 * Input 1: "Noel - sees Leon"                                  *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: "A war at Tarawa!"                                  *
 * Output 2: true                                               *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 33.1% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/
// let str = "Anne, I vote more cars race Rome-to-Vienna";

// function PalindromeTwo(str) {

//    let ked = str.toLowerCase();
//    console.log(ked);
//    let bhu = ked.match(/[a-zA-Z]+/g);
//    let mit = bhu.join('').split('');
//    let jan  = bhu.join('').split('').reverse();
//    console.log(jan);

//    for(let i=0; i<ked.length; i++) {
//       if(mit[i] !== jan[i]) {
//          return false;
//       }
//    }
// return true;
// }

// console.log(PalindromeTwo(str));

/****************************************************************
 *             CODERBYTE QUESTIONS MARKS CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function QuestionsMarks(str) which takes the str    *
 * string parameter, which will contain single digit numbers,   *
 * letters, & question marks, & check if there are exactly 3    *
 * question marks between every pair of two numbers that add up *
 * to 10. If so, then your program should return the string     *
 * true, otherwise it should return the string false. If there  *
 * aren't any two numbers that add up to 10 in the string, then *
 * your program should return false as well.                    *
 *                                                              *
 * Test Cases                                                   *
 * For example: if str is "arrb6???4xxbl5???eee5" then your     *
 * program should return true because there are exactly 3       *
 * question marks between 6 and 4, and 3 question marks between *
 * 5 and 5 at the end of the string.                            *
 *                                                              *
 * Examples                                                     *
 * Input 1: aa6?9                                               *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: acc?7??sss?3rr1??????5                              *
 * Output 2: true                                               *
 *                                                              *
 * Input 3: 5??aaaaaaaaaaaaaaaaaaa?5?5                          *
 * Output 3: false                                              *
 *                                                              *
 * Input 4: 9???1???9???1???9                                   *
 * Output 4: true                                               *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 68.6% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/
// let str = '9???1???9???1???9';

// function QuestionsMarks(str) {
//   let arr = str.match(/[0-9/?]/g);
//   console.log(arr);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '?') {
//       if (arr[i + 1] === '?') {
//         if (arr[i + 2] === '?') {
//           let temp = arr[i - 1];
//           let temp2 = arr[i + 3];
//           if(+temp + +temp2 === 10) {
//             return true;
//           }
//         }
//       }
//     }
//   }
// return false;
// }

// console.log(QuestionsMarks(str));

/****************************************************************
 *              CODERBYTE RUN LENGTH CHALLENGE                  *
 *                                                              *
 * Problem Statement                                            *
 * Have the function RunLength(str) take the str parameter being*
 * passed and return a compressed version of the string using   *
 * the Run-length encoding algorithm. This algorithm works by   *
 * taking the occurrence of each repeating character and        *
 * outputting that number along with a single character of the  *
 * repeating sequence.                                          *
 * For example: "wwwggopp" would return 3w2g1o2p.               *
 * The string will not contain any numbers, punctuation,        *
 * or symbols.                                                  *
 *                                                              *
 * Examples                                                     *
 * Input 1: "aabbcde"                                           *
 * Output 1: 2a2b1c1d1e                                         *
 *                                                              *
 * Input 2: "wwwbbbw"                                           *
 * Output 2: 3w3b1w                                             *
 *                                                              *
 * Solution Efficiency                                          *
 * This user scored higher than 42.4% of users who solved this  *
 * challenge.                                                   *
 ***************************************************************/
// let str = 'wwwggopp';

// function RunLength(str) {
//   let arr = str.split('');
//   console.log(arr);
//   let final = '';
//   let counter = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === arr[i+1] ) {
//       counter++;
//     } else if(arr[i] !== arr[i+1]) {
//       final += counter + 1 + arr[i];
//       counter = 0;
//     }
// }
// return final;
// }
// console.log(RunLength(str));

/****************************************************************
 *             CODERBYTE SIMPLE SYMBOLS CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function SimpleSymbols(str) take the str parameter  *
 * being passed and determine if it is an acceptable sequence   *
 * by either returning the string true or false. The str        *
 * parameter will be composed of + and = symbols with several   *
 * characters between them (ie. ++d+===+c++==a) and for the     *
 * string to be true each letter must be surrounded by          *
 * a + symbol. So the string to the left would be false.        *
 * The string will not be empty & will have at least one letter *
 *                                                              *
 * Examples                                                     *
 * Input 1: "+d+=3=+s+"                                         *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: "f++d+"                                             *
 * Output 2: false                                              *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 48.0% of users who solved this   *
 * challenge.                                                   *
 ***************************************************************/
// let str = "+f++d+";
// function SimpleSymbols(str) {

//    for(let i=0; i<str.length; i++) {
//       if(str[i].toLowerCase() >= 'a' && str[i].toLowerCase() <= 'z') {
//          if(str[i-1] !== '+' || str[i+1] !== '+') {
//             return false;
//          }
//       }
//    }
// return true;
// }

// console.log(SimpleSymbols(str));

/****************************************************************
 *             CODERBYTE STAR RATING CHALLENGE                  *
 *                                                              *
 * Problem Statement                                            *
 * Have the function StarRating(str) take the str parameter     *
 * being passed which will be an average rating between         *
 * 0.00 and 5.00, and convert this rating into a list of 5 image*
 * names to be displayed in a user interface to represent the   *
 * rating as a list of stars and half stars. Ratings should be  *
 * rounded to the nearest half. There are 3 image file names    *
 * available: "full.jpg", "half.jpg", "empty.jpg".              *
 * The output will be the name of the 5 images                  *
 * (without the extension), from left to right, separated by    *
 * spaces.                                                      *
 *                                                              *
 * Examples                                                     *
 * Input 1: "0.38"                                              *
 * Output 1: half empty empty empty empty                       *
 *                                                              *
 * Input 2: "4.5"                                               *
 * Output 2: full full full full half                           *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 77.9% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/
// let str = '5.0';
// function StarRating(str) {

//   let arr = str.split('.');
//   let a = arr[0];
//   let b = Math.round(arr[1]);
//   let c = 0;
//   let final = '';

//   if (b == 0) {
//     c = 5 - a;
//   } else {
//     c = 4 - a;
//   }

//   for (let i = 0; i < a; i++) {
//     final += 'Full ';
//   }
//   if (b > 0) {
//     final += 'Half ';
//   }
//   for (let i = 0; i < c; i++) {
//     final += 'Empty ';
//   }
//   return final;
// }

// console.log(StarRating(str));

///////////////////////////////////////////////////////////////////////////////////////
// function postfixEval(string) {
//   var stack = [];
//   var ch; // current char

//   for (var k = 0; k < string.length; k++) {
//     ch = string[k];

//     // if it's a value, push it onto the stack
//     if (/\d/.test(ch)) stack.push(ch);
//     // else if it's an operator
//     else if (ch in operators) {
//       var b = +stack.pop();
//       var a = +stack.pop();

//       var value = operators[ch](a, b);
//       stack.push(value);
//     }

//     // else we just skip whitespaces
//   }

//   if (stack.length > 1) throw 'ParseError: ' + string + ', stack: ' + stack;

//   return stack[0];
// }

// // operators
// var operators = {
//   '+': function (a, b) {
//     return a + b;
//   },
//   '-': function (a, b) {
//     return a - b;
//   },
//   '*': function (a, b) {
//     return a * b;
//   },
//   '/': function (a, b) {
//     return a / b;
//   },
// };

// // tests

// console.log(postfixEval('2 3 +')); // 5
// console.log(postfixEval('5 4 + 2 1 + *')); // 27

// let str = '5 4 + 2 1 + *';

// function postfixEval(str) {
//    let operators = {
//       '+': function (a, b) {
//         return a + b;
//       },
//       '-': function (a, b) {
//         return a - b;
//       },
//       '*': function (a, b) {
//         return a * b;
//       },
//       '/': function (a, b) {
//         return a / b;
//       },
//     };

//     let stack = [];
//     let char = '';

//     for(let i=0; i<str.length; i++) {
//       char = str[i];
//       if(/\d/g.test(char)) {
//          stack.push(char);
//       } else if (char in operators){
//          let b = +stack.pop();
//          let a = +stack.pop();

//          let c = operators[char](a, b);
//          stack.push(c);
//       }

//     }
// return stack[0];
// }

// console.log(postfixEval(str));

/****************************************************************
 *             CODERBYTE STRING CHANGES CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function StringChanges(str) take the str parameter  *
 * being passed, which will be a string containing letters from *
 * the alphabet, and return a new string based on the following *
 * rules. Whenever a capital M is encountered, duplicate the    *
 * previous character (then remove the M), and whenever a       *
 * capital N is encountered remove the next character from the  *
 * string (then remove the N). All other characters in the      *
 * string will be lowercase letters.                            *
 * For example: "abcNdgM" should return "abcgg".                *
 * The final string will never be empty.                        *
 *                                                              *
 * Examples                                                     *
 * Input 1: "MrtyNNgMM"                                         *
 * Output 1: rtyggg                                             *
 *                                                              *
 * Input 2: "oMoMkkNrrN"                                        *
 * Output 2: ooookkr                                            *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 52.6% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/
// let str = "oMoMkkNrrN";

// function StringChanges(str) {

//   let arr = str.match(/[a-zA-Z]/g);
//   console.log(arr);
//   let temp = '';

//   for(let i=0; i<arr.length; i++) {
//     if(arr[i] == 'M') {
//       temp = arr[i-1];
//       arr.splice(i, 1, temp);
//     } else if(arr[i] == 'N') {
//       temp = arr[i+1];
//       arr.splice(i, 2);
//     }
//   }
// return arr.join('');
// }

// console.log(StringChanges(str));

/****************************************************************
 *             CODERBYTE STRING EXPRESSION CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function StringExpression(str) read the str         *
 * parameter being passed which will contain the written out    *
 * version of the numbers 0-9 and the words "minus" or "plus" & *
 * convert the expression into an actual final number written   *
 * out as well.                                                 *
 * For example: if str is "foursixminustwotwoplusonezero" then  *
 * this converts to "46 - 22 + 10" which evaluates to 34 and    *
 * your program should return the final string threefour.       *
 * If your final answer is negative it should include the       *
 * word "negative."                                             *
 *                                                              *
 * Examples                                                     *
 * Input 1: "onezeropluseight"                                  *
 * Output 1: oneeight                                           *
 *                                                              *
 * Input 2: oneminusoneone                                      *
 * Output 2: negativeonezero                                    *
 *                                                              *
 ***************************************************************/
// let str = "oneminusoneone";

// function StringExpression(str) {
//   let numberToWords = {
//     0: 'zero',
//     1: 'one',
//     2: 'two',
//     3: 'three',
//     4: 'four',
//     5: 'five',
//     6: 'six',
//     7: 'seven',
//     8: 'eight',
//     9: 'nine',
//     '+': 'plus',
//     '-': 'Negative',
//   };

//   let wordToNumbers = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//     plus: '+',
//     minus: '-',
//   };

//   let position = 0;
//   let final = '';

//   for (let i = 0; i <= str.length; i++) {
//     if (
//       wordToNumbers[str.slice(position, i)] ||
//       wordToNumbers[str.slice(position, i)] == 0
//     ) {
//       final += wordToNumbers[str.slice(position, i)];
//       position = i;
//     }
//   }

//   let kedar = eval(final);
//   let javab = String(kedar).split('');
//   console.log(javab);
//   let vraj = '';

//   for(let i=0; i<javab.length; i++){
//       vraj += numberToWords[javab[i]];
//   }

//   return vraj;
// }

// console.log(StringExpression(str));

/****************************************************************
 *             CODERBYTE STRING REDUCTION CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function StringReduction(str) take the str parameter*
 * being passed and return the smallest number you can get      *
 * through the following reduction method.                      *
 * The method is: Only the letters a, b, and c will be given in *
 * str and you must take two different adjacent characters and  *
 * replace it with the third. For example "ac" can be replaced  *
 * with "b" but "aa" cannot be replaced with anything.          *
 * This method is done repeatedly until the string cannot be    *
 * further reduced, and the length of the resulting string is   *
 * to be outputted.                                             *
 *                                                              *
 * For example: if str is "cab", "ca" can be reduced to "b"     *
 * and you get "bb" (you can also reduce it to "cc").           *
 * The reduction is done so the output should be 2.             *
 *                                                              *
 * If str is "bcab", "bc" reduces to "a", so you have "aab",    *
 * then "ab" reduces to "c", and the final string "ac" is       *
 * reduced to "b" so the output should be 1.                    *
 *                                                              *
 * Examples                                                     *
 * Input 1: "abcabc"                                            *
 * Output 1: 2                                                  *
 *                                                              *
 * Input 2: cccc                                                *
 * Output 2: 4                                                  *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored more than 53.0% of users who solved this     *
 * challenge                                                    *
 *                                                              *
 ***************************************************************/
// let str = 'cccc';

// function StringReduction(str) {
//   let replacements = {
//     ab: 'c',
//     bc: 'a',
//     ac: 'b',
//     ba: 'c',
//     cb: 'a',
//     ca: 'b',
//   };
//   let final = '';
//   let flag = false;
//   for (let i = 0; i < str.length; i++) {
//     if (i !== str.length - 1) {
//       if (str[i] + str[i + 1] in replacements) {
//         flag = true;
//         final += replacements[str[i] + str[i + 1]];
//         i++;
//       }
//       else final += str[i];
//     }
//     else final += str[i];
//   }
//   return flag === true ? StringReduction(final) : final.length;
// }

// console.log(StringReduction(str));

// let str = "abcabc";

// function StringReduction(str) {

//   let final = '';
//   let arr = str.match(/[abc]/g);

//   for(let i=0; i<arr.length; i++) {
//          if(arr[i] == 'a' && arr[i+1] == 'b') {arr.splice(i, 2,  'c')}
//     else if(arr[i] == 'b' && arr[i+1] == 'c') {arr.splice(i, 2,  'a')}
//     else if(arr[i] == 'a' && arr[i+1] == 'c') {arr.splice(i, 2,  'b')}
//     else if(arr[i] == 'b' && arr[i+1] == 'a') {arr.splice(i, 2,  'c')}
//     else if(arr[i] == 'c' && arr[i+1] == 'b') {arr.splice(i, 2,  'a')}
//     else if(arr[i] == 'c' && arr[i+1] == 'a') {arr.splice(i, 2,  'b')}
//     else {
//       final = arr.join('');
//       return final.length;
//     }
//   }
//   final = arr.join('');

//   return StringReduction(final);

// }

// console.log(StringReduction(str));

/****************************************************************
 *             CODERBYTE STRING SCRAMBLE CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function StringScramble(str1,str2) take both        *
 * parameters being passed and return the string true if a      *
 * portion of str1 characters can be rearranged to match str2,  *
 * otherwise return the string false.                           *
 * For example: if str1 is "rkqodlw" and str2 is "world" the    *
 * output should return true. Punctuation and symbols will not  *
 * be entered with the parameters.                              *
 *                                                              *
 * Examples                                                     *
 * Input 1: "cdore" & "coder"                                   *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: "h3llko" & "hello"                                  *
 * Output 2: false                                              *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 37.5% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/
// let str1 = "hellko";
// let str2 = "hello";

// function StringScramble(str1,str2) {

//   let arr1 = str1.split('').sort((a,b) => {
//     return a-b;
//   });
//   let arr2 = str2.split('').sort((a,b) => {
//     return a-b;
//   });

//   console.log(arr1, arr2);

//   for(let i=0; i<arr2.length; i++) {
//     if(!arr1.includes(arr2[i])) {
//       return false;
//     }
//   }
// return true;
// }

// console.log(StringScramble(str1,str2));

/****************************************************************
 *             CODERBYTE STRING ZIGZAG CHALLENGE                *
 *                                                              *
 * Problem Statement                                            *
 * Have the function StringZigzag(strArr) read the array of     *
 * strings stored in strArr, which will contain two elements,   *
 * the first some sort of string and the second element will be *
 * a number ranging from 1 to 6. The number represents how many *
 * rows to print the string on so that it forms a zig-zag       *
 * pattern. For example: if strArr is ["coderbyte", "3"] then   *
 * this word will look like the following if you print it in a  *
 * zig-zag pattern with 3 rows:                                 *
 * Your program should return the word formed by combining the  *
 * characters as you iterate through each row, so for this      *
 * example your program should return the string creoebtdy.     *
 *                                               coderbyte
 *                                                              *
 * Examples                             c       r        e         *
 * Input 1: ["cat", "5"]                  o   e   b   t             *
 * Output 1: cat                            d       y             *
 *                                                              *
 * Input 2: ["kaamvjjfl", "4"]         k            j             *
 * Output 2: kjajfavlm                   a        j   f            *
 *                                         a    v       l
 *                                           m                   *
 ***************************************************************/
// let strArr = ["coderbyte", "3"];

// function StringZigzag(strArr) {

//   let str = strArr[0].split('');
//   let num = +strArr[1];
//   console.log(str, num);
//   let final = '';

// return final;
// }

// console.log(StringZigzag(strArr));

/****************************************************************
 *             CODERBYTE LONGEST CONSECUTIVE CHALLENGE          *
 *                                                              *
 * Problem Statement                                            *
 * Have the function LongestConsecutive(arr) take the array of  *
 * positive integers stored in arr and return the length of the *
 * longest consecutive subsequence (LCS).                       *
 * An LCS is a subset of the original list where the numbers    *
 * are in sorted order, from lowest to highest, and are in a    *
 * consecutive, increasing order. The sequence does not need to *
 * be contiguous and there can be several different subsequences*
 *                                                              *
 * For example: if arr is [4, 3, 8, 1, 2, 6, 100, 9] then a few *
 * consecutive sequences are [1, 2, 3, 4], and [8, 9].          *
 * For this input, your program should return 4 because that is *
 * the length of the longest consecutive subsequence.           *
 *                                                              *
 * If there are less than four numbers in the array your program*
 * should return the sum of all the numbers in the array.       *
 *                                                              *
 * Examples                                                     *
 * Input 1: [6, 7, 3, 1, 100, 102, 6, 12]                       *
 * Output 1: 2                                                  *
 *                                                              *
 * Input 2: [5, 6, 1, 2, 8, 9, 7]                               *
 * Output 2: 5                                                  *
 *                                                              *
 ***************************************************************/
// let arr = [5, 6, 1, 2, 8, 9, 7];

// function LongestConsecutive(arr) {

//   let str = arr.sort((a,b) => {
//     return a-b;
//   });
//   console.log(str);
//   let counter = 0;
//   let max = 0;

//   for(let i=0; i<str.length; i++) {
//     if(str[i]+1 === str[i+1]) {
//       counter++;
//     } else {
//       if(max < counter) {
//       max = counter+1;
//       }
//       counter = 0;
//     }
//   }

// return max;

// }

// console.log(LongestConsecutive(arr));
////////////////////////////////////////////////////////////////////////////////////
// let num = 1993241315;

// function PlusMinus(num) {
//   let arr = [];

//   let str = String(num).split('');
//   console.log(str);

//   const length = str.length - 1;
//   console.log(length);

//   const obj = { 0: '-', 1: '+' };

//   for (let i = 0; i < 2 ** length; i++) {
//     let bnr = '1' + i.toString(2).padStart(length, '0');
//     let sum = 0;

//     for (let j = 0; j < str.length; j++) {
//       sum = eval(`${sum}${obj[bnr[j]]}${str[j]}`);
//     }
//     if (sum === 0) {
//       const final = bnr.split('');
//       final.shift();

//       return final.map(ele => obj[ele]).join('');
//     }
//   }
//   return 'not possible';
// }

// console.log(PlusMinus(num));

/****************************************************************
 *              CODERBYTE COMMAND LINE CHALLENGE                *
 *                                                              *
 * Problem Statement                                            *
 * Have the function CommandLine(str) take the str parameter    *
 * being passed which represents the parameters given to a      *
 * command in an old PDP system. The parameters are alphanumeric*
 * tokens (without spaces) followed by an equal sign & by their *
 * corresponding value. Multiple parameters/value pairs can be  *
 * placed on the command line with a single space between each  *
 * pair. Parameter tokens and values cannot contain equal signs *
 * but values can contain spaces. The purpose of the function is*
 * to isolate the parameters and values to return a list of     *
 * parameter and value lengths. It must provide its result in   *
 * the same format and in the same order by replacing each entry*
 * (tokens and values) by its corresponding length.             *
 *                                                              *
 * For example, if str is: "SampleNumber=3234 provider=Dr. M.   *
 * Welby patient=John Smith priority=High" then your function   *
 * should return the string "12=4 8=12 7=10 8=4" because        *
 * "SampleNumber" is a 12 character token with a 4 character    *
 * value ("3234") followed by "provider" which is an 8 character*
 * token followed by a 12 character value ("Dr. M. Welby"), etc.*
 *                                                              *
 * Examples                                                     *
 * Input 1: "letters=A B Z T numbers=1 2 26 20 combine=true"    *
 * Output 1: 7=7 7=9 7=4                                        *
 *                                                              *
 * Input 2: "a=3 b=4 a=23 b=a 4 23 c="                          *
 * Output 2: 1=1 1=1 1=2 1=6 1=0                                *
 *                                                              *
 ***************************************************************/
// let str ='SampleNumber=3234 provider=Dr. M. Welby patient=John Smith priority=High';

// function CommandLine(str) {
//   let arr = str.split('=');

//   let final = [];
//   let first = arr.splice(0, 1)[0];
//   let last = arr.splice(arr.length - 1, 1)[0];
//   final.push(first);

//   for (let i = 0; i < arr.length; i++) {
//     let temp = arr[i].split('');
//     let temp2 = temp.splice(temp.length - 1, 1)[0];
//     first = temp;

//     final.push(first, temp2);
//   }
//   final.push(last);
//   console.log(final);

//   let kedar = [];

//   for (let i = 1; i < final.length; i++) {
//     final[i] = [final[i]].flat().join('');
//     i++;
//   }
//   for(let i=0; i<final.length; i++) {
//     kedar.push(`${final[i].length} = ${final[i + 1].length}, `);
//     i++;
//   }
//   // console.log(final);
//   return kedar.join('');
// }
// console.log(CommandLine(str));

// function CommandLine(string) {
//   let lst = string.split('=');
//   let value = [];
//   let key = [];

//   for (let i = 1; i < lst.length - 1; i++) {
//     let v = lst[i];
//     let strk = '';
//     let strv = '';
//     let spce = false;

//     for (let j = v.length - 1; j >= 0; j--) {
//       if (v[j] === ' ') {
//         spce = true;
//       }
//       if (v[j] !== ' ') {
//         if (spce === false) {
//           strk += v[j];
//         }
//       }
//       if (spce === true) {
//         strv += v[j];
//       }
//     }
//     console.log(`strk${i}:${strk}`);
//     console.log(`strv${i}:${strv}`);

//     key.push(strk);
//     value.push(strv);
//   }
//   key.unshift(lst[0]); // first value of list alwase include in key list
//   value.push(lst[lst.length - 1]); // last value of list alwase include in value list

//   console.log('key:', key);
//   console.log('value:', value);

//   let final = '';
//   for (let i = 0; i < key.length; i++) {
//     let vall = value[i].length - 1;
//     if (i === key.length - 1) {
//       vall = value[i].length;
//     }
//     final += `${key[i].length}=${vall} `;
//   }

//   console.log(lst);
//   return final;
// }

// // KEEP THIS FUNCTION CALL HERE
// console.log(CommandLine(str));

// let arr = [3,30,34,5,9];

// function combinations(arr) {
//   return new Array(1 << arr.length)
//     .fill()
//     .map((e1, i) => arr.filter((e2, j) => i & (1 << j)));
// }

// let kedar = combinations(arr);
// // console.log(arr.length);
// let javab = kedar;
// console.log(javab);

// for(let i=0; i<kedar.length; i++) {
//   if(kedar[i].length === 5) {
//     // console.log(kedar);
//   }
// }

// for(let i=0; i<arr.length; i++) {
//   for(let j=0; j<arr.length; j++) {

//     let outcomes = swap(arr, i, j);
//     console.log(outcomes);

//   }
// }

// console.log(letters);

/* 
Have the function GroupTotals(strArr) read in the strArr parameter containing key:value pairs where the key is a string and the value is an integer. Your program should return a string with new key:value pairs separated by a comma such that each key appears only once with the total values summed up.

For example: if strArr is ["B:-1", "A:1", "B:3", "A:5"] then your program should return the string A:6,B:2.

Your final output string should return the keys in alphabetical order. Exclude keys that have a value of 0 after being summed up.
Examples
Input: ["X:-1", "Y:1", "X:-4", "B:3", "X:5"]
Output: B:3,Y:1
Input: ["Z:0", "A:-1"]
Output: A:-1
*/

// function GroupTotals(strArr) {

//    const sums = {};

//    for(let i=0; i<strArr.length; i++) {
//       const [key, value] = strArr[i].split(':');
//       sums[key] = (sums[key] || 0) + parseInt(value);
//    }

// }
// console.log(GroupTotals(strArr));

// let strArr = ['B:-1', 'A:1', 'B:3', 'A:5'];

// function GroupTotals(strArr) {
//   let resObject = {};
//   let parsingRegExp = /(\w+):(-?\d+)/;
//   strArr.forEach(val => {
//     const matches = val.match(parsingRegExp);
//     const key = matches[1];
//     const numVal = Number(matches[2]);
//     if (resObject[key] || resObject[key] === 0) {
//       resObject[key] = resObject[key] += numVal;
//     } else {
//       resObject[key] = numVal;
//     }
//   });
//   return Object.keys(resObject)
//   .sort()
//   .map(val => {
//     return resObject[val] ? val + ':' + resObject[val] : '';
//   })
//   .filter(val => {
//     return val;
//   })
//   .join(',');
// };

// console.log(GroupTotals(strArr));
