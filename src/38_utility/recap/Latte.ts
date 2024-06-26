import ICoffee from './ICoffee';

class Latte implements ICoffee {
  name: string;
  size: string;

  constructor(size: string) {
    this.name = 'Latte';
    this.size = size;
  }
  brew(): void {
    console.log(`Brewing ${this.name} in size ${this.size}`);
  }
  getPrice(): number {
    return 4.2;
  }
}

export default Latte;
