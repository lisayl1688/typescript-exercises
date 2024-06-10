// * Type Casting = Umwandlung von einem Datentyp in einen anderen
// * häufig, wenn Usereingaben, externe Schnittstellen, Bibliothek
// ? number/boolean in einen string umwandeln
// ? Überlegung, welchen Datentyp man selbst anlegt number oder string: führende Nullen, Sonderzeichen in der Zahl

import Artist from './Artist';
import Avocado from './Avocado';
import Painter from './Painter';

// ? -> dann lieber String nehmen
const number1 = 44;
const number1AsString = number1.toString();
console.log(number1);
console.log(number1AsString);
const boolean1 = false;
const booleanAsString = boolean1.toString();
console.log(boolean1);
console.log(booleanAsString);

// ? string in eine number umwandeln
// const number2AsString = '3434';
const number2AsString = '3434.54';
// ? Number() wandelt den String in eine number um
const realNumber2 = Number(number2AsString);
console.log(realNumber2);
// ? wenn ich weiß, es wird ein Integer, also eine Ganzzahl (= eine ohne Kommas), kann ich parseInt nehmen
const realNumber2Int = parseInt(number2AsString);
console.log(realNumber2Int);
// ? wenn ich weiß, es wird ein Float, also einen Kommazahl, kann ich parseFloat nehmen
const realNumber2Float = parseFloat(number2AsString);
console.log(realNumber2Float);

// ? string in einen boolean umwandeln
const boolean2AsString = 'true';
// ? Boolean() wandelt den String in einen boolean um
const realBoolean = Boolean(boolean2AsString);
console.log(realBoolean);
// ? ich vergleiche, ob der Text gleich 'true' ist
const realBoolean2 = boolean2AsString === 'true';
const booleanAsNumber = 0; //? false
// const booleanAsNumber = 6565; true
// ? bei der Umwandlung von number in boolean: nur 0 ist false, alles andere ist true
const realBooleanFromNumber = Boolean(booleanAsNumber);
console.log('Number from number: ', realBooleanFromNumber);

// * JSON.parse und JSON.stringify zum Umwandeln von JSON (= JavaScript Object Notation)
// ? wir wollen das User-Object in den localStorage zwischenspeichern
const user = { email: 'alex@gmx.de', password: 'Sommer2024' };
console.log(user);
// ? user objekt in das JSON-Format umwandeln
const userAsJson = JSON.stringify(user);
console.log(userAsJson);
localStorage.setItem('currentUser', userAsJson);

// ? JSON-Format zurückwandeln in Objekt
// ? mit JSON.parse
const userFromLocalStorage = localStorage.getItem('currentUser');
console.log('user from local storage: ', userFromLocalStorage);
if (userFromLocalStorage) {
  // ? aus dem JSON-Format, das im localStorage abgespeichert ist, wieder ein echtes Objekt im Code machen
  const userObject = JSON.parse(userFromLocalStorage);
  console.log('user object after JSON parse: ', userObject);
}

// * HTML-ELemente umwandeln
// ? wenn wir einfach nur getElementById aufrufen, ist der Datentyp HTMLElement
const userInputElement = document.getElementById('number-input');
if (userInputElement) {
  // ? wir können nicht auf .value zugreifen, dass gibt es beim allgemeinen HTMLElement nicht!
  // userInputElement.value;
}
// ? aus dem HTMLElement ein HTMLInputElement machen, damit ich auf .value zugreifen kann
// * mit as kann ich von einem Datentyp in einen anderen umwandeln
// * das mache ich, weil getElementById-Funktion nicht selbst weiß, welche HTMLElement wir uns genau herausholen
// ? wenn ich es besser weiß, welcher konkrete Datentyp es ist, dann kann ich mit as die Variable umwandeln
const userInputElementAsInput = userInputElement as HTMLInputElement;
console.log(userInputElementAsInput.value);

// * eine Klasse in eine andere umwandeln
const picasso = new Painter('Pablo Picasso', 1881, 1973);
picasso.style = 'Modern Art';
console.log(picasso.style);
console.log('picasso as painter: ', picasso);
// ? ich will picasso von Painter zu Artist umwandeln
// ? auch wenn ich Klassen umwandeln will, kann ich as benutzen
// ? aus der Instanz von der Klasse Painter, wird eine Instanz der Klasse Artist
// ? ich wechsle vom Kind- zum Elternelement
const picassoAsArtist = picasso as Artist;
console.log(picassoAsArtist);
// ? picassoAsArtist verliert damit die Eigenschaft style - ich kann nicht direkt auf .style zugreifen
//picassoAsArtist.style

// ? Conversion of type 'Painter' to type 'Avocado' may be a mistake because neither
// ? type sufficiently overlaps with the other.
// ? If this was intentional, convert the expression to 'unknown' first.
// ! ich kann nicht von einer Klasse oder einem Datentyp mit ganz anderen Eigenschaften umwandeln
// * bei Eltern- und Kindklasse geht das problemlos
//const picassoAsAvocado = picasso as Avocado;

// ? ich lege ein Objekt mit der Eigenschaft name an ohne new Avocado zu verwenden
const hassAvocado = { name: 'Hass Avocado' };
// ? es soll eine Instanz der Klasse Avocado daraus werden
// ? es entsteht eine Avocado ohne die Eigenschaft quality
// ! beim Casting mit as kann man also Prüfungen und Pflichtfelder in Klassen umgehen, daher
// ! sehr sparsam einsetzen und nur wenn nötig
const realHassAvocado = hassAvocado as Avocado;
console.log('Converted object to Avocado', realHassAvocado);
