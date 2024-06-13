class CreditCard {
  constructor(public cardNumber: string, public cardHolder: string, public expirationDate: Date, public cvv: string) {}

  // * Gültigkeitsprüfungen, die sich auf Eigenschaften der Klassen beziehen - immer in die Klasse selbst
  // * Getter, aber am besten als Methoden
  public getCardNumberError(): string | undefined {
    // ? Überprüfung der internen Eigenschaften mit this.
    if (this.cardNumber.length !== 16) {
      return 'Card number must have a length of 16';
    }
    // ?  Umwandlung mit Number()
    const cardNumberAsNumber = Number(this.cardNumber);
    // ? wir können dem Umwandeln in eine Number mit isNaN (= is not a number) abfragen, ob es keine number ist
    // ? -> hat die Umwandlung geklappt oder nicht
    if (isNaN(cardNumberAsNumber)) {
      return 'Card number must only contain numbers';
    }
    // ? wenn hier kein return steht und wir nicht in einem der ifs waren, wird automatisch undefined zurück
    // ? return undefined; -> muss ich nicht extra schreiben
  }

  public getCvvError(): string | undefined {
    if (this.cvv.length !== 3) {
      return 'CVV number must have a length of 3';
    }

    const cvvAsNumber = Number(this.cvv);
    if (isNaN(cvvAsNumber)) {
      return 'CVV number must only contain numbers';
    }
  }

  public getExpirationDateError(): string | undefined {
    const currentDate = new Date();
    const inputValue = new Date(this.expirationDate);
    if (inputValue < currentDate) {
      return 'Expiration date must be in the future';
    }
  }

  // private isNumber(name: string, stringToCheck: string): string | undefined {
  //   const valueAsNumber = Number(stringToCheck);
  //   if (isNaN(valueAsNumber)) {
  //     return `${name} number must only contain numbers`;
  //   }
  // }
}

export default CreditCard;
