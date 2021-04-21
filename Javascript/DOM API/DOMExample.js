function check() {
    // name
    name = document.getElementById("name").value;
    document.getElementById("nameValue").innerHTML = "Name: " + name;
    // checkbox
    html = document.getElementById("html").checked;
    js = document.getElementById("js").checked;
    if (html && js) {
        document.getElementById("checkedValue").innerHTML = "You checked both html and js";
    } else if (html) {
        document.getElementById("checkedValue").innerHTML = "You checked html";
    } else if (js) {
        document.getElementById("checkedValue").innerHTML = "You checked js";
    } else {
        document.getElementById("checkedValue").innerHTML = "You checked none";
    }
    // radio button
    male = document.getElementById("male").checked;
    female = document.getElementById("female").checked;
    if (male) {
        document.getElementById("radioValue").innerHTML = "Gender: Male";
    } else if (female) {
        document.getElementById("radioValue").innerHTML = "Gender: Female";
    }
}