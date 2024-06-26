import AnimalFactory from './AnimalFactory';
import AnimalType from './AnimalType';

const fluffy = AnimalFactory.createAnimal('Fluffy', 3, AnimalType.Cat);
console.log(fluffy);

const leonardo = AnimalFactory.createAnimal('Leonardo', 22, AnimalType.Turtle);
console.log(leonardo);
