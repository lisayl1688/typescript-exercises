import OrderManager from './OrderManager';
import orders from './orders';

const orderManager = new OrderManager(orders);

orderManager.addOrder({
  //id: '1',
  customer: {
    name: 'Alice Smith-Jones',
    address: '444 Main St, Anytown',
    email: 'alice2@example.com',
    phone: '555-1244'
  },
  products: [
    { name: 'Laptop', quantity: 1, price: 1000 },
    { name: 'Headphones', quantity: 1, price: 225 }
  ],
  orderDate: new Date('2024-05-20')
});

orderManager.showOrders();

orderManager.deleteOrder('5');
//orderManager.deleteOrder('abc4711');
orderManager.showOrders();

console.log(orderManager.getAllCustomerNames());

orderManager.showOrdersFromDate(new Date('2024-05-17'));

orderManager.showOrdersFromDate(new Date('2024-05-13'));

orderManager.changeCustomerPhoneSeparator('-', '/');
orderManager.showOrders();

orderManager.changeCustomerPhoneSeparator('/', ' ');
orderManager.showOrders();

console.log(orderManager.doAllOrdersHaveProducts());
