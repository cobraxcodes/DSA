// Mini-Challenge 4: Find All Elements with Exactly X Occurrences

// Goal: Write a function that takes an array of numbers nums and a specific targetCount. It should return an array of all distinct numbers that appear 
// exactly targetCount times in nums. The order of the returned numbers doesn't matter.
// Hint: Count frequencies. Then, filter your frequency data based on the value.
// Example: findExactOccurrences([1, 1, 2, 3, 3, 3, 4], 2)
// Frequencies: 1:2, 2:1, 3:3, 4:1
// Result: [1] (because only 1 appears exactly 2 times)
// Example: findExactOccurrences([5, 5, 6, 6, 7], 2) should return [5, 6] (order doesn't matter).

function findElements (nums, k){
    const map = new Map()

    for(let numbers of nums){
        map.set(numbers, (map.get(numbers) || 0) + 1)
    }
    const arr = Array.from(map.entries())
    let result = []
    for(let i=0; i<arr.length; i++){
        if(arr[i][1] === k){
            result.push(arr[i][0])
        }
    }
    return result
}

console.log(findElements([1, 1, 2, 3, 3, 3, 4], 2))
console.log(findElements ([5, 5, 6, 6, 7], 2) )