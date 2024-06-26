// Lernziel: Anwendung von Readonly

import IBook from "../Utility-Types-TS-Level-1_1/IBooks";
import IReadOnlyBook from "./IReadOnlyBook";

// - Baut auf [Utility-Types-TS-Level-1_1](https://www.notion.so/Utility-Types-TS-Level-1_1-5a1eb5390d4b4d9f9d6bf45586b78bdd?pvs=21) auf
// - Lege eine neue Datei an readonly-book.ts an
// - Erstelle dort einen neuen Type ReadOnlyBook basierend auf IBook
// - Alle Eigenschaften von IBook sind readonly ⇒ schreibgeschützt
// - Lege eine Variable readonlyBook vom Typ ReadOnlyBook an und vergeben alle nötigen Eigenschaften und Werte
// - Versuche nachträglich Werte zu setzen
// - Lege dann ein neues Interface IReadOnlyBook basierend auf IBook an ⇒ alle Eigenschaften sind auch hier schreibgeschützt
// - Lege eine Variable readonlyBook2 vom Typ IReadOnlyBook an und vergebe alle nötigen Eigenschaften und Werte
// - Versuche nachträglich Werte zu setzen

type ReadOnlyBook = Readonly<IBook>;
const readonlyBook : ReadOnlyBook = {
    author: "William Shakespeare",
    name: "Romeo und Julia",
    publishingYear: "2020",
    shortDescription: "»Romeo und Julia«, das wohl berühmteste Liebespaar der Welt, ist eine Tragödie von William Shakespeare und erzählt von den unglücklichen Umständen einer verbotenen Liebe in der italienischen Stadt Verona. Erstmals erschienen 1597, gehört die Lektüre zu den unvergänglichen Werken der Literaturgeschichte.",
    numberOfPages: 144
}

console.log(readonlyBook);
//Cannot assign to 'author' because it is a read-only property.
// readonlyBook.author = "bobby";


const readonlyBook2 : IReadOnlyBook = {
    author:"Kobi Yamada",
    name:"Vielleicht - Eine Geschichte über die unendlich vielen Begabungen in jedem von uns",
    publishingYear:"2019",
    numberOfPages:44

}

console.log(readonlyBook2);

readonlyBook2.name = "vielleicht doch nicht";

console.log(readonlyBook2);