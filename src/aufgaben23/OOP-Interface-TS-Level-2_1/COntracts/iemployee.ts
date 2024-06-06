// - Erstelle einen Ordner contracts
// - Lege dort eine Datei employee.ts an
// - Erstelle ein Interface IEmployee mit den Eigenschaften
//     - name (string)
//     - age (number)
//     - position (string)
// - Lege im Hauptordner eine Datei manager.ts an
// - Lege dort eine Klasse Manager an, die das Interface IEmployee implementiert
// - Die Klasse Manager hat eine zusätzliche private Eigenschaft assignedEmployees (Array von IEmployee)



interface IEmployee {
    name :string;
    age :number;
    position :string;
}

export default IEmployee;