let firstTime = true;
let slider = document.getElementById("Range");
let output = document.getElementById("val");
let label = document.getElementById("label");
let stat = document.getElementById("status-box");

let strLowercase = "abcdefghijklmnopqrstuvwxyz";
let strUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let strNumeric = "0123456789";
let strSpecial = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


output.innerHTML = slider.value;
strength(slider.value);
slider.oninput = function() {
    strength(this.value);
    output.innerHTML = this.value;
};

function strength (val) {
    if (val > 24) {
        label.innerHTML = '<strong> Strong</strong>';
        label.style.color = '#27ae60'
    } else if (val > 16) {
        label.innerHTML = '<strong> Good</strong>';
        label.style.color = '#e67e22'
    } else {
        label.innerHTML = '<strong> Weak</strong>';
        label.style.color = '#c0392b'
    }
}

function generate() {

    let Lowercase = document.getElementById("lowercase");
    let Uppercase  = document.getElementById("uppercase");
    let Numeric = document.getElementById("numeric");
    let Special = document.getElementById("special");
    let strCharSet = "";
    let retStr = "";


    if (Lowercase.checked || Uppercase.checked || Numeric.checked || Special.checked) {
        stat.innerHTML = '';
        if (Lowercase.checked === true) strCharSet += strLowercase;
        if (Uppercase.checked === true) strCharSet += strUppercase;
        if (Numeric.checked === true) strCharSet += strNumeric;
        if (Special.checked === true) strCharSet += strSpecial;

        let charArr = strCharSet.split('');

        for (let i = strCharSet.length - 1; i > 0; i--) {
            let rng = Math.floor(Math.random() * i);
            let tmp = charArr[i];
            charArr[i] = charArr[rng];
            charArr[rng] = tmp;
        }
        for (let i = 0; i < slider.value; i++) {
            retStr += charArr[Math.floor(Math.random() * strCharSet.length)];
        }
        let textBox = document.getElementById("pass-gen");
        textBox.value = retStr;
        firstTime = false;
    } else stat.innerHTML = '<div class="alert alert-danger"><strong>Error!</strong> Select at least one character set.</div>';
}

function copyText() {
    let text = document.getElementById("pass-gen");
    let success_block = '<div class="alert alert-success"><strong>Copied!</strong> Your password is copied to the clipboard.</div>';
    let danger_block = '<div class="alert alert-danger"><strong>Error!</strong> Press on Generate button for a new password.</div>';
    if (!firstTime) {
        text.select();
        document.execCommand("copy");
        stat.innerHTML = success_block;
    } else stat.innerHTML = danger_block;
}

const MAP_API_KEY = '';
const WEATHER_API_KEY = '';
let address = '', lat = '', lng = '', unit = '';

function weatherQ() {
    address = document.getElementById("address-bar").value;
    let dropdown = document.getElementById("inputUnits");
    unit = dropdown.options[dropdown.selectedIndex].value;
    const stat = document.getElementById("status-box-weather");
    if(address.length === 0) {
        stat.innerHTML = 'Enter an <strong>address!</strong>';
        stat.style.color = '#ef5350';
    } else {
        let mapURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + MAP_API_KEY;
        console.log(mapURL);
        console.log(unit);
        $.get(mapURL, function (data) {
            let coord = data.results[0].geometry.location;
            lat = coord.lat.toFixed(4);
            lng = coord.lng.toFixed(4);
        });
        let weatherURL = 'https://api.darksky.net/forecast/' + WEATHER_API_KEY + '/' + lat + ',' + lng + '?units=' + unit;
        $.get(weatherURL, function (data) {

        });
    }
}

