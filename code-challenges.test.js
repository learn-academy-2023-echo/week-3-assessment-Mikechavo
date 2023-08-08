// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
//input: 6 and 10
//output: [1, 1, 2, 3, 5, 8], [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// describe("fibSeq", () => {
// it("fibonacci sequence with length", () => {
//           const fibLength1 = 6
// // Expected output: [1, 1, 2, 3, 5, 8]
//       
//           const fibLength2 = 10
//         // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//   expect(fibSeq(fibLength1)).toEqual[1, 1, 2, 3, 5, 8]
//   expect(fibSeq(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
// })
// })




// // b) Create the function that makes the test pass.

// // Pseudo code:
// // make an empty array to store the fibonacci sequence
// //seq starts with 1,1 and then adds the first two elements to the array
// //use a loop to generate the remaining elements
// //start index with 2 instead of 0 since we all already the first numbers
// //each iteration of the loop, calculate the next fib number by adding the last two numbers in the array
// // *** I spent a long time on this one and I realized I spelt expect wrong a few hours later, I hope this is right
// const fibSeq = (length) => {
//   if(length <= 0) {
//     return []
//   } else if (length === 1) {
//     return [1]
//   } else if (length === 2) {
//     return [1, 1]
//   }
//   const array = [1, 1]
//   for (let i = 2; i < length; i++) {
//     array[i] = array[i - 1] + array[i -2]
//   }

//     return array
// }


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
//input: object
//output: [15, 15, 20, 30, 30, 60, 90], [10, 15, 20, 45, 60, 65, 100]
// describe("reSort", () => {
//   it("takes in an object and returns an array of the values sorted from least to greatest", () => {
//     const studyMinutesWeek1 = {
//       sunday: 90,
//       monday: 30,
//       tuesday: 20,
//       wednesday: 15,
//       thursday: 30,
//       friday: 15,
//       saturday: 60
//     }
//     // Expected output: [15, 15, 20, 30, 30, 60, 90]
    
//     const studyMinutesWeek2 = {
//       sunday: 100,
//       monday: 10,
//       tuesday: 45,
//       wednesday: 60,
//       thursday: 20,
//       friday: 15,
//       saturday: 65
//     }
//     expect(reSort(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
//     expect(reSort(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
//   })
// })
//     // Expected output: [10, 15, 20, 45, 60, 65, 100]
// // b) Create the function that makes the test pass.

// // Pseudo code:
// // create a new variable 
// // that takes in object as input to extract the values from the object, sorts them using sort method .sort()
// // use (a, b) => a - b for sorting
// //
// // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// const reSort = (obj) => {
//   const valuesArray = Object.values(obj)
//   valuesArray.sort((a, b) => a - b)
//   return valuesArray
// }

// a) Create a test with expect statements for each of the variables provided.
//input: [100, -17, -23, -9], [250, -89, 100, -96], []
//output: [100, 83, 60, 51], [250, 161, 261, 165], []


describe("addMe", () => {
it("add each number from each other", () => {
  const accountTransactions1 = [100, -17, -23, -9]
  // Expected output: [100, 83, 60, 51]
  const accountTransactions2 = [250, -89, 100, -96]
  // Expected output: [250, 161, 261, 165]
  const accountTransactions3 = []
  // Expected output: []
  expect(addMe(accountTransactions1)).toEqual[100, -17, -23, -9]
  expect(addMe(accountTransactions2)).toEqual[250, -89, 100, -96]
  // expect(subMe(accountTransactions3)).toEqual[]
})
})


// b) Create the function that makes the test pass.

// Pseudo code:
//create a function 
// create a new varible with empty array
// utilize a for loop
//iterate through the input array and add each number with the next one, pushing the into a new array .push() returning our new array newTrans

const addMe = (arr) => {
  const newTrans = []

  for (let i = 0; i<arr.length -1; i++) {
    newTrans.push(arr[i] + arr[i + 1])
  }
  return newTrans
}


//Chris all your feedback is greatly appericated! I hope I'm doing this right, but I know for this next coming week I am going to focus on jest and my vocab