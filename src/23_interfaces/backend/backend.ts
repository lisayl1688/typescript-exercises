import DatabaseOrder from './DatabaseOrder';

// * Simuliert: wir bekommen die Daten vom Frontend/Client und wollen sie in der
// * Datenbank abspeichern
const databaseOrder = receiveDatabaseOrder();
databaseOrder.saveToDatabase();

function receiveDatabaseOrder(): DatabaseOrder {
  // ? hier eigentlich der Empfang der Daten am Server
  return new DatabaseOrder();
}
