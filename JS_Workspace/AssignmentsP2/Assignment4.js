//using inbuilt function
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log(Object.values(student).join(','));

//using iteration
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

for (let key in student) {
    console.log(student[key]);
}