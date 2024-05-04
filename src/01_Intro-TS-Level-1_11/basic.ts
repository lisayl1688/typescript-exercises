console.log('welcome :)');

// ! Intro-TS-Level-1_12

let dogName ='Leon';
console.log(dogName);
// dogName = 11;
dogName = 'elf';


let zahl = 4;
// zahl ='vier';
zahl = 4;

let diePauseIstUm = true;
// diePauseIstUm="true";
diePauseIstUm = true;


let seventeen = 17;
const sum = seventeen + 44;
console.log(sum);

// !Intro-TS-Level-1_13

// Addition
let addition_operator: number = 1 + 1;
console.log('addition: ' + addition_operator);

// Subtraktion
let subtraktion_operator: number = 2 - 1;
console.log('subtraktion: ' + subtraktion_operator);

// Multiplikation
let multiplication_operator: number = 2 * 2;
console.log('multiplication: ' + multiplication_operator);

// Division
let division_operator: number = 4 / 2;
console.log('division: ' + division_operator);

// Modulo: zeigt an, was der Rest sein würde.
let modulo_operator: number = 14 % 5;
console.log('modulus: ' + modulo_operator);

// !Intro-TS-Level-1_8
//addiere
let x = 20;
let y = 30;
let n = x + y;
console.log(n);
//subtrahiere
let minusYX = y - x;
console.log(minusYX);
let minusXY = x - y;
console.log(minusXY);
//multipliziere
let malXY = x * y;
console.log(malXY);
//dividiere
let d = x / y;
console.log(d);

let z = 10;
let e = x * y ;
let resultOne = e / z;


let a = 15;
let b = 9;
let rest = a % b;

let c = 20;
let zwischenErgebnis = a + b;
let resultTwo = zwischenErgebnis * c;
console.log(resultTwo);

let incrementA = a++;
console.log(incrementA);
let decrementB = b--;
console.log(decrementB);

let resultThree = b - a;

let moduloRest = resultOne % resultTwo;
console.log(moduloRest);

// !Intro-TS-Level-1_16

let score: number = 5 + 5 * 10;
console.log('ergebnis: ' + score);

let score1: number = (5 + 5) * 10;
console.log('ergebnis: ' + score1);

let score2 = 0;
score2 = score + 10;
console.log(('Ergebnis: ' + score2));

score2+=10;
console.log(('Ergebnis: ' + score2));
//inkrementierung und dekrementierung 

let Zahl = 1; 
Zahl = Zahl+1;
Zahl+=1;

Zahl++;
console.log('increment: ' + zahl);
zahl--;  
console.log('dekrement: ' + zahl);