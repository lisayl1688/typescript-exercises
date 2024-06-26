// - Entwickle eine Factory-Klasse namens CoffeeShopFactory, die es ermöglicht, ein bestimmtes Kaffeegetränk anhand
// eines festgelegten Typs zu erstellen.
// - Die CoffeeShopFactory sollte Methoden wie createEspresso(size), createAmericano(size), createLatte(size) usw. bereitstellen,
// die je nach übergebenem Typ eine entsprechende Instanz des gewünschten Kaffeegetränks zurückgeben.
// - Verwende das Factory-Pattern, um Kunden die Bestellung verschiedener Kaffeegetränke zu ermöglichen,
// ohne dass sie sich um die Details der Kaffeezubereitung kümmern müssen.
// - Teste das Factory-Pattern, indem du verschiedene Kaffeegetränke bestellst und sicherstellst,
// dass die richtige Kaffee-Implementierung verwendet wird.

import { CoffeeShopFactory } from './CoffeeShopFactory';
import { CoffeeType } from './CoffeeType';

// ? Beispiel, wenn die Methoden nicht static wären:
//? const coffeeShopFactory = new CoffeeShopFactory();
// ?coffeeShopFactory.createEspresso

// ? so sieht es mit static Methoden aus: Klassenname.methodenname
console.log(CoffeeShopFactory.createEspresso('medium'));
console.log(CoffeeShopFactory.createAmericano('large'));
console.log(CoffeeShopFactory.create(CoffeeType.Espresso, 'small'));

const smallEspresso = CoffeeShopFactory.create(CoffeeType.Espresso, 'small');
smallEspresso.brew();
