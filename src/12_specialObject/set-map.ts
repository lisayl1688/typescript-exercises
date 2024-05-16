// * Set verhält sich wie ein Array - lässt aber nur eindeutigen Werte zu
const cocktails: string[] = ['Pina Colada', 'Mojito', 'Long Island Ice Tea', 'Mojito', 'Cuba Libre', 'Pina Colada'];
console.log('Cocktails: ', cocktails);
console.log('Cocktails length: ', cocktails.length);

const cocktailSet = new Set<string>();
cocktailSet.add('Pina Colada');
cocktailSet.add('Cuba Libre');
cocktailSet.add('Pina Colada');
cocktailSet.add('Mojito');
// ? obwohl ich Pina Colada 2x hinzufüge, ist es im cocktailSet nur einmal vorhanden
console.log('Cocktail Set', cocktailSet);
console.log('Cocktail Set size', cocktailSet.size);

if (cocktailSet.has('Mojito')) {
  console.log('Es gibt Mojito');
}
// ? kein Indexzugriff möglich
//console.log(cocktailSet[0]);

// ! Set ist eine super Möglichkeit, um doppelte Werte in einem Array zu entfernen
// ? erst mache ich aus dem Array ein Set
const cleanupCocktailsSet = new Set(cocktails);
console.log({ cleanupCocktailsSet });
// ? dann wandle ich das Set wieder in ein Array um
// ? das kann ich mit Array.from machen
const cleanedUpArray = Array.from(cleanupCocktailsSet);
console.log({ cleanedUpArray });

// * Map ist ein spezielles Object, das man wie ein Nachschlagewerk oder Lexikon sehen kann
// ? hier lege ich ein Deutsch-Englisch-Wörterbuch an
const germanEnglishDictionary = new Map<string, string>();
// ? mit set kann ich einzelnes Einträge im Wörterbuch anlegen
germanEnglishDictionary.set('Tier', 'animal');
germanEnglishDictionary.set('froh', 'happy');
germanEnglishDictionary.set('Montag', 'monday');

germanEnglishDictionary.forEach((value, key) => {
  console.log(`${key} heißt übersetzt ${value}`);
});
// ? mit get kann ich mir einen Wert aus dem Wörterbuch herausholen
console.log('germanEnglishDict get Tier: ', germanEnglishDictionary.get('Tier'));

// ? wir können auch eine Speisekarte mit Map umsetzen
// ? die Speisekarte besteht aus Nummern und Gerichten, die sich dahinter verbergen
const italianMenu = new Map<number, string>();
italianMenu.set(100, 'Bruscetta');
italianMenu.set(200, 'Pizza Margherita');
italianMenu.set(210, 'Pizza Funghi');

console.log('Nr 210 rausholen: ', italianMenu.get(210));

// * Tuple = eingeschränktes Array mit verschiedenen Datentypen
const nameAgeSize: [string, number, number] = ['Annie', 22, 1.73];
// ? ich kann an die Stelle 0 nur einen string-Wert schreiben
// nameAgeSize[0] = 3434;
// ? leider kann ich mit push weitere Elemente zum Tuple hinzufügen, obwohl ich oben gesagt habe,
// ? dass das Tuple nur aus drei Werten besteht. Das ist ein großer Nachteil des Tuples.
nameAgeSize.push('X-Beliebiges');
// ? auf die Werte im Tuple kann ich - wie beim Array - mit dem Index zugreifen
console.log('Name: ', nameAgeSize[0]);

// ? für unseren Fall wäre es besser einen Type anzulegen, der hat festgelegte, eindeutig benannte Eigenschaften
type SimplePerson = {
  name: string;
  age: number;
  size: number;
};
const person5: SimplePerson = { name: 'Annie', age: 22, size: 1.73 };
console.log('Name mit Type: ', person5.name);