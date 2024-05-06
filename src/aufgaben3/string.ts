import { differenceInSeconds} from "date-fns";

// Intro-TS-Level-1_15    
const num: number  = 5;
const anotherNum: number = 8;
const vergleich1 = num == anotherNum ? 'true' : 'false';
console.log(vergleich1);
const vergleich2 = num === anotherNum ? 'true' : 'false';
console.log(vergleich2);
const vergleich3 = num > anotherNum ? 'true' : 'false';
console.log(vergleich3);
const vergleich4 = num < anotherNum ? 'true' : 'false';
console.log(vergleich4);
const vergleich5 = num >= anotherNum ? 'true' : 'false';
console.log(vergleich5);
const vergleich6 = num <= anotherNum ? 'true' : 'false';
console.log(vergleich6);
const vergleich7 = num ==5 ? 'true' : 'false';
console.log(vergleich7);
const vergleich8 = num !=8 ? 'true' : 'false';
console.log(vergleich8);
const vergleich9 = num !=5 ? 'true' : 'false';
console.log(vergleich9);

// Conditionals-TS-Level-2_1
const johnAlter= 22;
const johnGrß= 170;
const meikeAlter= 34;
const meikeGrß= 168;
const johnPunkte = johnAlter * 5 + johnGrß;
console.log('johnScore:',  johnPunkte);
const meikePunkte = meikeAlter * 5 + meikeGrß;
console.log('meikeScore:',  meikePunkte);
if (johnPunkte > meikePunkte) {
    console.log('John hast gewonnen');
}else if (johnPunkte < meikePunkte) {
    console.log('Meike hat gewonnen');
}else {
    console.log('unentschieden');
}

// Conditionals-TS-Level-2_3
// let beliebigeZahl = 0;
// let beliebigeZahl: number = 35;
// let beliebigeZahl: number = 74;
let beliebigeZahl: number = 123;
const festeZahl = 27;
const differenz: number = beliebigeZahl - festeZahl;
if (beliebigeZahl > festeZahl) {
    const ergebnisZahl = differenz * 2;
    console.log(ergebnisZahl);
}else {
    console.log('geht nicht');
}

// Conditionals-TS-Level-2_4
const randomZahlEins = Math.ceil(Math.random() * 77);
console.log( randomZahlEins);
const randomZahlZwei = Math.ceil(Math.random() * 77);
console.log( randomZahlZwei );
const summeDerZahlen = randomZahlEins + randomZahlZwei;
console.log(summeDerZahlen);

switch (true) {
    case randomZahlEins > randomZahlZwei:
        console.log('Erste Zahl Größer');
        break;
    case randomZahlEins <randomZahlZwei:
        console.log('Zweite Zahl Größer');
        break;
    default:
        console.log('klappt nicht');
        break;
}

// Conditionals-TS-Level-1_5
let weekdayAsNumber: Number =0;
let weekdayAsString: String ="";

const prompt1to7 = window.prompt('Please insert a number from 1 to 7');
if (prompt1to7)
weekdayAsNumber = parseInt(prompt1to7)
switch (weekdayAsNumber) {
    case 1:
        weekdayAsString = 'Montag';
        console.log(weekdayAsString);
        break;
    case 2:
        weekdayAsString = 'Dienstag';
        console.log(weekdayAsString);
        break;
    case 3:
        weekdayAsString = 'Mittwoch';
        console.log(weekdayAsString);
        break;
    case 4:
        weekdayAsString = 'Donnerstag';
        console.log(weekdayAsString);
        break;
    case 5:
        weekdayAsString = 'Freitag';
        console.log(weekdayAsString);
        break;
    case 6:
        weekdayAsString = 'Samstag';
        console.log(weekdayAsString);
        break;
    case 7:
        weekdayAsString = 'Sonntag';
        console.log(weekdayAsString);
        break;
default:
    console.log('weekday must be between 1 and 7');
        break;
}

// Conditionals-TS-Level-2_8
const schoolGrade = Math.ceil(Math.random() * 10);
console.log(schoolGrade);
switch (schoolGrade) {
    case 1:
        console.log('sehr gut');
        break;
    case 2:
        console.log('gut');
        break;
    case 3:
        console.log('befriedigend');
        break;
    case 4:
        console.log('ausreichend');
        break;
    case 5:
        console.log('mangelhaft');
        break;
    case 6:
        console.log('ungenügend');
        break;

    default:
        console.log('Das ist keine gültige Schulnote');
        break;
}

