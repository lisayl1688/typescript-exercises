// ? - Erstelle eine neue Klasse Activity in einer Datei activity.ts
// ? - Die Klasse hat die Eigenschaften name (string) und difficulty (number von 1 - 6)
// ? - difficulty soll eine get- und eine set-Methode haben und nur die gültigen Werte zulassen,
// ? andernfalls kommt eine Fehlermeldung
// ? - Lege eine Methode execute an, die auf der Konsole “Executing [Name der Aktivität]…” ausgibt
class Activity {
  public name: string = '';
  private _difficulty: number = 0;

  get difficulty(): number {
    return this._difficulty;
  }

  set difficulty(level: number) {
    // if (level >= 1 && level <= 6) {
    //   this._difficulty = level;
    // } else {
    //   console.error('Difficulty level must be between 1 and 6');
    // }
    if (level < 1 || level > 6) {
      throw new Error('Difficulty level must be between 1 and 6');
    }
    // ? hier muss ich kein else schreiben, weil ich im Fehlerfall schom mit throw rausgeflogen bin
    this._difficulty = level;
  }

  constructor(name: string) {
    this.name = name;
  }

  public execute(): void {
    console.log(`Executing ${this.name}`);
  }
}

export default Activity;
