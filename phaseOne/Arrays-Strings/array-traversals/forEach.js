// 1️⃣ Print the index + value of each item
const nums = ['a', 'b', 'c']
// // Output: 0:a  1:b  2:c
function count (nums){
    let obj = {}
    nums.forEach((x) =>{
        if(obj[x]){
            obj[x]++
        }else{
            obj[x] = 1
        }
    })
    return obj
}

// console.log(count(nums))


// 2️⃣ Sum the lengths of all strings in an array
// ['hi', 'hello', 'world']  
// // Output: 13

function sum (arr){
    const stringArray = arr.join('').split("")
        console.log(stringArray)
    let sumStrings = 1
    stringArray.forEach(x => {
        sumStrings++
    })
return sumStrings
}

// console.log(sum(['hi', 'hello', 'world']))

// 3️⃣ Convert all strings to uppercase and push them into a new array
// ['dog', 'cat', 'bird']  
// // Output: ['DOG', 'CAT', 'BIRD']
function upper(arr){
    const oldArr = arr.join("").toUpperCase().split("")
    const newArry = []
    oldArr.forEach(x => newArry.push(x))
    return newArry
}
// console.log(upper(['dog', 'cat', 'bird']))



// 4️⃣ Create an object mapping words to their lengths
// ['hi', 'hello']  
// // Output: { hi: 2, hello: 5 }

function map(str){
    let obj = new Object()
    for(let keys of str){
      obj[keys] = keys.length
    }
    return obj
}

// console.log(map(['hi', 'hello']  ))



// 5️⃣ Count how many words have more than 5 letters
// ['hi', 'hello', 'goodbye', 'yes']  
// // Output: 1

function five(arr){
    let counter = 0
    arr.forEach(x => {
        if(x.length > 5){
            counter++
        }
    })
    return counter
}
console.log(five(['hi', 'hello', 'goodbye', 'yes', "magicmike", "watermelon"]))