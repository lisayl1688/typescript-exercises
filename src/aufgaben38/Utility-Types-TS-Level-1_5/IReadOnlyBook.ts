// Lernziel: Anwendung von Readonly

import IBook from "../Utility-Types-TS-Level-1_1/IBooks";

// - Baut auf [Utility-Types-TS-Level-1_1](https://www.notion.so/Utility-Types-TS-Level-1_1-5a1eb5390d4b4d9f9d6bf45586b78bdd?pvs=21) auf
// - Lege eine neue Datei an readonly-book.ts an
// - Erstelle dort einen neuen Type ReadOnlyBook basierend auf IBook
// - Alle Eigenschaften von IBook sind readonly ⇒ schreibgeschützt
// - Lege eine Variable readonlyBook vom Typ ReadOnlyBook an und vergeben alle nötigen Eigenschaften und Werte
// - Versuche nachträglich Werte zu setzen
// - Lege dann ein neues Interface IReadOnlyBook basierend auf IBook an ⇒ alle Eigenschaften sind auch hier schreibgeschützt
// - Lege eine Variable readonlyBook2 vom Typ IReadOnlyBook an und vergebe alle nötigen Eigenschaften und Werte
// - Versuche nachträglich Werte zu setzen

interface IReadOnlyBook extends Readonly<IBook> {
    author: string;
    name: string;
    publishingYear: string;
    shortDescription?: string | undefined;
    numberOfPages: number;
};

export default IReadOnlyBook;
