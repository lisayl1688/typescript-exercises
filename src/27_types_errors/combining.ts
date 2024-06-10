console.log('combining.ts');
export {};
let number: number = 33;
console.log(number);
// ? Type 'undefined' is not assignable to type 'number'
// number = undefined;
// * mit dem Pipe-Zeichen kann ich sagen: der Typ ist entweder das eine oder das andere, also
// * ist entweder eine number oder undefined
// * diese Schreibweise nennt sich Union-Type
let number1: number | undefined = 44;
console.log(number1);
number1 = undefined;
console.log(number1);

// ! nicht verwechseln mit dem Oder-Operator || beim Vergleich
if (number === 11 || number == 22) {
  //...
}

let name: string | null = null;
console.log(name);
name = 'Suzy';
console.log(name);
// ? ich kann nur einen String oder null zuweisen, kein boolean oder etwas anderes
// name = true;

// ? die Schreibweise kann ich auch beim Rückgabewert von Funktionen angeben
// ? aus der Funktion wird entweder ein String oder undefined zurückgegeben
// ? das nutze ich z. B. für Fehlerfälle
function getGreeting(name: string): string | undefined {
  // ? Unterscheiden, wenn im Namen etwas steht, will die Begrüßung zurückgeben
  if (name.length) {
    return `Hello ${name}`;
  }
  return undefined;
}

const greetingWithName = getGreeting('Manny');
console.log(greetingWithName);
const greetingWithoutName = getGreeting('');
console.log(greetingWithoutName);

// ! nicht beliebig verwenden aus Clean Code Sicht immer einen eindeutigen Wert verwenden
// ! UnionType am besten nur mit undefined oder null
let stringOrBoolean: string | boolean = true;
console.log(stringOrBoolean);
stringOrBoolean = 'Hallo Welt';
console.log(stringOrBoolean);

// * bei type kann ich auch Union Types verwenden
// ? ein eigener Type, der nur die Werte von 1 bis 6 zulässt
type GermanSchoolGrade = 1 | 2 | 3 | 4 | 5 | 6;
let grade1: GermanSchoolGrade = 3;
// ? Type '27' is not assignable to type 'GermanSchoolGrade'
// grade1 = 27; 27 kann nicht zugewiesen werden
console.log(grade1);

type Continent = 'Africa' | 'Europe' | 'Australia'; //...
let continent: Continent = 'Europe';
// ? Type '"Switzerland"' is not assignable to type 'Continent'.
// continent = 'Switzerland';
console.log(continent);

// * Intersection Type
// * der Datentyp ist das eine und das andere
// ? Schreibweise: &
// ! ist bei einfachen Datentypen nicht möglich: string & boolean
// ? wird eher bei type oder interface verwendet

type Writer = { name: string; famousBooks: string[] };

type Actor = { name: string; famousMovies: string[] };

// ? mit dem & sage ich: steveCarell ist Writer und Actor und hat damit die Eigenschaften von beiden Datentypen
const steveCarell: Writer & Actor = {
  name: 'Steve Carell',
  famousMovies: ['The Office', '40 year old virgin'],
  famousBooks: ['The actors life']
};
console.log(steveCarell);

// ? ich könnte auch einen eigenen Type WriterActor machen:
type WriterActor = Writer & Actor;

// ! nicht verwechseln mit && beim Vergleich
if (number > 0 && number < 32) {
  //...
}
