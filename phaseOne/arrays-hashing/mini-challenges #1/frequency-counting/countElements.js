// Mini-Challenge 3: Count Elements Greater Than a Threshold

// Goal: Write a function that takes an array of numbers nums and a threshold frequency. It should return the count of distinct numbers whose frequency in nums is strictly greater than threshold.
// Hint: Count frequencies first. Then, how do you iterate through your frequency data to check each count against the threshold? You don't need to sort the frequencies for this one.
// Example: nums = [1, 1, 1, 2, 2, 3, 4, 4, 4, 4], threshold = 2
// Frequencies: 1:3, 2:2, 3:1, 4:4
// Numbers with frequency > 2: 1 (freq 3), 4 (freq 4)
// Result: 2 (because there are 2 such distinct numbers)

function countElements (nums, k){
    const map = new Map()
    for(let numbers of nums){
        map.set(numbers, (map.get(numbers) || 0) + 1)
    }
    const arr = Array.from(map.entries())
    let result = 0

    for(let i=0; i<arr.length; i++){
        if(arr[i][1] > k ){
            result++
        }
    }
 return result
}

console.log(countElements([1, 1, 1, 2, 2, 3, 4, 4, 4, 4], 2))