
export {};// - Lege eine Datei add-numbers.ts an
// - Erstelle eine Funktion addNumbers mit drei Parametern
//     - a: number
//     - b: number
//     - callback: (sum: number) ⇒ void
// - in der Funktion addNumbers wird das Ergebnis von a + b an die Callback-Funktion übergeben
// - Rufe addNumbers mit zwei Zahlen auf
// - In der Callback-Function soll nur console.log mit der Summe aufgerufen werden
// → entscheide selbst ob du dafür eine extra Funktion anlegst oder es direkt in der Arrow-Schreibweise umsetzt

function addNumbers(a: number, b: number, callback:(sum: number)=>void){
    const sum = a+b;
    const result = callback(sum)
    console.log(result);
}

addNumbers(1,2,(sum)=>{console.log(`Die summe ist ${sum}`)});



  