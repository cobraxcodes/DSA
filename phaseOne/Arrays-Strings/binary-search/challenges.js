// 🔹 Easy
// 1️⃣ Find the index of 42 in a sorted array.
const sortedArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
  91, 92, 93, 94, 95, 96, 97, 98, 99, 100
];

function binarySearch(arr, target){
    // create left and right pointers (left starts at the beginning right starts at the end)
    let leftPointer = 0
    let rightPointer = arr.length - 1
    // create loop while left is less than right, 
    while(leftPointer <= rightPointer){
        // declare mid which is left + right / 2 or just arr.length / 2. use Math.floor to round
        let mid = Math.floor((leftPointer + rightPointer) / 2)
         // if the middle is the target then perfect, return that
        if( arr[mid] === target){
            return mid
             // if not, if the target is greater than mid then search to the right half
        }
        
        if(arr[mid] < target){
            leftPointer = mid + 1
        }else{
            rightPointer = mid - 1
        }
    }
            return -1
}

console.log(binarySearch(sortedArray, 42))


// 2️⃣ Check if a target number exists in a sorted list.
function exists(arr, target){
    let left = 0;
    let right = arr.length -1;

    while(left <= right){
        let middle = Math.floor((left+right) /2)

        if(arr[middle] === target){
            return true
        }

        if(arr[middle] < target){
            left = middle + 1
        }else{
            right = middle -1
        }
    }
    return false

}
console.log(exists(sortedArray, 89))



// 3️⃣ Return the index of the first element equal to a target.
// 4️⃣ Return -1 if the target number doesn’t exist.
function firstElement(arr,target){
    let left = 0;
    let right = arr.length -1 

    while(left <= right ){
        let middle = Math.floor((left + right ) / 2)
        if(arr[middle] === target){
        return middle
    }

    if(arr[middle] < target ){
        left = middle + 1
    }else{
        right = middle - 1
    }
    }
    return -1
}
console.log(firstElement(sortedArray, 13))

// 5️⃣ Find the middle number in a sorted array.
const middleNumber = Math.floor(sortedArray.length / 2)
console.log(middleNumber)



// 🔹 Intermediate
const sortedArrayWithDupes = [1, 3, 4, 4, 6, 7, 9, 9, 11, 13, 15];

// 6️⃣ Find the first occurrence of a duplicate number in a sorted array.

function occurence(sortedArrayWithDupes){
    for(let i = 0; i<sortedArrayWithDupes.length; i++){
        if(sortedArrayWithDupes[i] === sortedArrayWithDupes[ i + 1]){
            return sortedArrayWithDupes[i]
        }
    }
    return -1
}

console.log(occurence(sortedArrayWithDupes))
// 7️⃣ Find the insert position for a number in a sorted array.

function insert(arr, target){
    let left = 0
    let right = arr.length - 1

    while(left < right){
        let mid = Math.floor((left + right ) / 2)
        if(arr[mid] === target){
            return mid
        }else if(arr[mid] < target){
            left = mid + 1
        }else{
            right = mid -1
        }
    }
    return left
}

console.log(insert([1, 3, 4, 4, 6, 7, 9, 9, 11, 13, 15], 2))

// 8️⃣ Return the index of the smallest number greater than a target.
    function smallestGreater(arr, target){
        let left = 0
        let right = arr.length - 1
        let result = -1

        while(left <= right){
            let mid = Math.floor((left + right) / 2)

            if(arr[mid] > target){
                result = mid
                right = mid -1
                
            }else{
                left = mid + 1
            }
        }
        return result
    }

    console.log(smallestGreater([1, 3, 4, 4, 6, 7, 9, 9, 11, 13, 15], 2))

// 9️⃣ Count how many times a target appears in a sorted array.
        function countTarget(arr, target){
            let counter = 0;
            for(let i=0; i<arr.length; i++){
                if(arr[i] === target){
                    counter++
                }
            }
            return counter
        }
console.log(countTarget([1, 3, 4, 4, 6, 7, 9, 9, 11, 13, 15], 4))

// 🔟 Search for a number in a rotated sorted array (this one’s interview gold 💰)

        function rotatedArray(arr, target){
            let left = 0;
            let right = arr.length -1

            while(left <= right){
                let mid = Math.floor((left + right ) / 2)
                if(arr[mid] === target){return mid}
                if(arr[left] <= arr[mid]){
                    if(arr[left] <= target && target < arr[mid]){
                        right = mid - 1
                    }else{
                        left = mid + 1 
                    }
                }
                else{
                if(arr[mid] < target && target <= arr[right]){
                    left = mid +1
                }else{
                    right = mid - 1
                }
                }
            } 
            return -1 
        }

console.log(rotatedArray([6, 7, 8, 9, 1, 2, 3, 4, 5], 2))