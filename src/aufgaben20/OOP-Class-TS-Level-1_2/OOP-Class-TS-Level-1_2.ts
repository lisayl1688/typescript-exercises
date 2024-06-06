// - Lege in einer neuen Datei eine Klasse mit dem Namen SchoolClass an
// - Im Konstruktor der Klasse SchoolClass soll auf der Konsole ausgegeben werden: “School class creation successful”
// - Es sollen zwei Konstruktorparameter übergeben werden: id und name, diese setzen die entsprechenden Eigenschaften der Klasse
// - die Eigenschaft endDate soll optional sein und wird nicht über den Konstruktor angelegt
// - Lege drei SchoolClasses an - sie müssen mit Konstruktorparametern angelegt werden
// - Ändere bei zwei SchoolClasses nachträglich den Namen über das Setzen der Eigenschaft

class SchoolClass {
    id :string;
    name : string;
    endDate? : number;

    constructor(id: string, name: string) {
        // ? man muss immer die übergebenen Werte/Parameter dann den internen Eigenschaften zuweisen
        // ? das geht über this -> this.[Eigenschaft] = übergebener Wert
        // ? this verweist auf die Klasse selbst
        this.id = id;
        this.name = name;
        console.log('School class creation successful');
      }

}


export default SchoolClass;
