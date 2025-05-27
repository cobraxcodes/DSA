// 📌 Recursion Mini Challenges
// 1️⃣ Print 1 to N
// Write a recursive function that prints numbers from 1 up to n.
// Example:
// printUp(3);
// // Output:
// 1
// 2
// 3

function printUp (count, n){
    if( count === n){
       console.log(count)
        return 
    }

    console.log(count)
    printUp(count+ 1, n)
}

// printUp(1,5)


// 2️⃣ Sum of Numbers
// Write a recursive function that takes a number n and returns the sum of numbers from 1 to n.
// Example:
// sumUp(3);
// // Output: 6  (3+2+1)

function sum (n){
    if(n === 1){
        return n
    }
  
    return n + sum(n - 1)
}

console.log(sum(3))




// 3️⃣ Factorial
// Write a recursive function to calculate the factorial of a number.
// Example:
// factorial(5);
// // Output: 120  (5 * 4 * 3 * 2 * 1)

function factorial (n) {
    if(n === 1){
        return n
    }

    return n * factorial(n-1)
}
console.log(factorial(5))




// 4️⃣ String Reversal
// Write a recursive function to reverse a string.
// Example:
// reverseString("cat");
// // Output: "tac"





// 5️⃣ Count Down Even Numbers
// Write a recursive function that counts down even numbers from n to 0.
// Example:
// countEven(6);
// // Output:
// 6
// 4
// 2
// 0
