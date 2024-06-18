import ICustomer from './ICustomer';
import IProduct from './IProduct';

interface IOrder {
  id?: string;
  customer: ICustomer;
  products: IProduct[];
  orderDate: Date;
}

export default IOrder;

// ? könnte ich auch alternativ verwenden - dann kann ich aber keine Klassen davon ableiten mit implements
// ? ist relativ gleichwertig zu dem Interface
// type OrderType = {
//   id: string;
//   customer: ICustomer;
//   products: IProduct[];
//   orderDate: Date;
// };
