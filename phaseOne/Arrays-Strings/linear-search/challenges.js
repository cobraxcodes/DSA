// 🔹 Intermediate
// 6️⃣ Find the first number greater than 50 in an array.
const array = [1,3,45,78,123,45,21,479]

function greater(array){
    for(let i=0; i<array.length; i++){
        if(array[i] > 50){
            return array[i]
        }
    }
}

console.log(greater(array))
// 7️⃣ Find the last occurrence of a word in an array.
const arr =["hi", "hello", "world", "earth"]
const last = arr[arr.length -1]
console.log(last)


// 8️⃣ Find if two different numbers add up to a target sum (brute force linear search way).

function sum(arr, k){
    let mySet = new Set()
    let y = []
    for(let nums of arr){
        let target = k - nums

        if(mySet.has(target)){
            y.push(target, nums)
        }
        mySet.add(nums)
    }
    return y
}

console.log(sum([1,2,3,4,5], 8))

// 9️⃣ Return the number of elements greater than a given value.

function count (array, x){
    let occ = 0
    for(let i=0; i<array.length; i++){
        if(array[i] > x){
            occ++
        }
    }
    return occ
}

console.log(count([1,3,45,78,123,45,21,479],15))


// 🔟 Replace the first occurrence of a word in a string array.
arr[0] = "yes"
console.log(arr)