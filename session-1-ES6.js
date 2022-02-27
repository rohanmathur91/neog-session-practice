// =========== section 1: let, const, and var =========
// ---------- example 01 --------------
// Topic: Block scope & functional scope

// if (true) {
// 	let a = 2;
// }
// let a = 10;
// console.log(a);

//  -------------------------------------
// let a = 42;
// {
// 	let a = 100;
// }
// console.log(a);

// ---------------------------------------
// let a = 100;
// function App() {
// 	console.log("1", a);
// 	let a = 42;
// 	console.log("2", a);
// 	{
// 		let a = 100;
// 	}
// 	console.log("3", a);
// }

// App();

// -----------------------------------------
// let a = 100;
// function App() {
// 	a = 42;
// 	console.log("1", a);
// }
// App();

// ---------------- example 02 -----------------
// Topic: TDZ. Temporal Dead Zone

// function something() {
// 	console.log(a);
// 	let a = 2;
// }

// something();

// ---------------- example 03 -----------------
// Topic: Hoisting.

// function something() {
// 	console.log(a);
// 	var a = 2;
// }

// something();

// ---------------- example 04 -----------------
// Topic: const VS var

// const tanay = 2;
// tanay = 3;

// ---------------- example 05 -----------------
// Topic: const with objects

// const obj = { a: 1, b: 2 };
// obj.a = 22;  // this is valid

// const obj = { a: 1, b: 2 };
// const obj2 = { a: 3, b: 4 };
// obj = obj2;

// ---------------- example 06 -----------------
// Topic: const with arrays

// const array = [1, 2, 3, 4]
// array.push(55)

// =========== section 2: arrow functions ============

// ---------------- example 07 -----------------
// Topic: Short arrow function/Lamda function/Fat arrow function

// Can you convert below arrow function into function declaration (normal function) format?

// with no parameter
// const getNum = () => 2;

// // ES5 function
// function getNum() {
// 	return 2;
// }

// // with one parameter
// // Function
// const isOne = num => num == 1; // HW: === vs == in JavaScript, write a blog.

// // ES5 function
// function isOne(num) {
// 	return num == 1;
// }

// // Calling the function
// console.log(isOne(12));

// // Vinay

// function isOne(num) {
// 	return num === 1 ? true : false;
// }

// // Hiren
// function isOne(num) {
// 	console.log(num);
// }

// // ---------------- example 08 -----------------
// // Topic: Arrow function with more than 1 parameter

// const isBigger = (a, b) => a > b;
// console.log("Is 2 bigger than 3?", isBigger(2, 3));

// // How would you write this with the least amount of characters
// function Add22andReturn(num) {
// 	let sum = 0;
// 	sum = num + 22;
// 	return sum;
// }

// // Version 1
// const Add22andReturn = num => {
// 	let sum = 0;
// 	sum = num + 22;
// 	return sum;
// };

// // Version 2
// const Add22andReturn = num => {
// 	let sum = 0;
// 	sum = num + 22;
// 	return sum;
// };

// // Version 3
// const Add22andReturn = num => {
// 	return num + 22;
// };

// // Version 4
// const Add22andReturn = num => num + 22;

// [1, 2, 3, 4, 5].map(num => num + 22);

// // ---------------- example 09 -----------------

// const printSomethingAndReturn = a => {
// 	console.log("squaring a.....");
// 	return a * a;
// };
// console.log(printSomethingAndReturn(2));

// // ---------------- example 10 -----------------
// // NOTE: put paranthesis before returning a object in on line return
// const giveMeAnObject = a => ({ value: a });

// console.log(giveMeAnObject(5));

// =========== section 3: default parameters =========
// ----------------- example 11 -----------------
// Topic: default parameters

// const defaultExample = (a, b) => a + b
// console.log(defaultExample(2))

// const defaultExample = (a, b) => {
// 	if (b === undefined) {
// 		b = 5;
// 	}
// 	return a + b;
// };

