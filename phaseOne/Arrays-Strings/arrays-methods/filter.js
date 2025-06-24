// 🟢 5 Easy Problems:
// Filter out numbers less than 5.
// [1, 2, 5, 7] → [5, 7]
const nums =[1,2,5,7]
const filtered = nums.filter(x => x >= 5)
console.log(filtered)

// Filter even numbers.
// [1, 2, 3, 4] → [2, 4]
const even = [1,2,3,4]
const evenFilter = even.filter(x => x % 2 === 0)
console.log(evenFilter)

// Filter strings with length > 3.
// ['hi', 'hello'] → ['hello']

const str = ['hi', 'hello']
const filterStr = str.filter(x => x.length > 3)
console.log(filterStr)

// Filter out falsy values.
// [0, 1, false, 'a'] → [1, 'a']
const values = [0, 1, false, 'a']
const falsy = values.filter(value => !value)
console.log(falsy)

// Filter people over age 21.
// [{name:'A', age:22}] → [{name:'A', age:22}]
const obj = [{name:'A', age:22}, {name: "K", age: 20}]
const filterB = obj.filter(x => x.age > 21)
console.log(filterB)


// 🟡 5 Intermediate Problems:
// Filter words that start with a specific letter.
const words = ["apple", "animal", "beaches", "dogs"]

function start (words, letter){
    return words.filter(x => x[0] === letter)
}

console.log(start(["apple", "animal", "beaches", "dogs"], "a"))

// Filter numbers divisible by both 3 and 5.
const div = [15,4,7,30,60,3]
const three = div.filter(x => (x % 3) === 0 )
const five = three.filter(x => (x % 5) === 0)
console.log(five)

// Filter out duplicate values from an array (using indexOf inside filter).
const dupes = [1,1,2,3,4,4,4,5,6,1,7]
const unique = [... new Set(dupes)]
console.log(unique)


// → Filter even numbers, then double them.
// [1,2,3,4] → [4,8]
const filterMe = [1,2,3,4]
const evens = filterMe.filter(x => (x % 2 === 0))
const double = evens.map(y => y * 2)
console.log(double)