// ? - Leite eine neue Klasse Running von Activity ab
// ? - Lege dort die Eigenschaft distance vom Typ number an
// ? - Distance muss immer über den Konstruktor gesetzt werden und nirgendwo anders - Pflichtfeld und nicht von außen

// ? - Lege zwei Methoden warmUp und coolDown an
// ? - Je nach Länge (distance) soll dort “Warming up for x minutes”, “Cooling down for x minutes” stehen
// ?     - ab 3 km: 2 Minuten Warmup und Cooldown
// ?     - ab 4.5 km: 3 Minuten
// ?     - ab 7 km: 4 Minuten
// ?     - mehr als 10 km: 5 Minuten

import Activity from './Activity';

class Running extends Activity {
  private _distance: number;
  constructor(name: string, distance: number) {
    super(name);
    this._distance = distance;
  }

  public warmUp(): void {
    let minutes = this.getMinutes();
    console.log(`Warming up for ${minutes} minutes`);
  }

  public coolDown(): void {
    let minutes = this.getMinutes();
    console.log(`Cooling down for ${minutes} minutes`);
  }

  private getMinutes(): number {
    let minutes = 0;
    if (this._distance >= 10) {
      minutes = 5;
    } else if (this._distance >= 7) {
      minutes = 4;
    } else if (this._distance >= 4.5) {
      minutes = 3;
    } else if (this._distance >= 3) {
      minutes = 2;
    }
    return minutes;
  }
}

export default Running;
