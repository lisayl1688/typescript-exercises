// - Lege eine neue Datei book.ts an
// - Erstelle dort ein Interface IBook mit folgenden Eigenschaften
//     - author: string
//     - name: string
//     - publishingYear: string
//     - shortDescription?: string
//     - numberOfPages: number
// - Lege eine neue Datei an partial-book.ts an
// - Erstelle dort einen neuen Type PartialBook basierend auf IBook
// - Lege eine Variable partialBook vom Typ PartialBook an und vergebe nur die Eigenschaften author und name
// - Lege dann ein neues Interface IPartialBook basierend auf IBook an

import IBook from "./IBooks";
import IPartialBook from "./IPartialBooks";

// ```tsx
// // Code-Beispiel
// interface IPartialPerson extends Partial<IPerson> {}
// ```

// - Lege eine Variable partialBook2 vom Typ IPartialBook an und vergeben nur die Eigenschaft name


type PartialBook = Partial<IBook>;

const partialBook :PartialBook = {
    author: "Rowling, J. K.",
    name: "Harry Potter und der Stein der Weisen"
}
console.log(partialBook);

const partialBook2 :IPartialBook = {
    name: "Jane Austen"
}
console.log(partialBook2);