// Conditionals-TS-Level-3_1
const month = Math.ceil(Math.random() * 12);
console.log(month);
switch (month) {
    case 1:
    case 2:
    case 3:
        console.log("1.Quartal");
        break;
    case 4:
    case 5:
    case 6:
         console.log("2.Quartal");
    case 7:
    case 8:
    case 9:
        console.log("3.Quartal");
    case 10:
    case 11:
    case 12:
        console.log("4.Quartal");

    default:
        break;
}

const totalSales = Math.round(Math.random() * (10000-1000+1));
console.log(totalSales);
switch (true) {
    case totalSales <= 2500:
        console.log('Im 1. Quartal war der Umsatz schlecht!');
        break;
    case totalSales <= 5000 :
        console.log('Im 2. Quartal war der Umsatz mittelmäßig!');
        break;
    case totalSales <= 7500  :
        console.log('Im 3. Quartal war der Umsatz hoch!');
        break;
    case totalSales <= 10000  :
        console.log('Im 4. Quartal war der Umsatz unglaublich!');
        break;
    default:
        console.log('klappt nicht');
        break;
}

// Ternary-Operator-TS-Level-2_2
// const isOnline: number = Math.random();
// let monthlyFee = '19,99€';

// const ternary1: string = isOnline ? 'online' : 'offline';
// console.log({ ternary1 });
// const isPremiumUser: number = Math.random();
// const ternary2: string = isPremiumUser ? monthlyFee : '12,99€';
// console.log({ ternary2 });
// const isAdult: number = Math.random();
// const ternary3: string= isAdult ? window.alert('keine Berechtigung') : window.confirm ('willkommen');
// console.log({ ternary3 });

// const randomAge = Math.ceil(Math.random() * 120);
// console.log(randomAge);
// const randomSalary = Math.ceil(Math.random() * 15000);
// console.log(randomSalary);
// const isMiddleAged: string = randomAge === 40  ? 'online' : 'offline';
// console.log({ ternary1 });

const isOnline: boolean=  Math.random() < 0.5;
const isPremiumUser: boolean =  Math.random() < 0.5;;
const isAdult: boolean = Math.random() < 0.5;;
let monthlyFee : string ="";
const ternary1: string = isOnline ? 'online' : 'offline';
console.log({ ternary1 });
const ternary2: string = isPremiumUser ? (monthlyFee = '19.99') : (monthlyFee = '12.99');
console.log({ ternary2 });
const ternary3: string = isAdult ? 'keine Berechtigung' : 'willkommen';
console.log({ ternary3 });
if (isAdult) {
    window.alert(ternary3);
} else {
    const confirmed = window.confirm(ternary3);
    console.log({ confirmed });
}

const randomAge = Math.ceil(Math.random() * 120);
console.log(randomAge);
const randomSalary = Math.ceil(Math.random() * 15000);
console.log(randomSalary);
let isMiddleAged: boolean;
if (randomAge>40 && randomAge<65) {
    let  isMiddleAged = true;
    console.log(isMiddleAged);
}else {
    isMiddleAged = false
    console.log(isMiddleAged);
}
if (randomSalary > 10000){
    console.log('you are rich');
}else if (randomSalary > 1500){
    console.log('Not too bad');
}else {
    console.log('Not that much');
}


// Math-TS-Level-1_1
let pi: number = Math.PI;
console.log(Math.PI);
let roundetPI: number = +pi.toFixed(2);
console.log(roundetPI);

// Math-TS-Level-1_3
const randomNum : number = Math.random();
console.log(randomNum);
const randomNum1_10: number = Math.ceil(Math.random()*10);
console.log(randomNum1_10);
const randomNum1_100: number = Math.ceil(Math.random()*100);
console.log(randomNum1_100);

// Math-TS-Level-2_2
const randomZahl : number = Math.floor(Math.random()*10);
const gerateneZahl: number= window.prompt('errate die zahl!');
switch (gerateneZahl == randomZahl) {
    case true:
        console.log('du hast gewonnen');
        break; 
    default:
        console.log('du hast verloren, die richtige zahl ist', randomZahl);
        break;
}



// Date-TS-Level-1_1
const date1 = new Date("September 2, 2019 09:00:00");
const date2 = new Date(0);
const date3 = new Date(31556908800);
const date4 = new Date(86400000);

