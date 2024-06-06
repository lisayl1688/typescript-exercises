// * Ins Interface kommen nur die public Methoden und Eigenschaften
// * man legt sich nur auf den öffentlichen Vertrag fest
interface IEmployee {
  name: string;
  age: number;
  position: string;
  // ? man kann auch im Interface optionale Eigenschaften festlegen mit ?
  // ? sollte aber nur im Ausnahmefall eingesetzt werden
  startDate?: Date;
  getYearsOfService(): number;
}
export default IEmployee;
