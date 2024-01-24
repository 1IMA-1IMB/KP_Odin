//Oppgave 1 A)
let sauer = 100
function tellEnSau() {
     console.log("du har",(sauer-1), "sauer!");
     sauer = sauer -1;
}
tellEnSau();
// B
function tellNoenSauer(flokk) {
    sauer = sauer-flokk;
    console.log (sauer);
}
tellNoenSauer(42);
//C
function mistetTellingen() {
    sauer = 0
    console.log(sauer);
}
mistetTellingen();
//D
if (sauer <1) {
    console.log("zzzzzzzzz");
} else {
    tellNoenSauer(42);
}

