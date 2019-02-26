let firstTime = true;
let slider = document.getElementById("Range");
let output = document.getElementById("val");
let label = document.getElementById("label");

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
    if (val > 16) {
        label.innerHTML = " Strong";
        label.style.color = '#27ae60'
    } else if (val > 12) {
        label.innerHTML = " Good";
        label.style.color = '#e67e22'
    } else {
        label.innerHTML = " Weak";
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
    }
}

function copyText() {
    if (!firstTime) {
        let text = document.getElementById("pass-gen");
        text.select();
        document.execCommand("copy");
        alert("Password copied!");
    } else alert("Password is not generated!");
}

