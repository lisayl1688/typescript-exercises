export {};
// * Was verstösst in dieser Klasse gegen das Open Closed Prinzip?
class Vehicle {
  public name: string;
  public builtInYear: number;
  public nextEmissionTest: number;

  constructor(name: string, builtInYear: number, nextEmissionTest: number) {
    this.name = name;
    this.builtInYear = builtInYear;
    this.nextEmissionTest = nextEmissionTest;
  }
}

const bike = new Vehicle('Mountain Bike', 2015, 0);
const car = new Vehicle('Skoda Octavia', 2016, 2025);
const electricCar = new Vehicle('Tesla', 2021, 0);
