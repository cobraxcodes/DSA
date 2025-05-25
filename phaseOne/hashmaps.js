// 📌 1️⃣ Character Frequency Counter
// Problem:
// Write a function that takes a string and returns an object showing how many times each character appears.
// Example:
// charCount("banana")
// // { b:1, a:3, n:2 }
const charFrequency = (str) =>{
    let obj = {}
    str.split('').forEach(x =>{
        if (obj[x]){
            obj[x]++
        }else{
            obj[x] = 1
        }
    })
    return obj
}

console.log(charFrequency("banana"))


// 📌 2️⃣ Word Frequency Counter (Case-Insensitive)
// Problem:
// Same as before — write a function to count how many times each word appears in a sentence, ignoring case.
// Example:
// wordCount("Hello hello world")
// // { hello: 2, world: 1 }

const wordFrequencyCounter = (str) =>{
    let obj = {}
    str.split(' ').forEach(x =>{
        x = x.toLowerCase()
        if(obj[x]){
            obj[x]++
        }else{
            obj[x] = 1
        }
    })
    return obj
}

console.log(wordFrequencyCounter("Hello hello world"))


// 📌 3️⃣ Number Frequency Counter
// Problem:
// Write a function that takes an array of numbers and returns an object showing how many times each number appears.
// Example:
// numberCount([1, 2, 2, 3, 3, 3])
// // { 1: 1, 2: 2, 3: 3 }



// 📌 4️⃣ Find Most Frequent Character
// Problem:
// Write a function that returns the character that appears the most in a string.
// Example:
// mostFrequentChar("mississippi")
// // Output: "i"



// 📌 5️⃣ Find Unique Elements
// Problem:
// Write a function that takes an array and returns an array of elements that appear only once.
// Example:
// uniqueElements([1, 2, 2, 3, 4, 4, 5])
// // Output: [1, 3, 5]
// Hint:
// Use an object to count how many times each number appears, then filter the ones with a count of 1.

