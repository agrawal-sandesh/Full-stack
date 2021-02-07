function outer() {
    var count = 0;

    function inner() {
        count = count + 1;
        return count;
    }
    return inner; //In closure the outer funcion resturn the inner function
}
private_function = outer();
console.log(private_function());
console.log(private_function());
console.log(private_function());