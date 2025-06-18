// Input:
// ["a", "bat", "code", "hi", "at"]

// Output:
// [
//   ["a"],
//   ["bat"],
//   ["code"],
//   ["hi", "at"]
// ]



function groupLength (str){
    const map = new Map()

    for(let words of str){
        let key = words.length
        if(map.has(key)){
            map.get(key).push(words)
        }else{
            map.set(key, [words])
        }
    }
      return Array.from(map.values())
}

console.log(groupLength(["a", "bat", "code", "hi", "at"]))