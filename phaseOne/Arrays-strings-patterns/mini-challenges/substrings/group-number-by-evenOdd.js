// 📦 Mini Practice 5: Group Numbers by Even/Odd
// Input:
// [1, 2, 3, 4, 5, 6]

// Output:
// [
//   [2, 4, 6],  // even
//   [1, 3, 5]   // odd
// ]
// Key: num % 2 (0 = even, 1 = odd)

function oddEven (arr){
    const map = new Map()
    for(let nums of arr){
        let key = nums % 2
        if(map.has(key)){
            map.get(key).push(nums)
        }else{
            map.set(key, [nums])
        }
    }
    return Array.from(map.values())
}

console.log(oddEven([1, 2, 3, 4, 5, 6]))