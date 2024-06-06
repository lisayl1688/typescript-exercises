import schüler from "./schüler";

class SchoolClass {
    id :string;
    name : string;
    endDate? : number;
    schüler: schüler [] = [];

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
