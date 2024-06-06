import IArticle from '../contracts/IArticle';

// * ich muss nur implements angeben, damit werde ich gezwungen, die Eigenschaften
// * aus IArticle hier in der Klasse anzulegen
// ? die Eigenschaften müssen den gleichen Datentyp haben
class Article implements IArticle {
  number: number;
  quantity: number;

  constructor(number: number, quantity: number) {
    this.number = number;
    this.quantity = quantity;
  }
}
export default Article;
