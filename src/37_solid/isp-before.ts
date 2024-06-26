export {};
// * Was verstösst in dieser Klasse gegen das Interface Segregation Prinzip?
interface IAnimal {
  makeSound(): void;
  swim(): void;
  walk(): void;
}

class Duck implements IAnimal {
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

class Fish implements IAnimal {
  makeSound(): void {}

  swim(): void {
    console.log('Fish is swimming.');
  }

  walk(): void {}
}

class Crocodile implements IAnimal {
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

const duck: IAnimal = new Duck();
duck.makeSound();
duck.swim();
duck.walk();

const fish: IAnimal = new Fish();
fish.makeSound();
fish.swim();
fish.walk();

const crocodile: IAnimal = new Crocodile();
crocodile.makeSound();
crocodile.swim();
fish.walk();
