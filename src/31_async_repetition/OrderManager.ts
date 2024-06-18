import IOrder from './contracts/IOrder';

// * diese Klasse soll ein Array an IOrders verwalten - Auswertungsfunktionen, add, delete Funktionen etc.
class OrderManager {
  // ? auf Orders soll wirklich nur in der Klasse zugegriffen werden können
  // ? ich will nicht das jemand von außen direkt Orders hinzufügt/löscht etc.
  // ? ich will das alle hier in der Klasse nur über Methoden zulassen
  private _orders: IOrder[];
  constructor(orders: IOrder[]) {
    this._orders = orders;
  }

  // ? Add Order - eine Bestellung hinzufügen
  addOrder(newOrder: IOrder) {
    // ? einen Fehler werfen, wenn die Id schon vergeben wurde
    if (newOrder.id && newOrder.id.length > 0) {
      // ? sobald ich hier throw Error aufrufe, wird die Methode abgebrochen
      throw new Error('Id will be set automatically');
    }
    // ? id selbst vergeben
    const newId = this._orders.length + 1;
    newOrder.id = newId.toString();
    this._orders.push(newOrder);
  }
  // ? Delete Order - eine Bestellung anhand der id löschen
  deleteOrder(orderId: string) {
    // ? index finden
    const indexToDelete = this._orders.findIndex((order: IOrder) => order.id === orderId);
    if (indexToDelete === -1) {
      throw new Error(`Could not find order with id ${orderId}. Deleting not possible`);
    }
    // ? wir brauchen kein if-else, weil wir beim Fehler bereits abbrechen
    // ? mit splice löschen
    this._orders.splice(indexToDelete, 1);
  }

  showOrders() {
    console.log(this._orders);
  }

  // * Auswertungsfunktionen
  // ? nur die Namen aus allen Bestellungen herausholen - in einem Array zurückgeben
  getAllCustomerNames(): string[] {
    const orderCustomerNames = this._orders.map((order: IOrder) => {
      // ? was wird pro Order in das Ergebnisarray geschrieben
      // ? in diesem Fall kein Objekt etc. sondern nur Name aus Customer
      return order.customer.name;
    });
    return orderCustomerNames;
  }

  // ? Bestellungen ab Datum, z. B. auf der Konsole alle Bestellungen ab 14.5. ausgeben
  showOrdersFromDate(date: Date): void {
    const ordersFromDate = this._orders.filter((order: IOrder) => {
      return order.orderDate >= date;
    });
    console.log(ordersFromDate);
  }
  // ? in allen Bestellungen soll das Trennzeichen für die Kundentelefonnummer
  // ? geändert werden können
  changeCustomerPhoneSeparator(separatorBefore: string, separatorAfter: string) {
    this._orders.forEach((order: IOrder) => {
      // ? replace ersetzt nur das erste Vorkommen von dem Text
      // order.customer.phone = order.customer.phone.replace(separatorBefore, separatorAfter);
      // ? replaceAll ersetzt alle Vorkommen im Text - gibt es
      // ? erst ab ES2021 - am besten in tsconfig.json bei target und lib
      // ? auf ESNext ändern
      order.customer.phone = order.customer.phone.replaceAll(separatorBefore, separatorAfter);
    });
  }
  // ? Funktion, die true or false zurückgibt und die Frage beantwortet
  // ? ob in allen Bestellungen wirklich auch Produkt drin sind
  // ? also ob überall order.products.length > 0 ist
  doAllOrdersHaveProducts(): boolean {
    let hasProducts = true;
    // ? im array.forEach kann ich kein break anwenden
    // ? daher nehme ich for of, damit die Schleife abbrechen kann
    // ? sobald eine Bestellung keine Produkte hat
    for (const order of this._orders) {
      if (order.products.length < 1) {
        hasProducts = false;
        // ? bei Schleifen bricht bricht das break die Schleife komplett ab
        break;
      }
    }
    return hasProducts;
  }
  doAllOrderHaveProductsShort(): boolean {
    // ? every = erfüllen alle Element des Arrays die Bedingung
    // ? beantwortet die Frage: Sind überall...?
    const allOrdersHaveProduct = this._orders.every((order: IOrder) => order.products.length > 0);
    return allOrdersHaveProduct;
  }
}

export default OrderManager;
