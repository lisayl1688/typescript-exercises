const shoppingListItem1 = 'beer';
const shoppingListItem2 = 'toilet paper';
const shoppingListItem3 = 'ice cream';

// ? Array von string deklarieren
const shoppingItems: string[] = ['Toilet Paper', 'Beer', 'Ice Cream', 'Peanuts', 'Coffee', 'Broccoli'];
console.log('shoppingItems 4. Element: ', shoppingItems[3]);

// * number-Array
const prices: number[] = [12.99, 2.32, 33.44, 77.44];
console.log(prices[1]);

// * boolean-Array
const booleanArray: boolean[] = [true, false, false, false, true];
console.log(booleanArray[2]);

// ? Wert ersetzen
shoppingItems[3] = 'Peanut Butter';
console.log({ shoppingItems });

console.log('Länge Anfang: ', shoppingItems.length);

// ? am Ende ein neues Element einfügen: push
const lengthAfterPasta = shoppingItems.push('Pasta');
console.log({ shoppingItems });
console.log({ lengthAfterPasta });

// ? es können auch mehrere Elemente auf einmal eingefügt werden
const lengthAfterTwoNewItems = shoppingItems.push('Pizza', 'Soap');
console.log({ shoppingItems });
console.log({ lengthAfterTwoNewItems });

// ? am Ende ein Element entfernen: pop
const removedElement = shoppingItems.pop();
console.log({ removedElement });
console.log('Länge nach pop: ', shoppingItems.length);

// ? Erstes Element aus Array entfernen: shift
const firstElement = shoppingItems.shift();
console.log({ firstElement });
console.log('Länge nach shift: ', shoppingItems.length);
console.log({ shoppingItems });

const secondElement = shoppingItems.shift();

// ? Vorne ein Element einfügen: unshift
const lengthAfterUnshift = shoppingItems.unshift('Tea', 'Cookies');
console.log({ lengthAfterUnshift });
console.log({ shoppingItems });

// splice, slice, split
const shoppingItems2: string[] = ['Toilet Paper', 'Beer', 'Ice Cream', 'Peanuts', 'Coffee', 'Broccoli'];

// ? splice zum Entfernen: ab Index in Länge
const splicedElement = shoppingItems2.splice(2, 2);
console.log({ splicedElement });

// ? splice zum Einfügen: ab Index, dann immer 0, weil nichts gelöscht werden soll, dann das neue Element
const addedElement = shoppingItems2.splice(1, 0, 'Eggplants');
console.log({ shoppingItems2 });

// ? slice zum Kopieren (von Teilen) des Arrays
const allItemsSliced = shoppingItems2.slice();
console.log({ allItemsSliced });

// ? slice ab Index 2 bis zum Ende kopieren
const sliceFrom2 = shoppingItems2.slice(2);
console.log({ sliceFrom2 });

// ? slice ab Index 2 bis Index 4 - Index 4 ist nicht mehr dabei!
const sliceFrom2To3 = shoppingItems2.slice(2, 4);
console.log({ sliceFrom2To3 });

// ? split teilt einen String in mehrere Teile auf
// ? das Kennzeichen zum Aufteilen ist hier das Leerzeichen ' '
const songText: string = 'We all live in a yellow submarine.';
const yellowSubmarineWords = songText.split(' ');
console.log({ yellowSubmarineWords });

// ? jetzt teilen wir beim Punkt . auf
// ? Achtung: das Trennzeichen ist dann nicht mehr im Ergebnis enthalten
const lyrics: string =
  'In the town where I was born. Lived a man who sailed to sea. And he told us of his life. In the land of submarines. So we sailed on to the sun';
const lyricsSentences = lyrics.split('.');
console.log(lyricsSentences);