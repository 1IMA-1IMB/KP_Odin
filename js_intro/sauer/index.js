//Oppgave 1
// A
let sauer = 100
function tellEnSau() {
     console.log("du har",(sauer-1), "sauer!");
     sauer = sauer -1;
}
tellEnSau();
// B
function tellNoenSauer(flokk) {
    sauer = sauer-flokk;
    console.log ("Du har ",sauer,"sauer!");
}
tellNoenSauer(42);
//C
function mistetTellingen() {
    sauer = 0
    console.log("Du har",sauer, "Sauer");
}
mistetTellingen();
//D
if (sauer <1) {
    console.log("zzzzzzzzz");
} else {
    tellNoenSauer(42);
}
//E + F
function klippSauer(flokk) {
    sauer = sauer - flokk;
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
klippSauer(10); 




