export {};

// * wir teilen das IAnimal Interface in lauter kleine Interfaces mit je einer Methode aus
// * dann können wir die beliebig bei den Tieren kombinieren und sind nicht gezwungen
// * Methoden anzulegen, die wir gar nicht brauchen
interface ISound {
  makeSound(): void;
}

interface ISwim {
  swim(): void;
}

interface IWalk {
  walk(): void;
}

class Bee implements ISound {
  makeSound(): void {
    console.log('Bzzzz!');
  }
}

class Duck implements ISound, ISwim, IWalk {
  makeSound(): void {
    console.log('Quack!');
  }

  swim(): void {
    console.log('Duck is swimming.');
  }

  walk(): void {
    console.log('Duck is walking.');
  }
}

class Fish implements ISwim {
  swim(): void {
    console.log('Fish is swimming.');
  }
}

class Crocodile implements ISound, ISwim, IWalk {
  makeSound(): void {
    console.log('Roar!');
  }

  swim(): void {
    console.log('Crocodile is swimming.');
  }

  walk(): void {
    console.log('Crocodile is walking.');
  }
}

const duck = new Duck();
duck.makeSound();
duck.swim();
duck.walk();

const fish = new Fish();
fish.swim();

const crocodile = new Crocodile();
crocodile.makeSound();
crocodile.swim();
