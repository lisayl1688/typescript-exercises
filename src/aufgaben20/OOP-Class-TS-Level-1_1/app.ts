import IceCreamFlavor from "./OOP-Class-TS-Level-1_1";

export {};

// ertse instanz
const erdbeerEis: IceCreamFlavor = new IceCreamFlavor();
erdbeerEis.name = "erbeereis";
erdbeerEis.price = 3;
erdbeerEis.isPopular = true;
erdbeerEis.description = "leichtsauer";

// zweite instanz
const schokoEis: IceCreamFlavor = new IceCreamFlavor();
schokoEis.name = "schokoeis";
schokoEis.price = 5;
schokoEis.isPopular = true;
schokoEis.description = "süß";

// dritte instanz 
const vanilleEis: IceCreamFlavor = new IceCreamFlavor();
vanilleEis.name = "vanilleeis";
vanilleEis.price = 4;
vanilleEis.isPopular = true;
vanilleEis.description = "leichtsüß";

// vierte instanz
const stracciatellaEis: IceCreamFlavor = new IceCreamFlavor();
stracciatellaEis.name = "stracciatellaeis";
stracciatellaEis.price = 4.5;
stracciatellaEis.isPopular = true;
stracciatellaEis.description = "superlecker";


const IceCreamFlavorSammlung : IceCreamFlavor[] = [];
IceCreamFlavorSammlung.push(new IceCreamFlavor());
console.log(IceCreamFlavor);

