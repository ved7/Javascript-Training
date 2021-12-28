function factorial(n) {
    let factorialValue = 1;
    while (n) {
        factorialValue = factorialValue * n;
        n--;
    }
    return factorialValue;
}

const res = factorial(5);
console.log(res);