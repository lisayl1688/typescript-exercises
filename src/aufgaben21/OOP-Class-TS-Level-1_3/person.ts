
// - Definiere eine weitere Klasse Person, die die Eigenschaften name (string), birthday (Date) und gender (Enum) enthält.
// - Implementiere Get- und Set-Methoden für name und gender, birthday soll im Konstruktor gesetzt werden und ansonsten nur eine Get-Methode haben.

enum gender {
    Male = "Male",
    Female = "Female",
    Other = "Other"
}


class Person {
    private _name : string ="";
    private _birthday : Date;
    private _gender : gender = gender.Other;

    constructor(birthday: Date) {
        this._birthday = birthday;
    }



    get name() {
        console.log('name is called');
        return this._name;
      }

    set name(value: string) {
      this._name = value;
    }


    get gender() {
        console.log('genderis called');
        return this._gender;
      }

    set gender(value: gender) {
      this._gender = value;
    }


    get birthday() {
        console.log('birthday is called');
        return this._birthday;
      }

}


export default Person;