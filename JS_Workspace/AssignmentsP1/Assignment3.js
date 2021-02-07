function ShortName(val) {
    arrayofString = val.split(" ");
    firstTwo = " ";
    for (i = 0; i < arrayofString.length - 1; i++) {
        firstTwo += arrayofString[i].charAt(0);
    }
    rvar = firstTwo.concat(arrayofString[2]);
    return rvar;


}
result = ShortName("Rama Krishna Narayan");
console.log(result)