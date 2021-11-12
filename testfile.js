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

function reverse1(str) {
    return str.split("").reverse().join("")
}
console.log(reverse1("Hello"))

function addArray(arr) {
    var sum = 0
    let arr1 = []
    for (i in arr) {
        if (arr[i] == 2)
            sum += arr[i]
    }
    return sum
}

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