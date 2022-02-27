// // ---------------------------------------------------------
// function consoleNum() {
// 	var isWorkshop = true;
// 	var num = 10;
// 	if (isWorkshop) {
// 		let num = 20;
// 		console.log(num);
// 	}
// 	console.log(num);
// }
// // consoleNum();

// // ---------------------------------------------------------
// function sum(a, b) {
// 	return a + b;
// }
// console.log(sum(1, "2"));

// ---------------------------------------------------------
// understand: null and undefine, equality
// let a = null;
// let b;

// console.log(a == b);
// console.log(a === b);

// guess output
// {
// 	var a = 2;
// 	var a = 3;
// 	console.log(a);
// }

// {
// 	let b = 18;
// 	let b = 20;
// 	console.log(b);
// }

// let a = 10;
// console.log(a);

// let a = 20;
// console.log(a);

// var a = 10;
// console.log(a);

// let a = 20;
// console.log(a);

// ---------------------------------------------------------
// const myData = { name: "Akanksha", hobby: "Painting" }
// myData.name = "Tanay"
// console.log(myData)

// myData = { name: "Tanay", hobby: "Cracking PJs" }
// console.log(myData)

// ---------------------------------------------------------
// let arr1 = [4, 5, 6];
// // Convert this array to [1, 2, 3, 4, 5, 6, 7, 8]
// arr1 = [1,2,3,...arr1,7,8]
// console.log(arr1);

// ---------------------------------------------------------
// var arr1 = [1,2]
// var arr2 = [arr1, [3,4]] // [[1,2], [3,4]]
// var arr3 = [...arr2, [7,8]]; //  [[1,2],[3,4],[7,8]]
// console.log(arr2)
// console.log(arr3);

// ---------------------------------------------------------
// swaping using destructing
// var a = 1,
// 	b = 2;
// [a, b] = [b, a];
// console.log(a, b);

// ---------------------------------------------------------
// // spread operator(unpack) behind the scence runs for loop
// let a = [..."apple"]; // ["a","p","p","l","e"]
// console.log(a);
