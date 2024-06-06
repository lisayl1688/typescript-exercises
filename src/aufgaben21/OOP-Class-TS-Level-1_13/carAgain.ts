// import "../../aufgaben20/OOP-Class-TS-Level-2_2";

import carType from "./carType";

// - Wir bauen auf den Klassen Car und Driver auf [OOP-Class-TS-Level-2_2](https://www.notion.so/OOP-Class-TS-Level-2_2-40721ee4c13c49bd8d7b73b18a5bc6bf?pvs=21)
// - in der Klasse Car
//     - soll constructionYear nur über den Konstruktor gesetzt werden können 
//     → Wert ist nur über einen Getter (get-Methode) abrufbar
//     - soll es eine Methode getSpeedInfo(): string geben mit dieser Logik geben
//         - currentSpeed ≤ 40 → Rückgabewert ‘Driving slowly’
//         - currentSpeed > 40 und ≤ 70 → Rückgabewert ‘Driving normally’
//         - currentSpeed > 70 und ≤ 120 → Rückgabewert ‘Driving fast’
//         - currentSpeed > 120 und ≤ 190 → Rückgabewert ‘Driving really fast’
//         - currentSpeed> 190 → ‘WTF’
// - Lege in einer neuen Datei ein Enum namens CarType an
    
//     Werte → Unknown, Sedan, SUV, Coupe, Convertible, Hatchback, Truck
    
// - erweitere die Klasse Car um eine neue Eigenschaft carType: CarType
// - in der Klasse Driver
//     - soll es eine weitere Eigenschaft licenseFromYear: number geben, die nur über den Konstruktor gesetzt werden kann
//     → Wert ist nur über einen Getter (get-Methode) abrufbar
//     - soll es eine Methode getCarType(): CarType geben, die den CarType des aktuellen Autos als Text ausgibt


class Car{
    brand : string = "";
    private _constructionYear : number = 0;
    currentSpeed : number = 0;
    carType: carType = 0;


    constructor (constructionYear : number ) {
        this._constructionYear = constructionYear;
    }

    get constructionYear() {
        console.log('constructionYear is called');
        return this._constructionYear;
      }



    //   - currentSpeed ≤ 40 → Rückgabewert ‘Driving slowly’
      //         - currentSpeed > 40 und ≤ 70 → Rückgabewert ‘Driving normally’
      //         - currentSpeed > 70 und ≤ 120 → Rückgabewert ‘Driving fast’
      //         - currentSpeed > 120 und ≤ 190 → Rückgabewert ‘Driving really fast’
      //         - currentSpeed> 190 → ‘WTF’
      getSpeedInfo(): string{
        let rueckgabewert: string= "";
        if (this.currentSpeed <= 40) {
            rueckgabewert = "Driving slowly";
        }else if (this.currentSpeed > 40 && this.currentSpeed<= 70){
            rueckgabewert = "Driving normally";
        }else if (this.currentSpeed > 70 && this.currentSpeed<= 120){
            rueckgabewert = "Driving fast";
        }else if (this.currentSpeed > 120 && this.currentSpeed<= 190){
            rueckgabewert = "Driving really fast";
        }else if (this.currentSpeed > 190){
            rueckgabewert = "WTF";
        }
        return rueckgabewert;
    }

}



export default Car;
