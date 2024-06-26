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

// ```tsx
// // Code-Beispiel
// interface IPartialPerson extends Partial<IPerson> {}
// ```

// - Lege eine Variable partialBook2 vom Typ IPartialBook an und vergeben nur die Eigenschaft name


interface IPartialBook extends Partial<IBook>{}

export default IPartialBook;