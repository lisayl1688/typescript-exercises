import { eightiesHits } from './hits';

// * map
// ? map wendet eine Funktion auf das Ursprungsarray an und gibt ein neues Array zurück
// ? hier stehen im neuen Array alle Werte aus eightiesHits mit einem Ausrufezeichen
const hitsWithExclamationMark = eightiesHits.map((hit: string) => {
  return hit + '!';
});
console.log({ hitsWithExclamationMark });

// ? alle hits in Großbuchstaben umwandeln
const hitsToUpperCase = eightiesHits.map((hit: string) => {
  return hit.toUpperCase();
});
console.log({ hitsToUpperCase });

// ? in allen hits, in denen love/Love/LOVE vorkommt, durch LOVE ersetzen
const hitsWithBigLove = eightiesHits.map((hit: string) => {
  return hit.toLowerCase().replace('love', 'LOVE');
});
console.log({ hitsWithBigLove });

// ? in der map-Methode können wir auch beliebige Bedingungen mit if abprüfen
// ? je nach Fall, wird hier etwas anderes vorangestellt, je nach Hit
const hitsRated = eightiesHits.map((hit: string) => {
  if (hit.includes('Blue')) {
    return `Best song: ${hit}`;
  }

  if (hit.includes('Rio')) {
    return `Worst song: ${hit}`;
  }
  return `Good song: ${hit}`;
});

console.log({ hitsRated });

// ? map mit index - die map-Methode stellt uns auch den Index des jeweiligen Elements zur Verfügung
// ? diesen können wir über einen 2. Parameter vom Typ number mitgeben lassen
const hitsWithOrder = eightiesHits.map((hit: string, index: number) => {
  return `${index + 1} - ${hit}`;
});
console.log({ hitsWithOrder });

// * forEach
// ? forEach durchläuft alle Elemente des Arrays - gibt aber KEIN neues Array zurück
// ? wir können forEach nutzen, um Elemente direkt auszugeben oder Bedingungen zu prüfen
eightiesHits.forEach((hit: string) => {
  console.log(hit);
});

// ? auch hier können wir den index mit Typ number als 2. Parameter mitgeben lassen, wenn wir ihn benötigen
eightiesHits.forEach((hit: string, index: number) => {
  console.log(`${index + 1} - ${hit}`);
});

// ? hier ein Beispiel mit Bedingungen
eightiesHits.forEach((hit: string) => {
  if (hit.includes('Blue')) {
    console.log(`Best song: ${hit}`);
  }

  if (hit.includes('Rio')) {
    console.log(`Worst song: ${hit}`);
  }
  console.log(`Good song: ${hit}`);
});