//1. Try converting these codes to ES6 syntax-

// -------------------------------------------
// var aloo = 1;
// if (aloo == 1) {
// 	var a = 2;
// 	console.log(a);
// }
// console.log(aloo);

// solution
// const aloo = 1;
// if (aloo === 1) {
// 	const a = 2;
// 	console.log(a);
// }
// console.log(aloo);

// ----------------------------------------------
// var multiply = function (x, y) {
// 	return x * y;
// };

// solution
const multiply = (x, y) => x * y;

// ---------------------------------------------
var customer = {
	name: "Bhaalo",
};
var card = {
	amount: 20,
	product: "Aaalo",
	unitprice: 50,
};
var message =
	"Hello " +
	customer.name +
	" wants to buy " +
	card.amount +
	" " +
	card.product +
	" for price of " +
	card.unitprice +
	" per piece";

// solution
const customer = {
	name: "Bhaalo",
};

const card = {
	amount: 20,
	product: "Aaalo",
	unitprice: 50,
};

const message = `Hello ${customer.name} wants to buy ${card.amount}  ${card.product} for price of ${card.unitprice} per piece`;

// --------------------------------------------------
// var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
// 	CEO = Neog[0],
// 	Mentor = Neog[2];

// solution
const Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"];
const [CEO, Mentor] = Neog;

//  ---------------------------------------------------
// var arr = ["MA", "TA", "PA", "CA"];
// var firstName = arr[0],
// var surname = arr[1];
// console.log(firstName);
// console.log(surname);

// solution
const arr = ["MA", "TA", "PA", "CA"];
const [firstName, surname] = arr;
console.log(firstName);
console.log(surname);

// ---------------------------------------------------------
// var Aaloo = "Tasty";
// var Bhaloo = "Cute";
// var Obj = {
// 	Aaloo: Aaloo,
// 	Bhaloo: Bhaloo,
// };

// solution
const Aaloo = "Tasty";
const Bhaloo = "Cute";
const Obj = {
	Aaloo,
	Bhaloo,
};

// ---------------------------------------------------------
// var a = 5;
// var b = 10;
// console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));

// solution
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}`);

// ---------------------------------------------------------
// var arithmeticsObj = {
// 	sum: function sum(num1, num2) {
// 		return num1 + num2;
// 	},
// 	multiply: function multiply(num1, num2) {
// 		return num1 * num2;
// 	},
// };

// solution
const arithmeticsObj = {
	sum: (num1, num2) => num1 + num2,
	multiply: (num1, num2) => num1 * num2,
};

// ---------------------------------------------------------
var avengers = {
	operation: "Assemble",
	members: [
		{
			ironMan: "Tony Stark",
		},
		{
			captainAmerica: "Steve Rogers",
		},
		{
			blackWidow: "Natasha Romanoff",
		},
	],
};
var operation = avengers.operation,
	members = avengers.members;

// solution
const avengers = {
	operation: "Assemble",
	members: [
		{
			ironMan: "Tony Stark",
		},
		{
			captainAmerica: "Steve Rogers",
		},
		{
			blackWidow: "Natasha Romanoff",
		},
	],
};
const { operation, members } = avengers;

// 2. Convert ES6 to ES5
const packIt = (...args) => console.log(args);
packIt(1, 2, 3, 5, 5);

// NOTE(important): In ES5 "arguments" keyword is used to get all the arguments in array
function packIt() {
	console.log(arguments);
}
packIt(1, 2, 3, 5, 5);

// 3. Guess the output
//  ----------------------------------------------
// NOTE: default values for destructed array
const hello = () => "Hello";
const welcome = () => "Welcome";
const [Hello = hello(), Welcome = welcome()] = ["Namaste"];
console.log(Hello, Welcome);

// output: Namaste, Welcome

// ----------------------------------------------
const obj = {
	aloo: 1,
	bhallo: 2,
};

const { c: aloo = [2, 3, 4].push(5), aloo } = obj;
console.log(aloo);

/* 

output: syntax error saying aloo already declared, because we are destructuring and 
        over there "aloo" will be treated as variable declared using const, 
        so it says syntax error

*/
