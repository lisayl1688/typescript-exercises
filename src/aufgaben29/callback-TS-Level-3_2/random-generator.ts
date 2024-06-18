export{};// Zufallsgenerator für verschiedene Datentypen

// Es soll eine Anwendung erstellt werden, die in einem h1-Element entweder eine random Number, einen random String, ein random Boolean oder ein random Emoji zurückgibt, wenn man auf einen Button klickt

// - Erstelle eine HTML-Datei mit einem h1-Element mit der ID "headline" für die Anzeige der Ergebnisse und einem Button mit der Id "randomButton" für den Zufallsgenerator.
// - Erstelle eine TypeScript-Datei namens random-generator.ts und verbinde sie mit der HTML-Datei
// - Definiere in der TypeScript-Datei vier Funktionen:
//     - randomNumber: Generiert eine zufällige Zahl und gibt sie als string zurück.
//     - randomText: Generiert einen zufälligen Text und gibt ihn zurück.
//     - randomBoolean: Generiert einen zufälligen Wahrheitswert (true oder false) und gibt ihn als string zurück.
//     - randomEmoji: Gibt einen zufälligen Emoji zurück
// - Definiere eine Funktion updateHeadline, die eine Callback-Funktion (Rückgabewert: string) als Parameter erhält und den Rückgabewert dieser Callback-Funktion in das h1-Element mit der ID "headline" schreibt.
// - Füge einen Event Listener für den Random-Button hinzu
//     - dort soll nach dem Zufallsprinzip eine der zuvor definierten vier Funktionen ausgewählt und an die updateHeadline-Funktion übergeben werden
// - Teste die Anwendung ausführlich

const h1headlineInput = document.getElementById('headline') as HTMLElement;
const randomButton = document.getElementById('randomButton') as HTMLButtonElement;


const numberArray : number [] = [2,56,43,13,11,70,]

function randomNUmber (){
    let randomNumber= Math.floor(Math.random() * numberArray.length);
}

function randomText (){
    
}


function randomBoolean (){
    
}


function randomEmoji (){
    
}

// - Definiere eine Funktion updateHeadline, die eine Callback-Funktion (Rückgabewert: string) als Parameter erhält und den Rückgabewert dieser Callback-Funktion in das h1-Element mit der ID "headline" schreibt.
// - Füge einen Event Listener für den Random-Button hinzu
//     - dort soll nach dem Zufallsprinzip eine der zuvor definierten vier Funktionen ausgewählt und an die updateHeadline-Funktion übergeben werden

function showMaximum (numbers: number[], callback: (max: number) => number) {
    const sortedArray = numberArray.sort(sortDescending);
    const maxNumber = sortedArray[0];
    console.log(maxNumber);
    const result = callback(maxNumber);
    console.log(result);
    console.log("Finished with showMaximum");
}

function updateHeadline (callback: (call: string) => string) {

}



