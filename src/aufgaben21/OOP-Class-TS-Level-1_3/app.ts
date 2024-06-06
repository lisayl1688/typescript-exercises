import Animal from "./animal";
import Person from "./person";


console.log(Animal);
console.log(Person);

const koalaAnimal : Animal = new Animal ()
koalaAnimal.age = 2;
koalaAnimal.color = "grey";
koalaAnimal.species = "koala";

console.log(koalaAnimal);

koalaAnimal.age = 5;

console.log(koalaAnimal);
export {}; 