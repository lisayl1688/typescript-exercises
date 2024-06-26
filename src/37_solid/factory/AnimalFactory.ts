import AnimalType from './AnimalType';
import Cat from './Cat';
import Dog from './Dog';
import Horse from './Horse';
import IAnimal from './IAnimal';
import Turtle from './Turtle';

// * das ist eine Fabrikklasse, die für das Erzeugen von Tieren zuständig ist
class AnimalFactory {
  // * wenn ich vor die Methode static schreibe, muss ich keine Instanz der Klasse AnimalFactory mit new erzeugen
  // * sondern kann die Methode direkt aufrufen
  static createAnimal(name: string, age: number, animalType: AnimalType): IAnimal | undefined {
    switch (animalType) {
      case AnimalType.Cat:
        return new Cat(name, age);
      case AnimalType.Dog:
        return new Dog(name, age);
      case AnimalType.Horse:
        return new Horse(name, age);
      case AnimalType.Turtle:
        return new Turtle(name, age);
      default:
        return undefined;
    }
  }
}

export default AnimalFactory;
