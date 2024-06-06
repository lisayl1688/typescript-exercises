import Breed from '../20_OOP1/Breed';
import Owner from '../20_OOP1/Owner';

class Dog {
  // * oben die Eigenschaften
  // ? interne Eigenschaften benennen wir mit einem Unterstrich davor, um sie von nach außen sichtbaren Eigenschaften zu unterscheiden
  // ? mit private kann die Eigenschaft nur innerhalb der Klasse verwendet werden und ist von außen nicht sichtbar
  private _name: string;
  // ? es gibt für die Getter und Setter meistens auch eine intere Eigenschaft, in der der Wert verwaltet wird
  private _age: number;
  owner: Owner;
  breed: Breed = new Breed('Unbekannt');
  favoriteFood?: string;
  numberOfMeals: number = 0;

  // ! Ansatz 1: ich will eine Prüfung beim Setzen der Eigenschaft age
  // * Getter und Setter
  // ? Methoden, die sich nach außen wie Eigenschaften verhalten
  // ? get ist für das Herausholen des Eigenschaftswertes
  // ? get - Name der Eigenschaft - leere runde Klammern - geschweifte Klammern
  // ? in den geschweiften Klammern wird immer ein return gemacht
  get age() {
    console.log('Getter is called');
    return this._age;
  }
  // ! der Vorteil von Gettern und Settern ist, dass

  // ? das ist die kürzeste Version von set
  // set age(value: number) {
  //   this._age = value;
  // }

  // ? set ist für das Setzen eines Eigenschaftswertes
  // ? set - Name der Eigenschaft - dann in runden Klammern wird der zu setzende Wert übergeben
  // ? in den geschweiften Klammern wird dann der Wert einer internen Eigenschaft gesetzt
  // ? in value steht der Wert, der nach dem = beim zuweisen steht
  // ? ich lege auch den eindeutigen Datentyp fest: number
  set age(value: number) {
    console.log('Setter ist called');
    // ! Set Methode wird klassisch verwendet, wenn ich vorher eine Gültigkeitsprüfung machen will
    if (value < 0 || value > 40) {
      console.log('Invalid value for dog age. Must be between 0 und 40');
    } else {
      this._age = value;
    }
  }
  // ! Ansatz 2: ich will, dass Name nur geholt und nicht mehr neu gesetzt werden kann
  // ? Getter wird oft dafür verwendet, das ich von außen verhindern will, dass ein Wert gesetzt wird
  // ? das Set lasse ich weg, damit kann von außen name = nicht mehr gesetzt werden
  get name(): string {
    return this._name;
  }

  // ? ich kann auch feste Werte per Getter zurückgeben ohne interne Eigenschaft
  get dogInLatin(): string {
    return 'Canis familiaris';
  }
  // * dann der Konstruktor
  constructor(name: string, age: number, owner: Owner) {
    this._name = name;
    this._age = age;
    this.owner = owner;
    console.log('Dog was created');
  }

  // * dann die Methoden/Funktionen
  // ? fangen mit Methodennamen an, dann runde Klammern für Parameter, dann Doppelpunkt, dann Rückgabedatentyp, dann geschweifte Klammern
  // ! hier kann man function oder Arrow weglassen
  sleep(): void {
    // ? hier die Logik
    // ? auf die eigenen Eigenschaften und Methoden immer mit this. zugreifen
    console.log(`${this._name} is sleeping...`);
  }
  // ? ich kann auch hier Parameter für die Methoden festlegen und damit von außen Werte reingeben
  // ? Rückgabewert muss nicht angegeben werden, ist aber schöner für die Lesbarkeit
  bark(sound: string): void {
    console.log(`${this._name} says ${sound}`);
  }

  // ? Rückgabewert kann wie bisher alle möglichen Datentypen sein
  isHungry(): boolean {
    if (this.numberOfMeals > 4) {
      return false;
    }
    return true;
  }

  eat(): void {
    // ? immer wenn eat aufgerufen wird, soll die Anzahl der Essen um eins hochgesetzt werden
    this.numberOfMeals++;
    console.log('Current number of meals: ', this.numberOfMeals);
  }

  walk(): void {
    console.log(`${this._name} is walking...`);
    // ? ich kann nicht nur auf Eigenschaften zugreifen, sondern auch eigenen Methoden mit this. aufrufen
    this.sleep();
  }
}

export default Dog;