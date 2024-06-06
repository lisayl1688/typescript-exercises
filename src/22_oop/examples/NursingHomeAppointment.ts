class NursingHomeAppointment {
  private _date: Date;
  nursingHome: string;
  _patients: string[] = [];

  constructor(date: Date, nursingHome: string) {
    this._date = date;
    this.nursingHome = nursingHome;
  }

  set patients(value: string[]) {
    if (value.length > 6) {
      console.error('Not more than 6 patients per visit.');
    } else {
      this._patients = value;
    }
  }

  // * Getter werden auch oft für Komfortfunktionen genutzt, z. B. Datum in verschiedenen Formaten etc.
  get dateInIsoFormat(): string {
    return this._date.toISOString();
  }

  get dateInGermanFormat(): string {
    const day = String(this._date.getDate()).padStart(2, '0');
    const month = String(this._date.getMonth() + 1).padStart(2, '0');
    const year = this._date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  get realMonth(): number {
    return this._date.getMonth() + 1;
  }
}
