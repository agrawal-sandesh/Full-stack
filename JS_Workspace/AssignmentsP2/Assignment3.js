function json_testing(test) {
    try {
        test2 = JSON.parse(test);
        console.log("Valid JSON");
    } catch (er) {
        console.log("Invalid JSON");

    }

}
var1 = '{ "key1": "value1", "key2": "value2" }';
json_testing(var1);