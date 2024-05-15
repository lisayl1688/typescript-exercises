// Loops-TS-Level-1_10
// - Schreibe eine Funktion getHighestNumber
// - Die Funktion bekommt als Parameter ein Array von numbers übergeben
// - Die Funktion hat als Rückgabetyp den Typ number
// - Es soll der höchste Wert aus dem übergebenen Array von Zahlen ermittelt werden
    
//     Tipp: Gehe alle Zahlen durch und merke dir immer den aktuell höchsten Wert in einer Variable
    
// - Anschließend wird dieser Wert mit return zurückgegeben
// - Rufe die Funktion mit mehreren Arrays auf, um zu testen, ob sie richtig funktioniert

const erstesArrayVonNummern :number [] = [6,4,3,2,9];
const zweitessArrayVonNummern :number [] = [8,14,32,22,5];
// function sortDescending(a: number, b: number) {
//     return b - a;
// }
// const sortiertesErstesArrayVonNummern :number []= erstesArrayVonNummern.sort(sortDescending)
// console.log(sortiertesErstesArrayVonNummern);

// function getHighestNumber (nummermArray: number[]) :number{
//     let highestNumber: number = 0;
//     for(let index = 0; index < nummermArray.length; index ++){
//         console.log(nummermArray[index]);
//         let currentNumber: number = nummermArray[index];
//         let nextNumber: number = nummermArray[index+1];
//         if (currentNumber>nextNumber){
//             highestNumber = currentNumber;
//             continue;
//         }
        
//     }


//     return highestNumber; 
// }

function getHighestNumber (nummermArray: number[]) :number{
    let highestNumber: number = 0;
    for(let index = 0; index < nummermArray.length; index ++){
        let currentNumber: number = nummermArray[index];
        let nextNumber: number = nummermArray[index+1];
        console.log("current Number" + currentNumber);
        console.log("next Number" + nextNumber);
        if (currentNumber>nextNumber){
            highestNumber = currentNumber;
            continue;
        }
        
    }


    return highestNumber; 
}

console.log("ausgabefunktion:"+getHighestNumber(erstesArrayVonNummern)); 
console.log("ausgabefunktion:"+getHighestNumber(zweitessArrayVonNummern)); 


// Loops-TS-Level-1_11
function calculateSum (maxNumber: number): number {
    let ergebnisAll : number = 0;
    for (let index = 1; index <= maxNumber; index++) {
        ergebnisAll = ergebnisAll + index;
        
    }
    
    return ergebnisAll;
}
console.log("ausgabe:"+calculateSum(100)); 


// Loops-TS-Level-2_3
// - Schreibe eine Funktion getNumberOfVowels
// - Sie soll die Anzahl der Vokale (A, E, I, O, U) in einem übergegebenen String zählen und zurückgeben.
// - Verwende eine Schleife, um jeden Buchstaben im übergebenen String zu durchzugehen, und eine Bedingung, um zu prüfen, ob es sich um einen Vokal handelt.
// - Teste die Funktion mit mehreren Strings

// function getNumberOfVowels (wortString: string){
//     for (let index = 0; index < wortString.length; index++) {
//         const wortStringLowercase = wortString.toLowerCase();
//           console.log({wortStringLowercase});
//     //   if(wortStringLowercase == 'a'){
//     //     console.log('true');
//     //   }else {
//     //     console.log('false');}
//     }
// }

function getNumberOfVowels (wortString: string){
    const wortStringLowercase = wortString.toLowerCase();
    for (let index = 0; index < wortStringLowercase.length; index++) {
      if(wortStringLowercase == 'a'){
        return 'hallo';
      }
      
    }
   
}

getNumberOfVowels('AUTOs');

