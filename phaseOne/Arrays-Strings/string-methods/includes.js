// 🟢 Easy:
// Check if a string contains "dog".
const str = "I am a dog but I still love cats"
const test = "cats"
const check = str.includes(test)
console.log(check)

// Check if a sentence contains "JavaScript".
const testA = "javascript"
const strA = "my favorite language is java"
const checkA = strA.includes(testA)
console.log(checkA)

// Check if a name contains "a" (case sensitive).
const letter = "a"
const checkB = strA.includes(letter)
console.log(checkB)


// 🟡 Intermediate:
// Check if a sentence contains "hello" (case insensitive).

// Check if a string contains both "cat" and "dog" (logical AND).

// Check if an array of strings has any word containing "test" (use .some() with includes()).

// Count how many times "a" appears in a string using a loop + includes().

// Check if a string contains any word from an array like ["dog", "cat", "bird"].