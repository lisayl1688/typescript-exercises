import { eightiesHits } from './hits';
// ? indexOf - den Index des 1. Vorkommens im Array ausgeben
const indexOfRio = eightiesHits.indexOf('Rio');
console.log({ indexOfRio });

if (indexOfRio > -1) {
  console.log('Es wurde ein Ergebnis gefunden.');
}

// ? lastIndexOf - den Index des letzten Vorkommens im Array ausgeben
const lastIndexOfRio = eightiesHits.lastIndexOf('Rio');
console.log({ lastIndexOfRio });

// ? includes - gibt ein boolean zurück, ob das Element enthalten ist oder nicht
const includesTaintedLove = eightiesHits.includes('Tainted Love');
console.log({ includesTaintedLove });

if (eightiesHits.includes('Heart of Glass')) {
  console.log('Blondie song found.');
}

// ? find - gibt das erste Vorkommen im Array zurück - in diesem Fall einen String
// ? oder undefined, wenn es nicht gefunden wird
const blueMondey = eightiesHits.find((hit: string) => hit === 'Blue Mondey');
console.log({ blueMondey });

const blueMonday = eightiesHits.find((hit: string) => hit === 'Blue Monday');
console.log({ blueMonday });

// ? Wir können alle bekannten String-Methoden wie startWith, includes etc. verwenden
const firstHitWithDont = eightiesHits.find((hit: string) => hit.startsWith('Dont'));
console.log({ firstHitWithDont });

// ? filter - filtert alle Elemente heraus, die den Kriterien entsprechen
// ? das Ergebnis ist ein neues Array mit den gefilterten Elementen
const allHitsWithDont = eightiesHits.filter((hit: string) => hit.startsWith('Dont'));
console.log({ allHitsWithDont });

const allHitsWithLove = eightiesHits.filter((hit: string) => hit.includes('Love'));
console.log({ allHitsWithLove });

// ? wir können auch case-insensitiv (unabhängig von Groß- und Kleinschreibung) suchen
// ? dafür wandeln wir z. B. alle in Kleinbuchstaben um (toLowerCase()) und vergleichen dann mit dem Suchbegriff
const loveSearchInput = 'LOVE';
const allHitsWithLoveCase = eightiesHits.filter((hit: string) =>
  hit.toLowerCase().includes(loveSearchInput.toLowerCase())
);
console.log({ allHitsWithLoveCase });

// ? wenn wir mehrere Bedingungen in der filter-Methode prüfen wollen, können wir das mit der Oder-Verknüpfung || machen
const allHitsWithDontAndEnjoy = eightiesHits.filter((hit: string) => hit.startsWith('Dont') || hit.startsWith('Enjoy'));
console.log({ allHitsWithDontAndEnjoy });

// ? eine Bedingung zum Filtern kann auch die Länge eines Strings sind
// ? hier enthält das Ergebnis alle Hits, die länger als 13 Zeichen sind
const allHitsLongerThan13Letters = eightiesHits.filter((hit: string) => hit.length > 13);
console.log({ allHitsLongerThan13Letters });