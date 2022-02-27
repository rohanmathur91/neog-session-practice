// ---------------------- question 1 --------------------
// Given an array. Write a function to change all even numbers in an array to odd numbers by adding 1 to it.

// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// Your output should be:
// [1, 3, 3, 59, 5, 7, 25, 9, 15, 5];

// approach - 1;
// const changeToOdd = array => array.map(ele => (ele % 2 === 0 ? ele + 1 : ele));
// changeToOdd(arr);

// // approach - 2;
// arr.reduce((prev, curr) => [...prev, curr % 2 === 0 ? curr + 1 : curr], []);

// ---------------------------- question 2 ---------------------------
// Get the names in an array for only those who have a cycle.

// const family = [
// 	{
// 		name: "Tanay",
// 		haveCycle: true,
// 	},
// 	{
// 		name: "Akanksha",
// 		haveCycle: false,
// 	},
// 	{
// 		name: "Tanvi",
// 		haveCycle: true,
// 	},
// 	{
// 		name: "Kanak",
// 		haveCycle: false,
// 	},
// ];

// Your output should be: ['Tanay', 'Tanvi']

// // approach-1
// const filterFamily = family.filter(({ name, haveCycle }) => haveCycle === true);
// console.log(filterFamily.map(({ name }) => name));

// // approach-2 (with reduce)
// const filterFamily = family.reduce(
// 	(prev, { name, haveCycle }) => (haveCycle ? [...prev, name] : prev),
// 	[]
// );
// console.log(filterFamily);

// --------------------------- question 3 ----------------------------
// Given an array. Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number.

// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// // approach-1
// const isLessThan8AndEven = arr => arr.filter(ele => ele <= 8 && ele % 2 === 0);
// console.log(isLessThan8AndEven(arr));

// // approach-2
// const isLessThan8AndEven = (acc, curr) =>
// 	curr <= 8 && curr % 2 === 0 ? [...acc, curr] : acc;
// console.log(arr.reduce(isLessThan8AndEven, []));

// ---------------------------- question 4 ---------------------------
// Given an array. Write a function that takes in the given array and prints only the words which are more than 5 characters in length.

// const arr = ["eat", "sleep", "repeat", "code"];

// // Your output should be: ['repeat']

// // approach-1
// console.log(arr.filter(word => word.length > 5));

// // approach - 2;
// const charactersMoreThan5 = (acc, word) =>
// 	word.length > 5 ? [...acc, word] : acc;
// console.log(arr.reduce(charactersMoreThan5, []));

// ---------------------------- question 5 ---------------------------
// Given an array. Write a function to get the sum of all elements which are greater than 50.
// const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];
// const result = arr.reduce((acc, curr) => (curr > 50 ? acc + curr : acc), 0);
// console.log(result);

// --------------------------- question 6 ----------------------------
// Given an array. Write a function to find the product of all elements which are even.
// const arr = [1, 2, 3, 7, 5, 6, 8, 9];

// const result = arr.reduce((acc, curr) => acc * (curr % 2 === 0 ? curr : 1), 1);
// console.log(result);

// ------------------- question 7 ---------------------
// Given an array of objects. Write a function to find the sum of ages of each person.

// const arr = [
// 	{
// 		name: "Jay",
// 		age: 60,
// 	},
// 	{
// 		name: "Gloria",
// 		age: 36,
// 	},
// 	{
// 		name: "Manny",
// 		age: 16,
// 	},
// 	{
// 		name: "Joe",
// 		age: 9,
// 	},
// ];

// // Your output should be: 121 /*** 60+36+16+9 ***/

// const totalAge = arr.reduce((prev, { age }) => prev + age, 0);
// console.log(totalAge);

// --------------------------- question 8 ----------------------------
// Given an array. Convert it in to an object with key as the index of each element and value as the element itself.

// const arr = ["You", "all", "are", "rockstars"];

// // Your output should be:
// // {'0': "You", '1': "all", '2': "are", '3': "rockstars"}

// approach-1
// const result = arr.reduce(
// 	(prev, curr, index) => ({ ...prev, [index]: curr }),
// 	{}
// );
// console.log(result);

