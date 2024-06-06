class Customer {
    private _name :string=""; 
    private _email : string = ""; 
    private _address :string =""; 
    private _postalCode :number = 0; 
    private _city : string = "";


    get name() {
        return this._name;
      }

    set name(value: string) {
      this.name = value;
    }

    get email() {
        return this._email;
      }

    set email(value: string) {
      this.email = value;
    }

    get address() {
        return this._address;
      }

    set address(value: string) {
      this.address = value;
    }


    get postalCode() {
        return this._postalCode;
      }

    set postalCode(value: number) {
        this.gültigePostleitzahl(value);
      this._postalCode = value;
    }

    get city(){
        return this._city;
    } 
    set city ( value : string){
        this._city = value;
    }


    // - vor dem Setzen des Namens soll geprüft werden, dass die Länge 60 Zeichen nicht überschreitet. Beim Überschreiten soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.
    lengthUnder60() : string {
        if (this._name.length > 60) {
            console.log("maximale Zeichenlänge darf 60 nicht überschreiten!");
            return "0";
        }
        return this._name;
    } 


// - vor dem Setzen der E-Mail-Adresse soll geprüft werden, ob die Adresse ein @-Zeichen und einen Punkt enthält. Ggf. soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.

    exsitingAetEmail () : void {
        for (let index = 0; index < this._email.length; index++) {


            const findAet: number = this._email.search('@');


            if (!findAet){
                console.log("du hast das Aet-Zeichen vergessen!");
                this._email = "";
            }

    }

    }


// - vor dem Setzen der Postleitzahl (postalCode) soll geprüft werden, ob die Postleitzahl 5-stellig ist und zwischen 00000 und 99999 liegt. Ggf. soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.

    gültigePostleitzahl (postalCode: number) : boolean {
        let istGültigePlz = false ; 
        let plzString = postalCode.toString();
        if(plzString.length == 5 && postalCode >= 0 || postalCode < 99999) {
            istGültigePlz = true;
        } else{
            console.log("die Postleitzahl ist nicht gültig!");
        }

        return istGültigePlz;
    }


}



export default Customer;
