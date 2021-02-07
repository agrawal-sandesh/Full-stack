function uniquestr(str) {
    str1 = str;
    uniqstring = " ";
    for (var i = 0; i < str1.length; i++) {
        if (uniqstring.indexOf(str1.charAt(i)) == -1) {
            uniqstring += str1[i]

        }
    }
    return uniqstring;
}
resultsrt = uniquestr("thequickbrownfoxjumpsoverthelazydog");
console.log(resultsrt);