// 📦 .reduce() Practice
// 🟢 5 Easy Problems:
// Sum all numbers in an array.
// [1, 2, 3] → 6
const nums = [1,2,3]
const sum = nums.reduce((acc, x) => acc += x)
console.log(sum)


// Multiply all numbers in an array.
// [1, 2, 3] → 6
const product = nums.reduce((acc, x) => acc *= x)
console.log(product)

// Concatenate an array of strings.
// ['a','b'] → 'ab'
const str = ['a', 'b']
const concat = str.reduce((acc, x) => acc + x)
console.log(concat)

// Count how many items are in an array (length without .length)
const count = nums.reduce((acc, x) =>{
    return acc + 1
}, 0)
console.log(count)
// Find the maximum number in an array.
const numsA=[1,2,3,4,5,6]

function maximum(element){
    return Math.max(...element)
}

console.log(maximum([1,2,3,4,5]))


// 🟡 5 Intermediate Problems:
// Flatten a 2D array.
// [[1,2],[3,4]] → [1,2,3,4]

// Count occurrences of letters in a string array.
// ['a','b','a'] → {a:2, b:1}

// Convert an array of key-value pairs into an object.
// [ ['a',1], ['b',2] ] → {a:1, b:2}

// Group array items by a property (like age group)

// Use reduce to filter and sum at once.
// Sum only numbers > 10 from an array.