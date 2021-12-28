function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;

    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;

    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';

    let res1 = +firstInteger + +secondInteger;

    console.log(res1);

    let res2 = +firstDecimal + +secondDecimal;

    console.log(res2);

    console.log(firstString + secondString);

}

performOperation(4, 3.41, 'is the best place to learn and practice coding!');