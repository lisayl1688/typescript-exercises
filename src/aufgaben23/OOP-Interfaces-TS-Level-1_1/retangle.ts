// - Wir bauen auf der vorherigen Aufgabe [OOP-Interfaces-TS-Level-1_1](https://www.notion.so/OOP-Interfaces-TS-Level-1_1-35a10a661b2d4d668f619bcaf6f54035?pvs=21)  auf
// - Erstelle eine weitere Datei im Hauptordner rectangle.ts
// - Erstelle dort eine Klasse Rectangle, die das Interface IShape implementiert
// - Die Klasse soll diese zusätzlichen Eigenschaften haben
//     - width: number
//     - height: number
// - Außerdem gibt es eine Methode draw, die auf der Konsole “drawing rectangle” ausgibt

import IShape from "./Contracts/iShape";

// - Nimm die Methode draw ins Interface IShape auf
// - Nimm eine weitere Eigenschaft isRound (boolean) in IShape auf
// - Implementiere die Eigenschaft mit sinnvollen Werten in den Klassen Circle und Rectangle


class Rectangle implements IShape {
    name: string = "";
    color: string = "";
    width: number = 0;
    height: number = 0;
    isRound: boolean = false;

    draw(): void{
        console.log("drawing rectangle");
       
    }

}

export default Rectangle;