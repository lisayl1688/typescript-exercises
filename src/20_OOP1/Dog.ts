
// * Klassen immer in einen neue Datei, Name der Klasse immer großgeschrieben, danach immer geschweifte Klammern
import Breed from './breed';
import Owner from './Owner';

// * für die Klassendefinition
class Dog {
  // ? Eigenschaft, Property, Attribut besteht aus Namen, Datentyp und Anfangswert
  // ? ich muss immer einen Anfangswert/Initialwert angeben, der beim Erstellen der Klasse gesetzt
  // ? bei String meistens Leerstring '', bei number meistens 0, bei boolean meisten false
  // ? wenn die Eigenschaften über den Konstruktor gesetzt werden, brauchen sie hier an dieser Stelle keinen Anfangswert
  name: string;
  age: number;
  owner_old: string = '';
  // ? ich kann in der Klasse auch Eigenschaften vom Typ einer andere Klassen festlegen
  // ? damit erstelle ich Beziehungen zwischen Klassen
  owner: Owner;
  breed_old: string = '';
  // ? für Objekte oder Klassen muss man sich einen guten Anfangswert überlegen
  // ? mit new eine Instanz anlegen und dann z. B. hier Unbekannt oder Leerstring übergeben
  breed: Breed = new Breed('Unbekannt');
  //breed: Breed = new Breed('');
  // ? ich kann auch optionale Eigenschaften mit einem Fragezeichen versehen, dann muss keinen Anfangswert angeben
  favoriteFood?: string;

  // ? Jede Klasse hat einen Konstruktor, der aufgerufen wird, sobald man "new Klassenname()" aufruft
  // ? er ist die Methode zum Erzeugen der Klasse
  // ? Schlüsselwort constructor, dann runde Klammern für Parameter, dann geschweifte Klammern für die Logik
  // ? wenn er leer ist, ich keine Pflichtfelder habe und dort nichts passieren soll, kann man ihn auch weglassen
  // ? im Hintergrund wird der Default-Konstruktor von TypeScript trotzdem angelegt
  // ? er sieht so aus constructor(){}
  constructor(name: string, age: number, owner: Owner) {
    // ? man muss immer die übergebenen Werte/Parameter dann den internen Eigenschaften zuweisen
    // ? das geht über this -> this.[Eigenschaft] = übergebener Wert
    // ? this verweist auf die Klasse selbst
    this.name = name;
    this.age = age;
    this.owner = owner;
    console.log('Dog was created');
  }
}

export default Dog;
