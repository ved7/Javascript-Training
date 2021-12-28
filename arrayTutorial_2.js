
let arr1 = [1, 3, 5, 7, 9]

// every() -> method tests whether all elements in the array pass the test (return boolean)
const isPositive = arr1.every((element) => element >= 0)   // console.log(isPositive) //true

const isEven = arr1.every((element) => element % 2 === 0)  // console.log(isEven) //false

const isTrue = arr1.every((element, index) => { (element * index) > 0 })  // console.log(isTrue) //false

 
const arr = [-2, 3, 5, -10, 2, 50, -100];

// filter() -> creates new array with all elements that pass the test.
const isGreater = arr.filter((element) => element > 0)  // console.log(isGreater) //[ 3, 5, 2, 50 ]

//find() -> return first element that matches the condition
const found = arr1.find(element => element > 7);  // console.log(found); // 9

const elements = ['Vedant', 'Hydra', 'Marvel'];

//join
const res = elements.join()  // console.log(res) // Vedant,Hydra,Marvel

const res1 = elements.join(".")  // console.log(res1) //Vedant.Hydra.Marvel

const arr7 = [0, 1, 2, [2, 3, 4]];

// flat() method creates a new array with all sub-array elements concatenated into it recursively
const newArr = arr7.flat()  // console.log(newArr)  //[ 0, 1, 2, 2, 3, 4 ]
