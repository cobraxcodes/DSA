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
const numberFrequencyCounter = (arr) =>{
    let obj = {}
    arr.forEach(x =>{
        if(obj[x]){
            obj[x]++
        }else{
            obj[x] = 1
        }
    })
    return obj
}

console.log(numberFrequencyCounter([1,2,2,3,3,3]))

// 📌 4️⃣ Find Most Frequent Character
// Problem:
// Write a function that returns the character that appears the most in a string.
// Example:
// mostFrequentChar("mississippi")
// // Output: "i"

const findMostFrequent = (str) =>{
    let obj ={}
    str.split('').forEach(x =>{
      if(obj[x]){
        obj[x]++
      }else{
        obj[x] = 1
      }
    })
        let biggestValue = 0;
        let maxKey = ''

    for(let key in obj){
        if(obj[key] > biggestValue){
            biggestValue = obj[key]
            maxKey = key
        }
    }
    return maxKey
}


console.log(findMostFrequent("mississippi"))


// 📌 5️⃣ Find Unique Elements
// Problem:
// Write a function that takes an array and returns an array of elements that appear only once.
// Example:
// uniqueElements([1, 2, 2, 3, 4, 4, 5])
// // Output: [1, 3, 5]
// Hint:
// Use an object to count how many times each number appears, then filter the ones with a count of 1.

const findUniqueElement = (arr) =>{
    let obj = {}
    arr.forEach(x => {
        if (obj[x]){
            obj[x]++
        }else{
            obj[x] = 1
        }
    })
        let newArr=[] // creating the new array to store the numbers with only count of 1
    for(let key in obj){ // this iterates through the object
        if(obj[key] === 1){ // this iterates through the value of the obj
            newArr.push(Number(key))
        }
    }
    return newArr
}
console.log(findUniqueElement([1, 2, 2, 3, 4, 4, 5]))