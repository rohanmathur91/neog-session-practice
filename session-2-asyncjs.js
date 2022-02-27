// watchTheWholeSessionNow()
//   .then(tryAgainYourself)
//   .then(discussWithYourTeam)
//   .then(() => {
//     if (conceptsStillNotClear === true) {
//       askInDoubtClearingSessions()
//     }
//   })

// exe2
// const printLength = (l) => `OMG! my name is ${l} char long!`;
// const strLength = (name, cb) => cb(name.length);
// console.log(strLength("Rohan", printLength))

// exe3
// const success = () => "Yay! I am alive!";
// const failure = () => "Give my bose speakers and apple headphones to my sister";

// const willThanosKillMe = (name, cb1, cb2) =>
// 	name.length % 2 === 0 ? cb1() : cb2();

// console.log(willThanosKillMe("rohanm", success, failure));

// exe4
// const printMessage = (msg, delay) => setTimeout(() => console.log(msg), delay);
// printMessage("Good Morning", 2000);

// ex6: setInterval
// const printMessageAtX = (msg, delay) => setInterval(() => console.log(msg), delay);
// const id = printMessageAtX("Good Morning", 2000);
// setTimeout(() => clearInterval(id), 6000)

// const counterToZero = (n) => {
//   const timerId = setInterval(() => {
//     console.log(n)
//     if (n === 0) {
//       console.log("Bang Bang!")
//       clearInterval(timerId)
//     }
//     n -= 1
//   }, 1000)

// }

// counterToZero(5)

// ex10: understand promise constructor
// function myPromise (value, toReject) {
//   return new Promise((resolve, reject) => {
//     if (toReject){
//       reject("Promise rejected")
//     }else{
//       setTimeout(() => resolve(`Yay! Promise is resolved🥳, with value: ${value}`), 4000)
//     }
//   })
// }

// const promiseObject = myPromise("Rohan")
// console.log(promiseObject)
// promiseObject.then((data) => console.log(data))

// setTimeout(() => console.log("helo", promiseObject), 5000)

// ex11: print data on success and ex12: print data on success, print error on failure
// function fakeFetch(msg, shouldReject) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldReject) {
//         reject(`error from server: ${msg}`)
//       }
//       resolve(`from server: ${msg}`)
//     }, 3000)
//   })
// }

// fakeFetch("hello", true)
// .then(data => console.log(data))
// .catch(err => console.log(err))

// ex13: chaining
// function fakeFetch(msg, shouldReject) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldReject) {
//         reject(`error from server: ${msg}`)
//       }
//       resolve(`from server: ${msg}`)
//     }, 3000)
//   })
// }

// fakeFetch("hello")
// .then(data => data.length)
// .then(data => console.log(data))
// .catch(err => console.log(err))

// ex14: waterfall data
// function fakeFetch(msg, shouldReject) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldReject) {
//         reject(`error from server: ${msg}`)
//       }
//       resolve(`from server: ${msg}`)
//     }, 3000)
//   })
// }

// function syncCallsToServer(msg1, msg2){
//   fakeFetch(msg1)
//   .then(data1 => {
//     return fakeFetch(msg2).then(data2 => [data1, data2])
//   })
//   .then(data => console.log("from outside", data))
//   .catch(err => console.log(err))
// }

// syncCallsToServer("Hello-1" ,"Hello-2")

// ex15: use async-await with fakeFetch
function fakeFetch(msg, shouldReject) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (shouldReject) {
				reject(`error from server: ${msg}`);
			}
			resolve(`from server: ${msg}`);
		}, 3000);
	});
}

// const getData = async (msg) => {
//   const data = await fakeFetch(msg)
//   console.log(data)
// }
// getData('Hello')

// async function syncCallsToServer(msg1, msg2){
//   try{
//     const data1 = await fakeFetch(msg1)
//     const data2 = await fakeFetch(msg2)
//     console.log([data1, data2])
//   }catch(err){
//     console.log(err)
//   }
// }
// syncCallsToServer("Hello-1" ,"Hello-2")

//-------------------------------------------------------------------
// important: parallel calls in async-await
// async function syncCallsToServer(msg1, msg2) {
// 	try {
// 		const data = await Promise.allSettled([
// 			fakeFetch(msg1),
// 			fakeFetch(msg2),
// 			fakeFetch(msg2),
// 			fakeFetch(msg2),
// 			fakeFetch(msg2, true),
// 		]);

// 		console.log(data);
// 	} catch (err) {
// 		console.log(err);
// 	}
// }
// syncCallsToServer("Hello-1", "Hello-2");

// // v.important
// new Promise(function (resolve, reject) {
// 	// const a = 10;
// 	setTimeout(() => {
// 		// a += 10;
// 		console.log(a);
// 	}, 1000);
// }).catch(alert);

// //
// new Promise(function (resolve, reject) {
// 	function foo() {
// 		console.log(somevalue);
// 	}
// 	foo();
// }).catch(alert);
