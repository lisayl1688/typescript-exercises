import ShoppingCartItem from './ShoppingCartItem';

class ShoppingCart {
  private _shoppingCartItems: ShoppingCartItem[] = [];
  private _totalPrice: number = 0;

  get items(): ShoppingCartItem[] {
    return this._shoppingCartItems;
  }

  set items(value: ShoppingCartItem[]) {
    this._shoppingCartItems = value;
    // * Setter werden auch manchmal genutzt, um abhängige interne Logik auszuführen, z. B. Berechnung
    this.calculateTotalPrice();
  }

  get totalPrice(): number {
    return this._totalPrice;
  }

  private calculateTotalPrice(): void {
    if (!this._shoppingCartItems.length) {
      return;
    }
    let totalSum = 0;
    this._shoppingCartItems.forEach(
      (shoppingCartItem: ShoppingCartItem) => (totalSum = totalSum + shoppingCartItem.price)
    );
    this._totalPrice = totalSum;
  }
}

export default ShoppingCart;