const p1 = document.getElementById('date1')
const p2 = document.getElementById('date2')
const p3 = document.getElementById('date3')
const p4 = document.getElementById('date4')

if(p1){
    p1.innerHTML = date1.toDateString();
}
if(p2){
    p2.innerHTML = date2.toDateString();
}
if(p3){
    p3.innerHTML = date3.toDateString();
}
if(p4){
    p4.innerHTML = date4.toDateString();
}

// Date-TS-Level-2_1
const pDatum1 = document.getElementById('datum1')
const pDatum2 = document.getElementById('datum2')
const pUhrzeit1 = document.getElementById('uhrzeit1')
const pUhrzeit2 = document.getElementById('uhrzeit2')
const datum1 = new Date();

console.log('locale String GB', datum1.toLocaleString('en-GB'));
console.log('project start day date:', datum1.getDate());
console.log('project start day month:', datum1.getMonth());
console.log('project start day year:', datum1.getFullYear());
console.log('locale String GB mit UTC', datum1.toLocaleString('en-GB',{timeZone:'UTC'}));
console.log('locale String GB mit local', datum1.toLocaleString('en-GB',{timeZone:'Europe/London'}));


if(pDatum1){
    let pDatum1Formated = datum1.getDate() + '-' + datum1.getMonth() + '-' + datum1.getFullYear();
    pDatum1.innerHTML = pDatum1Formated;
}
if(pDatum2){
    let pDatum2Formated = datum1.getDate() + '/' + datum1.getMonth() + '/' + datum1.getFullYear();
    pDatum2.innerHTML = pDatum2Formated;
}

if(pUhrzeit1){
    let pUhrzeit1Formated = datum1.toLocaleString('en-GB',{timeZone:'UTC'});
    pUhrzeit1.innerHTML = pUhrzeit1Formated;
}
if(pUhrzeit2){
    let pUhrzeit2Formated = datum1.toLocaleString('en-GB',{timeZone:'UTC'});
    pUhrzeit2.innerHTML = pUhrzeit2Formated;
}

// Date-TS-Level-3_2
import { differenceInYears } from "date-fns";
import { differenceInHours } from "date-fns/differenceInHours";
const dateToday: Date = new Date();
const dateOther: string = "01.01.1970";
const differenz1 = differenceInYears(dateOther, new Date());
console.log('differenz1 : ',differenz1);
const differenz2 = differenceInHours(dateOther, new Date());
console.log('differenz2 : ',differenz2);
const differenz3 = differenceInSeconds(dateOther, new Date());
console.log('differenz3 : ',differenz3);

const myBirthday: Date= new Date(1997, 0, 18);
const myAgeOtherYear: Date = new Date(2007, 4, 7);
const meineAltersberechnung = differenceInYears(dateToday,myBirthday);
console.log('mein alter heute : ',meineAltersberechnung);
const myAgeOtherYearBerechnung = differenceInYears(myAgeOtherYear, myBirthday);
console.log('mein alter 2007 : ',myAgeOtherYearBerechnung);

console.log(myBirthday.toLocaleString('de-DE',{timeZone:'UTC'}));
console.log(myBirthday.toLocaleString('default', {
    timeZone:'UTC',
    day:'numeric',
    month:'numeric',
    year:'numeric',

    hour: 'numeric',
    minute: '2-digit',
}));
console.log(myBirthday.toLocaleString('default', {
    timeZone:'UTC',
    day:'numeric',
    month:'numeric',
    year:'2-digit',
}));
console.log(myBirthday.toLocaleString('default', {
    timeZone:'UTC',
    day:'numeric',
    month:'long',
    year:'numeric',

}));
console.log(myBirthday.toLocaleString('default', {
    timeZone:'UTC',
    hour: 'numeric',
    minute: '2-digit',
}));
console.log(myBirthday.toLocaleString('de-DE', { weekday: 'long' }));
console.log(myBirthday.toLocaleString('default', {
    timeZone:'UTC',
    month:'long',
}));
console.log((myBirthday.toLocaleString('default', {
    timeZone:'UTC',
    day:'numeric',
})),"des",(myBirthday.toLocaleString('default', {
    timeZone:'UTC',
    month:'long',
})), "im Jahre des Herrn", (myBirthday.toLocaleString('default', {
    timeZone:'UTC',
    year:'numeric',
})));

