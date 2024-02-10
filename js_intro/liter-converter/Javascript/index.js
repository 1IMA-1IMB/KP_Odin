
//Gallon to Liter Converter
function gallonConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputLiter").innerHTML = (valNum*3.78541);
    //Oppgave 2 
    let gallon_converter = [valNum];
    gallon_converter = valNum.toString().split('');
    realNumber = gallon_converter.map(Number);
    console.log(realNumber);

    if (realNumber[0] == realNumber[realNumber.length -1]) {
        console.log('Dette er et parameter');
        document.getElementById("riktigGallonParameter").innerHTML = ("Dette er et parameter");

    } else {
        console.log('Dette er ikke et parameter');
        document.getElementById("feilGallonParameter").innerHTML = ("Dette er ikke et parameter");

    }
    
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




