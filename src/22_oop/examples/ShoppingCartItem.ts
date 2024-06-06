class ShoppingCartItem {
  productName: string;
  price: number;
  quantity: number;

  constructor(productName: string, price: number, quantity: number) {
    this.productName = productName;
    this.price = price;
    this.quantity = quantity;
  }
}

export default ShoppingCartItem;
