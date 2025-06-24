// // 🟢 5 Easy Problems:
// // Double each number in an array.
// // [1, 2, 3] → [2, 4, 6]

const numbers = [1,2,3]
const double = numbers.map(x => x*2)
console.log(double)

// // Convert an array of strings to uppercase.
// // ['a', 'b'] → ['A', 'B']
const letters = ['a', 'b']
const upper = letters.map(x => x.toUpperCase())
console.log(upper)

// // Extract ages from an array of people objects.
// // [{name:'A', age:20}, {name:'B', age:25}] → [20, 25]
const people = [{name:'A', age:20}, {name:'B', age:25}]
const ages = people.map(x => x.age)
console.log(ages)

// // Add 10 to each number in an array.
// // [5, 10] → [15, 20]
const add = [5,10]
const ten = add.map(x => x + 10)
console.log(ten)

// // Convert an array of numbers to strings.
// // [1, 2, 3] → ['1', '2', '3']
const num = [1,2,3]
const toString = num.map(x => x.toString())
console.log(toString)


// 🟡 5 Intermediate Problems:
// Return an array of string lengths.
// ['hi', 'hello'] → [2, 5]

// Format array of objects into a new array of strings.
// [{name:'A', age:20}] → ['A is 20']

// Add a new key to each object in an array.
// [{name:'A'}] → [{name:'A', active:true}]

// Square numbers in an array and then turn them into strings.

// Chained .map(): multiply each number by 2, then convert to string.
// [1, 2, 3] → ['2', '4', '6']