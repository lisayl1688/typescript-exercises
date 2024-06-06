import Owner from '../20_oop/Owner';
import Dog from './Dog';
import LibraryBook from './LibraryBook';

// * neues Book anlegen
const book1 = new LibraryBook('Krieg und Frieden', 'Leo Tolstoi');
//book1.id = '34343434';

// * Buch wird ausgeliehen
// ? isBorrowed ist private und damit hier nicht verfügbar
// book1.isBorrowed = true;
book1.borrowBook('Steven Stevenson');
console.log(book1);

// * Buch wird zurückgegeben
//book1.isBorrowed = false;
book1.returnBook();
console.log(book1);

// * Buch wird wieder ausgeliehen
// book1.currentOwner = 'Mary May';
book1.borrowBook('Mary May');
console.log(book1);
// * Buch wird wieder zurückgegeben
//book1.isBorrowed = false;
book1.returnBook();
console.log(book1);

// ? wenn _id nicht private wäre, könnte ich hier irgendwelche Werte setzen
//book1._id = 'alskdfjalöskdfjalksödjfalsökjdfalök'

// ! ich möchte, dass die id nach einer bestimmten Logik gesetzt wird
// ! ich möchte, dass beim ausleihen und zurückgeben sowohl isBorrowed als auch currentOwner gesetzt wird

// * Vererbung
// ? Instanz von Dog anlegen
const dog = new Dog('Gruffy', 4, new Owner('Suzy Sue', 'Main Street 33', '56445', 'Oklahoma City'), true);
console.log(dog.age);
console.log(dog.sleep());
// dog.numberOfMeals = 3;
dog.eat();
dog.eat();
console.log(dog);
dog.resetNumberOfMeals();
console.log(dog);

// ? protected Methode kann hier nicht von außen aufgerufen werden
// dog.callProtected();
