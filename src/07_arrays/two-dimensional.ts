// * Mehrdimensionale Arrays
// ? wir können Arrays in Arrays verschachteln
// ? mehr als eine Verschachtelung macht das Ganze aber sehr schwer lesbar
// ? wir legen hier ein zweidimensionales Array vom Typ string an
// ? d. h. ein Array, das wieder Arrays enhält
const shoppingListWeek: string[][] = [
    ['Water', 'Beer', 'Toilet Paper'],
    ['Cauliflower', 'Coconut', 'Lemons'],
    ['Tea', 'Coffee', 'Gummy Bears']
  ];
  console.log({ shoppingListWeek });
  
  // ? auf ein Element können wir zugreifen, indem wir index1 und index2 angeben
  // ? 0 = 0.Element (Array) im großen Array shoppingListWeek
  // ? 1 = 1. Element aus dem Array ['Water', 'Beer', 'Toilet Paper']
  const beer = shoppingListWeek[0][1];
  console.log({ beer });
  
  // ? 2 = 2.Element (Array) im großen Array shoppingListWeek
  // ? 2 = 2. Element aus dem Array ['Tea', 'Coffee', 'Gummy Bears']
  const gummyBears = shoppingListWeek[2][2];
  console.log({ gummyBears });