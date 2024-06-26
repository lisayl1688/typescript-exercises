export {};

class Dog {
  constructor(public name: string, public age: number) {}
  bark() {
    console.log('Wuff wuff');
  }
}

class Product {
  constructor(public id: string, public name: string, public price: number) {}
}

class DogAdministration {
  private dogs: Dog[] = [];

  addDog(dog: Dog) {
    this.dogs.push(dog);
  }

  getAllDogs() {
    return this.dogs;
  }
}

class ProductAdministration {
  private products: Product[] = [];

  addProduct(product: Product) {
    this.products.push(product);
  }

  getAllProducts() {
    return this.products;
  }
}

// ? Generische Klasse Administration - ich muss hier in spitze Klammern das T schreiben
class Administration<T> {
  private instances: T[] = [];

  addInstance(instance: T) {
    this.instances.push(instance);
  }

  getAllInstances() {
    return this.instances;
  }
}

const dogAdministration = new DogAdministration();
dogAdministration.addDog(new Dog('Snuffy', 4));
console.log(dogAdministration.getAllDogs());

const productAdministration = new ProductAdministration();
productAdministration.addProduct(new Product('4711', 'Backpack', 99));
console.log(productAdministration.getAllProducts());

console.log('Generic');
// ? ich muss beim Anlegen mit new auch in spitzen Klammern den Datentyp (Klassennamen) angeben
const dogAdministrationGeneric = new Administration<Dog>();
dogAdministrationGeneric.addInstance(new Dog('Snoopy', 4));
console.log(dogAdministrationGeneric.getAllInstances());

const productAdministrationGeneric = new Administration<Product>();
productAdministrationGeneric.addInstance(new Product('4545', 'Jeans', 85));
console.log(productAdministrationGeneric.getAllInstances());

class Song {
  constructor(public name: string, public lenght: number) {}
}

const songAdministration = new Administration<Song>();
songAdministration.addInstance(new Song('Oops I did it again', 2.55));
console.log(songAdministration.getAllInstances());