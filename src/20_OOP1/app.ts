
import Breed from './breed';
import Dog from './dog';
import Owner from './Owner';

// * wie legen wir bisher Baupläne/Typen für Objekte an:
export {};
type DogOld = { name: string; age: number; owner: string; breed: string; favoriteFood: string };

const fluffy: DogOld = {
  name: 'Fluffy',
  age: 6,
  owner: 'Sven Svensson',
  breed: 'Labradoodle',
  favoriteFood: 'Pablo Dog Food'
};
console.log(fluffy.name);

// * Jetzt lernen wir eine neue Art kennen: Klassen
// * Klassen können viel mehr als Types - das lernen wir in den nächsten Tagen kennen

// * Dogs anlegen auf Basis der Klasse Dog
// ? wir legen vorher eine Owner-Instanz an, die wir dann an Dog übergeben können
const owner1 = new Owner('Johann Johannsen', 'Main Street 34', '34342', 'Malmö');
// ? Variablennamen für den anzulegenden Hund, hier wuffy
// ? alle Objekte, die auf Basis der Klasse Dog erstellt wurden, nennen sich Instanz
// ? die Instanzen werden immer mit new, dann der Klassenname und dann runden Klammern angelegt
// ? new muss immer sein, das ist die einzige Art, wie ich Instanzen von Klassen anlegen kann
const wuffy: Dog = new Dog('Wuffy', 3, owner1);
console.log(wuffy);
// wuffy.name = 'Wuffy';
// wuffy.age = 3;
// ? auf die Eigenschaften von wuffy kann ich mit einem Punkt zugreifen
wuffy.favoriteFood = 'Frolic';
console.log('wuffy: ', wuffy);
// ? nur ein Hack für console.log mit geschweiften Klammern, damit vor dem Objekt automatisch der Variablen der Name steht
console.log({ wuffy });
// ? Hier lege ich Owner und Breed an, die ich dem Hund Lio dann zuweisen will (in Beziehung setzen)
const owner2 = new Owner('Julian', '', '', '');
const labradorBreed = new Breed('Labrador');
labradorBreed.activityFactor = 7;
labradorBreed.maxHeight = 1.0;
labradorBreed.temperament = 'gemütlich';
// ? hier in die Klammern nach Dog kommen die Parameter für den Konstruktor
const lio = new Dog('Lio', 2, owner2);
// lio.name = 'Lio';
// lio.age = 2;
lio.breed_old = 'Labrador';
lio.owner_old = 'Julian + Family';
lio.favoriteFood = 'Alles';
lio.breed = labradorBreed;
console.log(lio);
console.log('How active is Lio: ', lio.breed.activityFactor);

// ? Reihenfolgen beachten - erst das Owner-Objekt anlegen und dann an Dog übergeben
const owner3 = new Owner('Lisa', '', '58582', '');
const kali = new Dog('Kali', 8, owner3);
//kali.name = 'Kali';
// kali.age = 8;
kali.breed_old = 'Malteser';
kali.owner_old = 'Lisa';
kali.favoriteFood = 'Alles';

// ? ich schaffe es jetzt nicht mehr Hunde ohne Namen, Alter und Owner anzulegen
// const oskar = new Dog();
const owner4 = new Owner('Jennys family', '', '', '');
const oskar = new Dog('Oskar', 7, owner4);
console.log(oskar);
console.log('Name of oskars owner: ', oskar.owner.name);
console.log('Postalcode of Kalis owner: ', kali.owner.postalCode);
