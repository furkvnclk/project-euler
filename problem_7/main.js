function nthPrime(nth) {
    let i = 2;
    let newArr = [];
    while (newArr.length < nth) {
        if (isPrime(i)) {
            newArr.push(i);
        }
        i++;
    }
    return newArr[newArr.length - 1];
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(nthPrime(10001));