// ! ich möchte, dass die id nach einer bestimmten Logik gesetzt wird
// ! ich möchte, dass beim ausleihen und zurückgeben sowohl isBorrowed als auch currentOwner gesetzt wird
class LibraryBook {
  // * wenn nichts davor steht: ist die Eigenschaft immer public
  // * public, private, protected heißen Zugriffsmodifizierer oder Access Modifier
  // * wenn ich eine Mischung aus public und private Eigenschaften oder Methoden habe, dann public explizit davor schreiben
  private _id: string = '';
  public title: string = '';
  public author: string = '';
  private _isBorrowed: boolean = false;
  private _currentOwner: string = '';

  // ? bei Getter und Setter im Normalfall kein public, private davor
  get id() {
    return this._id;
  }

  get currentOwner() {
    return this._currentOwner;
  }

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
    // ? alles was ich erzwingen, was immer beim Erzeugen gemacht werden soll -> in den Konstruktor
    // ! einmaliges Setzen von Werten: im Konstruktor setzen, Eigenschaft private, nur ein Getter
    this._id = this.generateId();
  }

  // * immer erst public dann private Methoden
  // * ist public, weil nichts davor steht
  public getBookInfo(): string {
    return `${this.title} by ${this.author} with ${this._id} is ${this._isBorrowed ? 'is borrowed' : 'is available'}`;
  }

  // ? Buch ausleihen
  // ? mit Setter wäre hier umständlicher, weil wir 2 Werte zusammen/abhängig voneinander setzen wollen
  public borrowBook(currentOwner: string): void {
    if (!this._isBorrowed) {
      this._isBorrowed = true;
      this._currentOwner = currentOwner;
    } else {
      console.error(`The book ${this.title} is already borrowed.`);
    }
  }

  // ? Buch zurückgeben
  public returnBook(): void {
    if (this._isBorrowed) {
      this._isBorrowed = false;
      this._currentOwner = '';
    } else {
      console.error(`The book ${this.title} was not borrowed`);
    }
  }
  // ? soll nur eine interne Methode zum Generieren sein, deshalb private
  // ? würde nach außen nur verwirren
  private generateId(): string {
    // LeoTolstoi-323423423434
    const uniqueId = `${this.author.replace(' ', '')}-${Date.now()}}`;
    return uniqueId;
  }
}

export default LibraryBook;
