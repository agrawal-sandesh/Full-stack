// for matching a single character in name
function validateName(naam, pattern) {
    if (naam.match(pattern)) {
        console.log("match found");
    } else {
        console.log("match not found");
    }
}
var naam = "$John";
var regEx = /\$/; //check for $ character in the name"
validateName(naam, regEx)

console.log("-------------------");

// for matching a pattern string 
function validateName(naam, pattern) {
    if (naam.match(pattern)) {
        console.log("match found");
    } else {
        console.log("match not found");
    }
}
var naam = "hellloworld";
var regEx = /hello/; //check for hello characters in the name"
validateName(naam, regEx);

console.log("------------------");

// using metaharacer
function validateName(naam, pattern) {
    if (naam.match(pattern)) {
        console.log("match found");
    } else {
        console.log("match not found");
    }
}
var naam = "hallo";
var regEx = /[abc]/; //check for $ character in the name"
validateName(naam, regEx)

console.log("----------------");

//quantifier
function validateName(naam, pattern) {
    if (naam.match(pattern)) {
        console.log("match found");
    } else {
        console.log("match not found");
    }
}
var naam = "caaaaar";
var regEx = /c[a]+r/; //check for $ character in the name"
validateName(naam, regEx)