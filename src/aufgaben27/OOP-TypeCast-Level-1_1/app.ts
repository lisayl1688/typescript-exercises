// // - Lege eine neue Datei student.ts an
// // - Erstelle ein interface IStudent mit den Eigenschaften
// //     - name: string
// //     - age: number
// //     - grade: number
// // - Lege eine neue Datei app.ts an
// - Schreibe dort eine Funktion processStudent(student: IStudent) an
// - Die Funktion gibt “Processing [student.name] …” auf der Konsole aus
// - Lege ein Objekt student1 mit den Eigenschaften name und age an
// - Wandle das Objekt mit as in IStudent um
// - Übergebe das Objekt an die Funktion processStudent
// - Lege ein zweites Objekt student2 mit der Eigenschaft age an
// - Wandle das Objekt in einen IStudent um
// - Übergebe das Objekt an die Funktion processStudent
// - Schreibe in einen Code-Kommentar was im zweiten Fall angezeigt/ausgegeben wird

import IStudent from "./istudent";

function processStudent(student: IStudent) {
    console.log(`Processing${student.name} …`);

}

const student1 = {
    name : "hannah",
    age : "22"
}

const student1asIStudent = student1 as IStudent;
// const student1asIStudent = student1 as unknown as IStudent;
processStudent(student1asIStudent);

const student2 = {
    age : "22"
}

const student2asIStudent = student2 as IStudent;
processStudent(student2asIStudent);

// es wird undefined ausgegeben