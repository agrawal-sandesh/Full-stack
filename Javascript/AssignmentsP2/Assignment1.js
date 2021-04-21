function DateSearch(input) {
    var pattern = /(0[1-9]|[1-2]\d|3[0-1])\/(0[1-9]|1[0-2])\/([0-2]\d\d\d)/;
    if (input.match(pattern)) {
        console.log(input.match(pattern));
    } else {
        console.log("Date not found");
    }
}
input = "Albert Einstein was born in Ulm, on 31/12/1879.";
DateSearch(input);