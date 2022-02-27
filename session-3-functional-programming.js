// const difference = ({ mother, myage }) => ({ mother, age: myage - 3 });
// console.log(difference({ mother: "zzz", myage: 22 }));

// const addColor = (arr) => [...arr, "blue", "red"]
// console.log(addColor(["yellow", "pink", "white", "orange", "green"]))

// const birthday = (obj) => ({...obj, age: obj.age++})
// console.log(birthday({name:'XYZ', age:20}))

// ----------------------map, filter, reduce-------------------------
// const numbers = [1, 11, 20, 10, 3, 21];
// const numberLessThanTen = (n) => n < 10
// array.filter(numberLessThanTen)

// const increamentByTwo = n => n+2
// numbers.map(increamentByTwo)

// ---------------- reduce --------------------

// const odd = (acc, curr) => curr % 2 !==0 ? acc + curr : acc
// console.log(numbers.reduce(odd, 0))

// const even = (acc, curr) => curr % 2 ===0 ? acc + curr : acc
// console.log(numbers.reduce(even, 0))

// const reduceToObj = (accObj, num) => num % 2 === 0 ? {...accObj, even: accObj.even + num} : {...accObj, odd: accObj.odd + num}

// console.log(numbers.reduce(reduceToObj, {odd:0, even:0}))

// -------------------------curring--------------------
/**
 *  Why to use curring?
 *  -> Used for partial application
 */

// const add = num1 => num2 => num1 + num2
// console.log(add(2)(4))

// const giveYourName = name => msg => `${name}, ${msg}`
// console.log(giveYourName("Rohan")('says hello!'))

// function curry(f) {
// 	return function (a) {
// 		return function (b) {
// 			return f(a, b);
// 		};
// 	};
// }

// const curry = f => a => b => f(a, b);

// const sum = (a, b) => a + b;
// const curriedSum1 = curry(sum)(10)(10);
// const curriedSum2 = curry(10, 20);
// console.log(curriedSum2);

// -------------------composition------------------------

// const logWithMyName = msg => `Rohan says, ${msg}`;
// const logWithMyId = msg => `ID 1111 :: ${msg}`;
// const logWithIdAndName = msg => logId(logMsg(msg));
// console.log(logWithIdAndName("I am awesome"));

// ----------- homework--------------------

// const numbers = [1, 11, 20, 10, 6, 4, 3, 21];
// const add = (a, b) => a + b;

// a. Find sum of all odd numbers
// const checkOdd = n => n % 2 !== 0;

// approach-1
// console.log(numbers.filter(checkOdd).reduce(add, 0));

// approach-2
// const addOddValues = (prev, curr) => (curr % 2 !== 0 ? prev + curr : prev);

// const oddSum = numbers.reduce(addOddValues, 0);
// console.log(oddSum);

// b. Find sum of all numbers at odd indices
// approach-1
// const oddSum = numbers.filter((ele, i) => i % 2 !== 0).reduce(add, 0);
// console.log(oddSum);

// approach-2
// const addOddValues = (prev, curr, index) =>
// 	index % 2 !== 0 ? prev + curr : prev;

// const oddSum = numbers.reduce(addOddValues, 0);
// console.log(oddSum);

// c. Find the biggest number in array
// const isbigger = (prev, curr) => (prev < curr ? curr : prev);

// const biggestNumber = numbers.reduce(isbigger, Number.NEGATIVE_INFINITY);
// console.log(biggestNumber);

//  d. find numbers divisible by 10
// const numbersDivisibleBy10 = (prev, curr) =>
// 	curr % 10 == 0 ? [...prev, curr] : prev;

// const result = numbers.reduce(numbersDivisibleBy10, []);
// console.log(result);

// e. return array with odd numbers increamented and even numbers are
//    decremented by one

// approach-1
// const result = numbers.map(ele => (ele % 2 === 0 ? ele - 1 : ele + 1));
// console.log(result);

// approach-2
// const oddIncEvenDec = (prev, curr) =>
// 	curr % 2 === 0 ? [...prev, curr - 1] : [...prev, curr + 1];

// const result = numbers.reduce(oddIncEvenDec, []);
// console.log(result);

// // f. return object with sum of even and odd numbers seperately
// const checkOddEven = (obj, curr) =>
// 	curr % 2 === 0
// 		? { ...obj, even: obj.even + curr }
// 		: { ...obj, odd: obj.odd + curr };

// const result = numbers.reduce(checkOddEven, { odd: 0, even: 0 });
// console.log(result);

// -------------------- string with reduce ---------------------
// a. find number of strings with similar number of characters
// const strArray = ["apple", "orange", "mango", "papaya", "banana"];

// const countSimilarLength = (obj, curr) => {
// 	if (curr.length in obj) {
// 		return { ...obj, [curr.length]: obj[curr.length] + 1 };
// 	} else {
// 		return { ...obj, [curr.length]: 1 };
// 	}
// };

// const countSimilarLength = (obj, curr) =>
// 	curr.length in obj
// 		? { ...obj, [curr.length]: obj[curr.length] + 1 }
// 		: { ...obj, [curr.length]: 1 };

// const result = strArray.reduce(countSimilarLength, {});
// console.log(result);

// b. Return array with strings which have vowels
// const strArray = ["apple", "orange", "mango", "papaya", "bnn", "bbrr"];

// // approach-1
// const hasVowel = chr =>
// 	["a", "e", "i", "o", "u"].findIndex(s => s === chr) >= 0;
// // const result = strArray.filter(s => s.split("").some(hasVowel));

// // approach-2
// const filterStr = (prev, word) =>
// 	word.split("").some(hasVowel) ? [...prev, word] : prev;

// const result = strArray.reduce(filterStr, []);
// console.log(result);

// c. return array of objects with key as item and value as number
//    of characters in string
// const creatObj = (prev, curr) => [...prev, { [curr]: curr.length }];
// const result = strArray.reduce(creatObj, []);
// console.log(result);

// compose homework
// const logText = text => `Rohan says, ${text}`;
// const logId = text => `User ID 1122 :: ${text}`;

// const log = msg => logId(logText(msg));
// console.log(log("hello all"));

// curring homework
// create a function that takes name and returns a function which would
// add your name to anything that function says
const takeName = name => msg => `${name} says, ${msg}`;
const result = takeName("Rohan")("hello");
console.log(result);

// -------------- composition homework ------------------------

// const multiplyBy2 = num => num * 2;
// const add3 = num => num + 3;
// const divideBy5 = num => num / 5;
// const reducer = (accumulator, fn) => fn(accumulator);

// with reduce
// const compose =
// 	(...arrayOfFunctions) =>
// 	num =>
// 		arrayOfFunctions.reduce(reducer, num);

// with implemented reduce

// console.log(compose(multiplyBy2, add3, divideBy5)(11));

// ------------------ with ES5 "arguments" keyword --------------
// const increment = n => n + 1;
// const square = n => n * n;
// const reducer = (acc, fn) => fn(acc);

// function compose() {
// 	return num => {
// 		return Object.values(arguments).reduce(reducer, num);
// 	};
// }

// const incrementAndThanSquare = compose(increment, increment, square);
// const result = incrementAndThanSquare(2);
// console.log(result);

// ------------ implementation ------------------
// const numbers = [1, 11, 20, 10, 6, 4, 3, 21];

// // map implementation
// const myMap = (array, fn) => {
// 	const output = [];
// 	for (let i = 0; i < array.length; i++) {
// 		output.push(fn(array[i]));
// 	}
// 	return output;
// };

// console.log(myMap(numbers, ele => ele * 2));

// TODO: reduce implementation

// TODO: filter implementation

//
