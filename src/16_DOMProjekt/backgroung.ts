console.log('books.ts');

// * 1. Buch-Objekt bzw. Typ definieren
type Book = { title: string; author: string; genre: string; year: number; pages: number };

// * 2. Liste von Büchern anlegen
const books: Book[] = [];

// * 3. Alle nötigen HTML-Elemente rausholen
// <ul id="book-list"></ul>
// ? alle Formular-Elemente
const bookForm = document.getElementById('book-form') as HTMLFormElement;
const titleInput = document.getElementById('title-input') as HTMLInputElement;
const authorInput = document.getElementById('author-input') as HTMLInputElement;
const genreSelect = document.getElementById('genre-select') as HTMLSelectElement;
const yearInput = document.getElementById('year-input') as HTMLInputElement;
const pagesInput = document.getElementById('pages-input') as HTMLInputElement;

// ? Error und die Liste
const bookErrorOutput = document.getElementById('error-text') as HTMLDivElement;
const bookListOutput = document.getElementById('book-list');

// * 4. Eventlistener anlegen
// ? nicht dem submit-Button eine id geben, sondern bei forms immer über submit gehen
bookForm?.addEventListener('submit', (event: Event) => {
  // ? hier dann das Buch hinzufügen
  event.preventDefault();
  console.log('Form was submitted');
  // ? am Anfang einmal den ErrorText zurücksetzen
  bookErrorOutput.innerHTML = '';

  // ? ein Buch-Objekt erzeugen

  const newBook = createBook();
  // ? Validierung/Prüfung, ob gültigen Eingaben in den Input-Feldern gemacht wurde
  // ? für die Validierung eine eigene Funktion schreiben, dann wird es übersichtlicher
  // ? und die Logik ist an einer Stelle
  const errorMessage = validateBook(newBook);
  console.log(errorMessage);
  if (errorMessage === '') {
    // ? nur wenn ein gültiges Buch erzeugt wurde
    // ? Buch zum books-Array hinzufügen
    addBookToArray(newBook);
    // ? Buch in der bookListOutput anzeigen
    addBookToOutput(newBook);
    // ? leert alle Eingabefelder im Formular
    // ? muss ich nur machen, weil ich oben preventDefault() aufgerufen habe und damit
    // ? das Standardverhalten von einem Form ausgeschaltet
    bookForm.reset();
  } else {
    bookErrorOutput.innerHTML = errorMessage;
  }
});

function createBook(): Book {
  const newBook: Book = {
    // ? über das input-element den aktuell eingeben Wert holen
    title: titleInput.value,
    author: authorInput.value,
    genre: genreSelect.value,
    // ? aus dem Input-Feld kommt immer ein String, den müssen wir in eine Zahl umwandeln
    year: Number(yearInput.value),
    pages: Number(pagesInput.value)
  };
  return newBook;
}
function addBookToArray(newBook: Book) {
  books.push(newBook);
  console.log(books);
}
// ? ein Listenelement für ein Buch erzeugen und zum Book-Output hinzufügen
function addBookToOutput(newBook: Book) {
  const bookListElement = document.createElement('li');
  bookListElement.innerHTML = `${newBook.title} by ${newBook.author} - Genre: ${newBook.genre} - written in ${newBook.year} - ${newBook.pages} pages`;

  bookListOutput?.appendChild(bookListElement);
  // ? hier den Löschen-Button pro Buch hinzufügen
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'DELETE';
  deleteButton.addEventListener('click', () => {
    // Buch aus dem Array books entfernen
    // ? suchen nach eindeutigem Kennzeichen im Array books, wenn Titel und Autor übereinstimmen
    const bookToDeleteIndex = books.findIndex(
      (book: Book) => book.title === newBook.title && book.author === newBook.author
    );
    if (bookToDeleteIndex >= 0) {
      books.splice(bookToDeleteIndex, 1);
    }
    // ? Buch aus der Oberfläche entfernen
    // ? mit Remove können wir das Element direkt aus dem document entfernen
    bookListElement.remove();
  });
  bookListElement.appendChild(deleteButton);
}

function validateBook(book: Book): string {
  // ? sind alle Felder befüllt
  if (!book.title || !book.author || !book.genre || !book.year || !book.pages) {
    return 'All fields are required';
  }

  // ? liegt das Jahr zwischen 0 und 2024
  if (book.year < 0 || book.year > 2024) {
    return 'Year must be between 0 and 2024';
  }
  // ? ist die Seitenzahl größer 0 und kleiner als 20000
  if (book.pages <= 0 || book.pages > 20000) {
    return 'Pages must be between 0 and 20000';
  }
  return '';
}