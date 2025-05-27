// // syntax

// const example = new Set() // creating a new set
// example.add(1); // adding value in the 'array'
// example.add(2);
// example.add(2); // ignores duplicates
// example.add(3);

// console.log(example)
// console.log(example.has(1)) // check if set has 1 value
// console.log(example.size) // returns size of the set

// example.delete(2) // deletes value 2 from the set
// console.log(example)



// 📌 Set Mini Challenges
// 1️⃣ Create a Set and add 5 numbers to it, including a duplicate.
const mySet = new Set()
mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add(3)
mySet.add(4)
mySet.add(5)
// 2️⃣ Write a function hasValue(set, value) to check if a value exists in the Set.
function hasValue (set,value){
    if(mySet.has(value)){
        console.log(true)
    }else{
        return false
    }
}
console.log(hasValue(mySet, 9))
// 3️⃣ Delete a value from the Set.
mySet.delete(3)
// 4️⃣ Get the size of your Set.
console.log(mySet.size)
console.log(mySet)
// 5️⃣ Clear all values from the Set.
