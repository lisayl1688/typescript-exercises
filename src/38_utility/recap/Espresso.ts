import ICoffee from './ICoffee';

class Espresso implements ICoffee {
  name: string;
  size: string;

  constructor(size: string) {
    this.name = 'Espresso';
    this.size = size;
  }
  brew(): void {
    console.log(`Brewing ${this.name} in size ${this.size}`);
  }
  getPrice(): number {
    return 2.8;
  }
}

export default Espresso;
