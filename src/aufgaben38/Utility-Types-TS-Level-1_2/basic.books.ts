// Lernziel: Anwendung von omit

import IBook from "../Utility-Types-TS-Level-1_1/IBooks";
import IBasicBook from "./IBasicBook";

// - Baut auf [Utility-Types-TS-Level-1_1](https://www.notion.so/Utility-Types-TS-Level-1_1-5a1eb5390d4b4d9f9d6bf45586b78bdd?pvs=21) auf
// - Lege eine neue Datei an basic-book.ts an
// - Erstelle dort einen neuen Type BasicBook basierend auf IBook
// - BasicBook soll folgende Eigenschaften nicht haben
//     - publishingYear: string
//     - shortDescription: string
// - Lege eine Variable basicBook vom Typ BasicBook an und vergebe nur die nötigen Eigenschaften
// - Lege dann ein neues Interface IBasicBook basierend auf IBook an, bei dem ebenfalls publishingYear und shortDescription fehlen
// - Lege eine Variable basicBook2 vom Typ IBasicBook an und vergebe nur die nötigen Eigenschaften


type BasicBook = Omit<IBook, "publishingYear" | "shortDescription">;

const basicBook: BasicBook = {
    author: "William Shakespeare",
    name: "Ein Sommernachtstraum",
    numberOfPages: 100
}
console.log(basicBook);

const basicBook2 : IBasicBook = {
    author: "William Shakespeare",
    name: "Ein Sommernachtstraum",
    numberOfPages: 100,
    publishingYear: "1986"
}
console.log(basicBook2);