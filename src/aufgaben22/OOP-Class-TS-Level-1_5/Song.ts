// // - Erstelle eine Datei Song.ts
// // - Deklariere eine Klasse Song
// // - Lege drei Eigenschaften an:
// // - private title (string)
// // - protected artist (string)
// // - public durationInSeconds (number)
// // - Die Eigenschaften title und artist sollen über einen Konstruktorparameter beim Anlegen gesetzt werden

// // - Erstelle eine Datei app.ts
// // - Lege dort 2 Instanzen der Klasse Song an
// - Setze jeweils eine durationInSeconds
// - Erstelle eine Klasse SongWithUnknownArtist
// - Diese Klasse soll von der Klasse Song ableiten
// - Der Konstruktor soll nur den Parameter title haben
// - Im Konstruktor soll der Konstruktor der Basis-Klasse Song aufgerufen werden
// - als zweiter Parameter wird immer “Unknown” gesetzt
// - Schreibe eine Methode setArtist() mit einem Parameter name vom Datentyp string
// - In der Methode soll die Eigenschaft artist gesetzt werden
// - Lege in der Datei app.ts eine Instanz der Klasse SongWithUnknownArtist an
// - Setze nachträglich über die entsprechende Methode einen Wert für artist

class Song {
    private title : string = "";
    protected _artist : string = "";
    public durationInSeconds : string = ""; 

    constructor (title: string, artist: string){
        this.title = title;
        this.artist = artist;
    }

    // get title() {
    //     return this._title;
    //   }

    // set title(value: string) {
    //   this._title = value;
    // }


    get artist() {
        return this._artist;
      }

    set artist(value: string) {
      this._artist = value;
    }


 
}

export default Song;