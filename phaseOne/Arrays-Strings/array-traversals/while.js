// 1️⃣ Print numbers from 10 to 1
// // Output: 10, 9, 8, ..., 1

num = 10
while (num >=1){
    console.log(num)
    num--
}



// 2️⃣ Sum numbers in an array
// [5, 10, 15]
// // Output: 30

x = 0
let sum = 0
let arr = [5, 10, 15]
while (x < arr.length){
    sum += arr[x]
    x++
     console.log(sum)
}


// 3️⃣ Print each character in a string
// 'hello'
// // Output: h e l l o
let str="hello"
let start=0
while(start < str.length){
    console.log(str[start])
    start++
}


// // 4️⃣ Remove numbers one by one from an array until it’s empty
// // [1, 2, 3]
// // // Output: 3, 2, 1
// let arrA = [1,2,3]

// while(arrA.length>0){
//     console.log(arrA[arrA.length -1 ])
//     arr.pop()
// }


// 5️⃣ Keep doubling a number until it’s greater than 1000
// Start with 2
// // Output: 2, 4, 8, 16, 32, ..., 1024
let startPoint = 2
while(startPoint < 1000){
    console.log(startPoint)
    startPoint *= 2

}