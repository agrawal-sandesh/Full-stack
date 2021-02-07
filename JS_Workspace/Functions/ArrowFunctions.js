//Multiple line multiple parameter, arrow function
result = (noofPeople, CostperPerson) => {
    totalcost = noofPeople * CostperPerson;
    return totalcost;
}

console.log(result(2, 10));

//Simple Arrow function Conversion
function greet(choice) {
    choice();
}
greet(function() {
    console.log("Hello World")
});
greet(() => { console.log("Hello World") });

//no parameter single line anonymous, arrow function
trip = () => "Let's go to trip."
console.log(trip());

// single parameter sigle line function, anonymous, arrow

trip = (place) => "trip to " + place;
console.log(trip("paris"))

trip = (_) => "trip to " + _;
console.log(trip("Indore"))