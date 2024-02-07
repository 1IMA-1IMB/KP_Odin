//Oppgave 1A
let sauer = 100


function tellEnSau() {

     sauer -= 1;
     console.log("du har",sauer, "sauer!");

}
tellEnSau();

// B
function tellNoenSauer(flokk) {

    sauer -= flokk;
    console.log ("Du har ",sauer,"sauer!");
}

//C
function mistetTellingen() {

    sauer = 100
    console.log("Du har",sauer, "Sauer");
}

//D
if (sauer < 1) {

    console.log("zzzzzzzzz");

} //else {

    //tellNoenSauer(1);
//}

//E + F
function klippSauer(flokk) {

    sauer -=  flokk;

    if (sauer < 1) {

        console.log("zzzzzzzz");
    }
    else if (flokk > 80) {

        console.log("Du fikk nok ull til et ull-hoppeslott! ");

       } else if (flokk > 50) {

        console.log("Du fikk nok ull til å lage en saue-klone!");

       } else if (flokk > 30) {

        console.log("Du fik nok ull til kjeledress og sengetøy!");

       } else if (flokk > 10) {

        console.log("Du fikk nok ull til en stor genser!");

       } else if (flokk > 0) {

        console.log("Du fikk nok ull til et par sokker!");
    }
}
//oppgave 2

document.getElementById('sauer').innerHTML = sauer;

document.getElementById('tellEnSau').innerHTML = tellEnSau();








