import Owner from '../20_oop/Owner';
import Pet from './Pet';

// * Dog ist eine Kind- oder Subklasse, abgeleitete Klasse (derived class) von der Elternklasse Pet
// ? wenn ich von einer Elternklasse Eigenschaften und Methoden erben will, sieht das immer so aus
// ? class Klassenname extends [Name der Elternklasse]
// ? ich brauche zwei Dinge, um zu erben extends und den Aufruf von super im Konstruktor
// ! extends
class Dog extends Pet {
  // ? diese Eigenschaft gibt es nur bei Dog
  isAGoodBoy: boolean = true;

  constructor(name: string, age: number, owner: Owner, isAGoodBoy: boolean) {
    // * im Konstruktor von einer Kindklasse muss ich immer den Konstruktor von der Elternklasse aufrufen
    // ? das geht mit super = übergeordnet
    // ? dort müssen genau die Parameter des Konstruktors der Elternklasse übergeben/durchgereicht werden
    // ! super-Aufruf
    super(name, age, owner);
    // ? zusätzlich eigene Eigenschaft von Dog, die hier nach dem Aufruf von super gesetzt wird
    this.isAGoodBoy = isAGoodBoy;
    // ? diese Logik passiert schon in der Elternklasse und wird mit super(...) aufgerufen
    // this.name = name;
    // this.age = age;
    // this.owner = owner;
    console.log('Dog was created');
  }

  // ? hier in Dog gibt es nur noch die bark-Methode, der Rest wird von Pet geerbt und muss hier nicht doppelt stehen
  bark(sound: string): void {
    console.log(`${this.name} says ${sound}`);
  }

  resetNumberOfMeals(): void {
    // ? ich kann hier auf die Eigenschaft numberOfMeals zugreifen und sie ändern, weil sie protected in der Elternklasse Pet ist
    this.numberOfMeals = 0;
    // ? ich kann hier auch die protected Methode aus Pet aufrufen
    this.callProtected();
  }
}

export default Dog;
