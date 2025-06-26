// 1️⃣ Sum numbers in an array
// [10, 20, 30]
// // Output: 60
function sum(arr){
    let sumOfArray = 0;
    for(let values of arr){
        sumOfArray+=values
    }
    return sumOfArray
}

console.log(sum([10, 20, 30]))


// 2️⃣ Print only the even numbers
// [1, 4, 5, 8]
// // Output: 4, 8
function even(arr){
    let evenNums= []
    for(let values of arr){
        if(values % 2 === 0){
            evenNums.push(values)
        }
    }
    return evenNums
}


console.log(even([1,4,5,8]))

// 3️⃣ Concatenate all strings together
// ['foo', 'bar', 'baz']  
// // Output: 'foobarbaz'

let arr = ['foo', 'bar', 'baz']
const newStr = arr.join("")
console.log(newStr)


// 4️⃣ Find if any string contains the word "error"
// ['all good', 'minor error', 'success']  
// // Output: true
function containsError(arr){
    for(let values of arr){
        if(values.includes("error")){
            return true
        }
    }
    return false
}

console.log(containsError(['all good', 'minor error', 'success'] ))


// 5️⃣ Add 10 to each number and build a new array
// [1, 2, 3]  
// // Output: [11, 12, 13]

function tenEach(arr){
    let newArr = []
    for(let values of arr){
        newArr.push(values + 10)
    }
    return newArr
}

console.log(tenEach([1, 2, 3]  ))