// - Definiere eine Klasse Animal
// - sie soll die Eigenschaften species (string), age (number) und color (string) enthalten
// - Implementiere Get- und Set-Methoden für jede Eigenschaft.


class Animal {
    private _species : string = "";
    private _age : number = 0;
    private _color : string = "";


    get species() {
        console.log('Species is called');
        return this._species;
      }

    set species(value: string) {
      this._species = value;
    }


    get age() {
        console.log('Age is called');
        return this._age;
      }

    set age(value: number) {
      this._age = value;
    }



    get color() {
        console.log('Color is called');
        return this._color;
      }

    set color(value: string) {
      this._color = value;
    }
}

export default Animal;