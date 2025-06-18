// 📦 Mini Practice 4: Group Strings by Sorted Letters (Anagram Style)
// Input:
// ["bat", "tab", "tap", "pat", "cat"]

// Output:
// [
//   ["bat", "tab"],
//   ["tap", "pat"],
//   ["cat"]
// ]
// Key: sorted version of string → word.split('').sort().join('')


function sorted(arr){
    const map = new Map()
    for(let word of arr ){
        let key= word.split('').sort().join('')
        if(map.has(key)){
            map.get(key).push(word)
        }else{
            map.set(key, [word])
        }
    }
    return Array.from(map.values())
}

console.log(sorted(["bat", "tab", "tap", "pat", "cat"]))