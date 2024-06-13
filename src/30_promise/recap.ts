// * Funktion, die einen String und zwei Callbacks als Parameter hat
// * nach 3 Sekunden soll der erste Callback aufgerufen werden
// * das Ergebnis vom ersten Callback soll in den zweiten übergeben werden
// * am Ende wird das Ergebnis auf der Konsole geloggt

// ? Funktionen verschachteln - um ganz flexibel von außen Logik reinzureichen
function formatString(text: string, callback1: (text: string) => string, callback2: (text: string) => string) {
  console.log('We are in the function');
  setTimeout(() => {
    const result1 = callback1(text);
    const result2 = callback2(result1);
    console.log(result2);
  }, 3000);
}

// ? wir wollen diese Funktion als ersten Callback mitgeben, deshalb braucht sie eine Parameter string und muss auch einen zurückgeben
function toUpperCaseAndRemoveSpaces(text: string): string {
  return text.toUpperCase().replace(' ', '');
}

function reverseAndToLowerCase(text: string): string {
  const reverseText = text.split('').reverse().join('');
  return reverseText.toLowerCase();
}

formatString('Hello World', toUpperCaseAndRemoveSpaces, reverseAndToLowerCase);

// ? hard-coded - fest reinprogrammiert
// function formatString2(text: string, callback1: (text: string) => string, callback2: (text: string) => string) {
//     console.log('We are in the function');
//     const result1 = text.toUpperCase().replace(' ', '');
//     const result2 = result1.split('').reverse().join('');
//     console.log(result2);
//   }

function addDots(text: string): string {
  return text.split('').join('.');
}

formatString('Hello World', toUpperCaseAndRemoveSpaces, addDots);
