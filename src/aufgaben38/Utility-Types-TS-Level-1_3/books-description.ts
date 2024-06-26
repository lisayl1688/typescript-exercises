// Lernziel: Anwendung von pick

import IBook from "../Utility-Types-TS-Level-1_1/IBooks";
import IBookDescription from "./IBookDescription";

// - Baut auf [Utility-Types-TS-Level-1_1](https://www.notion.so/Utility-Types-TS-Level-1_1-5a1eb5390d4b4d9f9d6bf45586b78bdd?pvs=21) auf
// - Lege eine neue Datei an book-description.ts an
// - Erstelle dort einen neuen Type BookDescription basierend auf IBook
// - BasicBook soll folgende Eigenschaften von IBook übernehmen haben
//     - name: string
//     - shortDescription: string
// - Lege eine Variable bookDescription vom Typ BookDescription an und vergebe nur die nötigen Eigenschaften
// - Lege dann ein neues Interface IBookDescription basierend auf IBook an - ebenfalls name und shortDescription von IBook übernommen
// - Lege eine Variable bookDescription2 vom Typ IBookDescription an und vergebe nur die nötigen Eigenschaften

type BookDescription = Pick<IBook, "name" | "shortDescription">;
const bookDescription : BookDescription = {
    name: "Ein Sommernachtstraum",
    shortDescription: "Der »Sommernachtstraum« gehört zu den bekanntesten Titeln unter Shakespeares Dramen, und das Stück genießt wegen seiner vielfältigen Inszenierungsmöglichkeiten größte Popularität. Es geht um die Beziehungen zwischen den Geschlechtern auf unterschiedlichsten Ebenen der menschlichen Gesellschaft und einer zauberhaften Feenwelt. Beziehungen zeigen sich folgerichtig in mannigfaltigen Varianten von der ungestümen Liebeswut bis zur ständisch reglementierten Ehe. Die Vielzahl an Personal und Spielebenen schafft einen bunten Kosmos, der sich am Ende in komödiantisch-phantastischer Harmonie zeigt..."
}
console.log(bookDescription);
const bookDescription2 : IBookDescription = {
    name: "Ein Sommernachtstraum",
    shortDescription: "Die sogenannte Schlegel-Tieck-Übersetzung, zu der August Wilhelm Schlegel und - unter Mitübersetzer- und Herausgeberschaft von Ludwig Tieck - auch Dorothea Tieck und Wolf Heinrich Graf Baudissin beigetragen haben, ist im 19. Jahrhundert zu einem eigenständigen deutschen Klassiker geworden. Indem sich die Übersetzer der Literatursprache der deutschen Klassik im Gefolge Goethes und Schillers bedienten, schufen sie ein poetisches Übersetzungswerk von großer sprachlicher Geschlossenheit und weitreichender Wirkung. – Text in neuer Rechtschreibung..."
}
console.log(bookDescription2);