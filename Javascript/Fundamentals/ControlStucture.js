//simple control statement
a = 100
if (a = 100) {
    console.log("Hey you got it")

} else {
    console.log("no the value does not match")
}

// nesting elseif example
n = 0;
if (n > 0) {
    console.log("n is positive");
} else if (n < 0) {
    console.log("n is negative");
} else {
    console.log("n is zero");
}

//switch example
choice = 'a';
switch (choice) {
    case 'a':
        console.log("Trip to Paris");
        break;
    case 'b':
        console.log("Trip to New York");
        break;
    default:
        console.log("Trip to switzerland");
}