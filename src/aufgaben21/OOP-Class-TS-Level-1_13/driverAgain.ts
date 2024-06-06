// import Car from "./OOP-Class-TS-Level-2_2";

import Car from "./carAgain";
import carType from "./carType";

// - in der Klasse Driver
//     - soll es eine weitere Eigenschaft licenseFromYear: number geben, die nur über den Konstruktor gesetzt werden kann
//     → Wert ist nur über einen Getter (get-Methode) abrufbar
//     - soll es eine Methode getCarType(): CarType geben, die den CarType des aktuellen Autos als Text ausgibt




class Driver{
    firstName : string = "";
    lastName : string = "";
    age : number = 0;
    car : Car;
    private _licenseFromYear: number = 0;

    constructor (car:Car,licenseFromYear: number) {
        this.car = car;
        this._licenseFromYear = licenseFromYear;
    }
    get licenseFromYear() {
        console.log('name is called');
        return this._licenseFromYear;
      }


      getCarType(): carType {
        let carTypeAlsText = this.car.carType
        console.log(carTypeAlsText.toString());
        return carTypeAlsText;
      }
}






export default Driver;