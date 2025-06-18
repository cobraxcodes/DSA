// 📦 Mini Practice 2: Group Numbers by Remainder
// Input:
// [5, 9, 7, 2, 6, 10]
// Group numbers by their remainder when divided by 3.
// Output:
// [
//   [5, 2],   // remainder 2
//   [9, 6],   // remainder 0
//   [7, 10]   // remainder 1
// ]
// Key: num % 3


 function remainder (arr){
    const map = new Map()
    for(let nums of arr ){
        let key = nums % 3
        if(map.has(key)){
            map.get(key).push(nums)
        }else{
            map.set(key, [nums])
        }
    }
    return Array.from(map.values())
 }

console.log(remainder([5, 9, 7, 2, 6, 10]))