let countryState = [];
getData();

function getData() {
    var url = "./Assignment2.json";
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
        countryState = JSON.parse(xhr.responseText);
        setCountry();
    }
    xhr.send();
}

function setCountry() {
    let countryDD = '<option selected value="default">--SELECT Country--</option>';
    countryState.forEach(element => {
        countryDD = countryDD + '<option value="' + element.country + '">' + element.country + '</option>'
    });
    document.getElementById("country").innerHTML = countryDD;

}

function countrySelected() {
    let selectedCountry = document.getElementById("country").value;
    let stateDD = '<option selected value="default">--SELECT State--</option>';
    countryState.forEach(item => {
        if (selectedCountry === item.country) {
            item.state.forEach(element => {
                stateDD = stateDD + '<option value="' + element + '">' + element + '</option>'
            })
        }
    });
    document.getElementById("state").innerHTML = stateDD;
    setValue('', '');
}

function stateSelected() {
    let selectedCountry = document.getElementById("country").value;
    let selectedState = document.getElementById("state").value;
    setValue(selectedCountry, selectedState);
}

function setValue(selectedCountry, selectedState) {
    if (selectedCountry != '' && selectedState != '') {
        document.getElementById("output").innerHTML =
            "<strong>Slected Country</strong>: " + selectedCountry +
            "</br> <strong>Selected State</strong>: " + selectedState
    } else {

        document.getElementById("output").innerHTML = ''
    }

}