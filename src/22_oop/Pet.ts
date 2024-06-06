import Breed from '../20_oop/Breed';
import Owner from '../20_oop/Owner';

// * Pet (= Haustier) ist meine Elternklasse mit allen Eigenschaften und Methoden, die alle Haustiere gemeinsam haben
// ! in der Elternklasse muss ich nichts spezielles angeben, damit Kindklassen davon erben können
// ? sobald ich eine Klasse habe, könnte jemand erben
class Pet {
  name: string;
  age: number;
  owner: Owner;
  breed: Breed = new Breed('Unbekannt');
  favoriteFood?: string;
  // ? protected heißt => die Eigenschaft ist nur in der Pet-Klasse selbst und abgeleiteten Klasse/Kindklasse/Subklasse änderbar
  // ? public > protected > private
  protected numberOfMeals: number = 0;

  constructor(name: string, age: number, owner: Owner) {
    this.name = name;
    this.age = age;
    this.owner = owner;
    console.log('Pet was created');
  }

  sleep(): void {
    console.log(`${this.name} is sleeping...`);
  }

  isHungry(): boolean {
    if (this.numberOfMeals > 4) {
      return false;
    }
    return true;
  }

  eat(): void {
    // ? ich kann hier in der Klasse den Wert von numberOfMeals ändern - protected
    this.numberOfMeals++;
    console.log('Current number of meals: ', this.numberOfMeals);
  }

  protected callProtected(): void {
    console.log('protected call');
  }
}

export default Pet;
