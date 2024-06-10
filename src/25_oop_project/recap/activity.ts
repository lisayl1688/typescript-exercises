// ? - Erstelle eine neue Klasse Activity in einer Datei activity.ts
// ? - Die Klasse hat die Eigenschaften name (string) und difficulty (number von 1 - 6)
// ? - difficulty soll eine get- und eine set-Methode haben und nur die gültigen Werte zulassen,
// ? andernfalls kommt eine Fehlermeldung
// ? - Lege eine Methode execute an, die auf der Konsole “Executing [Name der Aktivität]…” ausgibt

class Activity {
  private _name: string;
  private _difficulty: number = 0;

  constructor(name: string) {
    this._name = name;
  }

  //   constructor(name: string, difficulty: number) {
  //     this._name = name;
  //     this._difficulty = difficulty;
  //   }

  get name(): string {
    return this._name;
  }
  get difficulty(): number {
    return this._difficulty;
  }

  set difficulty(value: number) {
    if (value < 1 || value > 6) {
      console.error('Wrong value. Must be between 1 and 6');
    } else {
      this._difficulty = value;
    }
  }
  execute(): void {
    console.log(`Name of method is: ${this.name}`);
  }
}

export default Activity;
