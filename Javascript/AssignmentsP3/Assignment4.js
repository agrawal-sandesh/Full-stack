document.getElementById("pwd").addEventListener("change", function() {
    let passwordStrength;
    let passColour;
    let password = document.getElementById("pwd").value;
    if (password.length < 8 || (!password.match(/[0-9]+/) && !password.match(/[!@#$%^&*]/))) {
        passColour = "red";
        passwordStrength = "Weak Password";
    } else if (password.match(/[0-9]+/) && !password.match(/[!@#$%^&*]/)) {
        passColour = "orange";
        passwordStrength = "Medium Password";
    } else {
        passwordStrength = "Strong Password";
        passColour = "green";
    }
    document.getElementById("passStrength").style.color = passColour;
    document.getElementById("passStrength").innerHTML = passwordStrength;
});

document.getElementById("but").addEventListener("click", function() {
    let password1 = document.getElementById("pwd").value;
    let cpassword1 = document.getElementById("cpwd").value;
    let passStrength;
    let passColour;
    if (password1 == cpassword1) {
        passStrength = "Password Matched";
        passColour = "green";
    } else {
        passStrength = "Password not Matched";
        passColour = "red";
    }
    document.getElementById("passConfirm").style.color = passColour;
    document.getElementById("passConfirm").innerHTML = passStrength;
})