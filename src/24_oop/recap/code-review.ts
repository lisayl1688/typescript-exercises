import IEmployee from './IEmployee';

class Employee implements IEmployee {
  // * 1. Eigenschaften
  // public name: string;
  // ? public heißt: von außen setzbar
  public age: number;
  public position: string;
  // ? private heißt: nur in der Klasse verwendbar
  private _name: string = '';
  // ? protected heißt: nur in der Klasse und den Subklassen verwendbar
  protected anzahlAbmahnungen: number = 0;
  // private nameInternal: string = '';
  // ? public startDate : Date | null;
  // ? wenn eine Eigenschaft optional ist, kann man das auch direkt über das ? machen
  public startDate?;

  // * 2. Getter Setter
  // ? wenn wir eine schreibschützte Eigenschaft haben wollen
  // ? gilt das Interface auch als erfüllt, wenn es zumindest einen
  // ? Getter unter dem Namen gibt
  get name(): string {
    return this._name;
  }
  // * 3. Konstruktor
  constructor(name: string, age: number, position: string, startDate?: Date) {
    this._name = name;
    this.age = age;
    this.position = position;
    this.startDate = startDate;
    // const userInput = '2017-10-03';
    // const realDate = new Date(userInput);
    // console.log(realDate)
  }
  // * 4. public Methoden
  getYearsOfService(): number {
    // ? wenn die optionale Eigenschaft nicht gesetzt ist, ist die Berechnung
    // ? nicht sinnvoll, wir geben direkt 0 zurück
    if (!this.startDate) {
      return 0;
    }
    // ? let dateNow = new Date(Date.now());
    let currentDate = new Date();
    let yearsOfService = currentDate.getFullYear() - this.startDate.getFullYear();
    return yearsOfService;
    console.log(yearsOfService);
  }

  // * 5. protected Methoden
  // * 6. private Methoden
}

// * IceCreamParlor

class IceCreamParlor {
  flavors: string[] = [];
  listFlavors(): string[] {
    return this.flavors;
  }
  orderIceCream(flavor: string, scoops: number): string {
    return `Thanks for ordering ${scoops} scoops of ${flavor}!`;
  }
  addNewFlavor(flavor: string): void {
    this.flavors.push(flavor);
  }
  removeFlavor(flavorToRemove: string): void {
    // for (let index = 0; index < this.flavors.length; index++) {
    //   if (flavor === this.flavors[index]) {
    //     this.flavors.splice(index, 1);
    //   }
    // }
    // ? Filtern kann man auch für das Entfernen von Elementen aus einem Array nutzen
    // ? Schreibe mir in ein neues Array alle Elemente, die nicht das zu entfernende sind
    this.flavors = this.flavors.filter((flavor: string) => flavor !== flavorToRemove);
  }
  isFlavorAvailable(flavor: string): boolean {
    // for (let index = 0; index < this.flavors.length; index++) {
    //   if (flavor === this.flavors[index]) {
    //     return true;
    //   }
    // }
    // return false;
    return this.flavors.includes(flavor);
  }
  getFlavorPrice(flavor: string): number {
    return Number(flavor);
  }
}
export { IceCreamParlor, Employee };
