import IArticle from '../contracts/IArticle';
import IOrder from '../contracts/IOrder';
import OrderStatus from '../contracts/OrderStatus';

// * auch hier implementieren wir das Interface IOrder
// * damit sichergestellt wird, dass die nötigen Eigenschaften und die Methoden mit den
// * richtigen Datentypen vorhanden sind
class DatabaseOrder implements IOrder {
  public number: number = 0;
  public customerNumber: number = 0;
  public articles: IArticle[] = [];
  public status: OrderStatus = OrderStatus.InProgress;
  public description: string = '';

  // ? die Logik der cancel-Methode sieht hier anders aus als im Frontend
  // ? der Name und der Rückgabewert sind aber gleich
  cancel(): boolean {
    if (this.status < OrderStatus.Delivered) {
      this.status = OrderStatus.Canceled;
      return true;
    }
    return false;
  }

  // ? hier würden dann die Daten nochmal geprüft und in die Datenbank geschrieben
  saveToDatabase() {
    console.log('Saving to database');
  }
}

export default DatabaseOrder;
