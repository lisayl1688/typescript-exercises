// - Lege eine TypeScript-Datei text-tools.ts an
// - Fange mit der Zeile export {}; an
// - Erstelle einen Namensraum (namespace) TextTools
// - Der Namespace soll zwei Funktionen enthalten, die exportiert werden
//     - toUpperCase(text: string) soll den Text in Großbuchstaben zurückgeben
//     - reverse(text: string) soll den Text rückwärts ausgeben
// - Außerdem soll der Text “Das ist eine Konstante” als Konstante im Namespace TextTools enthalten sein, die ebenfalls exportiert wird
// - Rufe in der Datei app.ts die beiden Funktionen mit beliebigen Texten auf
// - Die Ergebnisse sollen in der Konsole ausgegeben werden
// - Lass dir die Konstante in der Konsole ausgeben


export namespace TextTools {

    export const textKonstante = "das ist eine Konstante";

    export function toUpperCase(text:string): string {
        let textToUpperCase = text.toUpperCase();
        return textToUpperCase;
    }

    export function reverse(text:string): string {
        let textReverse = text.split('').reverse().join('');
        return textReverse;
    }
}
// export namespace Suppliers {
//     export const totalNumber = 111;
  
//     export function showBestSupplier() {
//       console.log('Max Mustermann GmbH');
//     }
//   }
  
//   export namespace Customers {
//     export const totalNumber = 4320;
//     export function showBestCustomer() {
//       console.log('Erika Musterfrau');
//     }
//   }