import ICoffee from './ICoffee';

// ? - Erstelle konkrete Klassen, die das Coffee-Interface implementieren, wie z.B. Espresso, Americano, Latte usw.
// ? - Jede dieser Klassen sollte die brew()-Methode entsprechend ihrer Kaffeesorte implementieren.
class Americano implements ICoffee {
  name: string;
  size: string;

  constructor(size: string) {
    this.name = 'Americano';
    this.size = size;
  }
  brew(): void {
    console.log(`Brewing ${this.name} in size ${this.size}`);
  }
  getPrice(): number {
    return 3.4;
  }
}

export default Americano;
