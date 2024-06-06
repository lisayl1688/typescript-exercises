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

import Car from "./carAgain";

    
//     Werte → Unknown, Sedan, SUV, Coupe, Convertible, Hatchback, Truck
    
// - erweitere die Klasse Car um eine neue Eigenschaft carType: CarType
// - in der Klasse Driver
//     - soll es eine weitere Eigenschaft licenseFromYear: number geben, die nur über den Konstruktor gesetzt werden kann
//     → Wert ist nur über einen Getter (get-Methode) abrufbar
//     - soll es eine Methode getCarType(): CarType geben, die den CarType des aktuellen Autos als Text ausgibt

