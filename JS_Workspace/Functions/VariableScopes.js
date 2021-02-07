//Global scope of i in both the functions
function validateTravellerPassword(password) {
    for (i = 0; i < password.length; i++) {
        console.log(i)
    }
}

function validateTravellerName(name) {
    console.log("The value of i is " + i);
    for (i = 0; i < name.length; i++) {
        console.log(i)
    }
}
validateTravellerPassword("12345");
validateTravellerName("Jack"); 


//Local Scope of i in both the functions using "var"

function validateTravellerPassword(password) {
    for (var i = 0; i < password.length; i++) {}
}

function validateTravellerName(name) {
    console.log("The value of i is " + i);
    for (var i = 0; i < name.length; i++) {}
}
validateTravellerPassword("password");
validateTravellerName("Josh");



//Block scope of a variable

function validateTravellerName(name) {
    for (let i = 0; i < name.length; i++) {

    }
    console.log(i); // This will give an error as i is not accessible outside the for block.
}
validateTravellerName("Josh");


//A constant is same as a block level element

{
    const a = 10;
}
console.log(a);