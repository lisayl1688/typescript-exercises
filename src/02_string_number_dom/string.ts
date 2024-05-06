console.clear();

// * String Methods

const songTitle: string = 'The Beatles - Yesterday';

// ? length
// ? Gibt an, wie viele Zeichen in einem Text sind.
const songTitleLength: number = songTitle.length;
console.log({ songTitleLength });

// ? indexOf
// ? Zeigt an, wo ein bestimmtes Zeichen oder eine Zeichenkette beginnt.
const indexOfY: number = songTitle.indexOf('Y');
console.log({ indexOfY });
const indexOfy: number = songTitle.indexOf('y');
console.log({ indexOfy });
const indexOfE: number = songTitle.indexOf('e');
console.log({ indexOfE });
const indexOfEFromTen: number = songTitle.indexOf('e', 10);
console.log({ indexOfEFromTen });

// ? indexer
// ? damit kann man direkt auf einen Buchstaben im Text zugreifen
const letterAtIndex4: string = songTitle[4];
console.log({ letterAtIndex4 });

// ? substring
// ? Schneidet einen bestimmten Abschnitt des Textes ab, basierend auf Start- und Endposition.
// ? Achtung: bei der Endposition
const yesterday: string = songTitle.substring(14, 23);
console.log({ yesterday });
const yesterday2: string = songTitle.substring(14);
console.log({ yesterday2 });

const beatles: string = songTitle.substring(4, 11);
console.log({ beatles });

// ? trim
// ? entfernt alle Leerzeichen am Anfang und am Ende eines Strings
const userEmailFromInput: string = 'suzy@gmx.de                         ';
const userEmail: string = userEmailFromInput.trim();
console.log({ userEmail });

const userEmailFromInput2: string = '       suzy@gmx.de';
const userEmail2: string = userEmailFromInput2.trim();
console.log({ userEmail2 });

// ? slice
// ? Schneidet einen Teil des Textes ab, basierend auf Start- und Endposition.
const bandName: string = songTitle.slice(0, 11);
console.log({ bandName });

// ? search
// ? Sucht nach einem Muster im Text und zeigt den Startpunkt an.
const eat: number = songTitle.search('eat');
console.log({ eat });

// ? replace
// ? ersetzt einen Teil des Textes
const diffentBandName: string = songTitle.replace('The Beatles', 'The Rolling Stones');
console.log({ diffentBandName });

// ? toUpperCase
// ? Ändert alle Zeichen im Text zu Großbuchstaben.
const songTitleUpperCase: string = songTitle.toUpperCase();
console.log({ songTitleUpperCase });

// ? toLowerCase
// ? Ändert alle Zeichen im Text zu Kleinbuchstaben.
const songTitleLowerCase: string = songTitle.toLowerCase();
console.log({ songTitleLowerCase });

// ? concat
// ? Verbindet zwei Texte, um einen neuen Text zu erstellen.
const favoriteSong = 'My favorite song is: ';
const concatenatedSong = favoriteSong.concat(songTitle).concat('!!!!');
console.log({ concatenatedSong });
const favoriteSongWithPlus = favoriteSong + songTitle;
console.log({ favoriteSongWithPlus });
