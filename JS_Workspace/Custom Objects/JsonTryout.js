// use of parse()
var json = '{ "firstName":"John", "lastName":"Doe"}';
var name = JSON.parse(json); //will convert JSON string into an JavaScript object
console.log(name)
console.log(name.firstName + " " + name.lastName);



// use of stringify()
var jScores = { "Java": 70, "JavaScript": 80, "CSS": 30 };
var tScores = JSON.stringify(jScores); //will convert object to JSON string
console.log(typeof(jScores)); // returns Object
console.log(typeof(tScores)); // returns String
console.log(tScores)