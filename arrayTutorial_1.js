//Study Array

let arr = [1, 2, 3, 4, 5]

//insert element in array
arr.push(6);
// [ 1, 2, 3, 4, 5, 6 ]

//remove and return last element 
let lastElement = arr.pop()
// console.log(lastElement) // 6

//Add an item to the beginning of an Array
arr.unshift(0)
// [ 0, 1, 2, 3, 4, 5, 6 ]

// Remove an item by index position
arr.splice(4, 1)
//[ 0, 1, 2, 3, 5, 6 ] "4" deleted

// copy an array
let copyArr = arr.slice(0, 2)
// copyArr = [ 0, 1 ]

//return length of array
let len = arr.length
//len = 6

arr[10] = 12;
// console.log(Object.keys(arr)) ['0', '1', '2', '3', '4', '5', '10']
// console.log(arr) [ 0, 1, 2, 3, 5, 6, <4 empty items>, 12 ]

arr.splice(6, 4) // remove unused element 
// [  0, 1,  2, 3, 5, 6, 12 ]

let res = arr.includes(2);
// console.log(res) // true

res = Array.isArray(arr)
// console.log(res) // true
let notArray = "23"
res = Array.isArray(notArray)
// console.log(res) // false

//toString
res = arr.toString()
console.log(res) //0,1,2,3,5,,12