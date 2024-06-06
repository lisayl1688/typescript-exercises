import { Animal, Avocado, Cucumber, Panda, Penguin } from './classes';

export {};
// * bei Variablen kann ich typeof aufrufen, um herauszufinden von welchem Basistyp sie sind
// ? typeof Variablenname
const a: number = 55;
console.log(typeof a); // ? number

const text = 'Hallo Welt';
console.log(typeof text); // ? string

const isNice = true;
console.log(typeof isNice); // ? boolean

console.log(typeof undefined); // ? undefined

const person = { firstName: 'Frank', lastName: 'Miller' };
console.log(typeof person); // ? object

const names = ['Suzy', 'Marcy', 'Darcy'];
console.log(typeof names); // ? object
// ! alles ist in JavaScript/TypeScript ein object: Array, Set, Map, Date...
// ! wir bekommen hier keine näheren Info

const today = new Date();
console.log(typeof today); // ? object

function greetMe(): void {
  console.log('Hello!');
}

console.log(typeof greetMe); // ? function

// const userInput = window.prompt('Wie heißt du?');

// ? ich kann hier mit typeof überprüfen, ob wirklich ein string eingegeben wurde
if (typeof userInput === 'string') {
  console.log(`Your name is ${userInput}`);
}

// ? besseres Beispiel: Daten kommen von einer Schnittstelle
//const resultFromApi: any = 'test';
const resultFromApi: any = 52852;

// * typeof gibt uns den Namen des Datentyps als String zurück
if (typeof resultFromApi === 'string') {
  console.log('It is a string');
  // Hier dann die Logik
} else if (typeof resultFromApi === 'number') {
  console.log('It is a number');
  // Hier dann die Logik
} else if (typeof resultFromApi === 'object') {
  console.log('It is an object');
}

// * instanceof gibt zurück ob die Variable auf Basis einer Klasse erstellt wurde
const avocado = new Avocado();
console.log('What is avocado:', typeof avocado);

// ? wenn wir wissen wollen, ob avocado wirklich eine Instanz der Klasse Avocado ist,
// ? dann nutzen wir instanceof
// ? Schreibweise: Variablenname instanceof Klassenname
// ? es wird true zurückgegeben, wenn es eine Instanz der Klasse ist
// ? es wird false zurückgegeben, wenn es KEINE Instanz der Klasse ist
const isAvocado = avocado instanceof Avocado;
console.log({ isAvocado });
const isCucumber = avocado instanceof Cucumber;
console.log({ isCucumber });

// * Tiere
const penguin = new Penguin('Pingu');
console.log('Is pingu a penguin?', penguin instanceof Penguin);

// * in die Funktion wird ein Animal reingeben - also die Eltern- oder Basisklasse
// ? ich weiß nicht, welches Tier das konkret, das will ich in der Function überprüfen
// ? je nach Tier/Klasse soll eine andere Methode aufgerufen werden
function moveAnimal(animal: Animal) {
  if (animal instanceof Penguin) {
    animal.waddle();
  } else if (animal instanceof Panda) {
    animal.stroll();
  } else {
    console.log('Animal does not have a move method');
  }
}

moveAnimal(penguin);
const balu = new Panda('Balu');
moveAnimal(balu);

const animal = new Animal('unknown animal');
moveAnimal(animal);
