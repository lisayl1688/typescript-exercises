// * einfache Datentypen
const firstNameSuzy: string = 'Suzy';
const lastNameSuzy: string = 'Suman';
const ageSuzy: number = 28;
// * Listen / Array
const listOfTasks: string[] = ['Wash up', 'Exercise', 'Cook'];

// * Objekte
// ? Objekte schreiben wir immer mit geschweiften Klammern
// ? Sie bestehen aus Eigenschaften und deren Werten: Key-Value-Pairs/Schlüssel-Wert-Paaren
// ? Zuerst kommt der Name der Eigenschaft, dann ein Doppelpunkt und dann der Wert
const suzy = {
  firstName: 'Suzy',
  lastName: 'Suman',
  age: 28,
  address: 'Main Street'
};

// ? mit Punkt kann ich auf die einzelnen Eigenschaften zugreifen
console.log(suzy.firstName);
console.log(suzy.lastName);
console.log(suzy.age);
// ? TypeScript warnt direkt bei nicht vorhandenen Eigenschaften
// console.log(suzy.address)
suzy.age = 29;
console.log(suzy.age);
// ? TypeScript warnt auch bei falschen Datentypen
// suzy.age = '29';
// ? ich kann suzy kein komplett neues Objekt zuweisen, weil es const ist
//suzy = { firstName: 'Susi'};
// ? ich kann alle Eigenschaften von suzy ändern
suzy.lastName = 'Suman Smith';
console.log(suzy.lastName);
// ? ich kann nachträglich keine neuen Eigenschaften im laufenden Betrieb vergeben
// suzy.postalCode = 90489;

const tommy = {
  firstName: 'Thomas',
  lastName: 'Tomson',
  age: 55,
  // ? hier steckt ein weiteres Objekt im tommy-Objekt
  // ? wir sollten Objekte aber nicht zu tief verschacheln, sonst wird es unlesbar und kompliziert
  address: {
    street: 'High Street 33',
    postalCode: 58465,
    city: 'London'
  }
};
// ? ich kann auch hier die Eigenschaften des Objekts ändern
tommy.age = 44;
console.log(tommy.address);
console.log('postalCode of tommy ', tommy.address.postalCode);
tommy.address.postalCode = 44582;
console.log('postalCode of tommy ', tommy.address.postalCode);

// * Movies
// ? Eigenschaften eines Objekts können auch Arrays oder wieder Objekte sein
const movieHomeAlone: Movie = {
  title: 'Home Alone',
  year: 1990,
  mainCharacter: 'Kevin',
  villains: ['Harry', 'Marv']
};
console.log(movieHomeAlone.title);
console.log(movieHomeAlone.villains[1]);
// ? Ich kann zum Array einen neuen Wert hinzufügen
movieHomeAlone.villains.push('Parents');
console.log(movieHomeAlone.villains);
// ? es wird per Referenz auf das Objekt zugegriffen und damit immer das Ursprungsobjekt verändert
movieHomeAlone.year = 1991;

const movieJurassicPark: Movie = {
  title: 'Jurassic Park',
  year: 1993,
  mainCharacter: 'Dr. Alan Grant',
  villains: ['T-Rex', 'Velociraptors']
};
console.log(movieJurassicPark.title);

// ? Ich kann Objekte auch in einem Array verwalten -> Array von Objects
const movies: Movie[] = [movieHomeAlone, movieJurassicPark];
console.log('Movie title and year');
// ? Ich kann das Array von Objekten dann in einer Schleife durchlaufen und jeweils einzelne Eigenschaften ausgeben
movies.forEach((movie) => {
  console.log('Title: ', movie.title);
  console.log('Year: ', movie.year);
});
console.log(movieJurassicPark.year);
// ? man kann auch auf eine andere Art als mit Punkt auf die Eigenschaft zugreifen - mit eckigen Klammern und dem Namen der Eigenschaft
// ? nutzt lieber die Punkt-Schreibweise
console.log(movieJurassicPark['year']);

// ? movies nach Erscheinungsjahr sortieren
movies.sort((movieA, movieB) => {
  // ? hier vergleiche ich einfach nur die beiden Eigenschaften year der Movie-Objekte miteinander
  return movieB.year - movieA.year;
});
console.log({ movies });

// * eigenen Datentypen mit type definieren
// ? hier lege ich auch einen Film an, verwende aber ganz andere Namen für die Eigenschaften
const wanderhure = {
  titel: 'Die Wanderhure',
  erscheinungsjahr: 2010,
  hauptperson: 'Die Wanderhure'
};
// ? das Objekt kann nicht in movies Array gepushed werden, weil es ganz andere Eigenschaften und Datentypen hat
// movies.push(wanderhure);

// ! Wir definieren uns einen eigenen Datentyp namens Movie und legen die Pflichteigenschaften und Datentypen
// ! der Eigenschaften von Movie fest
// ? alle, die Movie-Objekte anlegen, werden dann gezwungen genau diese Eigenschaften und Datentypen zu verwenden
// ? das macht unseren Code viel strukturierter und sicherer
type Movie = { title: string; year: number; mainCharacter: string; villains: string[] };
const wanderhureNeu: Movie = {
  title: 'Die Wanderhure',
  year: 2010,
  mainCharacter: 'Wanderhure',
  villains: ['Die Kirche']
};
// * Objekte durchlaufen
// ? wir können mit einer for..in Schleife durchs Objekt gehen und uns alle Namen der Eigenschaften ausgeben lassen
console.log('for in für wanderhure');
// ? alle Eigenschaften des Objektes wanderhureNeu
for (const key in wanderhureNeu) {
  console.log(key);
}

// ? mit Object.keys können wir uns auch direkt alle Eigenschaften eines konkreten Objektes ausgeben lassen
console.log(Object.keys(wanderhureNeu));

// ? mit Object.values können wir uns alle Werte eines konkreten Objektes ausgeben lassen
console.log(Object.values(wanderhureNeu));