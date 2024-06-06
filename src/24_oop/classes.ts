// * Ausnahmsweise mehrere Klassen in eine Datei
class Avocado {}

class Bread {}

class Cucumber {}

// * Tiere
class Animal {
  constructor(public name: string) {
    // ? mit this und instanceof kann man auch in der Elternklasse prüfen
    // ? welcher Subklasse gerade konkret angelegt wird
    // ? this ist die Klasse Animal oder Panda oder Penguin
    if (this instanceof Penguin) {
      console.log('Oh cool a penguin');
    } else if (this instanceof Panda) {
      console.log('Nice, a Panda');
    } else {
      console.log('Ok, you are an animal');
    }
  }
  sayHello(): void {
    if (this instanceof Penguin) {
      console.log('Hello penguin');
    } else if (this instanceof Panda) {
      console.log('Hello panda');
    }
  }
}

class Penguin extends Animal {
  constructor(name: string) {
    super(name);
  }
  waddle() {
    console.log('The penguin waddles');
  }
}

class Panda extends Animal {
  constructor(name: string) {
    super(name);
  }
  stroll() {
    console.log('The panda strolls around');
  }
}

export { Avocado, Bread, Cucumber, Animal, Penguin, Panda };
