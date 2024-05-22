
console.log('books.ts');

// * 1. Buch-Objekt bzw. Typ definieren
type Book = { title: string; author: string; genre: string; year: number; pages: number };

// * 2. Liste von Büchern anlegen
const books: Book[] = [];

// * 3. Alle nötigen HTML-Elemente rausholen
// <ul id="book-list"></ul>
// ? alle Formular-Elemente
const bookForm = document.getElementById('book-form');
const titleInput = document.getElementById('title-input') as HTMLInputElement;
const authorInput = document.getElementById('author-input') as HTMLInputElement;
const genreSelect = document.getElementById('genre-select') as HTMLSelectElement;
const yearInput = document.getElementById('year-input') as HTMLInputElement;
const pagesInput = document.getElementById('pages-input') as HTMLInputElement;

// ? Error und die Liste
const bookErrorOutput = document.getElementById('error-text');
const bookListOutput = document.getElementById('book-list');

// * 4. Eventlistener anlegen
// ? nicht dem submit-Button eine id geben, sondern bei forms immer über submit gehen
bookForm?.addEventListener('submit', (event: Event) => {
  // ? hier dann das Buch hinzufügen
  event.preventDefault();
  console.log('Form was submitted');
  // ? Validierung/Prüfung, ob gültigen Eingaben in den Input-Feldern gemacht wurde
  // ? ein Buch-Objekt erzeugen
  // ? Buch zum books-Array hinzufügen
  const newBook = addBookToArray();
  // ? Buch in der bookListOutput anzeigen
  addBookToOutput(newBook);
});
function addBookToArray(): Book {
  const newBook: Book = {
    // ? über das input-element den aktuell eingeben Wert holen
    title: titleInput.value,
    author: authorInput.value,
    genre: genreSelect.value,
    // ? aus dem Input-Feld kommt immer ein String, den müssen wir in eine Zahl umwandeln
    year: Number(yearInput.value),
    pages: Number(pagesInput.value)
  };
  books.push(newBook);
  console.log(books);
  return newBook;
}
// ? ein Listenelement für ein Buch erzeugen und zum Book-Output hinzufügen
function addBookToOutput(newBook: Book) {
  const bookListElement = document.createElement('li');
  bookListElement.innerHTML = `${newBook.title} by ${newBook.author} - Genre: ${newBook.genre} - written in ${newBook.year} - ${newBook.pages} pages`;

  bookListOutput?.appendChild(bookListElement);
}
