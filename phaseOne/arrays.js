// 📌 1️⃣ Double the Numbers (.map())
// Problem:
// Write a function that takes an array of numbers and returns a new array with each number doubled.
// Example:
// doubleNumbers([1, 2, 3])
// // Output: [2, 4, 6]
const double = (arr) => arr.map(num => num * 2) 
console.log(double([1,2,3]))
// 📌 2️⃣ Filter Even Numbers (.filter())
// Problem:
// Write a function that takes an array and returns only the even numbers.
// Example:
// filterEvens([1, 2, 3, 4, 5])
// // Output: [2, 4]

const filterEven = (arr) => arr.filter( x  => x % 2 === 0)

console.log(filterEven([1,2,3,4,5]))

// 📌 3️⃣ Sum of Numbers (.reduce())
// Problem:
// Write a function that takes an array of numbers and returns the total sum.
// Example:
// sumNumbers([1, 2, 3, 4])
// // Output: 10

const sum = (arr) => arr.reduce((accumulator, current) => {return accumulator + current} , 0)

console.log(sum([1,2,3,4]))

// 📌 4️⃣ Capitalize Words (.map())
// Problem:
// Write a function that takes an array of lowercase words and returns a new array with the first letter capitalized.
// Example:
// capitalizeWords(["apple", "banana"])
// // Output: ["Apple", "Banana"]
const capitalize = (arr) => arr.map(x => x.charAt(0).toUpperCase() + x.slice(1))
console.log(capitalize(["apple", "banana"]))

// 📌 5️⃣ Product of Numbers (.reduce())
// Problem:
// Write a function that multiplies all numbers in an array together.
// Example:
// productNumbers([1, 2, 3, 4])
// // Output: 24
const multiply = (arr) => arr.reduce((acc, curr) => {return acc * curr}, 1)
 
console.log(multiply([1,2,3,4]))