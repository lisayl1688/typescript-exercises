// Painters
const oldPainters: string[] = [
  'Caspar David Friedrich',
  'Mary Cassatt',
  'Rosa Bonheur',
  'Francisco de Goya',
  'Édouard Manet'
];
const newerPainters: string[] = ['Pablo Picasso', 'Salvador Dalí', 'Frida Kahlo', "Georgia O'Keeffe"];

// version 1
const femalePaintersSlice: string[] = oldPainters.slice();
femalePaintersSlice.pop();
femalePaintersSlice.pop();
femalePaintersSlice.shift();
console.log({ oldPainters });
console.log({ femalePaintersSlice });

// version 2
let femalePainters: string[] = [];
let newerFemalePainters = newerPainters.slice(2, 4);
let olderFemalePainters = oldPainters.slice(1, 3);
femalePainters = olderFemalePainters.concat(newerFemalePainters);

// version 3
const femalePainters2 = oldPainters.slice(1, 3).concat(newerPainters.slice(2, 4));
const copyPaintersWithConcat = femalePainters.concat(newerFemalePainters, olderFemalePainters);

// version 4
const femalePainters3 = oldPainters.slice();
femalePainters3.splice(0, 1);
femalePainters3.splice(3, 2);

// artworks
// Schreibe eine Funktion, die einen Parameter artworkName übergeben bekommt
// Die Funktion soll in artworks und artworkDates nach dem Namen suchen
// wird nichts gefunden, wird “Artwork [artworkName] not found” auf der Konsole ausgegeben
// wird ein Ergebnis gefunden, wird Folgendes ausgeben
// "'Die Sternennacht' wurde von Vincent van Gogh im Jahre 1889 gemalt"

let artworks: string[] = [
  'Die Sternennacht - Vincent van Gogh',
  'Guernica - Pablo Picasso',
  'Die Geburt der Venus - Sandro Botticelli',
  'Die Nachtwache - Rembrandt',
  'Die Mona Lisa - Leonardo da Vinci',
  'Die Kartoffelesser - Vincent van Gogh',
  'Der Schrei - Edvard Munch',
  'Das letzte Abendmahl - Leonardo da Vinci',
  'Die freudige Botschaft - James Tissot',
  'Der Garten der Lüste - Hieronymus Bosch'
];

let artworkDates: string[] = [
  'Die Sternennacht - 1889',
  'Guernica - 1937',
  'Die Geburt der Venus - 1486',
  'Die Nachtwache - 1642',
  'Die Mona Lisa - 1503',
  'Die Kartoffelesser - 1885',
  'Der Schrei - 1893',
  'Das letzte Abendmahl - 1495',
  'Die freudige Botschaft - 1885',
  'Der Garten der Lüste - 1505'
];

// Funktion mit einem Parameter
function searchArtwork(artworkName: string): void {
  // Suche in artworks nach Namen
  // Suche in artDates nach Namen
  const artWorkSearchResult = artworks.find((artwork: string) => artwork.startsWith(artworkName));
  const artWorkDateResult = artworkDates.find((artwork: string) => artwork.startsWith(artworkName));
  // prüfen, ob in beiden Arrays gefunden
  if (artWorkSearchResult && artWorkDateResult) {
    // falls ja, Namen extrahieren
    const artistResultSplit = artWorkSearchResult.split(' - ');
    const artistName = artistResultSplit[1];
    console.log({ artistName });
    //  und Datum extrahieren
    const artworkDateSplit = artWorkDateResult.split(' - ');
    const artworkCreationDate = artworkDateSplit[1];
    console.log(artworkCreationDate);
    // Ausgabe des Ergebnis-Strings
    console.log(`${artworkName} wurde von ${artistName} im Jahre ${artworkCreationDate} gemalt.`);
  } else {
    console.log(`Artwork ${artworkName} not found`);
  }
  // falls nein, Fehler ausgeben
}

searchArtwork('Die Mona Lisa');
searchArtwork('asdklfjöasdjklf');
searchArtwork('Der Schrei');