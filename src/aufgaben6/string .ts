// Array-TS-Sort-Level-1_1 (sort)
let languages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

const sortAlphabetically = languages.sort();
console.log(sortAlphabetically);



// Array-TS-Sort-Level-1_2 (sort + reverse)
let codingLanguages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

const reverseDescending = codingLanguages.reverse();
console.log(reverseDescending);

function sortDescending1(a: string, b: string) {
    return b.localeCompare(a);
  }

console.log('newPrices descending', reverseDescending.sort(sortDescending1));




//   Array-TS-Sort-Level-1_3 (sort)
let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];
function sortAufsteigend(a: number, b: number) {
    return a - b;
  }
console.log(numArray1.sort(sortAufsteigend));

function sortAbsteigend(a: number, b: number) {
    return b - a;
  }
console.log(numArray1.sort(sortAbsteigend));



// Array-TS-Sort-Level-2_1
const Sergio: string = 'Sergio';
const Hannah: string = 'Hannah';
const Regallager: string = 'Regallager';
const Reliefpfeiler: string = 'Reliefpfeiler';
const Rentner: string = 'Rentner';
const ellasBohnen: string='Ella mag alle Bohnen';
const verdrehterSatz: string = 'han nesaH has ennaH';
const reversedSergio: string = Sergio.split('').reverse().join('');
console.log(reversedSergio);
const reversedHannah: string = Hannah.split('').reverse().join('');
console.log(reversedHannah);
const reversedRegallager: string = Regallager.split('').reverse().join('');
console.log(reversedRegallager);
const reversedReliefpfeiler: string = Reliefpfeiler.split('').reverse().join('');
console.log(reversedReliefpfeiler);
const reversedRentner: string = Rentner.split('').reverse().join('');
console.log(reversedRentner);
const reversedEllasBohnen: string = ellasBohnen.split(' ').reverse().join(' ');
console.log(reversedEllasBohnen);
const reversedVerdrehterSatz: string = verdrehterSatz.split('').reverse().join('');
console.log(reversedVerdrehterSatz);



// Array-TS-Sort-Level-2_3 (slice)
const oldPainters: string [] = ["Caspar David Friedrich", "Mary Cassatt", "Rosa Bonheur", "Francisco de Goya", "Édouard Manet"];
const newerPainters: string [] = ["Pablo Picasso", "Salvador Dalí", "Frida Kahlo", "Georgia O'Keeffe"];

//female

const femalePaintersSlice: string[] = oldPainters.slice();
femalePaintersSlice.pop();
femalePaintersSlice.pop();
femalePaintersSlice.shift();
console.log({ oldPainters });
console.log({ femalePaintersSlice });

const femalePaintersConcat: string[] = oldPainters.concat();
femalePaintersSlice.pop();
femalePaintersSlice.pop();
femalePaintersConcat.shift();
console.log({ oldPainters });
console.log({ femalePaintersConcat });

const femalePaintersSpread: string[] = [...oldPainters];
femalePaintersSpread.pop();
femalePaintersSpread.pop();
femalePaintersSpread.shift();
console.log({ oldPainters });
console.log({ femalePaintersSpread });

//male

const malePaintersSlice: string[] = newerPainters.slice();
malePaintersSlice.pop();
malePaintersSlice.pop();
console.log({ newerPainters });
console.log({ malePaintersSlice });

const malePaintersConcat: string[] = newerPainters.concat();
malePaintersConcat.pop();
malePaintersConcat.pop();
console.log({ newerPainters });
console.log({ malePaintersConcat });

const malePaintersSpread: string[] = [...newerPainters];
malePaintersSpread.pop();
malePaintersSpread.pop();
console.log({ oldPainters });
console.log({ malePaintersSpread });

// Array-TS-Level-1_14 (copy)
const oldHollywoodActors: string []= ['MarloncBrando', 'Audrey Hepburn', 'Elizabeth Taylor', 'Cary Grant', 'Paul Newman', 'Doris Day'];
const actorsReference = oldHollywoodActors.push('Marilyn Monroe');
console.log({oldHollywoodActors});
console.log({actorsReference});


const oldHollywoodActorsString: string[] = oldHollywoodActors.concat();
const changeElement = oldHollywoodActorsString.splice(1, 0, 'Lady Gaga');
console.log({ oldHollywoodActors });
console.log({ oldHollywoodActorsString });

const oldHollywoodActorsConcat: string[] = oldHollywoodActors.slice();
const changeElement2 = oldHollywoodActorsConcat.splice(2, 0, 'Audrey Hepburn2');
console.log({ oldHollywoodActors });
console.log({ oldHollywoodActorsConcat });

const oldHollywoodActorsSpread: string[] = [...oldHollywoodActors];
oldHollywoodActorsSpread.pop();
console.log({ oldHollywoodActors });
console.log({ oldHollywoodActorsSpread });



// // Array-TS-Level-3_1
const artworks: string[]=[
    'Die Sternennacht - Vincent van Gogh',
    'Guernica - Pablo Picasso',
    'Die Geburt der Venus - Sandro Botticelli',
    'Die Nachtwache - Rembrandt',
    'Die Mona Lisa - Leonardo da Vinci',
    'Die Kartoffelesser - Vincent van Gogh',
    'Die Schrei - Edvard Munch',
    'Das letzte Abendmahl - Leonardo da Vinci',
    'Die freudige Botschaft - James Tissot',
    'Der Garten der Lüste - Hieronymus Bosch'];

const artworkDates: string[] = [
'Die Sternennacht - 1889','Guernica - 1937',
'Die Geburt der Venus - 1486',
'Die Nachtwache - 1642',
'Die Mona Lisa - 1503',
'Die Kartoffelesser - 1885',
'Die Schrei - 1893',
'Das letzte Abendmahl - 1495',
'Die freudige Botschaft - 1885',
'Der Garten der Lüste - 1505'];


function suche(artworkName: string){
    const ergSucheArtwork = artworks.find((artwork : string)=> artwork.startsWith(artworkName))
    const ergSucheArtworkDate = artworkDates.find((artworkDate : string)=> artworkDate.startsWith(artworkName))

    console.log(ergSucheArtwork, ergSucheArtworkDate);
    if(ergSucheArtwork && ergSucheArtworkDate){
        let sucheArtworkSplit = ergSucheArtwork.split("-")
        let kuenstlerName = sucheArtworkSplit[1]

        let sucheArtworkDateSplit = ergSucheArtworkDate.split("-")
        let artworkDate = sucheArtworkDateSplit[1]

        console.log(sucheArtworkSplit[0] + " wurde von" + kuenstlerName + " im Jahre" + artworkDate + " gemalt");

    }
    else{
        console.log("Artwork "+artworkName+" not found" );
    }
}
suche('Die G');






