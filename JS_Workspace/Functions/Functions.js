//simple function
function Myfunc(num1, num2) {
    num3 = num1 * num2;
    return num3;
}
Myfunc(15, 20)
console.log(num3)



//function as a variable

funvariable = function Myfunc(num1, num2) {
    num3 = num1 * num2;
    return num3;
}

console.log(funvariable(5, 3))


//function passed inside the other function

function goodbye() {
    console.log("i am  going to be passed inside other function");
}

function greeting(param) {
    param();
}
greeting(goodbye);



//functions as object / Higher order functions

function greet() {
    var hello = function welcome() {
        console.log("I am function passed as an object");
    }
    return hello;

}
var Rest = greet();
Rest();


//Anonymous function passing i.e without any name or variable a function is passed

function greets(choice) {
    choice();
}
greets(function() {
    console.log("I am anonymous function")
});