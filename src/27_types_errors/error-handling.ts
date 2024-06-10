console.log('error-handling.ts');

const input1 = document.getElementById('something') as HTMLInputElement;
// ! Uncaught TypeError TypeError: Cannot read properties of null (reading 'value')
//console.log(input1.value);
// ! alles was danach hier an Code passiert wird nicht mehr ausgeführt - es wird direkt abgebrochen
// * alle möglichen Fehler, die wir selber kennen, fangen wir auch selber ab

// ? so wäre die selbst geschriebene sichere Methode auf input1.value zuzugreifen
// if (input1) {
//   console.log(input1.value);
// }

// * für Fälle, in denen ich nicht genau weiß was zurückkommt oder welche Seiteneffekte es geben kann
// * oft bei Schnittstellenaufrufen oder externen Eingaben oder Bibliothek
// * ich kann ein Sicherheitsnetz um meinen Code spannen
// ? try - hier kommt der Code rein, der vielleicht Fehler enthält
// ? damit verhindere ich, dass die ganze Anwendung abstürzt und an dieser Stelle aufhört zu arbeiten
try {
  console.log(input1.value);
  // ? catch - fängt Fehler ab und ich kann darauf reagieren
  // ? catch hat immer error als Parameter, sieht immer so aus
} catch (error) {
  // ? wir behandeln den abgefangenen Fehler hier selbst, z. B. in dem wir ihn auf Konsole ausgeben
  console.log('Wir haben den Fehler abgefangen: ', error);
  // ? wenn ich nur den reinen Fehlertext ausgeben will ohne Datei und Zeile etc.
  // ? muss ich immer so schreiben (error as Error).message
  const errorMessage = (error as Error).message;
  console.log('Reiner Fehlertext: ', errorMessage);
}

console.log('Hier kommt jetzt der restliche Code');

// ? Teilungsfunktion
// ? wir wollen einen Fehler werfen, der dann das ganze Programm anhält, wenn er nicht abgefangen wird
function divide(a: number, b: number) {
  // ? wir dürfen nicht durch 0 teilen, da kommt kein Ergebnis zurück
  if (b === 0) {
    // ? wir werfen einen Fehler mit throw new Error und dem Fehlertext
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

const result = divide(10, 3);
console.log(result);

try {
  const resultError = divide(10, 0);
} catch (error) {
  // ? hier stehen alle Zusatzinfos mit Zeile etc. drin
  console.log('Ganzer Fehler: ', error);
  // ? error as Error wandelt in Error Interface um, nur so kann ich auf .message zugreifen und den Rest weglassen
  // ? das Error-Interface kommt aus TypeScript selber und sieht so aus
  // ? interface Error {
  // ?    name: string;
  // ?    message: string;
  // ?    stack?: string;
  // ? }
  console.log('Fehler abgefangen: ', (error as Error).message);
}

console.log('Code after division by zero');