// // approach-2 (trick)
// console.log({ ...arr });

// --------------------------- question 9 ----------------------------
// Given an array of objects. If the name of an item is more than 5 characters in length, add type as ‘vegetable’. If the name of an item is less than or equal to 5 characters in length, add type as ‘fruit’.

// const arr = [
// 	{
// 		name: "Apple",
// 	},
// 	{
// 		name: "Mango",
// 	},
// 	{
// 		name: "Potato",
// 	},
// 	{
// 		name: "Guava",
// 	},
// 	{
// 		name: "Capsicum",
// 	},
// ];

// // approach - 1;
// const updatedArray = arr.map(obj => ({
// 	...obj,
// 	type: obj.name.length <= 5 ? "fruit" : "vegetable",
// }));

// // approach - 2;
// const reducer = (acc, curr) => [
// 	...acc,
// 	{ ...curr, type: curr.name.length <= 5 ? "fruit" : "vegetable" },
// ];

// const updatedArray = arr.reduce(reducer, []);
// console.log(updatedArray);

//// --------------------------- question 10  ----------------------------
// const inventory = [
// 	{ name: "fans", quantity: 3 },
// 	{ name: "chimneys", quantity: 0 },
// 	{ name: "bulbs", quantity: 5 },
// 	{ name: "stove", quantity: 1 },
// ];

//// a. Get all the items in an array whose quantity is less than 2.
// const quantityLessThan2 = inventory.filter(({ quantity }) => quantity < 2);
// console.log(quantityLessThan2);

// // b. Get the total quantity of items present in the inventory.
// const totalQuantity = inventory.reduce(
// 	(acc, { quantity }) => acc + quantity,
// 	0
// );
// console.log(totalQuantity);

// c. Find the object which contains the item whose quantity is zero.
// const quantityEqualToZero = inventory.filter(({ quantity }) => quantity === 0);
// console.log(quantityEqualToZero);

// // --------------------------- question 11 ----------------------------
// Write a function that accepts a number as input and inserts hyphens between every two even numbers.

// const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]

// Your output should be:
// Violet-Indigo-Blue-Green-Yellow-Orange-Red
// console.log(arr.join('-'))
// console.log([...'Violet'].join('-')) // join word with hyphen

//// --------------------------- question 12 ----------------------------
// Write a function that accepts a number as input and inserts hyphens between every two even numbers.

// const insertHyphen = num =>
// 	String(num)
// 		.split("")
// 		.reduce(
// 			(acc, chr) =>
// 				acc + (acc[acc.length - 1] % 2 === 0 && chr % 2 === 0 ? "-" : "") + chr,
// 			""
// 		);

// console.log(insertHyphen(24));

// --------------------------- question 13 ----------------------------
// Write a function that takes in a string and converts all the characters to uppercase.

// const input = "neogrammer";
// console.log(input.toUpperCase());

// --------------------------- question 14 ----------------------------
// const input = "neoG";
// const convertCharacters = string =>
// 	string
// 		.split("")
// 		.reduce(
// 			(acc, chr) =>
// 				acc +
// 				(["a", "e", "i", "o", "u"].includes(chr)
// 					? chr.toUpperCase()
// 					: chr.toLowerCase()),
// 			""
// 		);

// console.log(convertCharacters(input));

// --------------------------- question 15 ----------------------------
// const input = [
// 	["a", "b", "c"],
// 	["c", "d", "e"],
// 	["e", "d", "f"],
// ];

// console.log(input.reduce((prev, arr) => [...prev, ...arr], []));

// --------------------------- question 16 ----------------------------
// const input = [
// 	["a", "b", "c"],
// 	["c", "d", "e"],
// 	["e", "d", "f"],
// ];

// const flattendArray = input.reduce((prev, arr) => [...prev, ...arr], []);
// const reducer = (acc, curr) => ({
// 	...acc,
// 	[curr]: curr in acc ? acc[curr] + 1 : 1,
// });

// const result = flattendArray.reduce(reducer, {});
// console.log(result);
