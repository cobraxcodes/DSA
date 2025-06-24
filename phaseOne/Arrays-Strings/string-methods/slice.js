// 🟢 Easy:
// Get the first 3 characters of a string.
const str = "witchcraft"
const firstThree = str.slice(0,3)
console.log(firstThree)
// Get the last 3 characters of a string.
const lastThree = str.slice(-3)
console.log(lastThree)

// Get characters from index 2 to 5.
const twoToFive = str.slice(2,5)
console.log(twoToFive)

// Slice everything from index 4 to the end.
const fourToEnd = str.slice(4)
console.log(fourToEnd)
// Remove the first character of a string.
const firstChar = str.slice(0,1)
console.log(firstChar)
// 🟡 Intermediate:
// Get the middle character(s) of a string.

// Remove both the first and last character of a string.

// Get the first half of a string.

// Reverse a string using .split().reverse().join() + slice() trick.

// Mask a phone number string to only show the last 4 digits.
// Example: 1234567890 → ******7890