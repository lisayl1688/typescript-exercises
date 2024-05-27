const DISCOUNT = 5.8;

const MAXDISCOUNT = 10.5;

function calculatePrice(salesPrice: number): number {
  return salesPrice - (salesPrice * DISCOUNT) / 100;
}
// * eine andere gängige Möglichkeit ist es, am Ende der Datei alle relevanten Daten zu exportieren
// ? immer mit export und dann geschweiften Klammern
// ? in Klammern stehen die Typen, Variablen und Funktionen, die exportieren will
// ? Vorteil: ich muss nur an einer Stelle schauen, was exportiert wird
export { calculatePrice, DISCOUNT, MAXDISCOUNT };