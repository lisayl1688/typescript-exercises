export {};

// * Vehicle ist offen für Veränderung der Basis-Funktionalität
// * verschließt sich aber gegen Code, der nicht zur eigenen Funktionalität sondern in eine abgeleitete Klasse gehört
class Vehicle {
  public name: string;
  public builtInYear: number;

  constructor(name: string, builtInYear: number) {
    this.name = name;
    this.builtInYear = builtInYear;
  }
}

class FuelPoweredCar extends Vehicle {
  public nextEmissionTest: number;
  // ? der Konstruktor besteht aus den zwei Parameter, die ich mit super in die Basisklasse Vehicle durchreiche
  // ? und der zusätzlichen Eigenschaft nextEmissionTest
  constructor(name: string, builtInYear: number, nextEmissionTest: number) {
    // ? Constructor von Vehicle aufrufen
    super(name, builtInYear);
    this.nextEmissionTest = nextEmissionTest;
  }
}

const bike = new Vehicle('Mountain Bike', 2015);
const car = new FuelPoweredCar('Skoda Octavia', 2016, 2025);
const electricCar = new Vehicle('Tesla', 2021);
