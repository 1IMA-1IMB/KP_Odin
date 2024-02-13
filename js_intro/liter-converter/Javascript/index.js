
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

        document.getElementById("riktigGallonParameter").innerHTML = ("Dette er et parameter!");

    } else {
        console.log('Dette er ikke et parameter');

        document.getElementById("feilGallonParameter").innerHTML = ("Dette er ikke et parameter!");

    }
    
}


//Liter to Gallon Converter
function literGallonConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputGallon").innerHTML = (valNum/3.78541);

    //Oppgave 2

    let liter_gallon_converter = [valNum];

    liter_gallon_converter = valNum.toString().split('');

    realNumber = liter_gallon_converter.map(Number);

    console.log(realNumber);

    if (realNumber[0] == realNumber[realNumber.length -1]) {
        console.log('Dette er et parameter');
        
        document.getElementById("riktigLiterGallonParameter").innerHTML = ("Dette er et parameter!");

    } else {
        console.log('Dette er ikke et parameter');

        document.getElementById("feilLiterGallonParameter").innerHTML = ("Dette er ikke et parameter!");

    }
}

//Ounces to Liter Converter
function ouncesConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputLiter1").innerHTML = (valNum*0.0295735);

    //Oppgave 2

    let ounces_converter = [valNum];

    ounces_converter = valNum.toString().split('');

    realNumber = ounces_converter.map(Number);

    console.log(realNumber);

    if (realNumber[0] == realNumber[realNumber.length -1]) {
        console.log('Dette er et parameter');
        
        document.getElementById("riktigOuncesParameter").innerHTML = ("Dette er et parameter!");

    } else {
        console.log('Dette er ikke et parameter');

        document.getElementById("feilOuncesParameter").innerHTML = ("Dette er ikke et parameter!");

    }
}

//Liter to Ounces Converter
function literOuncesConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputOunces").innerHTML = (valNum/0.0295735);

     //Oppgave 2

     let liter_ounces_converter = [valNum];

     liter_ounces_converter = valNum.toString().split('');
 
     realNumber = liter_ounces_converter.map(Number);
 
     console.log(realNumber);
 
     if (realNumber[0] == realNumber[realNumber.length -1]) {
         console.log('Dette er et parameter');
         
         document.getElementById("riktigLiterOuncesParameter").innerHTML = ("Dette er et parameter!");
 
     } else {
         console.log('Dette er ikke et parameter');
 
         document.getElementById("feilLiterOuncesParameter").innerHTML = ("Dette er ikke et parameter!");
 
     }
}

//Cups to Liter Converter
function cupsConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputLiter2").innerHTML = (valNum*0.236588)

    //Oppgave 2

    let cups_converter = [valNum];

    cups_converter = valNum.toString().split('');

    realNumber = cups_converter.map(Number);

    console.log(realNumber);

    if (realNumber[0] == realNumber[realNumber.length -1]) {
        console.log('Dette er et parameter');
        
        document.getElementById("riktigCupsParameter").innerHTML = ("Dette er et parameter!");

    } else {
        console.log('Dette er ikke et parameter');

        document.getElementById("feilCupsParameter").innerHTML = ("Dette er ikke et parameter!");

    }
}

//Liter to Cups Converter
function literCupsConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCups").innerHTML = (valNum/0.236588);

    //Oppgave 2

    let liter_cups_converter = [valNum];

    liter_cups_converter = valNum.toString().split('');

    realNumber = liter_cups_converter.map(Number);

    console.log(realNumber);

    if (realNumber[0] == realNumber[realNumber.length -1]) {
        console.log('Dette er et parameter');
        
        document.getElementById("riktigLiterCupsParameter").innerHTML = ("Dette er et parameter!");

    } else {
        console.log('Dette er ikke et parameter');

        document.getElementById("feilLiterCupsParameter").innerHTML = ("Dette er ikke et parameter!");

    }
}

//Spiseskjeer to Liter Converter
function speiseskjeerConverter(valNum) {
valNum = parseFloat(valNum);
document.getElementById("outputLiter3").innerHTML = (valNum*0.0147868)

 //Oppgave 2

 let spiseskjeer_converter = [valNum];

 spiseskjeer_converter = valNum.toString().split('');

 realNumber = spiseskjeer_converter.map(Number);

 console.log(realNumber);

 if (realNumber[0] == realNumber[realNumber.length -1]) {
     console.log('Dette er et parameter');
     
     document.getElementById("riktigSpiseskjeerParameter").innerHTML = ("Dette er et parameter!");

 } else {
     console.log('Dette er ikke et parameter');

     document.getElementById("feilSpiseskjeerParameter").innerHTML = ("Dette er ikke et parameter!");

 }

}

//Liter to Spiseskjeer Converter
function literSpiseskjeerConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputSpiseskjeer").innerHTML = (valNum/0.0147868)

    //Oppgave 2

 let liter_spiseskjeer_converter = [valNum];

 liter_spiseskjeer_converter = valNum.toString().split('');

 realNumber = liter_spiseskjeer_converter.map(Number);

 console.log(realNumber);

 if (realNumber[0] == realNumber[realNumber.length -1]) {
     console.log('Dette er et parameter');
     
     document.getElementById("riktigLiterSpiseskjeerParameter").innerHTML = ("Dette er et parameter!");

 } else {
     console.log('Dette er ikke et parameter');

     document.getElementById("feilLiterSpiseskjeerParameter").innerHTML = ("Dette er ikke et parameter!");

 }

}




