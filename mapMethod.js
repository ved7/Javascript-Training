let arr = [1, 2, 3, 4, 5];

const newArr = arr.map((element, index) => {
    return element * 2
})
console.log(newArr)     //Output: [ 2, 4, 6, 8, 10 ]

const newArr2 = arr.map((element, index) => {
    if (index % 2 == 0) {
        return element * 2;
    }
    else {
        return element * 3;
    }
})
console.log(newArr2)    //Output: [ 2, 6, 6, 12, 10 ]

// When to use map ->  1. need to alter the array elements, iterate particular element and make changes

//                  -> 2. gives great control over the array

// Downside of using map -> 1. Creates new array every time so waste of memory in lots of task.

//                       -> 2. also dont use if missing value or undefined element is present in array 

//                          as map creates callback at each index.