// ------------------------------------

// // Instead
// const defaultExample2 = (a, b = 5) => a + b;

// console.log(defaultExample(2, 4));
// console.log(defaultExample2(3));

// ------------------------------------

// const defaultExample3 = (a, b=5, c) => a + b + c
// console.log(defaultExample3(1, 2, 3));
// console.log(defaultExample3(1, , 3));

// =========== section 4: rest and spread =========
// ----------------- example 12 -----------------
// Topic: rest

// const restExample = (a, ...rest) => {
// 	console.log(a, rest)
//   }

//   console.log(restExample(2, 3, 4, 5, 6, 7, 8, 9, 10))

// ----------------- example 13 -----------------
// Topic: spread with object

// const spreadExample = ({ a, b }) => {
// 	console.log(a, b);
// };

// const obj = { a: 1, b: 2 };
// console.log(spreadExample(obj));

// ----------------- example 14 -----------------
// Topic: spread with array (imp)

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const spreadExample2 = ([first, second, ...rest]) => {
// 	console.log(first, second, rest);
// };

// console.log(spreadExample2(array));

// ------------------------------------

// // rest with spread
// console.log(spreadExample2([...array, 11, 12, 13]));

// ----------------- example 15 -----------------
// Topic: spread ( can rename parameters )

// const spreadExample = ({ a: aaloo, b: bhaaloo }) => {
// 	// destructuring
// 	// console.log(a,b)
// 	//  renaming a -> aaloo & b -> bhaaloo
// 	console.log(aaloo, bhaaloo);
// };

// const obj = { a: 1, b: 2 };
// spreadExample(obj);

// ------------------------------------

// NOTE: order of keys in destructuring does not matter
// const spreadExample = ({ b: bhaaloo, a: aaloo }) => {
// 	console.log(aaloo, bhaaloo)
//   }

//   const obj = { a: 1, b: 2 }
//   spreadExample(obj)

// =========== section 5: Dynamic fields/ Object literal/ Template literal =========
// ----------------- example 16 -----------------
// Topic: Dynamic fields in an object/computed property syntax

// let key = "ram";
// const obj = { [key]: 122 };
// console.log(obj);

// ----------------- example 17 -----------------
// Topic: Object literals/Shorthand property value

// let aaloo = 1;
// let bhaaloo = 2;

// const obj1 = { aaloo: aaloo, bhaaloo: bhaaloo };
// console.log(obj1);
// const obj2 = { aaloo, bhaaloo };
// console.log(obj2); // { aaloo: 1, bhaaloo: 2}

// ----------------- example 18 -----------------
// Topic: Template Literal

// let name = "Tanay";
// let line = "Helloo " + name + " !";
// console.log(line);

// const helloTemp = `Hello ${name} !`;
// console.log(helloTemp);

// const giveMeFive = () => 5;
// const line2 = `Hey, my roll is ${giveMeFive()}`;
// console.log(line2);

// // Question: variable 5 // "odd" ->> write this function, using arrow
// // Question: use this function in a sentence using template literal

// const oddOrEven = n => (n % 2 === 0 ? "even" : "odd");
// const s = `The number 5 is ${oddOrEven(5)}`;

// =========== section 6: Module system =========
// ----------------- example 19 -----------------
// Topic: import/export

//  →  /utils.js
export const add = (a, b) => a + b;
export const square = a => a * a;

//  →  /app.js
import { add, square } from "./utils";

console.log(add(1, 2));
console.log(square(2));

// ----------------- example 20 -----------------
// Topic: default export

//  →  /utils.js
const square = a => a * a;
export default square;

//  →  /app.js
import square from "./utils";
console.log(square(2));

// ----------------- example 21 -----------------
// Topic: import/export with rename

//  →  /utils.js
const add = (x, y) => x + y;
export { add as sum };

//  →  /app.js
import { sum as xyz } from "./utils";
console.log(xyz(2, 5));
