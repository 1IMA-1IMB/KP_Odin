
//Gallon to Liter Converter
function gallonConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputLiter").innerHTML = (valNum*3.78541);
    //Oppgave 2 (Funker ikke).
    let tall = valNum;
    let gallon_converter = [tall];
    gallon_converter = tall.split();
    console.log(gallon_converter);
}



//Liter to Gallon Converter
function literGallonConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputGallon").innerHTML = (valNum/3.78541);
}

//Ounces to Liter Converter
function ouncesConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputLiter1").innerHTML = (valNum*0.0295735);
}
//Liter to Ounces Converter
function literOuncesConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputOunces").innerHTML = (valNum/0.0295735);
}

//Cups to Liter Converter
function cupsConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputLiter2").innerHTML = (valNum*0.236588)
}
//Liter to Cups Converter
function literCupsConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCups").innerHTML = (valNum/0.236588);
}

//Spiseskjeer to Liter Converter
function speiseskjeerConverter(valNum) {
valNum = parseFloat(valNum);
document.getElementById("outputLiter3").innerHTML = (valNum*0.0147868)
}
//Liter to Spiseskjeer Converter
function literSpiseskjeerConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputSpiseskjeer").innerHTML = (valNum/0.0147868)
}




