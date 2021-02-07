function email_check(input, pattern) {
    if (input.match(pattern)) {
        console.log("Matches the pattern");
    } else {
        console.log("Not Matching");
    }
}
input = "JohnDoe.12#4@gmail.com";
pattern = /^([^\.])[\w.!#$%&'*+/ = ? ^ _ `{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]{3})*$/;
email_check(input, pattern);