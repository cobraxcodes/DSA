// 📦 Mini Practice 3: Group Names by First Letter
// Input:
// ["Anna", "Alex", "Brian", "Bella", "Chris"]

// Output:[
//   ["Anna", "Alex"],
//   ["Brian", "Bella"],
//   ["Chris"]
// ]
// Key: name[0]


function firstLetter (str){
    const map = new Map()
    for(let names of str ){
        let key = names[0]
        if(map.has(key)){
            map.get(key).push(names)
        }else{
            map.set(key, [names])
        }
    }
              return Array.from(map.values()).sort()
 
}

console.log(firstLetter(["Anna", "Alex", "Brian", "Bella", "Chris"]))