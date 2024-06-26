// Lernziel: Anwendung von pick

import IBook from "../Utility-Types-TS-Level-1_1/IBooks";

// - Baut auf [Utility-Types-TS-Level-1_1](https://www.notion.so/Utility-Types-TS-Level-1_1-5a1eb5390d4b4d9f9d6bf45586b78bdd?pvs=21) auf
// - Lege eine neue Datei an book-description.ts an
// - Erstelle dort einen neuen Type BookDescription basierend auf IBook
// - BasicBook soll folgende Eigenschaften von IBook übernehmen haben
//     - name: string
//     - shortDescription: string
// - Lege eine Variable bookDescription vom Typ BookDescription an und vergebe nur die nötigen Eigenschaften
// - Lege dann ein neues Interface IBookDescription basierend auf IBook an - ebenfalls name und shortDescription von IBook übernommen
// - Lege eine Variable bookDescription2 vom Typ IBookDescription an und vergebe nur die nötigen Eigenschaften

interface IBookDescription extends Pick<IBook, "name"> {
    name: string;
    shortDescription?: string | undefined;
}


export default IBookDescription;