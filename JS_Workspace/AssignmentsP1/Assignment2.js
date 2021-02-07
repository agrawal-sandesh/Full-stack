function check_palindrom(val) {
    const arrayValues = val.split("");
    const reverseValues = arrayValues.reverse();
    const joinReverse = reverseValues.join("");
    if (val == joinReverse) {
        return true;
    } else {
        return false;
    }

}

console.log(check_palindrom("civic"));