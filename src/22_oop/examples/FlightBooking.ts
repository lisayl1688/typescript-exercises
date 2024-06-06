class FlightBooking {
  private _departure: string = '';
  private _destination: string = '';
  private _date: Date = new Date();
  private _passengerCount: number = 0;

  get departure(): string {
    return this._departure;
  }

  set departure(value: string) {
    // Validierung der IATA-Codes oder anderer Flughafen-Codes
    this._departure = value;
  }

  get destination(): string {
    return this._destination;
  }

  set destination(value: string) {
    // Validierung der IATA-Codes oder anderer Flughafen-Codes
    this._destination = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    if (value > new Date()) {
      this._date = value;
    } else {
      console.error('Date must be in the future.');
    }
  }

  get passengerCount(): number {
    return this._passengerCount;
  }

  set passengerCount(value: number) {
    if (value > 0 && value <= 853) {
      this._passengerCount = value;
    } else {
      console.error('Number of passengers must be between 1 and 853.');
    }
  }
}
