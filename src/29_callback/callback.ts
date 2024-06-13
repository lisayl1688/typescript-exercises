export {};

const a = 33;
const b = 66;

const result = a + b;
console.log(result);

const resultSubtract = subtract(a, b);
console.log(resultSubtract);

console.log('End of File');

// ? auch wenn die Funktion hier unten steht, wird trotzdem synchron alles aufgerufen und dann in die Funktion gesprungen
function subtract(first: number, second: number): number {
  return first - second;
}

// * Callback = Funktion, die zu einem anderen Zeitpunkt aufgerufen wird
// ? "Ich rufe Sie zurück"
// ! Code, der nicht direkt ausgeführt wird und damit asychron ist
// ? es wird als Parameter eine Arrow-Funktion an setTimeout übergeben
// ? diese wird vom Timer nach der abgelaufenen Zeit aufgerufen
setTimeout(() => {
  console.log('1 second is over');
}, 1000);

const names = ['Alice', 'Bob', 'Martin'];
// ? wir geben auch ins forEach eine Callback-Funktion rein
// ? forEach ruft dann immer wieder diese Callback-Funktion für jedes Array-Element selbst auf
names.forEach((name: string) => {
  console.log('Hello ' + name);
});

// ? Klassisches Beispiel für asychronen Aufruf ist der Eventlistener
// ? der Code im Eventlistener wird wirklich erst ausführt, wenn jemand auf den Button klickt
// ? auch hier gebe ich in addEventListener eine Callback-Function als 2. Parameter mit, die dann
// ? beim Klick ausgeführt wird
// ? alle EventListener führen den Code asynchron aus und nicht direkt
document.getElementById('button')?.addEventListener('click', () => {
  console.log('Someone hast clicked on the button');
});

// * Stell dir einen Fahrradfahrer vor, der jeden Tag bestimmte Stationen abfährt.
// * In der Tasche hat er immer einen Brief. Er hat die Anweisung, an einem bestimmten Haus den Brief zu öffnen
// * und den Anweisungen im Brief zu folgen.
// * Das können jeden Tag andere Anweisungen sein. Danach fährt er auf der vordefinierten Route weiter.

// * Wir wollen eine eigene Funktion mit Callback-Funktion schreiben
// ? wir brauchen einen Parameter, über den ich eine Funktion in die Funktion reingeben kann -> Callback
// ? openLetter: () => void sagt aus: der Parameter ist eine Funktion ohne Parameter weil leere runde Klammern, die
// ? nicht zurückgibt, weil void
// ? der Parameter kann auch optional sein: mit dem Fragezeichen gekennzeichnet
function driveDailyRoute(openLetter?: () => void): void {
  console.log('Go to house 1');
  console.log('Go to house 2');
  console.log('Go to house 3');
  console.log('Go to house 4');
  // ? hier soll der Brief geöffnet werden und die Anweisungen ausgeführt
  // ? weil ich openLetter optional gemacht habe, muss ich hier prüfen, ob die Funktion übergeben wurde mit if (openLetter)
  if (openLetter) {
    openLetter();
  }
  console.log('Go to house 5');
  console.log('Go to house 6');
}

function openLetterForDayOne(): void {
  console.log('Sing a song');
  console.log('Dance in circles');
}

function openLetterForDayTwo(): void {
  console.log('Do 10 squats');
  console.log('Eat ice cream');
}

function openLetterForDayThree(): void {
  console.log('Drink some water');
  console.log('Whistle a song');
}

console.log('--- Day 1 ---');
// ? wir geben hier einen Verweis auf die Funktion mit, in dem wir den Funktionname hinschreiben
// ! Achtung keine runden Klammern hinter openLetterForDayOne, sonst wird die Funktion nicht übergeben sondern nur direkt aufrufen
driveDailyRoute(openLetterForDayOne);
// ? hier würde ich es erst nach dem 6. Haus ausführen
//openLetterForDayOne();
console.log('--- Day 2 ---');
driveDailyRoute(openLetterForDayTwo);
console.log('--- Day 3 ---');
driveDailyRoute(openLetterForDayThree);
// ? am Tag 4 soll gar nichts gemacht werden
console.log('--- Day 4 ---');
driveDailyRoute();
console.log('--- Day 5 ---');
// ? ich muss die Funktion für Tag nicht separat mit function und einem Namen anlegen - ich kann sich auch anonym mit der
// ? Arrow-Function-Schreibweise direkt reingeben
driveDailyRoute(() => {
  console.log('Watch birds');
});

// * function driveDailyRoute(openLetter?: () => void): void {}

// ? Quadratzahl ermitteln
// ? 1. Parameter: die Zahl
// ? 2. Parameter: die Callback-Function, die eine weitere Rechenoperation zusätzlich zur Quadratzahl macht
// ? Datentyp des 2. Parameters war bei openLetter () => void
// ? hier brauchen wird andere Datentypen: nämlich einen Parameter vom Typ number - Rückgabetyp soll auch number sein
//  ! ich muss darauf achten, dass alle Callback-Funktionen, die ich hier reingeben will genau einen Parmeter vom Typ
// ! number haben und auch wieder eine number zurückgeben -> (a: number) => number
function squareAndMore(x: number, additionalOperation: (a: number) => number) {
  // ? 1. Schritt x zum Quadrat nehmen
  const square = x * x;
  // ? 2. Schritt, eine weitere Berechnung durchführen, die mir per Callback-Function übergeben wird
  const result = additionalOperation(square);
  // ? 3. Schritt, das Gesamtergebnis auf der Konsole ausgeben
  console.log('Gesamtergebnis: ', result);
}

// ? additionalOperation: Ergebnis mal sieben nehmen
function multiplyBySeven(a: number): number {
  return a * 7;
}

squareAndMore(3, multiplyBySeven);

// ? additionalOperation:  Ergebnis minus 20 nehmen
function minusTwenty(a: number): number {
  return a - 20;
}
squareAndMore(5, minusTwenty);

// ? die Funktion hat keinen Rückgabewert
function printResult(a: number): void {
  console.log(a);
}
// ? die Funktion hat den falschen Parametertyp nämlich string statt number
function addName(a: string): number {
  return 0;
}

// ! wir bekommen Fehler, wenn der Typ des Parameters oder der Rückgabetyp nicht stimmen
// Argument of type '(a: number) => void' is not assignable to parameter of type '(a: number) => number'.
//   Type 'void' is not assignable to type 'number'.ts(2345)
// squareAndMore(6, printResult)

// Argument of type '(a: string) => number' is not assignable to parameter of type '(a: number) => number'.
//   Types of parameters 'a' and 'a' are incompatible.
//     Type 'number' is not assignable to type 'string'.
//squareAndMore(5, addName);
