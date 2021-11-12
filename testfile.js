//reverse a sting
function reverse(str) {
    let reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    if (str === reversed) {
        console.log("palindrom")
    } else {
        console.log("not pallindrom")
    }
}
reverse("abcdcba")


//reverse a string
function reverse1(str) {
    return str.split("").reverse().join("")
}
console.log(reverse1("Hello"))

//sum of array elements
function addArray(arr) {
    var sum = 0
    let arr1 = []
    for (i in arr) {
        if (arr[i] == 2)
            sum += arr[i]
    }
    return sum
}

//sum of array elements
arr = [0, 2, 2, 0, 2, 2, 2];
console.log(addArray(arr))

function sumArray(arr1) {
    let sum = 0;
    for (i in arr1) {
        sum += arr1[i]
    }
    return sum
}

arr1 = [1, 2, 3, 4]
console.log(sumArray(arr1))

//star pattern
function pattern() {
    let output = ''
    for (i = 1; i <= 5; i++) {
        for (j = 1; j <= i; j++) {
            output += j
        }
        output += "\n"
    }
    console.log(output)
}
pattern()


//fibonacci series
const number = 5
let n1 = 0,
    n2 = 1,
    nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}


// Bubble sort Implementation

function bblSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr);
}
var arr = [234, 43, 55, 63, 5, 6, 235, 547];
bblSort(arr);


//unique character in an array
let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [];
chars.forEach((elements) => {
    if (!uniqueChars.includes(elements)) {
        uniqueChars.push(elements);
    }
});

console.log(uniqueChars);

//alternate no string
let arrs1 = ['A', 'B', 'C'];
let arrs2 = ['D', 'E', 'F'];
let arrs3 = []
for (let i = 0; i <= arrs1.length - 1; i++) {
    for (let j = 0; j <= arrs2.length - 1; j++) {
        if (i == j) {
            arrs3.push(arrs1[i], arrs2[j])
        }
    }
}
console.log(arrs3)

//find maximum number
function maximum(arr3) {
    let max = 0
    for (let i = 0; i <= arr3.length - 1; i++) {
        if (max < arr3[i]) {
            max = arr3[i]
        }
    }
    console.log(max)
}
arr3 = [1, 2, 3, 4, 9, 3, 0, 12]
maximum(arr3)

function maximum() {
    var arr = ['20', '120', '111', '215', '54', '78'];
    arr.sort(function(a, b) {
        return b - a;
    });
    console.log(arr[1]);
}
maximum()