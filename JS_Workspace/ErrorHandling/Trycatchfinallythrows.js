function validateName(name) {
    try { //content inside try block whenever faces error always gets thrown to catch block
        if (name.match(/\$/)) {
            throw new Error("Type Error"); //create our own error msg
        } else {
            return true;
        }
    } catch (error) { //accepts the error
        console.log(error.message);
    } finally { //it will always execute
        console.log("Cleaning up resources");
    }
}
validateName("Hello$");