// ? - Entwickle eine Factory-Klasse namens CoffeeShopFactory, die es ermöglicht, ein bestimmtes Kaffeegetränk anhand
// ? eines festgelegten Typs zu erstellen.
// ? - Die CoffeeShopFactory sollte Methoden wie createEspresso(size), createAmericano(size), createLatte(size) usw. bereitstellen,
// die je nach übergebenem Typ eine entsprechende Instanz des gewünschten Kaffeegetränks zurückgeben.
// - Verwende das Factory-Pattern, um Kunden die Bestellung verschiedener Kaffeegetränke zu ermöglichen,
// ohne dass sie sich um die Details der Kaffeezubereitung kümmern müssen.

import Americano from './Americano';
import { CoffeeType } from './CoffeeType';
import Espresso from './Espresso';
import ICoffee from './ICoffee';
import Latte from './Latte';

export class CoffeeShopFactory {
  static createEspresso(size: string): ICoffee {
    return new Espresso(size);
  }

  static createAmericano(size: string): ICoffee {
    return new Americano(size);
  }

  static createLatte(size: string): ICoffee {
    return new Latte(size);
  }

  //static create(coffeeType: CoffeeType, size: string): ICoffee | undefined {
  static create(coffeeType: CoffeeType, size: string): ICoffee {
    switch (coffeeType) {
      case CoffeeType.Americano:
        // ? immer wenn ich in einem switch ein return mache, kann ich das break weglassen
        return new Americano(size);
      case CoffeeType.Espresso:
        return new Espresso(size);
      case CoffeeType.Latte:
        return new Latte(size);
      default:
        // return undefined;
        // ! man sollte sich überlegen, ob man im Default-Fall lieber undefined oder einen Americano zurückgibt
        return new Americano(size);
    }
  }
}
