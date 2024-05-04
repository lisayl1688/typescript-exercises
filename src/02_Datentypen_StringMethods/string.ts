console.clear();

// * String Methods
const songTitle: string = 'The Beatles - Yesterday';
const songTitleLength: number = songTitle.length;
console.log({ songTitleLength });

// ? indexOf
const indexOfY: number = songTitle.indexOf('Y');
console.log({ indexOfY });
const indexOfy: number = songTitle.indexOf('y');
console.log({ indexOfy });
const indexOfE: number = songTitle.indexOf('e');
console.log({ indexOfE });
const indexOfEFromTen: number = songTitle.indexOf('e', 10);
console.log({ indexOfEFromTen });

// ? indexer
const letterAtIndex4: string = songTitle[4];
console.log({ letterAtIndex4 });

// ? substring
const yesterday: string = songTitle.substring(14, 23);
console.log({ yesterday });
const yesterday2: string = songTitle.substring(14);
console.log({ yesterday2 });

const beatles: string = songTitle.substring(4, 11);
console.log({ beatles });

// ? trim
const userEmailFromInput: string = 'suzy@gmx.de                         ';
const userEmail: string = userEmailFromInput.trim();
console.log({ userEmail });

const userEmailFromInput2: string = '       suzy@gmx.de';
const userEmail2: string = userEmailFromInput2.trim();
console.log({ userEmail2 });

// ? slice
const bandName: string = songTitle.slice(0, 11);
console.log({ bandName });

// ? search
const eat: number = songTitle.search('eat');
console.log({ eat });

// ? replace
const diffentBandName: string = songTitle.replace('The Beatles', 'The Rolling Stones');
console.log({ diffentBandName });

// ? toUpperCase
const songTitleUpperCase: string = songTitle.toUpperCase();
console.log({ songTitleUpperCase });

// ? toLowerCase
const songTitleLowerCase: string = songTitle.toLowerCase();
console.log({ songTitleLowerCase });

// ? concat
const favoriteSong = 'My favorite song is: ';
const concatenatedSong = favoriteSong.concat(songTitle).concat('!!!!');
console.log({ concatenatedSong });
const favoriteSongWithPlus = favoriteSong + songTitle;
console.log({ favoriteSongWithPlus });