let arr1 = [1, 3, 5, 7, 9]
let arr2 = [2, 4, 6, 8]

//Concatination 
const arr3 = arr1.concat(arr2)
//arr3: [1, 3, 5, 7, 9, 2, 4, 6, 8]

//concat a range in array
const x = arr2.slice(0, 3)
const arr4 = arr1.concat(x)
// arr4: [1, 3, 5, 7, 9, 2, 4, 6]

//Entries
// arr1 = [1, 3, 5, 7, 9]
const iterator1 = arr1.entries();
// console.log(iterator1.next().value) // [ 0, 1 ]
// console.log(iterator1.next().value) // [ 1, 3 ]

for (const [index, element] of arr1.entries())
    console.log(index, element);
// 0 1
// 1 3
// 2 5
// 3 7
// 4 9

// Using for loop for iterator
// const iterator1 = arr1.entries();
for (let e of iterator1) {
    console.log(e);
}
// [ 0, 1 ]
// [ 1, 3 ]
// [ 2, 5 ]
// [ 3, 7 ]
// [ 4, 9 ]

const arrSortReq = [-2, 1, 3, 5, 7, 9]
// console.log(arrSortReq.sort()) //[ -2, 1, 3, 5, 7, 9 ]

//some function
// some() method tests whether at least one element in the array passes the test

// checks whether an element is negative
const isNegative = (element) => element < 0;
// console.log(arrSortReq.some(isNegative)); // true since -2 is present in array

const scoredCentury = (run) => run >= 100;
const scores = [34, 32, 54, 12, 43, 0, 8, 6, 44, 76, 87, 23]
// console.log(scores.some(scoredCentury)); //false