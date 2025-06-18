// Mini-Challenge 2: Are All Elements Unique?

// Goal: Write a function that takes an array of numbers nums and returns true if all elements in the array are unique (i.e., no number appears more than once), and false otherwise.
// Hint: You're counting frequencies here too, but you don't need to sort. What condition would tell you if an element is not unique?
// Example: areAllUnique([1, 2, 3, 4]) should return true.
// Example: areAllUnique([1, 2, 3, 2]) should return false.

const unique = (arr) =>{
    let map = new Map()
    for (let numbers of arr){
        map.set(numbers, (map.get(numbers) || 0) + 1)
    }
    const newArr = Array.from(map.entries())
    for(let i=0; i<newArr.length; i++){
        if(newArr[i][1] !== 1){
            return false
        }
    }
    return true
}

console.log(unique([1, 2, 3, 4]))
console.log(unique([1, 2, 3, 2]))