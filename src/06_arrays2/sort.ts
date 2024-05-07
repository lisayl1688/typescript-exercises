const colors: string[] = ['Red', 'Yellow', 'Green', 'blue', 'Pink'];
const newPrices: number[] = [111, 20, 66, 5, 1200, 7];

// ? Reverse die Reihenfolge umdrehen
// colors.reverse();
// console.log({ colors });
// newPrices.reverse();
// console.log({ newPrices });

// ? Sort sortiert das Array
console.log(colors.sort());
console.log(newPrices.sort());

// ? newPrices aufsteigend
function sortAscending(a: number, b: number) {
  return a - b;
}
// ? newPrices absteigend
function sortDescending(a: number, b: number) {
  return b - a;
}

console.log('newPrices ascending:', newPrices.sort(sortAscending));
console.log('newPrices descending', newPrices.sort(sortDescending));

// ? Funktion, um colors aufsteigend alphabetisch zu sortieren
function sortAscendingString(firstString: string, secondString: string) {
  return firstString.localeCompare(secondString);
}

// ? Funktion, um colors absteigend alphabetisch zu sortieren
function sortDescendingString(a: string, b: string) {
  return b.localeCompare(a);
}

console.log('colors ascending:', colors.sort(sortAscendingString));
console.log('colors descending', colors.sort(sortDescendingString));

// ? Funktion, um colors aufsteigend nach ihrer Länge zu sortieren
function sortByStringLength(a: string, b: string) {
  return a.length - b.length;
}

console.log('colors by length:', colors.sort(sortByStringLength));

// ? Sortierfunktion direkt angeben (anonyme Callback-Funktion)
colors.sort((a: string, b: string) => {
  return a.localeCompare(b);
});

// ? Groß- und Kleinschreibung explizit ignorieren - passiert aber auch schon bei localeCompare
colors.sort((a: string, b: string) => {
  return a.localeCompare(b, undefined, { sensitivity: 'base' });
});