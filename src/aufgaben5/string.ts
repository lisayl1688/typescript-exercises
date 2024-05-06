// Array-TS-Level-1_1
const bucketList: string[] = ['Japan', 'Russland', 'Indien'];
console.log({bucketList});
const luckyNumbers: string[] = ['7', '8', '9'];
console.log({luckyNumbers});
const favoritePeople: string[] = ['mama', 'bruder', 'andrej'];
console.log({favoritePeople});
console.log('hallo');


// Array-TS-Level-1_2
console.log('bucketList', bucketList[1]);
console.log('bucketList', bucketList[2]);
console.log('bucketList', bucketList[3]);
console.log('luckyNumbers', luckyNumbers[1]);
console.log('luckyNumbers', luckyNumbers[2]);
console.log('luckyNumbers', luckyNumbers[3]);
console.log('favoritePeople', favoritePeople[1]);
console.log('favoritePeople', favoritePeople[2]);
console.log('favoritePeople', favoritePeople[3]);

// Array-TS-Level-1_3 (length)
console.log(bucketList.length);
console.log(luckyNumbers.length);
console.log(favoritePeople.length);

// Array-TS-Level-1_4 (push)
const hobbies :string [] = ['schwimmen','kochen','zeichnen']
console.log({hobbies});
console.log('hobbies:' ,hobbies.length);
const pushAddTwo = hobbies.push('lesen', 'schreiben');
console.log({hobbies});
console.log('added two hobbies:' ,pushAddTwo);

// Array-TS-Level-1_5 (pop)
console.log({ hobbies });
const removedHobbies = hobbies.pop();
console.log('Länge nach pop: ', hobbies.length);
console.log({removedHobbies});
console.log({ hobbies });

// Array-TS-Level-1_6 (shift)
const firstHobbie = hobbies.shift();
console.log({ firstHobbie });
console.log('Länge nach shift: ', hobbies.length);
console.log({ hobbies });

// Array-TS-Level-1_7 (unshift)
console.log({bucketList});
const unshiftAddTwoCitys = bucketList.unshift ('thailand', 'vietnam')
console.log({ unshiftAddTwoCitys });
console.log({ bucketList });


// Array-TS-Level-1_8 (slice)
const lieblingsreiseziele : string[] = ['China', 'spanien', 'england', 'frankreich', 'Laos']
console.log({lieblingsreiseziele});
const afterSlicing = lieblingsreiseziele.slice(2,4);
console.log({afterSlicing});

// Array-TS-Level-1_9 (push/pop shift/unshift)
const Nummernreihe : number [] = [23, 54, 75];
console.log({Nummernreihe});
const nummernMitPush = Nummernreihe.push(65, 33, 7, 14, 98, 50);
console.log({Nummernreihe});
console.log({nummernMitPush});
const nummernMitUnshift = Nummernreihe.unshift(20, 11, 4, 31, 73);
console.log({Nummernreihe});
console.log({nummernMitUnshift});
const nummernMitPop1 = Nummernreihe.pop();
console.log({Nummernreihe});
console.log({nummernMitPop1});
const nummernMitPop2 = Nummernreihe.pop();
console.log({Nummernreihe});
console.log({nummernMitPop2});
const nummernMitShift1 = Nummernreihe.shift()
console.log({Nummernreihe});
console.log({nummernMitShift1});
const nummernMitShift2 = Nummernreihe.shift()
console.log({Nummernreihe});
console.log({nummernMitShift2});

// Array-TS-Level-1_10 (split)
const futuramaQuote = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."

const firstSplit = futuramaQuote.split('.');
console.log({firstSplit});

const secondSplit = futuramaQuote.split(' ');
console.log({secondSplit});

const thirdSplit = futuramaQuote.split('');
console.log({thirdSplit});