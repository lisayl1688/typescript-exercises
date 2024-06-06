import IceCreamFlavor from "./icecreamAgain";

const neueEisSorte = new IceCreamFlavor ()
neueEisSorte.name = "vanille";
neueEisSorte.price = 4;
neueEisSorte.isPopular = true;
neueEisSorte.description = "supersweet";
neueEisSorte.numberOfScoops = 2;

console.log(neueEisSorte.getTotalPrice(neueEisSorte.numberOfScoops));

console.log(neueEisSorte.printInfo());

console.log(neueEisSorte.getLengthOfDescription());
