document.getElementById("but").addEventListener("click", function() {
    let passwordStrength;
    let passColour;
    let password = document.getElementById("pwd").value;
    if (password.length < 8 || (!password.match(/[0-9]+/) && !password.match(/[!@#$%^&*]/))) {
        passColour = "red";
        passwordStrength = "Weak Password";
    } else if (password.match(/[0-9]+/) && !password.match(/[!@#$%^&*]/)) {
        passColour = "yellow";
        passwordStrength = "Medium Password";
    } else {
        passwordStrength = "Strong Password";
        passColour = "green";
    }
    document.getElementById("passStrength").style.color = passColour;
    document.getElementById("passStrength").innerHTML = passwordStrength;
});