function gallonConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputLiter").innerHTML = (valNum*3.78541);
}
function literGallonConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputGallon").innerHTML = (valNum/3.78541);
}

function ouncesConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputLiter1").innerHTML = (valNum*0.0295735);
}
function literOuncesConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputOunces").innerHTML = (valNum/0.0295735);
}

function cupsConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputLiter2").innerHTML = (valNum*0.236588)
}
function literCupsConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCups").innerHTML = (valNum/0.236588);
}