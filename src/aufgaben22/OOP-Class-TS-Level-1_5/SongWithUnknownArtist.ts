
// // - Erstelle eine Klasse SongWithUnknownArtist
// // - Diese Klasse soll von der Klasse Song ableiten
// // - Der Konstruktor soll nur den Parameter title haben
// // - Im Konstruktor soll der Konstruktor der Basis-Klasse Song aufgerufen werden
// // - als zweiter Parameter wird immer “Unknown” gesetzt
// - Schreibe eine Methode setArtist() mit einem Parameter name vom Datentyp string
// - In der Methode soll die Eigenschaft artist gesetzt werden
// - Lege in der Datei app.ts eine Instanz der Klasse SongWithUnknownArtist an
// - Setze nachträglich über die entsprechende Methode einen Wert für artist

import Song from "./Song";

class SongWithUnknownArtist extends Song {
    constructor(title : string) {
        super(title, "Unknown")
    }


    setArtist(artist: string): void {
        super.artist = artist
    }

}

export default SongWithUnknownArtist;