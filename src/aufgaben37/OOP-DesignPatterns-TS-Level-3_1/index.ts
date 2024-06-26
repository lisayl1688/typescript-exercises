// Lernziel: Factory Pattern anwenden

// - Definiere ein Interface ICoffee mit den Eigenschaften name und size und Methoden wie brew() und getPrice(), das die Zubereitung verschiedener Kaffeesorten repräsentiert, z.B. Espresso, Americano, Latte usw.
// - Erstelle konkrete Klassen, die das Coffee-Interface implementieren, wie z.B. Espresso, Americano, Latte usw.
// - Jede dieser Klassen sollte die brew()-Methode entsprechend ihrer Kaffeesorte implementieren.
// - Entwickle eine Factory-Klasse namens CoffeeShopFactory, die es ermöglicht, ein bestimmtes Kaffeegetränk anhand eines festgelegten Typs zu erstellen.
// - Die CoffeeShopFactory sollte Methoden wie createEspresso(size), createAmericano(size), createLatte(size) usw. bereitstellen, die je nach übergebenem Typ eine entsprechende Instanz des gewünschten Kaffeegetränks zurückgeben.
// - Verwende das Factory-Pattern, um Kunden die Bestellung verschiedener Kaffeegetränke zu ermöglichen, ohne dass sie sich um die Details der Kaffeezubereitung kümmern müssen.
// - Teste das Factory-Pattern, indem du verschiedene Kaffeegetränke bestellst und sicherstellst, dass die richtige Kaffee-Implementierung verwendet wird.