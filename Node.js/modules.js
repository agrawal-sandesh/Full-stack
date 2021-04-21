exports.sum = (number1, number2) => {
    return number1 + number2;
}
exports.checkPrime = (n) => {
    let counter = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i == 0)
            counter++;
    }
    if (counter == 2)
        return true;
    else
        return false;
}