function details() {
    var url = "./exercise.json";
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
        document.getElementById("john").innerText = xhr.responseText;
        window.alert("Browser has some message");
    }
    xhr.send();
}