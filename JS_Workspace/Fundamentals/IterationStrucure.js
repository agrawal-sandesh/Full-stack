//  for loop example
n = 10;
for (i = 0; i < n; i++) {
    console.log(i);
}

console.log("----------")

// while loop example
n = 10;
while (n > 0) {
    console.log(n);
    n = n - 1;
}

console.log("----------")


//example of iteration   
var x, y;
var chr = '';
for (x = 1; x <= 5; x++) {
    for (y = 1; y <= x; y++) {
        if (y % 2 != 0) {
            chr = chr + ("*");
        } else {
            chr = chr + ("#")
        }

    }
    console.log(chr);
    chr = '';
}



console.log("----------")

//Iteration Exercise 

var chr = '';
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        chr = chr + j
    }
    console.log(chr);
    chr = '';
}

console.log("----------")

//Iteration example

var chr = '';
for (i = 1; i <= 5; i++) {
    for (j = 5; j >= i; j--) {
        chr = chr + j;
    }
    console.log(chr)
    chr = ''
}