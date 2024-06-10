// - Lege eine neue Datei student.ts an
// - Erstelle ein interface IStudent mit den Eigenschaften
//     - name: string
//     - age: number
//     - grade: number
// - Lege eine neue Datei app.ts an
// - Schreibe dort eine Funktion processStudent(student: IStudent) an
// - Die Funktion gibt “Processing [student.name] …” auf der Konsole aus
// - Lege ein Objekt student1 mit den Eigenschaften name und age an
// - Wandle das Objekt mit as in IStudent um
// - Übergebe das Objekt an die Funktion processStudent
// - Lege ein zweites Objekt student2 mit der Eigenschaft age an
// - Wandle das Objekt in einen IStudent um
// - Übergebe das Objekt an die Funktion processStudent
// - Schreibe in einen Code-Kommentar was im zweiten Fall angezeigt/ausgegeben wird

interface IStudent {
    name: string;
    age : number;
    grade? : number
}

export default IStudent;