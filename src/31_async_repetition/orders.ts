import IOrder from './contracts/IOrder';

const orders: IOrder[] = [
  {
    id: '1',
    customer: {
      name: 'Alice Smith',
      address: '123 Main St, Anytown',
      email: 'alice@example.com',
      phone: '555-1234'
    },
    products: [
      { name: 'Laptop', quantity: 1, price: 1000 },
      { name: 'Mouse', quantity: 2, price: 25 },
      { name: 'MousePad', quantity: 1, price: 5 },
      { name: 'Headphones', quantity: 1, price: 225 }
    ],
    orderDate: new Date('2024-05-10')
  },
  {
    id: '2',
    customer: {
      name: 'Bob Johnson',
      address: '456 Elm St, Othertown',
      email: 'bob@example.com',
      phone: '555-5678'
    },
    products: [
      { name: 'Keyboard', quantity: 1, price: 50 },
      { name: 'Monitor', quantity: 2, price: 200 },
      { name: 'Ink Cartridges', quantity: 2, price: 30 }
    ],
    orderDate: new Date('2024-05-11')
  },
  {
    id: '3',
    customer: {
      name: 'Carol Williams',
      address: '789 Oak St, Anycity',
      email: 'carol@example.com',
      phone: '555-9012'
    },
    products: [
      { name: 'Printer', quantity: 1, price: 150 },
      { name: 'Ink Cartridges', quantity: 3, price: 30 }
    ],
    orderDate: new Date('2024-05-12')
  },
  {
    id: '4',
    customer: {
      name: 'David Brown',
      address: '101 Pine St, Someville',
      email: 'david@example.com',
      phone: '555-3456'
    },
    products: [
      { name: 'Tablet', quantity: 2, price: 300 },
      { name: 'Case', quantity: 1, price: 20 },
      { name: 'IPhone', quantity: 1, price: 799 }
    ],
    orderDate: new Date('2024-05-13')
  },
  {
    id: '5',
    customer: {
      name: 'Eve Davis',
      address: '111 Cedar St, Elsewhere',
      email: 'eve@example.com',
      phone: '555-7890'
    },
    products: [
      { name: 'Smartphone', quantity: 1, price: 400 },
      { name: 'Headphones', quantity: 1, price: 50 }
    ],
    orderDate: new Date('2024-05-14')
  },
  {
    id: '6',
    customer: {
      name: 'Frank White',
      address: '222 Birch St, Anothercity',
      email: 'frank@example.com',
      phone: '555-2345'
    },
    products: [
      { name: 'Camera', quantity: 1, price: 600 },
      { name: 'Tripod', quantity: 1, price: 80 }
    ],
    orderDate: new Date('2024-05-15')
  },
  {
    id: '7',
    customer: {
      name: 'Grace Lee',
      address: '333 Maple St, Somewhere',
      email: 'grace@example.com',
      phone: '555-6789'
    },
    products: [
      { name: 'Smart Watch', quantity: 1, price: 200 },
      { name: 'Fitness Tracker', quantity: 1, price: 100 }
    ],
    orderDate: new Date('2024-05-16')
  },
  {
    id: '8',
    customer: {
      name: 'Henry Green',
      address: '444 Walnut St, Anyplace',
      email: 'henry@example.com',
      phone: '555-1234-23234'
    },
    products: [
      { name: 'Wireless Earbuds', quantity: 1, price: 150 },
      { name: 'Bluetooth Speaker', quantity: 1, price: 120 }
    ],
    orderDate: new Date('2024-05-17')
  },
  {
    id: '9',
    customer: {
      name: 'Ivy Taylor',
      address: '555 Oak St, Anytown',
      email: 'ivy@example.com',
      phone: '555-5678'
    },
    products: [
      { name: 'External Hard Drive', quantity: 1, price: 80 },
      { name: 'USB Flash Drive', quantity: 3, price: 15 }
    ],
    orderDate: new Date('2024-05-18')
  },
  {
    id: '10',
    customer: {
      name: 'Jack Reed',
      address: '666 Elm St, Othertown',
      email: 'jack@example.com',
      phone: '555-9012'
    },
    products: [
      { name: 'Gaming Console', quantity: 1, price: 500 },
      { name: 'Games Bundle', quantity: 2, price: 120 }
    ],
    orderDate: new Date('2024-05-19')
  }
];

export default orders;
