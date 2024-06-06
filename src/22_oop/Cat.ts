import Owner from '../20_oop/Owner';
import Pet from './Pet';

// ? Cat erbt auch von Pet und hat keine eigenen Eigenschaften oder Methoden
class Cat extends Pet {
  constructor(name: string, age: number, owner: Owner) {
    // ? wir reichen die Werte durch an die Elternklasse in den Konstruktor
    super(name, age, owner);
    console.log('Cat was created');
  }
}

export default Cat;
