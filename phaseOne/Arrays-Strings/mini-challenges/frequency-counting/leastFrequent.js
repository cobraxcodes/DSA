// Mini-Challenge 1: Finding the Least Frequent Element

// Goal: Write a function that takes an array of numbers nums and returns the single number that appears the least number of times. If there's a tie, any one of the tied numbers is fine.
// Hint: You'll still need to count frequencies. How would your sorting logic change, or what would you pick from the sorted list?
// Example: findLeastFrequent([1, 1, 2, 3, 3, 3, 4,66,555]) should return 2.
// Example: findLeastFrequent([1, 2, 3, 4]) could return 1, 2, 3, or 4.

function lfe(arr){
    
    const map = new Map()
    for (let numbers of arr){
        map.set(numbers, (map.get(numbers) || 0) + 1)
    }
    const newArray = Array.from(map.entries())
    newArray.sort((a,b) => a[1] - b[1])
        // console.log(newArray)
    
    let results = []
    for (let i=0; i<= 0; i++){
        results.push(newArray[i][0])
    }
    return results
}

console.log(lfe([1, 1, 2,2, 3, 3, 3,4,5,5,5,5]))
console.log(lfe([1, 2, 3, 4]))