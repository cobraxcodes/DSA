// 🟢 Easy:
// Replace "dog" with "puppy".
const str = "I love dog!"
const test = str.replace("dog", "puppy")
console.log(test)
// Replace the first "a" with "A" in a word.
const strA = "I love a good vampire movie"
const testA = strA.replace('a', 'A')
console.log(testA)

// Replace "bad" with "good" in a sentence.

// Replace spaces with underscores in a string.

// Replace a comma , with a pipe | in a CSV string.

// 🟡 Intermediate:
// Replace all spaces in a sentence with hyphens (regex version).
const sentence = "i am a sentence"
const testB = sentence.replace(/ /g, "-")
console.log(testB)

// Replace all instances of "is" with "was" in a paragraph (global replace).
const replacer = "was"
const sentenceA = "What is it that's sweet? Is it a donut?"
const testC = sentenceA.replace(/"is"/g, replacer)
console.log(testC)

// Replace numbers 1-9 with # in a string.
const sentenceB = "i love to count 1, 2,4,9,"
const testD = sentenceB.replace(/[1-9]/g, "#")
console.log(testD)


// Censor certain words (like "badword") in a sentence.

// Replace multiple words in a string using a loop or regex.