function largestPrimeFactor(num) {
    var divisor = 2;
    while (num > 1) {
        if (num % divisor === 0) {
            num /= divisor;
        } else {
            divisor++;
        }
    }
}

largestPrimeFactor(600851475143);