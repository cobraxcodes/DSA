// syntax

const example = new Set() // creating a new set
example.add(1); // adding value in the 'array'
example.add(2);
example.add(2); // ignores duplicates
example.add(3);

console.log(example)
console.log(example.has(1)) // check if set has 1 value
console.log(example.size) // returns size of the set

example.delete(2) // deletes value 2 from the set
console.log(example)