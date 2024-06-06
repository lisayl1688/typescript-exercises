// # 

// // - Erstelle eine Datei alien.ts
// // - Deklariere eine Klasse Alien
// // - Der Konstruktor soll die Parameter name und color haben
// // - Lege vier Eigenschaften an:
// // - name (string)
// // - planet (string)
// // - galaxy (string)
// // - color (string)
// // - name, planet und galaxy sollen public sein
// // - color soll private sein
// // - Schreibe für color einen Getter
// // - Erstelle eine Datei app.ts
// - Lege dort 3 Alien-Arten an und setze alle Eigenschaften


class Alien {
    public _name : string = "";
    private _color : string = "";
    public galaxy : string = "";
    public planet : string = "";


    constructor(name: string, color : string) {
        this._name = name;
        this._color = color;
    }


    get color() {
        return this._color;
      }
}

export default Alien;