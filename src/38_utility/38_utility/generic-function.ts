
// * Generics in TypeScript ermöglichen das Schreiben von Code, der mit einer verschiedenen Datentypen arbeiten kann,
// * während die Typsicherheit erhalten bleibt. Sie ermöglichen die Erstellung von wiederverwendbaren Komponenten,
// *  Funktionen und Datenstrukturen, ohne die Typüberprüfung zu beeinträchtigen.

// * zwei Funktion
// ? 1. reverseAndPrintStrings
// ? 2. reverseAndPrintNumbers
export {};
function reverseAndPrintStrings(array: string[]) {
  const reversedArray = array.reverse();
  reversedArray.forEach((element: string) => {
    console.log(element);
  });
}

reverseAndPrintStrings(['Johnny', 'Dee Dee', 'Thommy', 'Joey']);

function reverseAndPrintNumbers(array: number[]) {
  const reversedArray = array.reverse();
  reversedArray.forEach((element: number) => {
    console.log(element);
  });
}

reverseAndPrintNumbers([65, 45, 71, 41]);

// ! ich sehe hier, dass der Code recht ähnlich aussieht und will mir doppelten Code sparen

// ? so könnte ich das bisher schon für strings und numbers umsetzen
function reverseAndPrint(array: string[] | number[]) {
  const reversedArray = array.reverse();
  reversedArray.forEach((element: string | number) => {
    console.log(element);
  });
}

// * so sieht es mit Generics aus
// ? schon die Funktion braucht die spitzen Klammern - T steht für jeden beliebigen Datentyp
// ? T muss ich dann überall in der Funktion statt konkretem Datentyp wie string oder number verwenden
// ? T ist die Konvention für generische Typen - wenn es mehrere Typen gibt, dann mit U, V usw. weiter
function reverseAndPrintGeneric<T>(array: T[]) {
  const reversedArray = array.reverse();
  reversedArray.forEach((element: T) => {
    console.log(element);
  });
}

console.log('Generic:');
reverseAndPrintGeneric<number>([65, 45, 71, 41]);
reverseAndPrintGeneric<string>(['Johnny', 'Dee Dee', 'Thommy', 'Joey']);
reverseAndPrintGeneric<boolean>([true, true, true, false, false, false]);
// ? Bigint bei sehr großen Zahlen statt number verwenden
reverseAndPrintGeneric<BigInt>([BigInt(9007199254740991), BigInt(9007199254740454), BigInt(900719925474043333)]);

type IceCream = { name: string; price: number };
reverseAndPrintGeneric<IceCream>([
  { name: 'Vanilla', price: 2 },
  { name: 'Chocolate', price: 2 },
  { name: 'Strawberry', price: 2 }
]);

// ! bitte kein any verwenden
// function reverseAndPrintForbidden(array: any[]) {
//   const reversedArray = array.reverse();
//   reversedArray.forEach((element: any) => {
//     console.log(element);
//   });
// }
