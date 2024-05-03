// Functions-TS-Level-1_3
function showPersonInfo(name: string, city: string, age: number): void {
    const roundedAge = Math.floor(age);
    let message = 'hallo mein Name ist '+ name +'ich bin '+ roundedAge +' ahre alt, ich komme aus  '+ city;
    console.log(message);
}
showPersonInfo('lisa', 'köln', 27.6);

// Functions-TS-Grundlagen-Level-1_4
function showHero(heroName: string, heroPower: string, heroEnemy: string): void {
    const nameOutput = 'Mein:e Lieblingsheld:in ist:'+ heroName;
    const powerOutput='Er/sie hat die Fähigkeit:' + heroPower;
    const enemyOutput='Sein/ihr größte/r Gegner:in ist:'+ heroEnemy;
    console.log(nameOutput +' '+ powerOutput +' '+ enemyOutput);
}
showHero('kali', 'süßer Blick', 'große Hunde')

// Functions-TS-Level-1_5
function multiplyAndDivide(firstNumber: number, secondNumber: number): void {
    const additionBothNumbers = firstNumber + secondNumber
    console.log(additionBothNumbers);
    if( secondNumber == 0 ){
        console.log('Division durch 0 nicht erlaubt');
    }
}
multiplyAndDivide(30,20);
multiplyAndDivide(100,100);
multiplyAndDivide(5,0);
multiplyAndDivide(45,173);
multiplyAndDivide(1,1000);

// Functions-TS-Grundlagen-Level-1_6
function returnOne(){
    return 1;
}

const x1: number = 1;
const y1: number = returnOne();

if (x1 == y1) {
    console.log('wird das gedruckt?');
}

// Functions-TS-Grundlagen-Level-1_7
function practiceParameter(Number: number): number{
    const ergebnisBerechnung = Number * 2;
    console.log(ergebnisBerechnung);
    return ergebnisBerechnung;

}
practiceParameter(9);

// Functions-TS-Grundlagen-Level-1_8
function berechneMeinAlter(birthYear: number): number{
    const today: Date = new Date();
    const currentYear = today.getFullYear();
    const myBirthYear = currentYear - birthYear;
    return myBirthYear;
}
console.log(berechneMeinAlter(1997));

function vergleicheUnserAlter (birthYear1: number, birthYear2: number): number{
    const today: Date = new Date();
    const currentYear = today.getFullYear();
    const firstBirthYear: number = currentYear - birthYear1;
    const secondBirthYear: number = currentYear - birthYear2;
    const altersDifferenz: number = firstBirthYear - secondBirthYear;
    console.log(altersDifferenz);
    return altersDifferenz;
}

vergleicheUnserAlter(1997, 1998);


// Functions-TS-Grundlagen-Level-1_9
function thisIsMe (vorname: string, nachname: string, geburtsort: string, alter: number, wohnort: string): void {
    console.log('Mein Name ist'+' '+vorname+' '+nachname+' '+'.Ich bin in'+' '+geburtsort+' '+'geboren. Ich lerne bei Supercode. Ich bin'+' '+alter+' '+ 'alt. Ich wohne in'+' '+ wohnort+'.');
}
thisIsMe('lisa','ly','bergisch gladbach', 27, 'köln');