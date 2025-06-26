// 1️⃣ Print all keys of an object
// { a: 1, b: 2, c: 3 }
// // Output: a, b, c

function allKeys (obj){
    for(let keys in obj){
        console.log(keys)
    }
}
// allKeys({ a: 1, b: 2, c: 3 })

// 2️⃣ Print all values of an object
// { a: 1, b: 2, c: 3 }
// // Output: 1, 2, 3
function allValues(obj){
    let values = []
    for(let keys in obj){
        values.push(obj[keys])
    }
return values
}
console.log(allValues({ a: 1, b: 2, c: 3 }))


// 3️⃣ Count how many properties are in an object
// { a: 1, b: 2, c: 3 }
// // Output: 3
function countProp(obj){
    let count = 0;
    for(let keys in obj){
        count++
    }
    return count
}
console.log(countProp({ a: 1, b: 2, c: 3 }))

// 4️⃣ Find the key of the highest value
// { a: 5, b: 9, c: 2 }
// // Output: b

function highestValue(obj){
    let highest = 0;
    let highestKey = ""
    for(let keys in obj){
        if(highest<obj[keys]){
            highest = obj[keys]
            highestKey = keys
        }
    }
    return highestKey
}
console.log(highestValue({ a: 5, b: 9, c: 2 }))

// 5️⃣ Copy all keys to an array
// { x: 1, y: 2 }
// // Output: ['x', 'y']
function copyKeys(obj){
    let arr=[]
    for(let keys in obj){
        arr.push(keys)
    }
    return arr
}
console.log(copyKeys({ x: 1, y: 2 }))