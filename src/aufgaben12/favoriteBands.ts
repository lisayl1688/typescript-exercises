const Lieblingsbands = new Map<string, string[]>();


Lieblingsbands.set("The Beatles", ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]);
Lieblingsbands.set("Queen", ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"]);
Lieblingsbands.set("Kiss", ["Gene Simmons", "Paul Stanley", "Ace Frehley", "Peter Criss"]);
Lieblingsbands.set( "NWA", ["Ice Cube", "Dr. Dre", "Eazy-E", "MC Ren"]);
Lieblingsbands.set("Kraftwerk", ["Ralf Hütter", "Florian Schneider", "Karl Bartos", "Wolfgang Flür"]);
Lieblingsbands.set("Pink Floyd", ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright"]);
Lieblingsbands.set("Metallica", ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Robert Trujillo"]);
Lieblingsbands.set("The Rolling Stones", ["Mick Jagger", "Keith Richards", "Charlie Watts", "Ronnie Wood"]);
Lieblingsbands.set("U2", ["Bono", "The Edge", "Adam Clayton", "Larry Mullen Jr."]);


console.log(Lieblingsbands.size);
Lieblingsbands.set("U22", ["Bono", "The Edge", "Adam Clayton", "Larry Mullen Jr."]);

console.log(Lieblingsbands.size);

console.log('letztes Mitgleid: ', Lieblingsbands.get('U22'));
