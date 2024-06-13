// - Lege eine Datei callback-cascade.ts an
// - Schreibe dort eine Funktion calculateSumAndMore
//     - Parameter 1: a: number
//     - Parameter 2: b: number
//     - Parameter 3: callback1: (result1: number) ⇒ number
//     - Parameter 4: callback2: (result2: number) ⇒ number
// - Zuerst wird die Summe von a + b ermittelt
// - Dann wird sie an die erste Callback-Funktion übergeben
// - Das Ergebnis der ersten Callback-Funktion wird an die zweite Callback-Funktion übergeben
// - Das Ergebnis der zweiten Callback-Funktion ist dann der Rückgabewert von calculateSumAndMore

// Rufe calculateSumAndMore auf und übergebe folgende Callback-Funktionen

// - Die erste Callback-Funktion soll die Summe von a und b verdoppeln zurückgeben
// - Die zweite CallbackFunktion soll dann das Ergebnis in eine Binärzahl umwandeln und zurückgeben (siehe https://www.geeksforgeeks.org/javascript-program-to-convert-a-number-to-binary/)

// - Rufe die Funktion mit mehreren Zahlen auf und lass dir das Ergebnis auf der Konsole ausgeben

function calculateSumAndMore(a: number, b: number, callback1: (result1: number) => number, callback2: (result2: number) => number){
    const Summe = a+b;
    const putInCallback1 = callback1(Summe);
    const putInCallback2 = callback2(putInCallback1);
    return putInCallback2;
}


function SummeVerdoppeln(Summe : number): number {
    const verdoppelung =  Summe * 2
    return verdoppelung;
}

function ErgebnisBinaerZahl(number : number):number {
    const inBinaer = number.toString(2);
    const ergebnisInZahl = Number(inBinaer);
    return ergebnisInZahl;
}



console.log(calculateSumAndMore(5,3,SummeVerdoppeln,ErgebnisBinaerZahl));

