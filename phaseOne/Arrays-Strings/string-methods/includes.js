// 🟢 Easy:
// Check if a string contains "dog".
const str = "I am a dog but I still love cats"
const test = "cats"
const check = str.includes(test)
console.log(check)

// Check if a sentence contains "JavaScript".
const testA = "javascript"
const strA = "my favorite language is hELLo java"
const checkA = strA.includes(testA)
console.log(checkA)

// Check if a name contains "a" (case sensitive).
const letter = "a"
const checkB = strA.includes(letter)
console.log(checkB)


// 🟡 Intermediate:
// Check if a sentence contains "hello" (case insensitive).
const testB = "HeLlO".toLowerCase()
const checkC = strA.toLowerCase().includes(testB)
console.log(checkC)

// Check if a string contains both "cat" and "dog" (logical AND).
const cat = "cat"
const dog = "dog"
const checkD = str.includes(cat && dog)
console.log(checkD)

// Check if an array of strings has any word containing "test" (use .some() with includes()).
const strArr = ["hello", "hi", "dog","str"]
const testE = "test"
const checkE = strArr.includes(testE)
console.log(checkE)

// Count how many times "a" appears in a string using a loop + includes().
function count (str){
    let counter = 0
    let testF = "a"
    for(let i=0; i<str.length; i++){
        if(str[i] === testF){
            counter++
        }
    }
          return counter
}
console.log(count("my favorite language is hELLo java"))
// Check if a string contains any word from an array like ["dog", "cat", "bird"].
const testG = ['dog', 'cat', 'bird'];
const sentence = "I am a dog";
const found = testG.some(word => sentence.includes(word));
