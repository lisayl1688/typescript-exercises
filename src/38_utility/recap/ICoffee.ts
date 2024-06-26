// ? - Definiere ein Interface ICoffee mit den Eigenschaften name und size und Methoden wie brew() und getPrice(),
// ? das die Zubereitung verschiedener Kaffeesorten repräsentiert, z.B. Espresso, Americano, Latte usw.

// ! im interface sind nur die public Eigenschaften und Methoden
interface ICoffee {
  name: string;
  size: string;
  brew(): void;
  getPrice(): number;
}

export default ICoffee;
