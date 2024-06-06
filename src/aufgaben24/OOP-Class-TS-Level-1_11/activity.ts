// - Erstelle eine neue Klasse Activity in einer Datei activity.ts
// - Die Klasse hat die Eigenschaften name (string) und difficulty (number von 1 - 6)
// - difficulty soll eine get- und eine set-Methode haben und nur die gültigen Werte zulassen, andernfalls kommt eine Fehlermeldung
// - Lege eine Methode execute an, die auf der Konsole “Executing [Name der Aktivität]…” ausgibt
// - Leite eine neue Klasse Yoga davon ab (yoga.ts)
// - Die Klasse hat die zusätzliche Eigenschaft type vom Datentyp Enum
// → Werte sind: Hatha, Vinyasa, Ashtanga und Bikram
// - Leite eine neue Klasse Running von Activity ab
// - Lege dort die Eigenschaft distance vom Typ number an
// - Distance muss immer über den Konstruktor gesetzt werden
// - Lege zwei Methoden warmUp und coolDown an
// - Je nach Länge (distance) soll dort “Warming up for x minutes”, “Cooling down for x minutes” stehen
//     - ab 3 km: 2 Minuten Warmup und Cooldown
//     - ab 4.5 km: 3 Minuten
//     - ab 7 km: 4 Minuten
//     - mehr als 10 km: 5 Minuten
// - Achte darauf, dass du keinen doppelten Code schreibst (DRY-Prinzip)

class Activity {
    name : string;
    _difficulty : number;
    constructor (name : string, difficulty : number){
        this.name = name;
        this._difficulty = difficulty;
    }
    get difficulty(): number {
        return this._difficulty;
    }

    set difficulty(value :number) {
        if (value >= 1 && value <= 6){
            this._difficulty = value;
        }else {
           console.error("klappt nicht");
        }
    }
}

export default Activity;