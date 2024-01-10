console.log('Hello World');
//Oppgave A
let firstName = 'My name is Odin.';
let age = 'I am 16 years old.';
console.log ( firstName, age);
// Oppgave B: Den andre komandoen får å lage variabler er "var". Du skriver nøyaktig det samme bare bytter ut "let" med "var".

// Oppgave C
let erEnElev = true
// Oppave D
if (!(erEnElev)) {
    console.log ( "Du er ikke en elev!");
}else{
    console.log ("Du er en elev!");
}
//Dette gjør at det står "Du er en elev!" I 'Console'. Dette er fordi jeg har satt denne variabelen til true.Hvis jeg skifyter den til false vill det stå "Du er ikke en elev!".

//Del 2:

//Oppgave A
console.log(2+2);
//Oppgave B
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
console.log(11-(getRandomInt(11)));
//oppgave C
function myFunction(){
    console.log(42*24);
}
myFunction();

//Del 3:
class Person  {
    constructor(firstName,age){
        this.firstName = firstName;
        this.age = age;
    }   
    ferdigUtdannet(){
        erEnElev = false;
    }
    bliElev(){
        erEnElev = true;
    }
        
  }
  
let Odin = new Person(' Jeg heter Odin','Jeg er 16 år');
console.log(Odin.firstName)
console.log(Odin.age);

Odin.bliElev();
if (erEnElev) {
    console.log ( "Jeg er en elev!");
}else{
    console.log ("Jeg er ikke en elev!");
}




