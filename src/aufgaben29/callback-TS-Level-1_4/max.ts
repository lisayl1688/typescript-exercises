export {};// - Lege eine Datei max.ts an
// - Schreibe dort eine Funktion showMaximum
//     - Parameter 1: numbers: numbers[]
//     - Parameter 2: callback: (max: number) ⇒ number
// - Die Funktion ermittelt zuerst das Maximum der Zahlen aus dem numbers-Array und gibt es auf der Konsole aus
// - Dann übergibt sie den Max-Wert an die Callback-Funktion
// - Das Ergebnis der Callback-Funktion wird auf der Konsole ausgegeben
// - Danach wird auf der Konsole ausgegeben “Finished with showMaximum”
// - Schreibe eine weitere Funktion powerOfTen(number: number): number
//     - Parameter: number: number
//     - die Funktion soll die übergebene Zahl hoch 10 nehmen und zurückgeben
// - Rufe showMaximum mit einem Array von Zahlen und powerOfTen als Callback-Funktion auf

const numberArray : number []=[42, 43, 6, 74, 77, 2, 12];

function sortDescending(a: number, b: number) {
    return b - a;
  }
function showMaximum (numbers: number[], callback: (max: number) => number) {
    const sortedArray = numberArray.sort(sortDescending);
    const maxNumber = sortedArray[0];
    console.log(maxNumber);
    const result = callback(maxNumber);
    console.log(result);
    console.log("Finished with showMaximum");
}

function powerOfTen(number: number): number {
    const nachHoch10 = number**10;
    return nachHoch10;
}

showMaximum(numberArray,powerOfTen)
