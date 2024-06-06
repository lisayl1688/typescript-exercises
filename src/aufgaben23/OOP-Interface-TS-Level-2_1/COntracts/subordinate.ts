// - Lege in einer neuen Datei subordinate.ts an
// - Erstelle dort eine Klasse Subordinate, die das Interface IEmployee implementiert
// - Erstelle nun eine Methode in der Klasse Manager namens addSubordinate mit einem Parameter vom Typ IEmployee
// - Die Methode soll den übergebenen IEmployee in das Array assignedEmployees hinzufügen
// - Lege eine Datei app.ts an
// - Erstelle dort drei Instanzen der Klasse Subordinate
// - Erstelle eine Instanz der Klasse Manager
// - Weise die Subordinates über die Methode addSubordinate dem Manager zu

import IEmployee from "./iemployee";

class subordinate implements IEmployee {
    name: string = "";
    age: number = 0;
    position: string = "";



    addSubordinate (arbeiter : IEmployee) {
        if ()
    }
}


export default subordinate;