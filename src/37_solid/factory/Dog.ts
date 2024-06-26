import IAnimal from './IAnimal';

class Dog implements IAnimal {
  name: string;
  age: number;
  ownerName: string = '';

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export default Dog;
